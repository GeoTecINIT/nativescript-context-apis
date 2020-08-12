import { AndroidHighResRecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/android/manager.android";

describe("Android high res recognition manager", () => {
    if (typeof android === "undefined") {
        return;
    }

    const recognizerManager = new AndroidHighResRecognizerManager();

    it("allows to check if the recogntion mechanism is ready", () => {
        const isReady = recognizerManager.isReady();
        expect(isReady === true || isReady === false).toBeTrue();
    })

    it("allows to start listening to activity updates from the custom model", async () => {
        try {
            await recognizerManager.startListening();
        } catch (e) {
            const isReady = recognizerManager.isReady();
            expect(isReady).toBeFalse();
        }
    });

    it("allows to stop listening to activity updates from the custom model", async () => {
        try {
            await recognizerManager.stopListening();
        } catch (e) {
            const isReady = recognizerManager.isReady();
            expect(isReady).toBeFalse();
        }
    });

    afterAll(async () => {
        await recognizerManager.stopListening();
    });
})