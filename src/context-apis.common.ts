import { Observable } from "tns-core-modules/data/observable";
import {
  ActivityRecognizer,
  getActivityRecognizer,
  Resolution,
} from "./activity-recognition";

export class Common extends Observable {
  async init(): Promise<void> {
    await getActivityRecognizer(Resolution.LOW).setup();
    await getActivityRecognizer(Resolution.MEDIUM).setup();
    // await getActivityRecognizer(Resolution.HIGH).setup();
  }

  getActivityRecognizer(resolution: Resolution): ActivityRecognizer {
    return getActivityRecognizer(resolution);
  }
}
