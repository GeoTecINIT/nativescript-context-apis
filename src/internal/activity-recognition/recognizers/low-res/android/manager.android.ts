import { AndroidAbstractRecognizerManager } from "../../abstract-manager.android";
import { StartOptions } from "../../index";

import ActivityTransitionReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver;
import Context = android.content.Context;
import PendingIntent = android.app.PendingIntent;

import Task = com.google.android.gms.tasks.Task;
import ActivityRecognition = com.google.android.gms.location.ActivityRecognition;
import ActivityTransitionRequest = com.google.android.gms.location.ActivityTransitionRequest;
import ArrayList = java.util.ArrayList;
import ActivityTransition = com.google.android.gms.location.ActivityTransition;
import DetectedActivity = com.google.android.gms.location.DetectedActivity;

export class AndroidLowResRecognizerManager extends AndroidAbstractRecognizerManager {
  constructor() {
    super(ActivityTransitionReceiver.class);
  }

  protected handleStart(
    context: Context,
    pendingIntent: PendingIntent,
    options: StartOptions
  ): Task<any> {
    const request = this.buildTransitionRequest();
    return ActivityRecognition.getClient(
      context
    ).requestActivityTransitionUpdates(request, pendingIntent);
  }

  protected handleStop(
    context: Context,
    pendingIntent: PendingIntent
  ): Task<any> {
    return ActivityRecognition.getClient(
      context
    ).removeActivityTransitionUpdates(pendingIntent);
  }

  private buildTransitionRequest(): ActivityTransitionRequest {
    const transitions = new ArrayList<ActivityTransition>();
    transitions.addAll(this.getAllTransitionsFor(DetectedActivity.STILL));
    transitions.addAll(this.getAllTransitionsFor(DetectedActivity.WALKING));
    transitions.addAll(this.getAllTransitionsFor(DetectedActivity.RUNNING));
    transitions.addAll(this.getAllTransitionsFor(DetectedActivity.ON_BICYCLE));
    transitions.addAll(this.getAllTransitionsFor(DetectedActivity.IN_VEHICLE));
    return new ActivityTransitionRequest(transitions);
  }

  private getAllTransitionsFor(activityType: number) {
    const transitions = new ArrayList<ActivityTransition>(2);
    const options = [
      ActivityTransition.ACTIVITY_TRANSITION_ENTER,
      ActivityTransition.ACTIVITY_TRANSITION_EXIT,
    ];
    options.forEach((option) => {
      transitions.add(
        new ActivityTransition.Builder()
          .setActivityType(activityType)
          .setActivityTransition(option)
          .build()
      );
    });
    return transitions;
  }
}
