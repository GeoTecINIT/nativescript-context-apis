import { NativeSQLite } from "@nano-sql/adapter-sqlite-nativescript";
import { nSQL } from "@nano-sql/core/lib";
import { recognizersStateModel } from "../activity-recognition/recognizers/state/model";

const dbName = "context-apis";

class PluginDb {
  private dbInitialized: boolean = false;
  private createDBProcedure: Promise<void>;

  async createDB() {
    if (this.dbInitialized) {
      return;
    }
    if (!this.createDBProcedure) {
      this.createDBProcedure = nSQL().createDatabase({
        id: dbName,
        mode: new NativeSQLite(),
        tables: [recognizersStateModel],
      });
    }
    await this.createDBProcedure;
    this.dbInitialized = true;
  }
}

export const pluginDb = new PluginDb();
