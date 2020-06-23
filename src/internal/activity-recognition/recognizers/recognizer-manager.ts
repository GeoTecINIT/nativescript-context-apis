export interface RecognizerManager {
  isReady(): boolean;
  prepare(): Promise<void>;
  startListening(): Promise<void>;
  stopListening(): Promise<void>;
}
