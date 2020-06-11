import { AndroidLowResRecognizerManager } from "./manager.android";
import { RecognizerCallbackManager } from "../../callback-manager";

import { ActivityRecognizer, RecognitionCallback } from "../../index";
import { ActivityChange } from "../../../activity-change";

import { recognizersStateStoreDb } from "../../state/store";

export class AndroidLowResRecognizer implements ActivityRecognizer {
  constructor(
    private recognitionManager: AndroidLowResRecognizerManager,
    private callbackManager: RecognizerCallbackManager
  ) {}

  setup(): Promise<void> {
    throw new Error("Unimplemented");
  }

  startRecognizing(callback: RecognitionCallback): Promise<number> {
    throw new Error("Unimplemented");
  }

  stopRecognizing(listenerId?: number) {
    throw new Error("Unimplemented");
  }

  onNewActivityTransition(activityChange: ActivityChange) {}
}

let _instance: AndroidLowResRecognizer;
export function getAndroidLowResRecognizer(): AndroidLowResRecognizer {
  if (!_instance) {
    _instance = new AndroidLowResRecognizer(
      new AndroidLowResRecognizerManager(recognizersStateStoreDb),
      new RecognizerCallbackManager()
    );
  }
  return _instance;
}
