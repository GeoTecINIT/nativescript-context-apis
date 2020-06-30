import { AbstractActivityRecognizer } from "../../abstract-recognizer";

import {
  recognizersStateStoreDb,
  RecognizerStateStore,
} from "../../state/store";
import { RecognizerCallbackManager } from "../../callback-manager";
import { RecognizerManager } from "../../recognizer-manager";

import { ActivityChange } from "../../../activity-change";
import { Resolution } from "../../../index";

import { AndroidLowResRecognizerManager } from "./manager.android";

export class AndroidLowResRecognizer extends AbstractActivityRecognizer {
  constructor(
    recognizersState: RecognizerStateStore,
    callbackManager: RecognizerCallbackManager,
    recognitionManager: RecognizerManager
  ) {
    super(
      Resolution.LOW,
      recognizersState,
      callbackManager,
      recognitionManager
    );
  }

  onNewActivityChange(activityChange: ActivityChange) {
    this.callbackManager.notifyAll(activityChange);
  }
}

let _instance: AndroidLowResRecognizer;
export function getAndroidLowResRecognizer(): AndroidLowResRecognizer {
  if (!_instance) {
    _instance = new AndroidLowResRecognizer(
      recognizersStateStoreDb,
      new RecognizerCallbackManager(),
      new AndroidLowResRecognizerManager()
    );
  }
  return _instance;
}
