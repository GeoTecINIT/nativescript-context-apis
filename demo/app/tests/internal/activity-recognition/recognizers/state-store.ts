import { recognizersStateStoreDb } from "nativescript-context-apis/internal/activity-recognition/recognizers/state/store";
import { Resolution } from "nativescript-context-apis/internal/activity-recognition";

describe("Recognizers state store", () => {
    it("returns if a recognizer is active or not", async () => {
        const isActive = await recognizersStateStoreDb.isActive(
            Resolution.HIGH
        );
        expect(isActive == true || isActive == false).toBeTrue();
    });

    it("marks a recognizer as active", async () => {
        await recognizersStateStoreDb.markAsActive(Resolution.HIGH);
        const isActive = await recognizersStateStoreDb.isActive(
            Resolution.HIGH
        );
        expect(isActive).toBeTrue();
    });

    it("marks a recognizer as inactive", async () => {
        await recognizersStateStoreDb.markAsInactive(Resolution.HIGH);
        const isActive = await recognizersStateStoreDb.isActive(
            Resolution.HIGH
        );
        expect(isActive).toBeFalse();
    });

    afterAll(async () => {
        await recognizersStateStoreDb.markAsInactive(Resolution.HIGH);
    });
});
