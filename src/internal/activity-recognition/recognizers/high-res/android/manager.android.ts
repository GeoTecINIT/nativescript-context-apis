import { connectionType, getConnectionType } from "tns-core-modules/connectivity";
import { RecognizerManager } from "../../recognizer-manager";
import { StartOptions } from "../..";
import { isCustomModelReady, getCustomModel } from "./tf-model.android";
import { ActivityRecognizerManager, getActivityRecognizerManager } from "./activity-recognizer/activity-recognizer-manager.android";
import { recognizersStateStoreDb } from "../../state/store";
import { Resolution } from "../../..";

export class AndroidHighResRecognizerManager implements RecognizerManager {

    private activityRecognizerManager: ActivityRecognizerManager;
    constructor() {
        this.activityRecognizerManager = getActivityRecognizerManager();
    }

    isReady(): boolean {
        return isCustomModelReady();
    }

    // TODO: Maybe ask for battery optimizations disabling (and check in isReady) 
    async prepare(): Promise<void> {
        if (!isCustomModelReady()) {
            if (!this.isNetworkAvailable()) {
                throw new Error("Internet connection required to download model!");
            }
            await getCustomModel();
        }
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

    private isNetworkAvailable(): boolean {
        const type = getConnectionType();
        const wifiAvailable = type === connectionType.wifi;
        const mobileAvailable = type === connectionType.mobile;
        return wifiAvailable || mobileAvailable;
    }
}