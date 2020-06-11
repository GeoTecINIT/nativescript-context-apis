import { ActivityChange } from "../activity-change";

export type RecognitionCallback = (activityChange: ActivityChange) => void;

export interface ActivityRecognizer {
  setup(): Promise<void>;
  startRecognizing(callback: RecognitionCallback): Promise<number>;
  stopRecognizing(listenerId?: number);
}
