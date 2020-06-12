export interface RecognizerManager {
  isReady(): Promise<boolean>;
  prepare(): Promise<void>;
  startListening(): Promise<void>;
  stopListening(): Promise<void>;
}
