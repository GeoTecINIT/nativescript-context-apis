import { HumanActivity, Resolution, StartOptions } from "../../index";
import { Couchbase } from "nativescript-couchbase-plugin";

export interface RecognizerStateStore {
  isActive(recognizer: Resolution): Promise<boolean>;
  getStartOptions(recognizer: Resolution): Promise<StartOptions>;
  markAsActive(
    recognizer: Resolution,
    startOptions: StartOptions
  ): Promise<void>;
  markAsInactive(recognizer: Resolution): Promise<void>;
  getLastActivity(recognizer: Resolution): Promise<HumanActivity>;
  updateLastActivity(
    recognizer: Resolution,
    activity: HumanActivity
  ): Promise<void>;
}

const DATABASE_NAME = "context-apis";
const DOC_TYPE = "recognizer-state";

class RecognizersStateStoreDb implements RecognizerStateStore {
  private database: Couchbase;

  constructor() {
    this.database = new Couchbase(DATABASE_NAME);
  }

  async isActive(recognizer: Resolution): Promise<boolean> {
    const recognizerData = await this.getRecognizerData(recognizer);
    if (!recognizerData) {
      return false;
    }
    return recognizerData.active;
  }

  async getStartOptions(recognizer: Resolution): Promise<StartOptions> {
    const isActive = await this.isActive(recognizer);
    if (!isActive) {
      return null;
    }

    const recognizerData = await this.getRecognizerData(recognizer);
    if (!recognizerData) {
      return null;
    }
    return recognizerData.startOptions;
  }

  async markAsActive(
    recognizer: Resolution,
    startOptions: StartOptions
  ): Promise<void> {
    await this.updateStatus(recognizer, true, startOptions);
  }

  async markAsInactive(recognizer: Resolution): Promise<void> {
    await this.updateStatus(recognizer, false);
  }

  async getLastActivity(recognizer: Resolution): Promise<HumanActivity> {
    const recognizerData = this.database.getDocument(recognizer);

    if (!recognizerData) {
      return null;
    }
    const lastActivity = recognizerData.lastActivity;
    return lastActivity ? lastActivity : null;
  }

  async updateLastActivity(
    recognizer: Resolution,
    activity: HumanActivity
  ): Promise<void> {
    const isActive = await this.isActive(recognizer);
    if (!isActive) {
      return null;
    }

    this.database.updateDocument(recognizer, { lastActivity: activity });
  }

  private async updateStatus(
    recognizer: Resolution,
    active: boolean,
    startOptions: StartOptions = {}
  ) {
    const newData = {
      active,
      startOptions,
      lastActivity: null,
    };

    const prevData = await this.getRecognizerData(recognizer);
    if (!prevData) {
      this.database.createDocument({ type: DOC_TYPE, ...newData }, recognizer);
      return;
    }
    this.database.updateDocument(recognizer, newData);
  }

  private async getRecognizerData(
    recognizer: Resolution
  ): Promise<{ [key: string]: any }> {
    const recognizerData = this.database.getDocument(recognizer);
    if (!recognizerData) {
      return null;
    }
    return recognizerData;
  }
}

export const recognizersStateStoreDb = new RecognizersStateStoreDb();
