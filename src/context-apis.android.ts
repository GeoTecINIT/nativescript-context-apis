import { Common } from "./context-apis.common";
import ActivityTransitionReceiver = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver;
import ActivityTransitionReceiverDelegate = es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate;
import { getAndroidActivityTransitionReceiver } from "./internal/activity-recognition/recognizers/low-res/android/receiver.android";

export class ContextApis extends Common {
  async init(): Promise<void> {
    this.wireUpNativeComponents();
    await super.init();
  }

  private wireUpNativeComponents() {
    this.wireUpActivityTransitionReceiver();
  }

  private wireUpActivityTransitionReceiver() {
    ActivityTransitionReceiver.setActivityTransitionReceiverDelegate(
      new ActivityTransitionReceiverDelegate({
        onReceive: (context, intent) =>
          getAndroidActivityTransitionReceiver().onReceive(context, intent),
      })
    );
  }
}
export const contextApis = new ContextApis();
