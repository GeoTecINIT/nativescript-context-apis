import ActivityTransitionReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver;
import ActivityTransitionResult = com.google.android.gms.location.ActivityTransitionResult;
import DetectedActivity = com.google.android.gms.location.DetectedActivity;
import ActivityTransition = com.google.android.gms.location.ActivityTransition;
import { getAndroidLowResRecognizer } from "./recognizer.android";
import { HumanActivity } from "../../../human-activity";
import { ActivityChange, Transition } from "../../../activity-change";
import ActivityTransitionEvent = com.google.android.gms.location.ActivityTransitionEvent;
import SystemClock = android.os.SystemClock;

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
        type: this.activityTypeToHumanActivity(event.getActivityType()),
        transition: this.transitionTypeToActivityTransition(
          event.getTransitionType()
        ),
        timestamp: this.elapsedRealtimeToDate(event.getElapsedRealTimeNanos()),
      };

      recognizer.onNewActivityChange(activityChange);
    }
  }

  private activityTypeToHumanActivity(activityType: number): HumanActivity {
    switch (activityType) {
      case DetectedActivity.STILL:
        return HumanActivity.STILL;
      case DetectedActivity.WALKING:
        return HumanActivity.WALKING;
      case DetectedActivity.RUNNING:
        return HumanActivity.RUNNING;
      case DetectedActivity.ON_BICYCLE:
        return HumanActivity.ON_BICYCLE;
      case DetectedActivity.IN_VEHICLE:
        return HumanActivity.IN_VEHICLE;
      default:
        throw new Error(
          `Unrecognized activity: ${activityType} (search Android docs for DetectedActivity int value meaning).`
        );
    }
  }

  private transitionTypeToActivityTransition(
    transitionType: number
  ): Transition {
    switch (transitionType) {
      case ActivityTransition.ACTIVITY_TRANSITION_ENTER:
        return Transition.STARTED;
      case ActivityTransition.ACTIVITY_TRANSITION_EXIT:
        return Transition.ENDED;
      default:
        throw new Error(
          `Unrecognized transition: ${transitionType} (search Android docs for ActivityTransition int value meaning).`
        );
    }
  }

  private elapsedRealtimeToDate(elapsed: number) {
    const nanosSinceBoot = SystemClock.elapsedRealtimeNanos();
    const now = Date.now();
    const diff = nanosSinceBoot - elapsed;
    const elapsedMillis = diff / 1e6;
    return new Date(now - elapsedMillis);
  }
}

let _transitionReceiver: AndroidActivityTransitionReceiver;
export function getAndroidActivityTransitionReceiver(): AndroidActivityTransitionReceiver {
  if (!_transitionReceiver) {
    _transitionReceiver = new AndroidActivityTransitionReceiver();
  }
  return _transitionReceiver;
}
