import { AbstractActivityRecognizer } from "../../abstract-recognizer";

import {
  recognizersStateStoreDb,
  RecognizerStateStore,
} from "../../state/store";
import { RecognizerCallbackManager } from "../../callback-manager";
import { RecognizerManager } from "../../recognizer-manager";

import { HumanActivity, Resolution, Transition } from "../../../index";

import { AndroidMediumResRecognizerManager } from "./manager.android";

export class AndroidMediumResRecognizer extends AbstractActivityRecognizer {
  constructor(
    recognizerState: RecognizerStateStore,
    callbackManager: RecognizerCallbackManager,
    recognitionManager: RecognizerManager
  ) {
    super(
      Resolution.MEDIUM,
      recognizerState,
      callbackManager,
      recognitionManager
    );
  }

  async onRecognitionResult(result: ActivityUpdate) {
    const lastActivity = await this.recognizerState.getLastActivity(
      this.recognizerType
    );
    if (lastActivity) {
      this.callbackManager.notifyAll({
        type: lastActivity,
        transition: Transition.ENDED,
        timestamp: result.timestamp,
      });
    }

    this.callbackManager.notifyAll({
      type: result.type,
      transition: Transition.STARTED,
      confidence: result.confidence,
      timestamp: result.timestamp,
    });
    await this.recognizerState.updateLastActivity(
      this.recognizerType,
      result.type
    );
  }
}

export interface ActivityUpdate {
  type: HumanActivity;
  confidence: number;
  timestamp: Date;
}

let _instance: AndroidMediumResRecognizer;
export function getAndroidMediumResRecognizer(): AndroidMediumResRecognizer {
  if (!_instance) {
    _instance = new AndroidMediumResRecognizer(
      recognizersStateStoreDb,
      new RecognizerCallbackManager(),
      new AndroidMediumResRecognizerManager()
    );
  }
  return _instance;
}
