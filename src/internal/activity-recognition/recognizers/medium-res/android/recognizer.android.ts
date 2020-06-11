import { ActivityRecognizer, RecognitionCallback } from "../../index";

export class AndroidMediumResRecognizer implements ActivityRecognizer {
  setup(): Promise<void> {
    throw new Error("Unimplemented");
  }

  startRecognizing(callback: RecognitionCallback): Promise<number> {
    throw new Error("Unimplemented");
  }

  stopRecognizing(listenerId?: number) {
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
