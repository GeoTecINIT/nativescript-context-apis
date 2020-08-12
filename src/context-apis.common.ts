import { Observable } from "tns-core-modules/data/observable";
import {
  ActivityRecognizer,
  getActivityRecognizer,
  Resolution,
} from "./activity-recognition";

import { GeolocationProvider, getGeolocationProvider } from "./geolocation";

const recognizerTypes = [Resolution.LOW, Resolution.MEDIUM, Resolution.HIGH];

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
}
