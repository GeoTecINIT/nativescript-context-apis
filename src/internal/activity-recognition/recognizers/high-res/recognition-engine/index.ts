import { android as androidApp } from "tns-core-modules/application/application";
import { getAndroidAccelerometerGatherer } from "../android/gatherer/accelerometer-gatherer.android";
import { AccelerometerGatherer } from "./accelerometer-gatherer";
import { RecognizerOptions, Recognizer } from "./abstract-recognizer";
import { getAndroidRecongizer } from "./android/recognizer.android";

export function getAccelerometerGatherer(): AccelerometerGatherer {
    if (androidApp) {
        return getAndroidAccelerometerGatherer();
    } else {
        return null;
    }
}

export function getRecognizer(options: RecognizerOptions): Recognizer {
    if (androidApp) {
        return getAndroidRecongizer(options);
    } else {
        return null;
    }
}