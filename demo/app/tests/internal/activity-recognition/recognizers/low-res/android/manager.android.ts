import { android as androidApp } from "tns-core-modules/application/application";
import { AndroidLowResRecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/low-res/android/manager.android";

describe("Android low res recognition manager", () => {
    if (!androidApp) {
        return;
    }

    const recognizerManager = new AndroidLowResRecognizerManager();

    it("allows to check if the recognition mechanism is ready", () => {
        const isReady = recognizerManager.isReady();
        expect(isReady === true || isReady === false).toBeTrue();
    });

    it("allows to prepare the recognition mechanism when not ready", () => {
        const permissionPromise = recognizerManager.prepare();
        expect(permissionPromise).toBeInstanceOf(Promise);
    });

    it("allows to start listening to native transition changes", async () => {
        try {
            await recognizerManager.startListening();
        } catch (e) {
            const isReady = recognizerManager.isReady();
            expect(isReady).toBeFalse();
        }
    });

    it("allows to stop listening to native transition changes", async () => {
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
