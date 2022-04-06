import { RecognizerManager } from "./recognizer-manager";
import { hasPermission, requestPermission } from "nativescript-permissions";
import { android as androidApp } from "@nativescript/core/application";
import { Utils } from "@nativescript/core";

import { StartOptions } from "./index";

import Intent = android.content.Intent;
import PendingIntent = android.app.PendingIntent;
import Context = android.content.Context;
import GoogleApiAvailability = com.google.android.gms.common.GoogleApiAvailability;
import Task = com.google.android.gms.tasks.Task;
import OnSuccessListener = com.google.android.gms.tasks.OnSuccessListener;
import OnFailureListener = com.google.android.gms.tasks.OnFailureListener;

export abstract class AndroidAbstractRecognizerManager
  implements RecognizerManager {
  private pendingIntent: PendingIntent;

  protected constructor(private receiver: java.lang.Class<any>) {}

  isReady(): boolean {
    if (!isGooglePlayServicesAvailable()) {
      return false;
    }
    if (android.os.Build.VERSION.SDK_INT < 29) {
      return true;
    }
    return hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
  }

  async prepare(): Promise<void> {
    if (!isGooglePlayServicesAvailable()) {
      await promisify(
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

  async startListening(options: StartOptions = {}): Promise<void> {
    if (this.isUp()) {
      await this.stopListening();
    }

    if (!this.isReady()) {
      throw new Error(
        "Manager is not ready!. Call isReady() before start listening."
      );
    }

    const task = this.handleStart(
      Utils.android.getApplicationContext(),
      this.getPendingIntent(),
      options
    );
    await promisify(task);
  }

  async stopListening(): Promise<void> {
    if (!this.isUp()) {
      return;
    }

    const pendingIntent = this.getPendingIntent();
    const task = this.handleStop(
      Utils.android.getApplicationContext(),
      pendingIntent
    );

    pendingIntent.cancel();
    this.pendingIntent = null;

    await promisify(task);
  }

  protected abstract handleStart(
    context: Context,
    intent: PendingIntent,
    options: StartOptions
  ): Task<any>;

  protected abstract handleStop(
    context: Context,
    intent: PendingIntent
  ): Task<any>;

  private isUp(): boolean {
    const pendingIntent = PendingIntent.getBroadcast(
      Utils.android.getApplicationContext(),
      0,
      this.getReceiverIntent(),
      android.os.Build.VERSION.SDK_INT >= 31
        ? PendingIntent.FLAG_NO_CREATE | PendingIntent.FLAG_MUTABLE
        : PendingIntent.FLAG_NO_CREATE
    );
    return pendingIntent !== null;
  }

  private getPendingIntent(): PendingIntent {
    if (!this.pendingIntent) {
      const receiverIntent = this.getReceiverIntent();
      this.pendingIntent = PendingIntent.getBroadcast(
        Utils.android.getApplicationContext(),
        0,
        receiverIntent,
        android.os.Build.VERSION.SDK_INT >= 31 ? PendingIntent.FLAG_MUTABLE : 0
      );
    }
    return this.pendingIntent;
  }

  private getReceiverIntent(): Intent {
    return new Intent(Utils.android.getApplicationContext(), this.receiver);
  }
}

const CONNECTION_RESULT_SUCCESS = 0;

function isGooglePlayServicesAvailable() {
  return (
    GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(
      Utils.android.getApplicationContext()
    ) === CONNECTION_RESULT_SUCCESS
  );
}

function promisify(task: Task<any>): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    task.addOnSuccessListener(getOnSuccessListener(resolve));
    task.addOnFailureListener(getOnFailureListener(reject));
  });
}

function getOnSuccessListener(onSuccess: () => void) {
  return new OnSuccessListener({
    onSuccess,
  });
}

function getOnFailureListener(onFailure: (e: Error) => void) {
  return new OnFailureListener({
    onFailure(ex: java.lang.Exception) {
      onFailure(new Error(ex.getMessage()));
    },
  });
}
