/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";
import { contextApis } from "nativescript-context-apis";
import { Resolution } from "nativescript-context-apis/activity-recognition";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
    listenToLowResActivityUpdates()
        .then(() => {
            console.log(
                "Low res activity recognizer is now listening to activity changes!"
            );
        })
        .catch((err) => {
            console.error(
                `An error occurred while listening to activity changes: ${err}`
            );
        });
}

async function listenToLowResActivityUpdates() {
    const lowResRecognizer = contextApis.getActivityRecognizer(Resolution.LOW);
    const isReady = lowResRecognizer.isReady();
    if (!isReady) {
        console.log("Up to prepare low res activity recognizer...");
        await lowResRecognizer.prepare();
    }
    console.log("Low res activity recognizer is ready");
    const listenerId = lowResRecognizer.listenActivityChanges(
        (activityChange) => {
            console.log(activityChange);
        }
    );
    console.log(
        `Low res activity recognizer has registered a listener (id: ${listenerId})`
    );
    await lowResRecognizer.startRecognizing();
}
