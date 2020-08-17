import { android as androidApp } from "tns-core-modules/application/application";
import { RecognizerManager } from "../../recognizer-manager";
import { StartOptions } from "../..";
import { recognizersStateStoreDb } from "../../state/store";
import { Resolution } from "../../..";
import { ActivityRecognizerManager, getActivityRecognizerManager } from "../recognition-engine/activity-recognizer-manager";

export class AndroidHighResRecognizerManager implements RecognizerManager {

    private appPackage: string;
    constructor(private activityRecognizerManager: ActivityRecognizerManager = getActivityRecognizerManager(),
        private powerManager: android.os.PowerManager = androidApp.context.getSystemService(
            android.content.Context.POWER_SERVICE
        ),
    ) {
        this.appPackage = androidApp.context.getPackageName();
    }

    isReady(): boolean {
        if (android.os.Build.VERSION.SDK_INT < 23) {
            return true;
        }

        return this.powerManager.isIgnoringBatteryOptimizations(this.appPackage);
    }

    async prepare(): Promise<void> {
        if (!androidApp.foregroundActivity) {
            return;
        }

        const intent = new android.content.Intent(
            android.provider.Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS,
            android.net.Uri.parse(`package:${this.appPackage}`)
        );

        androidApp.foregroundActivity.startActivity(intent);
    }

    async startListening(options?: StartOptions): Promise<void> {
        const isActive = await recognizersStateStoreDb.isActive(Resolution.HIGH);
        if (isActive) {
            this.stopListening();
        }

        if (!this.isReady()) {
            throw new Error(
                "Manager is not ready!. Call isReady() before start listening."
            );
        }

        this.activityRecognizerManager.requestActivityUpdates();
    }

    async stopListening(): Promise<void> {
        const isActive = await recognizersStateStoreDb.isActive(Resolution.HIGH);
        if (!isActive) {
            return;
        }

        this.activityRecognizerManager.disableActivityUpdates();
    }
}