import { ActivityChange } from "../activity-change";

export type RecognitionCallback = (activityChange: ActivityChange) => void;

export interface ActivityRecognizer {
  isReady(): Promise<boolean>;
  prepare(): Promise<void>;
  setup(): Promise<void>;
  startRecognizing(): Promise<void>;
  stopRecognizing(): Promise<void>;
  listenActivityChanges(callback: RecognitionCallback): number;
  stopListening(listenerId?: number): void;
}
