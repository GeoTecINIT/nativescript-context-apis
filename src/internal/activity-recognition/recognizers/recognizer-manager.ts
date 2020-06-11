export interface RecognizerManager {
  startListening(): Promise<void>;
  stopListening(): Promise<void>;
}
