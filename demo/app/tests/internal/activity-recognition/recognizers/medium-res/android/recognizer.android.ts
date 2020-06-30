import { RecognizerStateStore } from "nativescript-context-apis/internal/activity-recognition/recognizers/state/store";
import { RecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/recognizer-manager";
import { RecognizerCallbackManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/callback-manager";
import { AndroidMediumResRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/medium-res/android/recognizer.android";
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

describe("Android medium resolution activity recognizer", () => {
    const recognizerType = Resolution.MEDIUM;

    let recognizerState: RecognizerStateStore;
    let callbackManager: RecognizerCallbackManager;
    let recognizerManager: RecognizerManager;
    let recognizer: AndroidMediumResRecognizer;

    beforeEach(() => {
        recognizerState = createRecognizersStateStoreMock();
        recognizerManager = createRecognizerManagerMock();
        callbackManager = createCallbackManagerMock();
        recognizer = new AndroidMediumResRecognizer(
            recognizerState,
            callbackManager,
            recognizerManager
        );
        spyOn(recognizerState, "markAsActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve());
        spyOn(recognizerState, "markAsInactive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve());

        spyOn(recognizerManager, "isReady").and.callThrough();
        spyOn(recognizerManager, "prepare");
        spyOn(recognizerManager, "stopListening");

        spyOn(callbackManager, "add").and.callThrough();
        spyOn(callbackManager, "remove");
        spyOn(callbackManager, "removeAll");
        spyOn(callbackManager, "notifyAll");
    });

    it("allows to ask the underlying system if it is ready", () => {
        const isReady = recognizer.isReady();
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
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(false));
        await recognizer.setup();
        expect(recognizerManager.startListening).not.toHaveBeenCalled();
    });

    it("does not restart listening when already active", async () => {
        spyOn(recognizerManager, "startListening");
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(true));
        await recognizer.setup();
        expect(recognizerManager.startListening).toHaveBeenCalled();
    });

    it("allows to start the recognition by activating the underlying subsystem", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(false));
        spyOn(recognizerManager, "startListening");
        await recognizer.startRecognizing();
        expect(recognizerManager.startListening).toHaveBeenCalled();
        expect(recognizerState.markAsActive).toHaveBeenCalledWith(
            recognizerType
        );
    });

    it("does not mark the recognizer as active if the activation fails", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(false));
        const listenError = new Error("Could not start listening");
        spyOn(recognizerManager, "startListening").and.rejectWith(listenError);
        await expectAsync(recognizer.startRecognizing()).toBeRejectedWith(
            listenError
        );
    });

    it("does not activate the underlying system if the recognizer is already active", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(true));
        spyOn(recognizerManager, "startListening");
        await recognizer.startRecognizing();
        expect(recognizerManager.startListening).not.toHaveBeenCalled();
        expect(recognizerState.markAsActive).not.toHaveBeenCalledWith(
            recognizerType
        );
    });

    it("allows to stop the recognition by deactivating the underlying subsystem", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(true));
        await recognizer.stopRecognizing();
        expect(recognizerManager.stopListening).toHaveBeenCalled();
        expect(recognizerState.markAsInactive).toHaveBeenCalledWith(
            recognizerType
        );
    });

    it("does not deactivate the underlying system if the recognizer is already inactive", async () => {
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(false));
        await recognizer.stopRecognizing();
        expect(recognizerManager.stopListening).not.toHaveBeenCalled();
        expect(recognizerState.markAsInactive).not.toHaveBeenCalledWith(
            recognizerType
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

    it("propagates an activity start to all its listeners when starting from scratch", async () => {
        spyOn(recognizerState, "getLastActivity")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(null));
        spyOn(recognizerState, "updateLastActivity")
            .withArgs(recognizerType, HumanActivity.RUNNING)
            .and.returnValue(Promise.resolve());

        const activityChange: ActivityChange = {
            type: HumanActivity.RUNNING,
            transition: Transition.STARTED,
            confidence: 0.5,
            timestamp: new Date(),
        };

        await recognizer.onRecognitionResult({
            type: activityChange.type,
            confidence: activityChange.confidence,
            timestamp: activityChange.timestamp,
        });
        expect(callbackManager.notifyAll).toHaveBeenCalledWith(activityChange);
    });

    it("propagates an activity end and start to all its listeners when an activity was ongoing", async () => {
        spyOn(recognizerState, "getLastActivity")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(HumanActivity.STILL));

        const previousActivityChange: ActivityChange = {
            type: HumanActivity.STILL,
            transition: Transition.ENDED,
            timestamp: new Date(),
        };
        const activityChange: ActivityChange = {
            type: HumanActivity.RUNNING,
            transition: Transition.STARTED,
            confidence: 0.5,
            timestamp: previousActivityChange.timestamp,
        };

        await recognizer.onRecognitionResult({
            type: activityChange.type,
            confidence: activityChange.confidence,
            timestamp: activityChange.timestamp,
        });
        expect(callbackManager.notifyAll).toHaveBeenCalledWith(
            previousActivityChange
        );
        expect(callbackManager.notifyAll).toHaveBeenCalledWith(activityChange);
    });

    it("does nothing when an activity is the same than the last one", async () => {
        spyOn(recognizerState, "getLastActivity")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(HumanActivity.STILL));

        await recognizer.onRecognitionResult({
            type: HumanActivity.STILL,
            confidence: 0.95,
            timestamp: new Date(),
        });
        expect(callbackManager.notifyAll).not.toHaveBeenCalled();
    });
});
