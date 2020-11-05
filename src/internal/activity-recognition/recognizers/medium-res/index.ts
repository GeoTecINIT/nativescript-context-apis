import { Application } from "@nativescript/core";
import { ActivityRecognizer } from "../index";
import { getAndroidMediumResRecognizer } from "./android/recognizer.android";

export function getMediumResRecognizer(): ActivityRecognizer {
  if (Application.android) {
    return getAndroidMediumResRecognizer();
  } else {
    return null; // TODO: Add iOS recognizer;
  }
}
