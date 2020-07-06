import { Common } from "./context-apis.common";

import ActivityTransitionReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver;
import ActivityTransitionReceiverDelegate = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate;
import { getAndroidActivityTransitionReceiver } from "./internal/activity-recognition/recognizers/low-res/android/receiver.android";

import ActivityUpdateReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiver;
import ActivityUpdateReceiverDelegate = es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate;
import { getAndroidActivityUpdateReceiver } from "./internal/activity-recognition/recognizers/medium-res/android/receiver.android";

import BootReceiver = es.uji.geotec.contextapis.BootReceiver;
import BootReceiverDelegate = es.uji.geotec.contextapis.BootReceiverDelegate;
import { getBootReceiver } from "./internal/activity-recognition/recognizers/boot-receiver.android";

export class ContextApis extends Common {
  async init(): Promise<void> {
    this.wireUpNativeComponents();
    await super.init();
  }

  private wireUpNativeComponents() {
    this.wireUpBootReceiver();
    this.wireUpActivityTransitionReceiver();
    this.wireUpActivityUpdateReceiver();
  }

  private wireUpBootReceiver() {
    BootReceiver.setBootReceiverDelegate(
      new BootReceiverDelegate({
        onReceive: (context, intent) =>
          getBootReceiver().onReceive(context, intent),
      })
    );
  }

  private wireUpActivityTransitionReceiver() {
    ActivityTransitionReceiver.setActivityTransitionReceiverDelegate(
      new ActivityTransitionReceiverDelegate({
        onReceive: (context, intent) =>
          getAndroidActivityTransitionReceiver().onReceive(context, intent),
      })
    );
  }

  private wireUpActivityUpdateReceiver() {
    ActivityUpdateReceiver.setActivityUpdateReceiverDelegate(
      new ActivityUpdateReceiverDelegate({
        onReceive: (context, intent) =>
          getAndroidActivityUpdateReceiver().onReceive(context, intent),
      })
    );
  }
}
export const contextApis = new ContextApis();
