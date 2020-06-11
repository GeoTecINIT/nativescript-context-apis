import { ActivityRecognizer, RecognitionCallback } from "../../index";

export class AndroidLowResRecognizer implements ActivityRecognizer {
  setup(): void {
    throw new Error("Unimplemented");
  }

  startRecognizing(callback: RecognitionCallback): Promise<number> {
    throw new Error("Unimplemented");
  }

  stopRecognizing(listenerId?: number) {
    throw new Error("Unimplemented");
  }
}

let _instance: AndroidLowResRecognizer;
export function getAndroidLowResRecognizer(): AndroidLowResRecognizer {
  if (!_instance) {
    _instance = new AndroidLowResRecognizer();
  }
  return _instance;
}
