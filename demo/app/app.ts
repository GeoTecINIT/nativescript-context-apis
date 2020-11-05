import { Application } from "@nativescript/core";
import { contextApis } from "nativescript-context-apis";

contextApis.init();

Application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
