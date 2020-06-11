import { HumanActivity } from "./human-activity";

export enum Transition {
  STARTED,
  ENDED,
}

export interface ActivityChange {
  type: HumanActivity;
  change: Transition;
  confidence?: number;
  timestamp: Date;
}
