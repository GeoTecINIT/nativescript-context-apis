import { ActivityRecognizer } from "./recognizers";
import { getLowResRecognizer } from "./recognizers/low-res";
import { getMediumResRecognizer } from "./recognizers/medium-res";
import { getHighResRecognizer } from "./recognizers/high-res";

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
    case Resolution.HIGH:
      return getHighResRecognizer();
  }
}

export {
  ActivityRecognizer,
  StartOptions,
  RecognitionCallback,
} from "./recognizers";
export { HumanActivity } from "./human-activity";
export { ActivityChange, Transition } from "./activity-change";
