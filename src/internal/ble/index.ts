import { BleScanProvider } from "./provider";
import { isAndroid } from "@nativescript/core";
import { AndroidBleScanAdapter } from "./android/adapter";

export * from "./common";
export * from "./scan-result";
export * from "./provider";

export function getBleScanProvider(): BleScanProvider {
  if (isAndroid) {
    return new BleScanProvider(new AndroidBleScanAdapter());
  } else {
    throw new Error("BleScanning is not implemented in iOS!");
  }
}
