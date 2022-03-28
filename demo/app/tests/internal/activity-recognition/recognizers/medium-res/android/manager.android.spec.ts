import { AndroidMediumResRecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/medium-res/android/manager.android";

describe("Android medium res recognition manager", () => {
    if (typeof android === "undefined") {
        return;
    }

    const recognizerManager = new AndroidMediumResRecognizerManager();

    it("allows to check if the recognition mechanism is ready", () => {
        const isReady = recognizerManager.isReady();
        expect(isReady === true || isReady === false).toBeTrue();
    });

    it("allows to prepare the recognition mechanism when not ready", () => {
        const permissionPromise = recognizerManager.prepare();
        expect(permissionPromise).toBeInstanceOf(Promise);
    });

    it("allows to start listening to native activity updates", async () => {
        try {
            await recognizerManager.startListening();
        } catch (e) {
            const isReady = recognizerManager.isReady();
            expect(isReady).toBeFalse();
        }
    });

    it("allows to stop listening to native activity updates", async () => {
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
});
