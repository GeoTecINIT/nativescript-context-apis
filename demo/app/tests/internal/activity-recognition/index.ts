import { Application } from "@nativescript/core";
import {
    getActivityRecognizer,
    Resolution,
} from "nativescript-context-apis/internal/activity-recognition";
import { AndroidLowResRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/low-res/android/recognizer.android";
import { AndroidMediumResRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/medium-res/android/recognizer.android";

describe("Activity recognition module", () => {
    it("returns a low res recognizer when asked", () => {
        const lowResRecognizer = getActivityRecognizer(Resolution.LOW);
        if (Application.android) {
            expect(lowResRecognizer).toBeInstanceOf(AndroidLowResRecognizer);
        } else {
            expect(lowResRecognizer).not.toBeNull();
        }
    });

    it("returns a medium res recognizer when asked", () => {
        const mediumResRecognizer = getActivityRecognizer(Resolution.MEDIUM);
        if (Application.android) {
            expect(mediumResRecognizer).toBeInstanceOf(
                AndroidMediumResRecognizer
            );
        } else {
            expect(mediumResRecognizer).not.toBeNull();
        }
    });
});
