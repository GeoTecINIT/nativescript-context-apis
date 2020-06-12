import { RecognizerStateStore } from "nativescript-context-apis/internal/activity-recognition/recognizers/state/store";
import { RecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/recognizer-manager";
import { RecognizerCallbackManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/callback-manager";
import { AndroidLowResRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/low-res/android/recognizer.android";
import { Resolution } from "nativescript-context-apis/internal/activity-recognition";
import {
    createRecognizersStateStoreMock,
    createCallbackManagerMock,
    createRecognizerManagerMock,
} from "~/tests/internal/activity-recognition/recognizers";
import {
    ActivityChange,
    HumanActivity,
    Transition,
} from "nativescript-context-apis/internal/activity-recognition";

describe("Android low resolution activity recognizer", () => {
    let recognizerState: RecognizerStateStore;
    let recognizerManager: RecognizerManager;
    let callbackManager: RecognizerCallbackManager;
    let recognizer: AndroidLowResRecognizer;

    beforeEach(() => {
        recognizerState = createRecognizersStateStoreMock();
        recognizerManager = createRecognizerManagerMock();
        callbackManager = createCallbackManagerMock();
        recognizer = new AndroidLowResRecognizer(
            recognizerState,
            recognizerManager,
            callbackManager
        );
        spyOn(recognizerState, "markAsActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve());
        spyOn(recognizerState, "markAsInactive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve());

        spyOn(recognizerManager, "isReady").and.callThrough();
        spyOn(recognizerManager, "prepare");
        spyOn(recognizerManager, "stopListening");

        spyOn(callbackManager, "add").and.callThrough();
        spyOn(callbackManager, "remove");
        spyOn(callbackManager, "removeAll");
        spyOn(callbackManager, "notifyAll");
    });

    it("allows to ask the underlying system if it is ready", async () => {
        const isReady = await recognizer.isReady();
        expect(recognizerManager.isReady).toHaveBeenCalled();
        expect(isReady).toBeTrue();
    });

    it("allows to ask the underlying system to prepare to be ready", async () => {
        await recognizer.prepare();
        expect(recognizerManager.prepare).toHaveBeenCalled();
    });

    it("allows to setup the recognition mechanism at anytime", async () => {
        spyOn(recognizerManager, "startListening");
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(false));
        await recognizer.setup();
        expect(recognizerManager.startListening).not.toHaveBeenCalled();
    });

    it("does not restart listening when already active", async () => {
        spyOn(recognizerManager, "startListening");
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(true));
        await recognizer.setup();
        expect(recognizerManager.startListening).toHaveBeenCalled();
    });

    it("allows to start the recognition by activating the underlying subsystem", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(false));
        spyOn(recognizerManager, "startListening");
        await recognizer.startRecognizing();
        expect(recognizerManager.startListening).toHaveBeenCalled();
        expect(recognizerState.markAsActive).toHaveBeenCalledWith(
            Resolution.LOW
        );
    });

    it("does not mark the recognizer as active if the activation fails", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(false));
        const listenError = new Error("Could not start listening");
        spyOn(recognizerManager, "startListening").and.rejectWith(listenError);
        await expectAsync(recognizer.startRecognizing()).toBeRejectedWith(
            listenError
        );
    });

    it("does not activate the underlying system if the recognizer is already active", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(true));
        spyOn(recognizerManager, "startListening");
        await recognizer.startRecognizing();
        expect(recognizerManager.startListening).not.toHaveBeenCalled();
        expect(recognizerState.markAsActive).not.toHaveBeenCalledWith(
            Resolution.LOW
        );
    });

    it("allows to stop the recognition by deactivating the underlying subsystem", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(true));
        await recognizer.stopRecognizing();
        expect(recognizerManager.stopListening).toHaveBeenCalled();
        expect(recognizerState.markAsInactive).toHaveBeenCalledWith(
            Resolution.LOW
        );
    });

    it("does not deactivate the underlying system if the recognizer is already inactive", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(Resolution.LOW)
            .and.returnValue(Promise.resolve(false));
        await recognizer.stopRecognizing();
        expect(recognizerManager.stopListening).not.toHaveBeenCalled();
        expect(recognizerState.markAsInactive).not.toHaveBeenCalledWith(
            Resolution.LOW
        );
    });

    it("allows to listen to activity changes", () => {
        const listenerId = recognizer.listenActivityChanges((_) => null);
        expect(listenerId).toEqual(0);
    });

    it("allows to stop listening activity changes on a specific listener", () => {
        const listenerId = recognizer.listenActivityChanges((_) => null);
        recognizer.stopListening(listenerId);
        expect(callbackManager.remove).toHaveBeenCalledWith(listenerId);
    });

    it("allows to stop listening activity changes on all the registered listeners", () => {
        recognizer.stopListening();
        expect(callbackManager.removeAll).toHaveBeenCalled();
    });

    it("propagates an activity change to all its listeners", () => {
        const activityChange: ActivityChange = {
            type: HumanActivity.RUNNING,
            change: Transition.STARTED,
            timestamp: new Date(),
        };
        recognizer.onNewActivityChange(activityChange);
        expect(callbackManager.notifyAll).toHaveBeenCalledWith(activityChange);
    });
});
