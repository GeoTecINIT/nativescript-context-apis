/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import {
    on,
    resumeEvent,
    suspendEvent,
} from "tns-core-modules/application/application";

import { HomeViewModel } from "./home-view-model";
import { contextApis } from "nativescript-context-apis";
import { Resolution } from "../../../src/internal/activity-recognition";

const activityRecognizers = [Resolution.LOW, Resolution.MEDIUM];

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    on(resumeEvent, () => {
        listenToActivityChanges();
    });

    on(suspendEvent, () => {
        stopListeningToChanges();
    });

    listenToActivityChanges(true);
}

export function listenToActivityChanges(addListener = false) {
    activityRecognizers.forEach((recognizerType) => {
        listenToActivityChangesFor(recognizerType, addListener).catch((err) => {
            console.error(
                `An error occurred while listening to ${recognizerType} res activity changes: ${err}`
            );
        });
    });
}

function stopListeningToChanges() {
    activityRecognizers.forEach((recognizerType) => {
        contextApis.getActivityRecognizer(recognizerType).stopRecognizing();
        console.log(
            `low res activity recognizer is no longer listening to changes`
        );
    });
}

async function listenToActivityChangesFor(
    recognizerType: Resolution,
    addListener: boolean
) {
    const recognizer = contextApis.getActivityRecognizer(recognizerType);
    const isReady = recognizer.isReady();
    if (!isReady) {
        console.log(
            `Up to prepare ${recognizerType} res activity recognizer...`
        );
        await recognizer.prepare();
    }
    console.log(`${recognizerType} res activity recognizer is ready`);
    if (addListener) {
        const listenerId = recognizer.listenActivityChanges(
            (activityChange) => {
                console.log(
                    `${recognizerType}ResRecognizer. ActivityChange: ${JSON.stringify(
                        activityChange
                    )}`
                );
            }
        );
        console.log(
            `${recognizerType} res activity recognizer has registered a listener (id: ${listenerId})`
        );
    }
    await recognizer.startRecognizing();
    console.log(
        `${recognizerType} res activity recognizer is now listening to activity changes!`
    );
}
