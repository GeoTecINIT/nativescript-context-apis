/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page, Application } from "@nativescript/core";

import { HomeViewModel } from "./home-view-model";

import { contextApis } from "nativescript-context-apis";
import { Resolution } from "nativescript-context-apis/activity-recognition";

import { GeolocationProvider } from "nativescript-context-apis/geolocation";
import { of, Subscription } from "rxjs";

const activityRecognizers = [Resolution.LOW, Resolution.MEDIUM];

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    let preparing = true;
    let locationSubscription: Subscription;
    Application.on(Application.resumeEvent, () => {
        if (!preparing) {
            printCurrentLocation().catch((err) => {
                console.error(`Could not print current location: ${err}`);
            }).then(() => printLocationUpdates()
                .then((subscription) => (locationSubscription = subscription))
                .catch(
                    (err) =>
                        `An error occurred while getting location updates: ${err}`)
            ).then(() => listenToActivityChanges());
        }
    });

    Application.on(Application.suspendEvent, () => {
        if (!preparing) {
            if (locationSubscription) {
                locationSubscription.unsubscribe();
            }
            stopListeningToChanges();
        }
    });

    printCurrentLocation().catch((err) => {
        console.error(`Could not print current location: ${err}`);
    }).then(() => printLocationUpdates()
        .then((subscription) => (locationSubscription = subscription))
        .catch(
            (err) => `An error occurred while getting location updates: ${err}`
        )
    ).then(() => listenToActivityChanges(true))
        .then(() => preparing = false);
}

async function printCurrentLocation() {
    const provider = contextApis.geolocationProvider;
    const ok = await prepareGeolocationProvider(provider);
    if (ok) {
        const location = await provider.acquireLocation({
            highAccuracy: true,
            timeout: 5000,
        });
        console.log(`Current location: ${JSON.stringify(location)}`);
    }
}

async function printLocationUpdates(): Promise<Subscription> {
    const provider = contextApis.geolocationProvider;
    const ok = await prepareGeolocationProvider(provider);

    const stream = ok
        ? provider.locationStream({
              highAccuracy: true,
              stdInterval: 1000,
              minInterval: 100,
              timeout: 5000,
              maxAge: 60000,
          })
        : of(null);

    return stream.subscribe({
        next: (location) =>
            console.log(`New location acquired!: ${JSON.stringify(location)}`),
        error: (error) =>
            console.error(`Location updates could not be acquired: ${error}`)
    });
}

export async function listenToActivityChanges(addListener = false) {
    for (const recognizerType of activityRecognizers) {
        try {
            await listenToActivityChangesFor(recognizerType, addListener);
        } catch (err) {
            console.error(
                `An error occurred while listening to ${recognizerType} res activity changes: ${JSON.stringify(err)}`
            );
        }
    }
}

function stopListeningToChanges() {
    activityRecognizers.forEach((recognizerType) => {
        contextApis.getActivityRecognizer(recognizerType).stopRecognizing();
        console.log(
            `${recognizerType} res activity recognizer is no longer listening to changes`
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

let _preparing: Promise<any>;
async function prepareGeolocationProvider(
    provider: GeolocationProvider
): Promise<boolean> {
    const isReady = await provider.isReady();
    if (isReady) {
        return true;
    }

    try {
        if (!_preparing) {
            _preparing = provider.prepare();
        }
        await _preparing;
        return true;
    } catch (e) {
        console.error(`GeolocationProvider couldn't be prepared: ${JSON.stringify(e)}`);
        return false;
    } finally {
        _preparing = null;
    }
}
