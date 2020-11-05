import { Application } from "@nativescript/core";

import { ActivityRecognizer } from "../index";
import { getAndroidLowResRecognizer } from "./android/recognizer.android";

export function getLowResRecognizer(): ActivityRecognizer {
  if (Application.android) {
    return getAndroidLowResRecognizer();
  } else {
    return null; // TODO: Add iOS recognizer
  }
}
