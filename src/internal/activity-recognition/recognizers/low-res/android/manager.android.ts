import { RecognizerStateStore } from "../../state/store";

export class AndroidLowResRecognizerManager {
  constructor(private recognizerState: RecognizerStateStore) {}

  async setup(): Promise<void> {}

  async startListening(): Promise<void> {}

  async stopListening(): Promise<void> {}
}
