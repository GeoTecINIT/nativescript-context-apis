import { AndroidAbstractRecognizerManager } from "../../abstract-manager.android";
import { StartOptions } from "../../index";

import ActivityUpdateReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiver;
import ActivityRecognition = com.google.android.gms.location.ActivityRecognition;

export class AndroidMediumResRecognizerManager extends AndroidAbstractRecognizerManager {
  constructor() {
    super(ActivityUpdateReceiver.class);
  }

  protected handleStart(
    context: android.content.Context,
    intent: android.app.PendingIntent,
    options: StartOptions
  ): com.google.android.gms.tasks.Task<any> {
    return ActivityRecognition.getClient(context).requestActivityUpdates(
      options.detectionInterval ? options.detectionInterval : 0,
      intent
    );
  }

  protected handleStop(
    context: android.content.Context,
    intent: android.app.PendingIntent
  ): com.google.android.gms.tasks.Task<any> {
    return ActivityRecognition.getClient(context).removeActivityUpdates(intent);
  }
}
