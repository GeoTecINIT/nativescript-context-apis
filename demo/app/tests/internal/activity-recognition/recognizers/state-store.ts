import { recognizersStateStoreDb } from "nativescript-context-apis/internal/activity-recognition/recognizers/state/store";
import {
    Resolution,
    HumanActivity,
} from "nativescript-context-apis/internal/activity-recognition";

describe("Recognizers state store", () => {
    const recognizer = Resolution.HIGH;

    it("returns if a recognizer is active or not", async () => {
        const isActive = await recognizersStateStoreDb.isActive(recognizer);
        expect(isActive == true || isActive == false).toBeTrue();
    });

    it("marks a recognizer as active", async () => {
        await recognizersStateStoreDb.markAsActive(recognizer);
        const isActive = await recognizersStateStoreDb.isActive(recognizer);
        expect(isActive).toBeTrue();
    });

    it("marks a recognizer as inactive", async () => {
        await recognizersStateStoreDb.markAsInactive(recognizer);
        const isActive = await recognizersStateStoreDb.isActive(recognizer);
        expect(isActive).toBeFalse();
    });

    it("returns a nullish last activity when recognizer becomes deactivated", async () => {
        await recognizersStateStoreDb.markAsInactive(recognizer);
        const lastActivity = await recognizersStateStoreDb.getLastActivity(
            recognizer
        );
        expect(lastActivity).toBeNull();
    });

    it("successfully updates the last activity of an active recognizer", async () => {
        await recognizersStateStoreDb.markAsActive(recognizer);
        const activity = HumanActivity.RUNNING;
        await recognizersStateStoreDb.updateLastActivity(recognizer, activity);
        const lastActivity = await recognizersStateStoreDb.getLastActivity(
            recognizer
        );
        expect(lastActivity).toEqual(activity);
    });

    it("ignores the update of the last activity of an inactive recognizer", async () => {
        await recognizersStateStoreDb.markAsInactive(recognizer);
        await recognizersStateStoreDb.updateLastActivity(
            recognizer,
            HumanActivity.RUNNING
        );
        const lastActivity = await recognizersStateStoreDb.getLastActivity(
            recognizer
        );
        expect(lastActivity).toBeNull();
    });

    afterAll(async () => {
        await recognizersStateStoreDb.markAsInactive(recognizer);
    });
});
