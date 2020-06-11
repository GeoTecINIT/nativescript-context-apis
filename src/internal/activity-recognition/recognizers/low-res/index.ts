import { android as androidApp } from "tns-core-modules/application/application";

import { ActivityRecognizer } from "../index";
import { getAndroidLowResRecognizer } from "./android/recognizer.android";

export function getLowResRecognizer(): ActivityRecognizer {
  if (androidApp) {
    return getAndroidLowResRecognizer();
  } else {
    return null; // TODO: Add iOS recognizer
  }
}
