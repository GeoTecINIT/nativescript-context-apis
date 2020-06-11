import { nSQL } from "@nano-sql/core/lib";

import { Resolution } from "../../index";
import { pluginDb } from "../../../persistence/plugin-db";
import { recognizersStateModel } from "./model";

export interface RecognizerStateStore {
  isActive(recognizer: Resolution): Promise<boolean>;
  markAsActive(recognizer: Resolution): Promise<void>;
  markAsInactive(recognizer: Resolution): Promise<void>;
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

  private async updateStatus(recognizer: Resolution, active: boolean) {
    await pluginDb.createDB();
    await nSQL(this.tableName)
      .query("upsert", { id: recognizer, active })
      .exec();
  }
}

export const recognizersStateStoreDb = new RecognizersStateStoreDb();
