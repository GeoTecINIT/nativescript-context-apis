import { ActivityRecognizer, RecognitionCallback, StartOptions } from "./index";

import { Resolution } from "../index";
import { RecognizerStateStore } from "./state/store";
import { RecognizerManager } from "./recognizer-manager";
import { RecognizerCallbackManager } from "./callback-manager";

export abstract class AbstractActivityRecognizer implements ActivityRecognizer {
  protected constructor(
    protected recognizerType: Resolution,
    protected recognizerState: RecognizerStateStore,
    protected callbackManager: RecognizerCallbackManager,
    private recognitionManager: RecognizerManager
  ) {}

  isReady(): boolean {
    return this.recognitionManager.isReady();
  }

  async prepare(): Promise<void> {
    await this.recognitionManager.prepare();
  }

  async setup(): Promise<void> {
    const active = await this.recognizerState.isActive(this.recognizerType);
    if (active) {
      const startOptions = await this.recognizerState.getStartOptions(
        this.recognizerType
      );
      await this.recognitionManager.startListening(startOptions);
    }
  }

  async startRecognizing(options: StartOptions = {}): Promise<void> {
    await this.recognitionManager.startListening(options);
    const active = await this.recognizerState.isActive(this.recognizerType);
    if (active) {
      return;
    }
    await this.recognizerState.markAsActive(this.recognizerType, options);
  }

  async stopRecognizing(): Promise<void> {
    try {
      await this.recognitionManager.stopListening();
    } catch (e) {
      console.error(
        `Could not deactivate ${this.recognizerType} res activity recognizer: ${
          e.stack ? e.stack : e
        }`
      );
    }
    await this.recognizerState.markAsInactive(this.recognizerType);
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
}
