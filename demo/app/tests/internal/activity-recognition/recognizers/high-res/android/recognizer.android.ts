import { RecognizerStateStore } from "nativescript-context-apis/internal/activity-recognition/recognizers/state/store";
import { RecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/recognizer-manager";
import { RecognizerCallbackManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/callback-manager";
import { AndroidHighResRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/android/recognizer.android";
import { Resolution } from "nativescript-context-apis/internal/activity-recognition";
import { StartOptions } from "nativescript-context-apis/internal/activity-recognition/recognizers";
import {
    createRecognizersStateStoreMock,
    createCallbackManagerMock,
    createRecognizerManagerMock,
} from "~/tests/internal/activity-recognition/recognizers";

describe("Android high resolution activity recognizer", () => {
    const recognizerType = Resolution.HIGH;
    const startOptions: StartOptions = {};

    let recognizerState: RecognizerStateStore;
    let callbackManager: RecognizerCallbackManager;
    let recognizerManager: RecognizerManager;
    let recognizer: AndroidHighResRecognizer;

    beforeEach(() => {
        recognizerState = createRecognizersStateStoreMock();
        recognizerManager = createRecognizerManagerMock();
        callbackManager = createCallbackManagerMock();
        recognizer = new AndroidHighResRecognizer(
            recognizerState,
            callbackManager,
            recognizerManager
        );
        spyOn(recognizerState, "markAsActive")
            .withArgs(recognizerType, startOptions)
            .and.returnValue(Promise.resolve());
        spyOn(recognizerState, "markAsInactive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve());

        spyOn(recognizerManager, "isReady").and.callThrough();
        spyOn(recognizerManager, "prepare");

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
            .and.returnValue(Promise.resolve(true));
        spyOn(recognizerState, "getStartOptions").and.returnValue(
            Promise.resolve(startOptions)
        );
        await recognizer.setup();
        expect(recognizerManager.startListening).toHaveBeenCalledWith(
            startOptions
        );
    });

    it("does not (re)start listening when inactive", async () => {
        spyOn(recognizerManager, "startListening");
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(false));
        await recognizer.setup();
        expect(recognizerManager.startListening).not.toHaveBeenCalled();
    });

    it("allows to start the recognition by activating the underlying subsystem", async () => {
        spyOn(recognizerManager, "startListening");
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(false));
        await recognizer.startRecognizing(startOptions);
        expect(recognizerManager.startListening).toHaveBeenCalled();
        expect(recognizerState.markAsActive).toHaveBeenCalledWith(
            recognizerType,
            startOptions
        );
    });

    it("allows to restart the recognition without overwriting existing state", async () => {
        spyOn(recognizerManager, "startListening");
        spyOn(recognizerState, "isActive")
            .withArgs(recognizerType)
            .and.returnValue(Promise.resolve(true));
        await recognizer.startRecognizing(startOptions);
        expect(recognizerManager.startListening).toHaveBeenCalled();
        expect(recognizerState.markAsActive).not.toHaveBeenCalled();
    });

    it("does not mark the recognizer as active if the activation fails", async () => {
        const listenError = new Error("Could not start listening");
        spyOn(recognizerManager, "startListening").and.rejectWith(listenError);
        await expectAsync(recognizer.startRecognizing()).toBeRejectedWith(
            listenError
        );
        expect(recognizerState.markAsActive).not.toHaveBeenCalled();
    });

    it("allows to stop the recognition by deactivating the underlying subsystem", async () => {
        spyOn(recognizerManager, "stopListening");
        await recognizer.stopRecognizing();
        expect(recognizerManager.stopListening).toHaveBeenCalled();
        expect(recognizerState.markAsInactive).toHaveBeenCalledWith(
            recognizerType
        );
    });

    it("marks the recognizer as inactive even though the deactivation fails", async () => {
        const deactivationError = new Error(
            "Could not stop listening due to permissions not granted"
        );
        spyOn(recognizerManager, "stopListening").and.rejectWith(
            deactivationError
        );
        await recognizer.stopRecognizing();
        await expectAsync(recognizerManager.stopListening()).toBeRejectedWith(
            deactivationError
        );
        expect(recognizerState.markAsInactive).toHaveBeenCalledWith(
            recognizerType
        );
    });

    it("allows to listen to activity updates", () => {
        const listenerId = recognizer.listenActivityChanges((_) => null);
        expect(listenerId).toEqual(0);
    });

    it("allows to stop listening activity updates on a specific listener", () => {
        const listenerId = recognizer.listenActivityChanges((_) => null);
        recognizer.stopListening(listenerId);
        expect(callbackManager.remove).toHaveBeenCalledWith(listenerId);
    });

    it("allows to stop listening activity updates on all the registered listeners", () => {
        recognizer.stopListening();
        expect(callbackManager.removeAll).toHaveBeenCalled();
    });
})