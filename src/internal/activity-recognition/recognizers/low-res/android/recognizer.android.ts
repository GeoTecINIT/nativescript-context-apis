import {
  recognizersStateStoreDb,
  RecognizerStateStore,
} from "../../state/store";
import { RecognizerManager } from "../../recognizer-manager";
import { AndroidLowResRecognizerManager } from "./manager.android";
import { RecognizerCallbackManager } from "../../callback-manager";

import { ActivityRecognizer, RecognitionCallback } from "../../index";
import { ActivityChange } from "../../../activity-change";
import { Resolution } from "../../../index";

export class AndroidLowResRecognizer implements ActivityRecognizer {
  private readonly recognizerType = Resolution.LOW;

  constructor(
    private recognizersState: RecognizerStateStore,
    private recognitionManager: RecognizerManager,
    private callbackManager: RecognizerCallbackManager
  ) {}

  isReady(): Promise<boolean> {
    return this.recognitionManager.isReady();
  }

  async prepare(): Promise<void> {
    await this.recognitionManager.prepare();
  }

  async setup(): Promise<void> {
    const active = await this.recognizersState.isActive(this.recognizerType);
    if (active) {
      await this.recognitionManager.startListening();
    }
  }

  async startRecognizing(): Promise<void> {
    const active = await this.recognizersState.isActive(this.recognizerType);
    if (active) {
      return;
    }
    await this.recognitionManager.startListening();
    await this.recognizersState.markAsActive(this.recognizerType);
  }

  async stopRecognizing(): Promise<void> {
    const active = await this.recognizersState.isActive(this.recognizerType);
    if (!active) {
      return;
    }
    await this.recognitionManager.stopListening();
    await this.recognizersState.markAsInactive(this.recognizerType);
  }

  listenActivityChanges(callback: RecognitionCallback): number {
    return this.callbackManager.add(callback);
  }

  stopListening(listenerId?: number) {
    if (typeof listenerId === "number") {
      this.callbackManager.remove(listenerId);
    } else {
      this.callbackManager.removeAll();
    }
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
      new AndroidLowResRecognizerManager(),
      new RecognizerCallbackManager()
    );
  }
  return _instance;
}
