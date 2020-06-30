import { ActivityRecognizer } from "./recognizers";
import { getLowResRecognizer } from "./recognizers/low-res";
import { getMediumResRecognizer } from "./recognizers/medium-res";

export enum Resolution {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high", // Reserved for a custom activity recognizer
}

export function getActivityRecognizer(
  resolution: Resolution
): ActivityRecognizer {
  switch (resolution) {
    case Resolution.LOW:
      return getLowResRecognizer();
    case Resolution.MEDIUM:
      return getMediumResRecognizer();
    default:
      throw new Error(
        `"${resolution}" resolution recognizer has not been implemented yet`
      );
  }
}

export {
  ActivityRecognizer,
  StartOptions,
  RecognitionCallback,
} from "./recognizers";
export { HumanActivity } from "./human-activity";
export { ActivityChange, Transition } from "./activity-change";
