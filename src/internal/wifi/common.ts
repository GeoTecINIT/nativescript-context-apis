import { WifiFingerprint } from "./fingerprint";

export interface WifiScanAdapter {
  isReady(): Promise<boolean>;
  prepare(): Promise<void>;
  acquireWifiFingerprint(ensureIsNew?: boolean): Promise<WifiFingerprint>;
}
