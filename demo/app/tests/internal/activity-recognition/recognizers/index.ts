import { RecognizerCallbackManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/callback-manager";
import { RecognitionCallback } from "nativescript-context-apis/internal/activity-recognition/recognizers";
import { ActivityChange } from "nativescript-context-apis/internal/activity-recognition";
import { RecognizerStateStore } from "nativescript-context-apis/internal/activity-recognition/recognizers/state/store";
import { Resolution } from "nativescript-context-apis/internal/activity-recognition";
import { RecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/recognizer-manager";

export function createCallbackManagerMock(): RecognizerCallbackManager {
    return {
        add(callback: RecognitionCallback) {
            return 0;
        },
        notifyAll(activityChange: ActivityChange) {
            return null;
        },
        remove(callbackId: number) {
            return null;
        },
        removeAll() {
            return null;
        },
    } as RecognizerCallbackManager;
}

export function createRecognizersStateStoreMock(): RecognizerStateStore {
    return {
        isActive(recognizer: Resolution): Promise<boolean> {
            return Promise.resolve(false);
        },
        markAsActive(recognizer: Resolution): Promise<void> {
            return Promise.resolve();
        },
        markAsInactive(recognizer: Resolution): Promise<void> {
            return Promise.resolve();
        },
    };
}

export function createRecognizerManagerMock(): RecognizerManager {
    return {
        startListening(): Promise<void> {
            return Promise.resolve();
        },
        stopListening(): Promise<void> {
            return Promise.resolve();
        },
    };
}
