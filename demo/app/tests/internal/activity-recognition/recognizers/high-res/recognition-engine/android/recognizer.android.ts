import { AndroidRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/android/recognizer.android";
import { RecognizerOptions } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/abstract-recognizer";

describe("Android recognizer", () => {

    let recognizer: AndroidRecognizer;
    const options: RecognizerOptions = {
        localModelFilePath: "modelPath",
        labelsFilePath: "labelsPath"
    };

    beforeEach(() => {
        recognizer = new AndroidRecognizer();
    });

    it("is not ready if initialize has not been called", () => {
        expect(recognizer.isReady()).toBeFalse();
    });

    it("is ready if initilize has been called", () => {
        recognizer.initializeRecognizer(options);

        expect(recognizer.isReady()).toBeTrue();
    });
})