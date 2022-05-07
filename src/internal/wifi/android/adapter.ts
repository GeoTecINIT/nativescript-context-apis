import { WifiScanAdapter } from "../common";
import { WifiFingerprint } from "../fingerprint";
import { enableLocationRequest, isEnabled } from "@nativescript/geolocation";
import { Utils } from "@nativescript/core";
import { getSeenWifiApsFrom } from "./parsers";

export class AndroidWifiScanAdapter implements WifiScanAdapter {
  constructor(
    private wifiManager: android.net.wifi.WifiManager = Utils.android
      .getApplicationContext()
      .getSystemService(android.content.Context.WIFI_SERVICE)
  ) {}

  isReady(): Promise<boolean> {
    return isEnabled();
  }

  prepare(): Promise<void> {
    return enableLocationRequest(false, true);
  }

  async acquireWifiFingerprint(ensureIsNew = true): Promise<WifiFingerprint> {
    const ready = await this.isReady();
    if (!ready) {
      throw new Error(
        "Could not acquire wifi fingerprint. Insufficient permissions or disabled location services. Please, call prepare() first before requesting a fingerprint."
      );
    }

    try {
      await this.setupScanReceiver();
      return this.getLastFingerprint(true);
    } catch (err) {
      if (ensureIsNew) throw err;
      return this.getLastFingerprint(false);
    }
  }

  private setupScanReceiver(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scanReceiver = new es.uji.geotec.contextapis.wifi.WifiScanReceiver(
        new es.uji.geotec.contextapis.wifi.WifiScanReceiverDelegate({
          onReceive(
            context: android.content.Context,
            intent: android.content.Intent
          ) {
            Utils.android
              .getApplicationContext()
              .unregisterReceiver(scanReceiver);
            const success = intent.getBooleanExtra(
              android.net.wifi.WifiManager.EXTRA_RESULTS_UPDATED,
              false
            );
            if (success) {
              resolve();
            } else {
              reject(new Error("Results not updated"));
            }
          },
        })
      );
      const intentFilter = new android.content.IntentFilter();
      intentFilter.addAction(
        android.net.wifi.WifiManager.SCAN_RESULTS_AVAILABLE_ACTION
      );
      Utils.android
        .getApplicationContext()
        .registerReceiver(scanReceiver, intentFilter);
      const success = this.wifiManager.startScan();
      if (!success) {
        reject(
          new Error(
            "Could not start scan! Reason: too many requests, device idle or unlikely hardware failure"
          )
        );
      }
    });
  }

  private getLastFingerprint(updateReceived: boolean): WifiFingerprint {
    const results = this.wifiManager.getScanResults();
    return {
      seen: getSeenWifiApsFrom(results),
      isNew: updateReceived,
      timestamp: new Date(),
    };
  }
}
