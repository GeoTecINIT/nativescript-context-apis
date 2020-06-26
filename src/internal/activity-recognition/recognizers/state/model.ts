import { InanoSQLTableConfig } from "@nano-sql/core/lib/interfaces";

export const recognizersStateModel: InanoSQLTableConfig = {
  name: "recognizers-state",
  model: {
    "id:string": { pk: true },
    "active:boolean": {},
    "lastActivity:string": {},
  },
};
