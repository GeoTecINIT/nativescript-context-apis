import { RecognizerCallbackManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/callback-manager";
import {
    ActivityChange,
    HumanActivity,
    Transition,
} from "nativescript-context-apis/internal/activity-recognition";

const noNotificationTimeout = 100;

describe("Recognizer callback manager", () => {
    const callbackManager = new RecognizerCallbackManager();

    const activityChange: ActivityChange = {
        type: HumanActivity.RUNNING,
        transition: Transition.STARTED,
        timestamp: new Date(),
    };

    it("adds a callback and returns an id", () => {
        const listenerId = callbackManager.add((_) => null);
        expect(listenerId).toBeGreaterThanOrEqual(0);
    });

    it("notifies a registered callback about an activity change", async () => {
        const activityChanged = listenActivityChanges(callbackManager);
        callbackManager.notifyAll(activityChange);
        const changedActivity = await activityChanged;
        expect(changedActivity).toEqual(activityChange);
    });

    it("notifies more than one registered callback about an activity change", async () => {
        const firstCallback = listenActivityChanges(callbackManager);
        const secondCallback = listenActivityChanges(callbackManager);
        callbackManager.notifyAll(activityChange);
        const activityChanges = await Promise.all([
            firstCallback,
            secondCallback,
        ]);
        for (let change of activityChanges) {
            expect(change).toEqual(activityChange);
        }
    });

    it("removes a specific callback, without preventing others to listen to changes", async () => {
        const notBeingNotified = failOnActivityChange(
            callbackManager,
            noNotificationTimeout,
            (callbackId) => callbackManager.remove(callbackId)
        );
        const activityChanged = listenActivityChanges(callbackManager);
        callbackManager.notifyAll(activityChange);
        const success = await Promise.all([notBeingNotified, activityChanged]);
        expect(success.length).toBe(2);
    });

    it("removes all registered callbacks, thus preventing them from being notified", async () => {
        const notBeingNotified = failOnActivityChange(
            callbackManager,
            noNotificationTimeout,
            () => callbackManager.removeAll()
        );
        callbackManager.notifyAll(activityChange);
        await notBeingNotified;
    });

    afterEach(() => {
        callbackManager.removeAll();
    });
});

function listenActivityChanges(
    callbackManager: RecognizerCallbackManager
): Promise<ActivityChange> {
    return new Promise((resolve) =>
        callbackManager.add((activityChange) => resolve(activityChange))
    );
}

function failOnActivityChange(
    callbackManager: RecognizerCallbackManager,
    timeout: number,
    onAdd: (number) => void
): Promise<void> {
    return new Promise((resolve, reject) => {
        const listenerId = callbackManager.add((_) =>
            reject("Callback should not be called after removal")
        );
        setTimeout(() => resolve(), timeout);
        onAdd(listenerId);
    });
}
