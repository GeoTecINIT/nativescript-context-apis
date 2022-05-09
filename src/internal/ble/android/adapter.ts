import { BleScanAdapter, BleScanMode } from "../common";
import { BleScanResult } from "../scan-result";
import { enableLocationRequest, isEnabled } from "@nativescript/geolocation";
import { hasPermission, requestPermission } from "nativescript-permissions";
import { Application, Utils } from "@nativescript/core";
import { requestEnableBluetooth } from "./helpers";
import { from, map, Observable, switchMap } from "rxjs";
import { scanResultsToBleScanResults } from "./parsers";

export class AndroidBleScanAdapter implements BleScanAdapter {
  constructor(
    private bluetoothAdapter: android.bluetooth.BluetoothAdapter = (
      Utils.android
        .getApplicationContext()
        .getSystemService(
          android.content.Context.BLUETOOTH_SERVICE
        ) as android.bluetooth.BluetoothManager
    ).getAdapter(),
    private sdkVersion = android.os.Build.VERSION.SDK_INT,
    private activityGetter = () => Application.android.foregroundActivity
  ) {}

  async isReady(): Promise<boolean> {
    const locFeaturesReady = await isEnabled();
    if (!locFeaturesReady) {
      return false;
    }
    if (
      this.sdkVersion >= 31 &&
      !hasPermission(android.Manifest.permission.BLUETOOTH_SCAN)
    ) {
      return false;
    }
    return this.bluetoothAdapter.isEnabled();
  }

  async prepare(): Promise<void> {
    const locFeaturesReady = await isEnabled();
    if (!locFeaturesReady) {
      await enableLocationRequest(false, true);
    }
    if (
      this.sdkVersion >= 31 &&
      !hasPermission(android.Manifest.permission.BLUETOOTH_SCAN)
    ) {
      await requestPermission(android.Manifest.permission.BLUETOOTH_SCAN);
    }
    if (!this.bluetoothAdapter.isEnabled()) {
      await requestEnableBluetooth(
        this.activityGetter(),
        this.bluetoothAdapter
      );
    }
  }

  streamBleScanResults(
    reportDelay: number,
    scanMode: BleScanMode
  ): Observable<BleScanResult> {
    return from(this.isReady()).pipe(
      map((ready) => {
        if (!ready)
          throw new Error(
            "Could not perform BLE scan. Insufficient permissions, disabled location services or bluetooth adapter. Please, call prepare() first before requesting a BLE scan"
          );
      }),
      switchMap(() => this.createBleScanStream(reportDelay, scanMode))
    );
  }

  private createBleScanStream(
    reportDelay: number,
    scanMode: BleScanMode
  ): Observable<BleScanResult> {
    return new Observable<BleScanResult>((subscriber) => {
      const scanner =
        no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerCompat.getScanner();

      const settingsBuilder =
        new no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder()
          .setScanMode(nativeScanModeFrom(scanMode))
          .setUseHardwareBatchingIfSupported(false);

      if (reportDelay > 0) {
        settingsBuilder.setReportDelay(reportDelay);
      }

      const settings = settingsBuilder.build();

      const scanCallback = new BleScanCallback(
        (results) => {
          subscriber.next(scanResultsToBleScanResults(results));
        },
        (error) => subscriber.error(new Error(`BleScanAdapter ERROR: ${error}`))
      );

      scanner.startScan(null, settings, scanCallback);

      return () => {
        scanner.stopScan(scanCallback);
      };
    });
  }
}

function nativeScanModeFrom(mode: BleScanMode): number {
  switch (mode) {
    case BleScanMode.LOW_POWER:
      return no.nordicsemi.android.support.v18.scanner.ScanSettings
        .SCAN_MODE_LOW_POWER;
    case BleScanMode.LOW_LATENCY:
      return no.nordicsemi.android.support.v18.scanner.ScanSettings
        .SCAN_MODE_LOW_LATENCY;
    case BleScanMode.BALANCED:
      return no.nordicsemi.android.support.v18.scanner.ScanSettings
        .SCAN_MODE_BALANCED;
  }
}

@NativeClass
class BleScanCallback extends no.nordicsemi.android.support.v18.scanner
  .ScanCallback {
  constructor(
    private onResults: (
      results: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
    ) => void,
    private onError: (error: Error) => void
  ) {
    super();
    // @ts-ignore
    return global.__native(this);
  }

  onScanResult(
    _callbackType: number,
    result: no.nordicsemi.android.support.v18.scanner.ScanResult
  ) {
    this.onResults(java.util.Arrays.asList([result]));
  }

  onBatchScanResults(
    results: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
  ) {
    this.onResults(results);
  }

  onScanFailed(errorCode: number) {
    this.onError(new Error(`BLE scan failed with error code: ${errorCode}`));
  }
}
