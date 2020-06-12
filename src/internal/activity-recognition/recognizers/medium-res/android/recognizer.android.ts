import { ActivityRecognizer, RecognitionCallback } from "../../index";

export class AndroidMediumResRecognizer implements ActivityRecognizer {
  isReady(): Promise<boolean> {
    throw new Error("Unimplemented");
  }

  prepare(): Promise<void> {
    throw new Error("Unimplemented");
  }

  setup(): Promise<void> {
    throw new Error("Unimplemented");
  }

  startRecognizing(): Promise<void> {
    throw new Error("Unimplemented");
  }

  stopRecognizing(): Promise<void> {
    throw new Error("Unimplemented");
  }

  listenActivityChanges(callback: RecognitionCallback): number {
    throw new Error("Unimplemented");
  }

  stopListening(listenerId?: number) {
    throw new Error("Unimplemented");
  }
}

let _instance: AndroidMediumResRecognizer;
export function getAndroidMediumResRecognizer(): AndroidMediumResRecognizer {
  if (!_instance) {
    _instance = new AndroidMediumResRecognizer();
  }
  return _instance;
}
