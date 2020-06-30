import ActivityUpdateReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiver;
import ActivityRecognitionResult = com.google.android.gms.location.ActivityRecognitionResult;

import {
  ActivityUpdate,
  getAndroidMediumResRecognizer,
} from "./recognizer.android";
import {
  activityTypeToHumanActivity,
  elapsedRealtimeToDate,
} from "../../utils.android";

export class AndroidActivityUpdateReceiver implements ActivityUpdateReceiver {
  onReceive(
    context: android.content.Context,
    intent: android.content.Intent
  ): void {
    if (!ActivityRecognitionResult.hasResult(intent)) {
      return;
    }
    const result = ActivityRecognitionResult.extractResult(intent);
    const recognizer = getAndroidMediumResRecognizer();

    const mostProbableActivity = result.getMostProbableActivity();
    const activityUpdate: ActivityUpdate = {
      type: activityTypeToHumanActivity(mostProbableActivity.getType()),
      confidence: mostProbableActivity.getConfidence() / 100.0,
      timestamp: elapsedRealtimeToDate(result.getElapsedRealtimeMillis() * 1e6),
    };

    recognizer.onRecognitionResult(activityUpdate).catch((err) => {
      console.error(`MediumResRecognizer. Recognition error: ${err}`);
    });
  }
}

let _updateReceiver: AndroidActivityUpdateReceiver;
export function getAndroidActivityUpdateReceiver(): AndroidActivityUpdateReceiver {
  if (!_updateReceiver) {
    _updateReceiver = new AndroidActivityUpdateReceiver();
  }
  return _updateReceiver;
}
