import {
  BleDeviceInfo,
  BleScanResult,
  IBeaconData,
  PhyType,
} from "../scan-result";

export function scanResultsToBleScanResults(
  results: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
): BleScanResult {
  return {
    seen: deviceInfosFrom(results),
    timestamp: new Date(),
  };
}

function deviceInfosFrom(
  results: java.util.List<no.nordicsemi.android.support.v18.scanner.ScanResult>
): Array<BleDeviceInfo> {
  const infos = [];
  for (let i = 0; i < results.size(); i++) {
    infos.push(deviceInfoFrom(results.get(i)));
  }
  return infos;
}

function deviceInfoFrom(
  result: no.nordicsemi.android.support.v18.scanner.ScanResult
): BleDeviceInfo {
  const device = result.getDevice();
  const scanRecord = result.getScanRecord();
  return {
    address: device.getAddress(),
    name: scanRecord?.getDeviceName(),
    advertiseFlags: scanRecord?.getAdvertiseFlags() ?? -1,
    advertisingSid: result.getAdvertisingSid(),
    advertisingInterval: result.getPeriodicAdvertisingInterval(),
    txPowerLevel: scanRecord?.getTxPowerLevel() ?? -2147483648,
    txPower: result.getTxPower(),
    primaryPhy: phyTypeFrom(result.getPrimaryPhy()),
    secondaryPhy: phyTypeFrom(result.getSecondaryPhy()),
    serviceUuids: serviceUuidsFrom(scanRecord),
    legacy: result.isLegacy(),
    connectable: result.isConnectable(),
    iBeacon: iBeaconDataFrom(scanRecord),
    rssi: result.getRssi(),
    ageNanos: result.getTimestampNanos(),
  };
}

function phyTypeFrom(n: number): PhyType {
  switch (n) {
    case 1:
      return PhyType.LE_1M;
    case 2:
      return PhyType.LE_2M;
    case 3:
      return PhyType.LE_CODED;
    default:
      return PhyType.UNUSED;
  }
}

function serviceUuidsFrom(
  scanRecord: no.nordicsemi.android.support.v18.scanner.ScanRecord
): Array<string> {
  if (!scanRecord) return [];
  const serviceUuids = scanRecord.getServiceUuids();
  if (!serviceUuids) return [];
  const uuids = [];
  for (let i = 0; i < serviceUuids.size(); i++) {
    uuids.push(serviceUuids.get(i).toString());
  }
  return uuids;
}

function iBeaconDataFrom(
  scanRecord: no.nordicsemi.android.support.v18.scanner.ScanRecord
): IBeaconData {
  if (!scanRecord) return undefined;
  const bytes = scanRecord.getBytes();
  if (!bytes) return undefined;

  const [beaconFound, startByte] = findIBeaconData(bytes);
  if (!beaconFound) return undefined;

  const uuidBytes = new Array(16).fill(0);
  java.lang.System.arraycopy(bytes, startByte + 4, uuidBytes, 0, 16);
  const hexUuidString = bytesToHex(uuidBytes);

  const uuid =
    `${hexUuidString.substring(0, 8)}-${hexUuidString.substring(8, 12)}-` +
    `${hexUuidString.substring(12, 16)}-${hexUuidString.substring(16, 20)}-` +
    `${hexUuidString.substring(20, 32)}`;

  const major =
    (Number(bytes[startByte + 20]) & 0xff) * 0x100 +
    (Number(bytes[startByte + 21]) & 0xff);

  const minor =
    (Number(bytes[startByte + 22]) & 0xff) * 0x100 +
    (Number(bytes[startByte + 23]) & 0xff);

  return { uuid, major, minor };
}

function findIBeaconData(
  bytes: androidNative.Array<number>
): [found: boolean, startByte: number] {
  let startByte = 2;
  while (startByte <= 5) {
    if (
      (Number(bytes[startByte + 2]) & 0xff) === 0x02 &&
      (Number(bytes[startByte + 3]) & 0xff) === 0x15
    ) {
      return [true, startByte];
    }
    startByte++;
  }
  return [false, -1];
}

const hexArray = "0123456789ABCDEF".split("");
function bytesToHex(bytes: androidNative.Array<number>): string {
  const hexChars = new Array(bytes.length * 2).fill("");
  for (let i = 0; i < bytes.length; i++) {
    const v = Number(bytes[i]) & 0xff;
    hexChars[i * 2] = hexArray[v >>> 4];
    hexChars[i * 2 + 1] = hexArray[v & 0x0f];
  }
  return hexChars.join("");
}
