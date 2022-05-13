import { BleScanResult } from "./scan-result";
import { Observable } from "rxjs";

export enum BleScanMode {
  LOW_POWER,
  LOW_LATENCY,
  BALANCED,
}

export interface BleScanAdapter {
  isReady(): Promise<boolean>;
  prepare(): Promise<void>;
  streamBleScanResults(
    reportDelay: number,
    scanMode: BleScanMode
  ): Observable<BleScanResult>;
}
