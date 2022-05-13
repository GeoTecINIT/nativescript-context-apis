import { BleScanAdapter, BleScanMode } from "./common";
import {
  filter,
  firstValueFrom,
  map,
  Observable,
  throwError,
  timeout,
} from "rxjs";
import { BleScanResult } from "./scan-result";

export class BleScanProvider {
  constructor(private adapter: BleScanAdapter) {}

  isReady(): Promise<boolean> {
    return this.adapter.isReady();
  }

  prepare(): Promise<void> {
    return this.adapter.prepare();
  }

  acquireBleScan(options: AcquireOptions = {}): Promise<BleScanResult> {
    const safeOptions = fixAcquireOptions(options);
    validateAllUuids(safeOptions.iBeaconUuids);
    return firstValueFrom(
      this.adapter
        .streamBleScanResults(safeOptions.scanTime, safeOptions.scanMode)
        .pipe(
          map((result) => filterByUuid(result, safeOptions.iBeaconUuids)),
          filter((result) => !!result),
          safeOptions.scanTime > 0
            ? timeout({
                first: safeOptions.scanTime + 100,
                with: () => throwError(() => new Error("BLE scan timed-out")),
              })
            : undefined
        )
    );
  }

  bleScanStream(options: StreamOptions = {}): Observable<BleScanResult> {
    const safeOptions = fixStreamOptions(options);
    validateAllUuids(safeOptions.iBeaconUuids);
    return this.adapter
      .streamBleScanResults(safeOptions.reportInterval, safeOptions.scanMode)
      .pipe(
        map((result) => filterByUuid(result, safeOptions.iBeaconUuids)),
        filter((result) => !!result)
      );
  }
}

export interface AcquireOptions extends ScanningOptions {
  scanTime?: number;
}

function fixAcquireOptions(options: AcquireOptions): AcquireOptions {
  const copy = fixScanningOptions(options);
  if (copy.scanTime === undefined || copy.scanTime < 0) {
    copy.scanTime = 0;
  }
  return copy;
}

export interface StreamOptions extends ScanningOptions {
  reportInterval?: number;
}

function fixStreamOptions(options: StreamOptions): StreamOptions {
  const copy = fixScanningOptions(options);
  if (copy.reportInterval === undefined || copy.reportInterval < 0) {
    copy.reportInterval = 0;
  }
  return copy;
}

export interface ScanningOptions {
  scanMode?: BleScanMode;
  iBeaconUuids?: Array<string>;
}

function fixScanningOptions<T extends ScanningOptions>(options: T): T {
  const copy = { ...options };
  if (copy.scanMode === undefined) {
    copy.scanMode = BleScanMode.BALANCED;
  }
  if (copy.iBeaconUuids === undefined) {
    copy.iBeaconUuids = [];
  }
  copy.iBeaconUuids = copy.iBeaconUuids.map((uuid) => uuid.toLowerCase());
  return copy;
}

function filterByUuid(
  results: BleScanResult,
  uuids: Array<string>
): BleScanResult {
  if (uuids.length === 0) return results;
  const filteredSeen = results.seen.filter(
    (info) => info.iBeacon && uuids.includes(info.iBeacon.uuid.toLowerCase())
  );
  if (filteredSeen.length === 0) return null;
  return { ...results, seen: filteredSeen };
}

function validateAllUuids(uuids: Array<string>) {
  for (const uuid of uuids) {
    validateUuid(uuid);
  }
}

function validateUuid(uuid: string) {
  if (
    !/^[a-f0-9]{8}-[a-f0-9]{4}-[1-9][a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/.test(
      uuid
    )
  ) {
    throw new Error(`UUID ${uuid} is not valid!`);
  }
}
