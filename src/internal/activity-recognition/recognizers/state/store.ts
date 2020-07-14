import { HumanActivity, Resolution } from "../../index";
import { pluginDb } from "../../../persistence/plugin-db";
import { recognizersStateModel } from "./model";

export interface RecognizerStateStore {
  isActive(recognizer: Resolution): Promise<boolean>;
  markAsActive(recognizer: Resolution): Promise<void>;
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
    const instance = await this.db();
    const rows = await instance
      .query("select")
      .where(["id", "=", recognizer])
      .exec();
    if (rows.length === 0) {
      return false;
    }
    return rows[0].active;
  }

  async markAsActive(recognizer: Resolution): Promise<void> {
    await this.updateStatus(recognizer, true);
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

  private async updateStatus(recognizer: Resolution, active: boolean) {
    const instance = await this.db();
    await instance
      .query("upsert", { id: recognizer, active, lastActivity: null })
      .exec();
  }

  private db(tableName = this.tableName) {
    return pluginDb.instance(tableName);
  }
}

export const recognizersStateStoreDb = new RecognizersStateStoreDb();
