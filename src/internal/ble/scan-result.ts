export interface BleScanResult {
  seen: Array<BleDeviceInfo>;
  timestamp: Date;
}

export interface BleDeviceInfo {
  address: string;
  name: string;
  advertiseFlags: number;
  advertisingSid: number;
  advertisingInterval: number;
  txPowerLevel: number;
  txPower: number;
  primaryPhy: PhyType;
  secondaryPhy: PhyType;
  serviceUuids: Array<string>;
  legacy: boolean;
  connectable: boolean;
  iBeacon?: IBeaconData;
  rssi: number;
  ageNanos: number;
}

export enum PhyType {
  UNUSED = "none",
  LE_1M = "1M",
  LE_2M = "2M",
  LE_CODED = "coded",
}

export interface IBeaconData {
  uuid: string;
  major: number;
  minor: number;
}
