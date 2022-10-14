import {
  ChannelBandwidth,
  WifiApInfo,
  WifiChainInfo,
  WifiStandard,
} from "../fingerprint";

export function getSeenWifiApsFrom(
  results: java.util.List<android.net.wifi.ScanResult>
): Array<WifiApInfo> {
  const infos = [];
  for (let i = 0; i < results.size(); i++) {
    infos.push(getWifiApInformationFrom(results.get(i)));
  }
  return infos;
}

function getWifiApInformationFrom(
  result: android.net.wifi.ScanResult
): WifiApInfo {
  const sdkVersion = android.os.Build.VERSION.SDK_INT;
  return {
    ssid: result.SSID,
    bssid: result.BSSID,
    capabilities: result.capabilities,
    frequency: result.frequency,
    centerFreq0: sdkVersion >= 23 ? result.centerFreq0 : -1,
    centerFreq1: sdkVersion >= 23 ? result.centerFreq1 : -1,
    bandwidth:
      sdkVersion >= 23
        ? getChannelBandwidthFrom(result.channelWidth)
        : ChannelBandwidth.UNSPECIFIED,
    standard:
      sdkVersion >= 30
        ? getWifiStandardFrom(result.getWifiStandard())
        : WifiStandard.UNKNOWN,
    ageMicro: result.timestamp,
    chainsInfo: getWifiChainInfosFrom(result),
    rssi: result.level,
  };
}

function getChannelBandwidthFrom(n: number): ChannelBandwidth {
  switch (n) {
    case 0:
      return ChannelBandwidth.MHZ20;
    case 1:
      return ChannelBandwidth.MHZ40;
    case 2:
      return ChannelBandwidth.MHZ80;
    case 3:
      return ChannelBandwidth.MHZ160;
    case 4:
      return ChannelBandwidth.MHZ80_80;
    case 5:
      return ChannelBandwidth.MHZ320;
    default:
      return ChannelBandwidth.UNSPECIFIED;
  }
}

function getWifiStandardFrom(n: number): WifiStandard {
  switch (n) {
    case 1:
      return WifiStandard.LEGACY;
    case 4:
      return WifiStandard.N;
    case 5:
      return WifiStandard.AC;
    case 6:
      return WifiStandard.AX;
    case 7:
      return WifiStandard.AD;
    case 8:
      return WifiStandard.BE;
    default:
      return WifiStandard.UNKNOWN;
  }
}

function getWifiChainInfosFrom(
  result: android.net.wifi.ScanResult
): Array<WifiChainInfo> {
  try {
    const stringResult = result.toString();
    const splitResult = stringResult.split("Radio Chain Infos: ");
    if (splitResult.length < 2) {
      return [];
    }
    const rawChainInfos = splitResult[1];
    const splitChainInfos = [
      ...rawChainInfos.matchAll(/id=\d*, level=-?\d*/g),
    ].map((match) => match[0]);
    const chainInfos = splitChainInfos.map((info) => info.split(", "));
    return chainInfos.map((info) => ({
      id: parseInt(info[0].split("=")[1]),
      rssi: parseInt(info[1].split("=")[1]),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}
