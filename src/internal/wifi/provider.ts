import { WifiScanAdapter } from "./common";
import { WifiFingerprint } from "./fingerprint";
import { Observable } from "rxjs";

const MIN_SCAN_INTERVAL = 5000;

export class WifiScanProvider {
  constructor(private adapter: WifiScanAdapter) {}

  isReady(): Promise<boolean> {
    return this.adapter.isReady();
  }

  prepare(): Promise<void> {
    return this.adapter.prepare();
  }

  async acquireWifiFingerprint(ensureIsNew = true): Promise<WifiFingerprint> {
    return this.adapter.acquireWifiFingerprint(ensureIsNew);
  }

  wifiFingerprintStream(
    options: StreamOptions = {}
  ): Observable<WifiFingerprint> {
    const safeOptions = fixStreamOptions(options);
    if (safeOptions.ensureAlwaysNew) {
      return this.wifiFingerprintStreamWithoutDuplicates(
        safeOptions.grouping,
        safeOptions.continueOnFailure
      );
    } else {
      return this.wifiFingerprintStreamWithDuplicates(
        safeOptions.interval,
        safeOptions.continueOnFailure
      );
    }
  }

  private wifiFingerprintStreamWithoutDuplicates(
    grouping: FingerprintGrouping,
    continueOnFailure: boolean
  ): Observable<WifiFingerprint> {
    return new Observable<WifiFingerprint>((subscriber) => {
      let unsubscribed = false;
      const performScans = async () => {
        try {
          for (let i = 0; i < grouping; i++) {
            const result = await this.adapter.acquireWifiFingerprint(true);
            if (unsubscribed) break;
            subscriber.next(result);

            if (i === grouping - 1) break;
            await new Promise((resolve) =>
              setTimeout(resolve, MIN_SCAN_INTERVAL)
            );
          }
        } catch (err) {
          if (continueOnFailure) {
            console.error("WifiScanProvider ERROR:", err);
          } else {
            subscriber.error(err);
          }
        }
      };

      performScans();
      const intervalId = setInterval(() => {
        performScans();
      }, getIntervalForGrouping(grouping));

      return () => {
        unsubscribed = true;
        clearInterval(intervalId);
      };
    });
  }

  private wifiFingerprintStreamWithDuplicates(
    interval: number,
    continueOnFailure: boolean
  ): Observable<WifiFingerprint> {
    return new Observable<WifiFingerprint>((subscriber) => {
      let unsubscribed = false;
      const performScan = async () => {
        try {
          const result = await this.adapter.acquireWifiFingerprint(false);
          if (unsubscribed) return;
          subscriber.next(result);
        } catch (err) {
          if (continueOnFailure) {
            console.error("WifiScanProvider ERROR:", err);
          } else {
            subscriber.error(err);
          }
        }
      };

      performScan();
      const intervalId = setInterval(() => {
        performScan();
      }, interval);

      return () => {
        unsubscribed = true;
        clearInterval(intervalId);
      };
    });
  }
}

function fixStreamOptions(options: StreamOptions): StreamOptions {
  const copy = { ...options };
  if (copy.ensureAlwaysNew === undefined) {
    copy.ensureAlwaysNew = true;
  }
  if (copy.grouping === undefined || !copy.ensureAlwaysNew) {
    copy.grouping = FingerprintGrouping.NONE;
  }
  if (
    (copy.interval === undefined || copy.interval < MIN_SCAN_INTERVAL) &&
    !copy.ensureAlwaysNew
  ) {
    copy.interval = MIN_SCAN_INTERVAL;
  }
  if (copy.continueOnFailure === undefined) {
    copy.continueOnFailure = false;
  }

  return copy;
}

export interface StreamOptions {
  ensureAlwaysNew?: boolean;
  grouping?: FingerprintGrouping;
  interval?: number;
  continueOnFailure?: boolean;
}

export enum FingerprintGrouping {
  NONE = 1,
  INTERMEDIATE = 2,
  MAX = 4,
}

function getIntervalForGrouping(grouping: FingerprintGrouping): number {
  switch (grouping) {
    case FingerprintGrouping.NONE:
      return 30 * 1000; // 30s
    case FingerprintGrouping.INTERMEDIATE:
      return 60 * 1000; // 60s
    case FingerprintGrouping.MAX:
      return 2 * 60 * 1000; // 2 min
  }
}
