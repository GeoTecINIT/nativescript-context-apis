import { HumanActivity } from "./human-activity";

export enum Transition {
  STARTED = "started",
  ENDED = "ended",
}

export interface ActivityChange {
  type: HumanActivity;
  transition: Transition;
  confidence?: number;
  timestamp: Date;
}
