import { StartOptions } from "./index";

export interface RecognizerManager {
  isReady(): boolean;
  prepare(): Promise<void>;
  startListening(options?: StartOptions): Promise<void>;
  stopListening(): Promise<void>;
}
