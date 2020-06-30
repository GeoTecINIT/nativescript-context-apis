import { ActivityChange } from "../activity-change";

export type RecognitionCallback = (activityChange: ActivityChange) => void;

export interface ActivityRecognizer {
  isReady(): boolean;
  prepare(): Promise<void>;
  setup(): Promise<void>;
  startRecognizing(options?: StartOptions): Promise<void>;
  stopRecognizing(): Promise<void>;
  listenActivityChanges(callback: RecognitionCallback): number;
  stopListening(listenerId?: number): void;
}

export interface StartOptions {
  detectionInterval?: number;
}
