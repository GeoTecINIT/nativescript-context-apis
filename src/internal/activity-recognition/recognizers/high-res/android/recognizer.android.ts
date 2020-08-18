import { AbstractActivityRecognizer } from "../../abstract-recognizer";
import { RecognizerStateStore, recognizersStateStoreDb } from "../../state/store";
import { RecognizerManager } from "../../recognizer-manager";
import { Resolution } from "../../..";
import { RecognizerCallbackManager } from "../../callback-manager";
import { Transition } from "../../../activity-change";
import { AndroidHighResRecognizerManager } from "./manager.android";
import { RecognizerOptions } from "../recognition-engine/abstract-recognizer";
import { getAndroidRecongizer } from "../recognition-engine/android/recognizer.android";
import { ActivityDetected, ActivityNotifier } from "..";

export class AndroidHighResRecognizer extends AbstractActivityRecognizer implements ActivityNotifier {

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

    initializeRecongnizer(options: RecognizerOptions) {
        // I know, ugly af
        getAndroidRecongizer().initializeRecognizer(options);
    }

    onActivityDetected(result: ActivityDetected) {
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
