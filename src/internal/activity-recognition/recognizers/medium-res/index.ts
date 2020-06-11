import { android as androidApp } from "tns-core-modules/application/application";

import { ActivityRecognizer } from "../index";
import { getAndroidMediumResRecognizer } from "./android/recognizer.android";

export function getMediumResRecognizer(): ActivityRecognizer {
  if (androidApp) {
    return getAndroidMediumResRecognizer();
  } else {
    return null; // TODO: Add iOS recognizer;
  }
}
