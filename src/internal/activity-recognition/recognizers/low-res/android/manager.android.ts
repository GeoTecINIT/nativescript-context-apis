import { RecognizerManager } from "../../recognizer-manager";

export class AndroidLowResRecognizerManager implements RecognizerManager {
  isReady(): Promise<boolean> {
    throw new Error("Unimplemented");
  }

  prepare(): Promise<void> {
    throw new Error("Unimplemented");
  }

  async startListening(): Promise<void> {
    throw new Error("Unimplemented");
  }

  async stopListening(): Promise<void> {
    throw new Error("Unimplemented");
  }
}
