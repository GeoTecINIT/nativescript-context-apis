import { android as androidApp } from "tns-core-modules/application/application";

import { RecognizerManager } from "../../recognizer-manager";
import { hasPermission, requestPermission } from "nativescript-permissions";

import ActivityTransitionRequest = com.google.android.gms.location.ActivityTransitionRequest;
import ArrayList = java.util.ArrayList;
import ActivityTransition = com.google.android.gms.location.ActivityTransition;
import PendingIntent = android.app.PendingIntent;
import Intent = android.content.Intent;
import DetectedActivity = com.google.android.gms.location.DetectedActivity;
import OnSuccessListener = com.google.android.gms.tasks.OnSuccessListener;
import OnFailureListener = com.google.android.gms.tasks.OnFailureListener;
import ActivityRecognition = com.google.android.gms.location.ActivityRecognition;
import Task = com.google.android.gms.tasks.Task;
import GoogleApiAvailability = com.google.android.gms.common.GoogleApiAvailability;

const CONNECTION_RESULT_SUCCESS = 0;

export class AndroidLowResRecognizerManager implements RecognizerManager {
  private pendingIntent: PendingIntent;

  isReady(): boolean {
    if (!this.isGooglePlayServicesAvailable()) {
      return false;
    }
    if (android.os.Build.VERSION.SDK_INT < 29) {
      return true;
    }
    return hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
  }

  async prepare(): Promise<void> {
    if (!this.isGooglePlayServicesAvailable()) {
      await this.promisify(
        GoogleApiAvailability.getInstance().makeGooglePlayServicesAvailable(
          androidApp.foregroundActivity
        )
      );
    }
    if (android.os.Build.VERSION.SDK_INT < 29) {
      return;
    }
    if (!hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION)) {
      await requestPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
    }
  }

  async startListening(): Promise<void> {
    if (this.isUp()) {
      return;
    }

    if (!this.isReady()) {
      throw new Error(
        "Manager is not ready!. Call isReady() before start listening."
      );
    }

    const request = this.buildTransitionRequest();
    const task = ActivityRecognition.getClient(
      androidApp.context
    ).requestActivityTransitionUpdates(request, this.getPendingIntent());

    await this.promisify(task);
  }

  async stopListening(): Promise<void> {
    if (!this.isUp()) {
      return;
    }

    const pendingIntent = this.getPendingIntent();
    const task = ActivityRecognition.getClient(
      androidApp.context
    ).removeActivityTransitionUpdates(pendingIntent);
    pendingIntent.cancel();
    this.pendingIntent = null;

    await this.promisify(task);
  }

  private isUp(): boolean {
    const receiverIntent = this.createReceiverIntent();
    const pendingIntent = PendingIntent.getBroadcast(
      androidApp.context,
      0,
      receiverIntent,
      PendingIntent.FLAG_NO_CREATE
    );
    return pendingIntent !== null;
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

  private getPendingIntent(): PendingIntent {
    if (!this.pendingIntent) {
      const receiverIntent = this.createReceiverIntent();
      this.pendingIntent = PendingIntent.getBroadcast(
        androidApp.context,
        0,
        receiverIntent,
        0
      );
    }
    return this.pendingIntent;
  }

  private createReceiverIntent(): Intent {
    return new Intent(
      androidApp.context,
      es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver.class
    );
  }

  private isGooglePlayServicesAvailable(): boolean {
    return (
      GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(
        androidApp.context
      ) === CONNECTION_RESULT_SUCCESS
    );
  }

  private promisify(task: Task<any>): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      task.addOnSuccessListener(this.getOnSuccessListener(resolve));
      task.addOnFailureListener(this.getOnFailureListener(reject));
    });
  }

  private getOnSuccessListener(onSuccess: () => void) {
    return new OnSuccessListener({
      onSuccess,
    });
  }

  private getOnFailureListener(onFailure: (e: Error) => void) {
    return new OnFailureListener({
      onFailure(ex: java.lang.Exception) {
        onFailure(new Error(ex.getMessage()));
      },
    });
  }
}
