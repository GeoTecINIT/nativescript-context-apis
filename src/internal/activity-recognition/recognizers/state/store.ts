import { nSQL } from "@nano-sql/core/lib";

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
    await pluginDb.createDB();
    const rows = await nSQL(this.tableName)
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
    await pluginDb.createDB();
    const rows = await nSQL(this.tableName)
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
    await pluginDb.createDB();
    const isActive = await this.isActive(recognizer);
    if (!isActive) {
      return null;
    }
    await nSQL(`${this.tableName}.lastActivity`)
      .query("upsert", activity)
      .where(["id", "=", recognizer])
      .exec();
  }

  private async updateStatus(recognizer: Resolution, active: boolean) {
    await pluginDb.createDB();
    await nSQL(this.tableName)
      .query("upsert", { id: recognizer, active, lastActivity: null })
      .exec();
  }
}

export const recognizersStateStoreDb = new RecognizersStateStoreDb();
