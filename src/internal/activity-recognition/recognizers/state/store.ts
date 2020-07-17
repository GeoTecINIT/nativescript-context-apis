import { HumanActivity, Resolution, StartOptions } from "../../index";
import { pluginDb } from "../../../persistence/plugin-db";
import { recognizersStateModel } from "./model";

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

class RecognizersStateStoreDb implements RecognizerStateStore {
  private tableName = recognizersStateModel.name;

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
    return JSON.parse(recognizerData.startOptions);
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
    const instance = await this.db();
    const rows = await instance
      .query("select")
      .where(["id", "=", recognizer])
      .exec();
    if (rows.length === 0) {
      return null;
    }
    const lastActivity = rows[0].lastActivity;
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
    const instance = await this.db(`${this.tableName}.lastActivity`);
    await instance
      .query("upsert", activity)
      .where(["id", "=", recognizer])
      .exec();
  }

  private async updateStatus(
    recognizer: Resolution,
    active: boolean,
    startOptions: StartOptions = {}
  ) {
    const instance = await this.db();
    await instance
      .query("upsert", {
        id: recognizer,
        active,
        startOptions: JSON.stringify(startOptions),
        lastActivity: null,
      })
      .exec();
  }

  private async getRecognizerData(
    recognizer: Resolution
  ): Promise<{ [key: string]: any }> {
    const instance = await this.db();
    const rows = await instance
      .query("select")
      .where(["id", "=", recognizer])
      .exec();
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }

  private db(tableName = this.tableName) {
    return pluginDb.instance(tableName);
  }
}

export const recognizersStateStoreDb = new RecognizersStateStoreDb();
