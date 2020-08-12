import { android as androidApp } from "tns-core-modules/application/application";

import { ActivityRecognizer } from "..";
import { getAndroidHighResRecognizer } from "./android/recognizer.android";

export function getHighResRecognizer(): ActivityRecognizer {
    if (androidApp) {
        return getAndroidHighResRecognizer();
    } else {
        return null;
    }
}
