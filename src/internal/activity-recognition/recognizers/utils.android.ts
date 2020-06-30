import { HumanActivity } from "../human-activity";
import { Transition } from "../activity-change";

import DetectedActivity = com.google.android.gms.location.DetectedActivity;
import ActivityTransition = com.google.android.gms.location.ActivityTransition;
import SystemClock = android.os.SystemClock;

export function activityTypeToHumanActivity(
  activityType: number
): HumanActivity {
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

export function transitionTypeToActivityTransition(
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

export function elapsedRealtimeToDate(elapsed: number) {
  const nanosSinceBoot = SystemClock.elapsedRealtimeNanos();
  const now = Date.now();
  const diff = nanosSinceBoot - elapsed;
  const elapsedMillis = diff / 1e6;
  return new Date(now - elapsedMillis);
}
