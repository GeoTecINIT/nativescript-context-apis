import { android as androidApp } from "tns-core-modules/application/application";

import { ActivityRecognizer } from "..";
import { getAndroidHighResRecognizer } from "./android/recognizer.android";
import { HumanActivity } from "../../human-activity";

export interface ActivityNotifier extends ActivityRecognizer {
    onActivityDetected(result: ActivityDetected): void;
}


export interface ActivityDetected {
    type: HumanActivity;
    confidence: number;
    timestamp: Date;
}

export function getHighResRecognizer(): ActivityRecognizer {
    if (androidApp) {
        return getAndroidHighResRecognizer();
    } else {
        return null;
    }
}
