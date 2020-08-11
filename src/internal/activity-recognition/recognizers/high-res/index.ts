import { android as androidApp } from "tns-core-modules/application/application";

import { ActivityRecognizer } from "..";
import { getAndroidHighResRecognizer } from "./android/recognizer.android";

import FirebaseCustomRemoteModel = com.google.firebase.ml.custom.FirebaseCustomRemoteModel;

export function getHighResRecognizer(): ActivityRecognizer {
    if (androidApp) {
        return getAndroidHighResRecognizer();
    } else {
        return null;
    }
}
