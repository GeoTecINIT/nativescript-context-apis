import { connectionType, getConnectionType } from "tns-core-modules/connectivity";
import { RecognizerManager } from "../../recognizer-manager";
import { StartOptions } from "../..";
import { hasPermission } from "nativescript-permissions";
import { isCustomModelReady, getCustomModel } from "./tf-model.android";

export class AndroidHighResRecognizerManager implements RecognizerManager {

    isReady(): boolean {
        return isCustomModelReady();
    }

    async prepare(): Promise<void> {
        if (!isCustomModelReady()) {
            if (!this.isNetworkAvailable()) {
                throw new Error("Internet connection required to download model!");
            }
            await getCustomModel();
        }
    }

    startListening(options?: StartOptions): Promise<void> {
        throw new Error("Method not implemented.");
    }

    stopListening(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private isNetworkAvailable(): boolean {
        const type = getConnectionType();
        const wifiAvailable = type === connectionType.wifi;
        const mobileAvailable = type === connectionType.mobile;
        return wifiAvailable || mobileAvailable;
    }
}