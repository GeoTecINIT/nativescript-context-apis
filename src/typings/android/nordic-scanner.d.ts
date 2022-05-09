/// <reference path="android-declarations.d.ts"/>

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export abstract class BluetoothLeScannerCompat {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerCompat>;
              public static EXTRA_LIST_SCAN_RESULT: string;
              public static EXTRA_ERROR_CODE: string;
              public static EXTRA_CALLBACK_TYPE: string;
              public flushPendingScanResults(
                param0: no.nordicsemi.android.support.v18.scanner.ScanCallback
              ): void;
              public stopScan(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.app.PendingIntent
              ): void;
              public startScan(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanFilter>,
                param1: no.nordicsemi.android.support.v18.scanner.ScanSettings,
                param2: globalAndroid.content.Context,
                param3: globalAndroid.app.PendingIntent
              ): void;
              public startScan(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanFilter>,
                param1: no.nordicsemi.android.support.v18.scanner.ScanSettings,
                param2: globalAndroid.content.Context,
                param3: globalAndroid.app.PendingIntent,
                param4: number
              ): void;
              public stopScan(
                param0: no.nordicsemi.android.support.v18.scanner.ScanCallback
              ): void;
              public static getScanner(): no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerCompat;
              public startScan(
                param0: no.nordicsemi.android.support.v18.scanner.ScanCallback
              ): void;
              public startScan(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanFilter>,
                param1: no.nordicsemi.android.support.v18.scanner.ScanSettings,
                param2: no.nordicsemi.android.support.v18.scanner.ScanCallback,
                param3: globalAndroid.os.Handler
              ): void;
              public startScan(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanFilter>,
                param1: no.nordicsemi.android.support.v18.scanner.ScanSettings,
                param2: no.nordicsemi.android.support.v18.scanner.ScanCallback
              ): void;
              public stopScan(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.app.PendingIntent,
                param2: number
              ): void;
            }
            export namespace BluetoothLeScannerCompat {
              export class ScanCallbackWrapper {
                public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerCompat.ScanCallbackWrapper>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BluetoothLeScannerImplJB extends no.nordicsemi.android
              .support.v18.scanner.BluetoothLeScannerCompat {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerImplJB>;
              public flushPendingScanResults(
                param0: no.nordicsemi.android.support.v18.scanner.ScanCallback
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BluetoothLeScannerImplLollipop extends no.nordicsemi
              .android.support.v18.scanner.BluetoothLeScannerCompat {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerImplLollipop>;
              public flushPendingScanResults(
                param0: no.nordicsemi.android.support.v18.scanner.ScanCallback
              ): void;
            }
            export namespace BluetoothLeScannerImplLollipop {
              export class ScanCallbackWrapperLollipop extends no.nordicsemi
                .android.support.v18.scanner.BluetoothLeScannerCompat
                .ScanCallbackWrapper {
                public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerImplLollipop.ScanCallbackWrapperLollipop>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BluetoothLeScannerImplMarshmallow extends no.nordicsemi
              .android.support.v18.scanner.BluetoothLeScannerImplLollipop {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerImplMarshmallow>;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BluetoothLeScannerImplOreo extends no.nordicsemi
              .android.support.v18.scanner.BluetoothLeScannerImplMarshmallow {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerImplOreo>;
            }
            export namespace BluetoothLeScannerImplOreo {
              export class PendingIntentExecutorWrapper extends no.nordicsemi
                .android.support.v18.scanner.BluetoothLeScannerCompat
                .ScanCallbackWrapper {
                public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeScannerImplOreo.PendingIntentExecutorWrapper>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BluetoothLeUtils {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothLeUtils>;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BluetoothUuid {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BluetoothUuid>;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class BuildConfig {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.BuildConfig>;
              public static DEBUG: boolean;
              public static LIBRARY_PACKAGE_NAME: string;
              public static BUILD_TYPE: string;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class Objects {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.Objects>;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class PendingIntentExecutor extends no.nordicsemi.android
              .support.v18.scanner.ScanCallback {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.PendingIntentExecutor>;
              public onScanResult(
                param0: number,
                param1: no.nordicsemi.android.support.v18.scanner.ScanResult
              ): void;
              public onScanFailed(param0: number): void;
              public onBatchScanResults(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class PendingIntentReceiver {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.PendingIntentReceiver>;
              public constructor();
              public onReceive(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.Intent
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export abstract class ScanCallback {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanCallback>;
              public static SCAN_FAILED_ALREADY_STARTED: number;
              public static SCAN_FAILED_APPLICATION_REGISTRATION_FAILED: number;
              public static SCAN_FAILED_INTERNAL_ERROR: number;
              public static SCAN_FAILED_FEATURE_UNSUPPORTED: number;
              public static SCAN_FAILED_OUT_OF_HARDWARE_RESOURCES: number;
              public static SCAN_FAILED_SCANNING_TOO_FREQUENTLY: number;
              public constructor();
              public onScanResult(
                param0: number,
                param1: no.nordicsemi.android.support.v18.scanner.ScanResult
              ): void;
              public onScanFailed(param0: number): void;
              public onBatchScanResults(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class ScanCallbackWrapperSet<W> extends java.lang.Object {
              public static class: java.lang.Class<
                no.nordicsemi.android.support.v18.scanner.ScanCallbackWrapperSet<any>
              >;
              public values(): java.util.Set<W>;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class ScanFilter {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanFilter>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<no.nordicsemi.android.support.v18.scanner.ScanFilter>;
              public getServiceDataMask(): androidNative.Array<number>;
              public getServiceDataUuid(): globalAndroid.os.ParcelUuid;
              public getManufacturerData(): androidNative.Array<number>;
              public hashCode(): number;
              public matches(
                param0: no.nordicsemi.android.support.v18.scanner.ScanResult
              ): boolean;
              public toString(): string;
              public getDeviceAddress(): string;
              public getServiceUuid(): globalAndroid.os.ParcelUuid;
              public getManufacturerId(): number;
              public getDeviceName(): string;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public getServiceUuidMask(): globalAndroid.os.ParcelUuid;
              public describeContents(): number;
              public getServiceData(): androidNative.Array<number>;
              public equals(param0: any): boolean;
              public getManufacturerDataMask(): androidNative.Array<number>;
            }
            export namespace ScanFilter {
              export class Builder {
                public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder>;
                public build(): no.nordicsemi.android.support.v18.scanner.ScanFilter;
                public setServiceUuid(
                  param0: globalAndroid.os.ParcelUuid,
                  param1: globalAndroid.os.ParcelUuid
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public setDeviceAddress(
                  param0: string
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public setManufacturerData(
                  param0: number,
                  param1: androidNative.Array<number>,
                  param2: androidNative.Array<number>
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public setServiceData(
                  param0: globalAndroid.os.ParcelUuid,
                  param1: androidNative.Array<number>
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public setManufacturerData(
                  param0: number,
                  param1: androidNative.Array<number>
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public constructor();
                public setServiceData(
                  param0: globalAndroid.os.ParcelUuid,
                  param1: androidNative.Array<number>,
                  param2: androidNative.Array<number>
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public setServiceUuid(
                  param0: globalAndroid.os.ParcelUuid
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
                public setDeviceName(
                  param0: string
                ): no.nordicsemi.android.support.v18.scanner.ScanFilter.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class ScanRecord {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanRecord>;
              public getDeviceName(): string;
              public getServiceData(
                param0: globalAndroid.os.ParcelUuid
              ): androidNative.Array<number>;
              public getTxPowerLevel(): number;
              public toString(): string;
              public getServiceUuids(): java.util.List<globalAndroid.os.ParcelUuid>;
              public getManufacturerSpecificData(
                param0: number
              ): androidNative.Array<number>;
              public getServiceData(): java.util.Map<
                globalAndroid.os.ParcelUuid,
                androidNative.Array<number>
              >;
              public equals(param0: any): boolean;
              public getManufacturerSpecificData(): globalAndroid.util.SparseArray<
                androidNative.Array<number>
              >;
              public getAdvertiseFlags(): number;
              public getBytes(): androidNative.Array<number>;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class ScanResult {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanResult>;
              public static DATA_COMPLETE: number;
              public static DATA_TRUNCATED: number;
              public static PHY_UNUSED: number;
              public static SID_NOT_PRESENT: number;
              public static TX_POWER_NOT_PRESENT: number;
              public static PERIODIC_INTERVAL_NOT_PRESENT: number;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<no.nordicsemi.android.support.v18.scanner.ScanResult>;
              public getDataStatus(): number;
              public isLegacy(): boolean;
              public hashCode(): number;
              public getScanRecord(): no.nordicsemi.android.support.v18.scanner.ScanRecord;
              public getPeriodicAdvertisingInterval(): number;
              public getTimestampNanos(): number;
              public getAdvertisingSid(): number;
              public toString(): string;
              public getSecondaryPhy(): number;
              public constructor(
                param0: globalAndroid.bluetooth.BluetoothDevice,
                param1: number,
                param2: number,
                param3: number,
                param4: number,
                param5: number,
                param6: number,
                param7: number,
                param8: no.nordicsemi.android.support.v18.scanner.ScanRecord,
                param9: number
              );
              public isConnectable(): boolean;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.bluetooth.BluetoothDevice,
                param1: no.nordicsemi.android.support.v18.scanner.ScanRecord,
                param2: number,
                param3: number
              );
              public describeContents(): number;
              public getDevice(): globalAndroid.bluetooth.BluetoothDevice;
              public getPrimaryPhy(): number;
              public equals(param0: any): boolean;
              public getRssi(): number;
              public getTxPower(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class ScanSettings {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanSettings>;
              public static MATCH_LOST_DEVICE_TIMEOUT_DEFAULT: number;
              public static MATCH_LOST_TASK_INTERVAL_DEFAULT: number;
              public static SCAN_MODE_OPPORTUNISTIC: number;
              public static SCAN_MODE_LOW_POWER: number;
              public static SCAN_MODE_BALANCED: number;
              public static SCAN_MODE_LOW_LATENCY: number;
              public static CALLBACK_TYPE_ALL_MATCHES: number;
              public static CALLBACK_TYPE_FIRST_MATCH: number;
              public static CALLBACK_TYPE_MATCH_LOST: number;
              public static MATCH_NUM_ONE_ADVERTISEMENT: number;
              public static MATCH_NUM_FEW_ADVERTISEMENT: number;
              public static MATCH_NUM_MAX_ADVERTISEMENT: number;
              public static MATCH_MODE_AGGRESSIVE: number;
              public static MATCH_MODE_STICKY: number;
              public static PHY_LE_ALL_SUPPORTED: number;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<no.nordicsemi.android.support.v18.scanner.ScanSettings>;
              public getMatchLostTaskInterval(): number;
              public getNumOfMatches(): number;
              public getUseHardwareCallbackTypesIfSupported(): boolean;
              public hasPowerSaveMode(): boolean;
              public getLegacy(): boolean;
              public getUseHardwareFilteringIfSupported(): boolean;
              public getUseHardwareBatchingIfSupported(): boolean;
              public getPowerSaveRest(): number;
              public getMatchMode(): number;
              public getMatchLostDeviceTimeout(): number;
              public getPowerSaveScan(): number;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public getCallbackType(): number;
              public getPhy(): number;
              public describeContents(): number;
              public getScanMode(): number;
              public getReportDelayMillis(): number;
            }
            export namespace ScanSettings {
              export class Builder {
                public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder>;
                public setPowerSave(
                  param0: number,
                  param1: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setUseHardwareBatchingIfSupported(
                  param0: boolean
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public constructor();
                public setUseHardwareCallbackTypesIfSupported(
                  param0: boolean
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setUseHardwareFilteringIfSupported(
                  param0: boolean
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setNumOfMatches(
                  param0: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setMatchMode(
                  param0: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setLegacy(
                  param0: boolean
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setPhy(
                  param0: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setScanMode(
                  param0: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public build(): no.nordicsemi.android.support.v18.scanner.ScanSettings;
                public setCallbackType(
                  param0: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setReportDelay(
                  param0: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
                public setMatchOptions(
                  param0: number,
                  param1: number
                ): no.nordicsemi.android.support.v18.scanner.ScanSettings.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class ScannerService {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.ScannerService>;
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(
                param0: globalAndroid.content.Intent,
                param1: number,
                param2: number
              ): number;
              public onBind(
                param0: globalAndroid.content.Intent
              ): globalAndroid.os.IBinder;
              public onTaskRemoved(param0: globalAndroid.content.Intent): void;
            }
          }
        }
      }
    }
  }
}

declare namespace no {
  export namespace nordicsemi {
    export namespace android {
      export namespace support {
        export namespace v18 {
          export namespace scanner {
            export class UserScanCallbackWrapper extends no.nordicsemi.android
              .support.v18.scanner.ScanCallback {
              public static class: java.lang.Class<no.nordicsemi.android.support.v18.scanner.UserScanCallbackWrapper>;
              public onScanResult(
                param0: number,
                param1: no.nordicsemi.android.support.v18.scanner.ScanResult
              ): void;
              public onScanFailed(param0: number): void;
              public onBatchScanResults(
                param0: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
              ): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//no.nordicsemi.android.support.v18.scanner.ScanCallbackWrapperSet:1
