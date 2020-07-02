import BootReceiverDelegate = es.uji.geotec.contextapis.BootReceiverDelegate;
import { getActivityRecognizer, Resolution } from "../index";

const recognizerTypes = [Resolution.LOW, Resolution.MEDIUM];

export class BootReceiver implements BootReceiverDelegate {
  onReceive(
    context: android.content.Context,
    intent: android.content.Intent
  ): void {
    Promise.all(
      recognizerTypes.map((recognizerType) =>
        getActivityRecognizer(recognizerType).setup()
      )
    ).catch((err) => {
      console.error(
        `An error occurred while setting up activity recognizers: ${err}`
      );
    });
  }
}

let _bootReceiver: BootReceiver;
export function getBootReceiver(): BootReceiver {
  if (!_bootReceiver) {
    _bootReceiver = new BootReceiver();
  }
  return _bootReceiver;
}
