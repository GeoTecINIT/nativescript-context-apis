import ActivityTransitionReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver;
import ActivityTransitionResult = com.google.android.gms.location.ActivityTransitionResult;

import ActivityTransitionEvent = com.google.android.gms.location.ActivityTransitionEvent;

import { getAndroidLowResRecognizer } from "./recognizer.android";
import { ActivityChange } from "../../../activity-change";

import {
  activityTypeToHumanActivity,
  transitionTypeToActivityTransition,
  elapsedRealtimeToDate,
} from "../../utils.android";

export class AndroidActivityTransitionReceiver
  implements ActivityTransitionReceiver {
  onReceive(
    context: android.content.Context,
    intent: android.content.Intent
  ): void {
    if (!ActivityTransitionResult.hasResult(intent)) {
      return;
    }
    const result = ActivityTransitionResult.extractResult(intent);
    const recognizer = getAndroidLowResRecognizer();

    const events = result.getTransitionEvents().toArray();
    for (let i = 0; i < events.length; i++) {
      const event = events[i] as ActivityTransitionEvent;
      const activityChange: ActivityChange = {
        type: activityTypeToHumanActivity(event.getActivityType()),
        transition: transitionTypeToActivityTransition(
          event.getTransitionType()
        ),
        timestamp: elapsedRealtimeToDate(event.getElapsedRealTimeNanos()),
      };

      recognizer.onNewActivityChange(activityChange);
    }
  }
}

let _transitionReceiver: AndroidActivityTransitionReceiver;
export function getAndroidActivityTransitionReceiver(): AndroidActivityTransitionReceiver {
  if (!_transitionReceiver) {
    _transitionReceiver = new AndroidActivityTransitionReceiver();
  }
  return _transitionReceiver;
}
