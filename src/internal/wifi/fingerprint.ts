export interface WifiFingerprint {
  seen: Array<WifiApInfo>;
  isNew: boolean;
  timestamp: Date;
}

export interface WifiApInfo {
  ssid: string;
  bssid: string;
  capabilities: string;
  frequency: number;
  centerFreq0: number;
  centerFreq1: number;
  bandwidth: ChannelBandwidth;
  standard: WifiStandard;
  ageMicro: number;
  chainsInfo: Array<WifiChainInfo>;
  rssi: number;
}

export enum ChannelBandwidth {
  UNSPECIFIED = "?",
  MHZ20 = "MHZ20",
  MHZ40 = "MHZ40",
  MHZ80 = "MHZ80",
  MHZ160 = "MHZ160",
  MHZ80_80 = "MHZ80+80",
  MHZ320 = "MHZ320",
}

export enum WifiStandard {
  UNKNOWN = "unknown",
  LEGACY = "11a/b/g",
  N = "11n",
  AC = "11ac",
  AX = "11ax",
  AD = "11ad",
  BE = "11be",
}

export interface WifiChainInfo {
  id: number;
  rssi: number;
}
