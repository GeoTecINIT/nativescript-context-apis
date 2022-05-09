import { AndroidApplication, Application } from "@nativescript/core";

export async function requestEnableBluetooth(
  activity: android.app.Activity,
  bluetoothAdapter: android.bluetooth.BluetoothAdapter
): Promise<void> {
  if (!activity) {
    throw new Error("Cannot request BLE scan permission in background!");
  }
  const activityResume = waitForActivityResume();
  const intent = createRequestEnableBluetoothIntent();
  activity.startActivity(intent);

  await activityResume;

  if (!bluetoothAdapter.isEnabled()) {
    throw new Error("Enabling Bluetooth is required to run scans!");
  }
}

function waitForActivityResume(): Promise<void> {
  return new Promise<void>((resolve) => {
    const resumeHandler = () => {
      Application.android.off(
        AndroidApplication.activityResumedEvent,
        resumeHandler
      );
      resolve();
    };

    Application.android.on(
      AndroidApplication.activityResumedEvent,
      resumeHandler
    );
  });
}

function createRequestEnableBluetoothIntent() {
  return new android.content.Intent(
    android.bluetooth.BluetoothAdapter.ACTION_REQUEST_ENABLE
  );
}
