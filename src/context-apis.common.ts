import { Observable } from "@nativescript/core";
import {
  ActivityRecognizer,
  getActivityRecognizer,
  Resolution,
} from "./activity-recognition";

import { GeolocationProvider, getGeolocationProvider } from "./geolocation";
import { getWifiScanProvider, WifiScanProvider } from "./wifi";

const recognizerTypes = [Resolution.LOW, Resolution.MEDIUM];

export class Common extends Observable {
  async init(): Promise<void> {
    await Promise.all(
      recognizerTypes.map((recognizerType) =>
        getActivityRecognizer(recognizerType).setup()
      )
    );
  }

  getActivityRecognizer(resolution: Resolution): ActivityRecognizer {
    return getActivityRecognizer(resolution);
  }

  get geolocationProvider(): GeolocationProvider {
    return getGeolocationProvider();
  }

  get wifiScanProvider(): WifiScanProvider {
    return getWifiScanProvider();
  }
}
