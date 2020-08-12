import { AbstractActivityRecognizer } from "../../abstract-recognizer";
import { RecognizerStateStore, recognizersStateStoreDb } from "../../state/store";
import { RecognizerManager } from "../../recognizer-manager";
import { Resolution } from "../../..";
import { RecognizerCallbackManager } from "../../callback-manager";
import { ActivityUpdate } from "../../medium-res/android/recognizer.android";
import { Transition } from "../../../activity-change";
import { AndroidHighResRecognizerManager } from "./manager.android";

export class AndroidHighResRecognizer extends AbstractActivityRecognizer {
    constructor(
        recognizerState: RecognizerStateStore,
        callbackManager: RecognizerCallbackManager,
        recognitionManager: RecognizerManager
    ) {
        super(
            Resolution.HIGH,
            recognizerState,
            callbackManager,
            recognitionManager
        );
    }

    // TODO: Maybe other data type than ActivityUpdate is required
    onActivityDetected(result: ActivityUpdate) {
        this.callbackManager.notifyAll({
            type: result.type,
            transition: Transition.STARTED,
            confidence: result.confidence,
            timestamp: result.timestamp
        });
    }
}

let _instance: AndroidHighResRecognizer;
export function getAndroidHighResRecognizer(): AndroidHighResRecognizer {
    if (!_instance) {
        _instance = new AndroidHighResRecognizer(
            recognizersStateStoreDb,
            new RecognizerCallbackManager(),
            new AndroidHighResRecognizerManager()
        );
    }
    return _instance;
}
