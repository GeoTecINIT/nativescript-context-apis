import { WifiScanProvider } from "./provider";
import { isAndroid } from "@nativescript/core";
import { AndroidWifiScanAdapter } from "./android/adapter";

export * from "./common";
export * from "./fingerprint";
export * from "./provider";

export function getWifiScanProvider(): WifiScanProvider {
  if (isAndroid) {
    return new WifiScanProvider(new AndroidWifiScanAdapter());
  } else {
    throw new Error("WifiScanning is not available in iOS!");
  }
}
