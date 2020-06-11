import {
  Observable,
  fromObject,
  EventData as NSEventData,
} from "tns-core-modules/data/observable";

import { RecognitionCallback } from "./index";
import { ActivityChange } from "../activity-change";

const eventName = "activityChanged";

interface InternalEventData extends NSEventData {
  data: ActivityChange;
}
type InternalEventCallback = (eventData: InternalEventData) => void;

export class RecognizerCallbackManager {
  private notificationCenter: Observable;
  private listenerCounter: number;
  private callbacks: Map<number, InternalEventCallback>;

  constructor() {
    this.notificationCenter = fromObject({});
    this.listenerCounter = 0;
    this.callbacks = new Map<number, InternalEventCallback>();
  }

  add(callback: RecognitionCallback): number {
    const callbackId = this.listenerCounter;
    const internalCallback = (eventData: InternalEventData) =>
      callback(eventData.data);
    this.callbacks.set(callbackId, internalCallback);
    this.notificationCenter.on(eventName, internalCallback);
    return this.listenerCounter++;
  }

  notifyAll(activityChange: ActivityChange): void {
    if (!this.notificationCenter.hasListeners(eventName)) {
      return;
    }
    const eventData: InternalEventData = {
      eventName,
      object: this.notificationCenter,
      data: { ...activityChange },
    };
    this.notificationCenter.notify<InternalEventData>(eventData);
  }

  remove(callbackId: number): void {
    if (!this.callbacks.has(callbackId)) {
      return;
    }
    const callback = this.callbacks.get(callbackId);
    this.notificationCenter.off(eventName, callback);
    this.callbacks.delete(callbackId);
  }

  removeAll() {
    this.notificationCenter.off(eventName);
    this.callbacks.clear();
  }
}
