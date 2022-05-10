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
  return {
    ssid: result.SSID,
    bssid: result.BSSID,
    capabilities: result.capabilities,
    frequency: result.frequency,
    centerFreq0: result.centerFreq0 ?? 0,
    centerFreq1: result.centerFreq1 ?? 0,
    bandwidth: getChannelBandwidthFrom(result.channelWidth),
    standard: getWifiStandardFrom(result.getWifiStandard()),
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
    const stringifiedResult = result.toString();
    const rawChainInfos = stringifiedResult.split("Radio Chain Infos: ")[1];
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
