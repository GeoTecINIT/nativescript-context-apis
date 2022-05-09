/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { Application, NavigatedData, Page } from "@nativescript/core";

import { HomeViewModel } from "./home-view-model";

import { contextApis } from "nativescript-context-apis";
import { Resolution } from "nativescript-context-apis/activity-recognition";

import { GeolocationProvider } from "nativescript-context-apis/geolocation";
import { of, Subscription } from "rxjs";
import {
    FingerprintGrouping,
    WifiScanProvider,
} from "nativescript-context-apis/wifi";
import { BleScanProvider } from "nativescript-context-apis/ble";
import { BleScanMode } from "nativescript-context-apis/internal/ble";

const I_BEACON_UUIDS = [
    // Place your iBeacon UUIDs here to just report beacon updates!
];

const activityRecognizers = [Resolution.LOW, Resolution.MEDIUM];

let locationSubscription: Subscription;
let wifiScanSubscription: Subscription;
let bleScanSubscription: Subscription;
export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    let preparing = true;
    Application.on(Application.resumeEvent, () => {
        if (!preparing) {
            showUpdates().catch((err) =>
                console.error("Could not show updates. Reason: ", err)
            );
        }
    });

    Application.on(Application.suspendEvent, () => {
        if (!preparing) {
            locationSubscription?.unsubscribe();
            wifiScanSubscription?.unsubscribe();
            bleScanSubscription?.unsubscribe();
            stopListeningToChanges();
        }
    });

    showUpdates().then(() => (preparing = false));
}

async function showUpdates(addListeners = false): Promise<void> {
    const steps: Array<() => Promise<any>> = [
        () => listenToActivityChanges(addListeners),
        () =>
            printCurrentLocation().catch((err) => {
                console.error("Could not print current location. Reason:", err);
            }),
        () =>
            printBleScanResult().catch((err) => {
                console.error(
                    "Could not print current nearby BLE devices. Reason:",
                    err
                );
            }),
        () =>
            printWifiScanResult().catch((err) => {
                console.error(
                    "Could not print current nearby wifi APs. Reason:",
                    err
                );
            }),
        () =>
            printLocationUpdates()
                .then((subscription) => (locationSubscription = subscription))
                .catch((err) =>
                    console.error(
                        "An error occurred while getting location updates. Reason:",
                        err
                    )
                ),
        () =>
            printBleScanUpdates()
                .then((subscription) => (bleScanSubscription = subscription))
                .catch((err) =>
                    console.error(
                        "An error occurred while getting ble scan updates. Reason:",
                        err
                    )
                ),
        () =>
            printWifiScanUpdates()
                .then((subscription) => (wifiScanSubscription = subscription))
                .catch((err) =>
                    console.error(
                        "An error occurred while getting wifi scan updates. Reason:",
                        err
                    )
                ),
    ];
    for (const step of steps) {
        await step();
    }
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

async function printWifiScanResult() {
    const provider = contextApis.wifiScanProvider;
    const ok = await prepareWifiScanProvider(provider);
    if (ok) {
        const fingerprint = await provider.acquireWifiFingerprint(true);
        console.log(`Last wifi scan result: ${JSON.stringify(fingerprint)}`);
    }
}

async function printBleScanResult() {
    const provider = contextApis.bleScanProvider;
    const ok = await prepareBleScanProvider(provider);
    if (ok) {
        const bleScanResult = await provider.acquireBleScan({
            scanTime: 5000,
            scanMode: BleScanMode.BALANCED,
            iBeaconUuids: I_BEACON_UUIDS,
        });
        console.log(`Last ble scan result: ${JSON.stringify(bleScanResult)}`);
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
            console.error(`Location updates could not be acquired: ${error}`),
    });
}

async function printWifiScanUpdates(): Promise<Subscription> {
    const provider = contextApis.wifiScanProvider;
    const ok = await prepareWifiScanProvider(provider);

    await new Promise((resolve) => setTimeout(resolve, 30000));

    const stream = ok
        ? provider.wifiFingerprintStream({
              ensureAlwaysNew: true,
              grouping: FingerprintGrouping.NONE,
              continueOnFailure: true,
          })
        : of(null);

    return stream.subscribe({
        next: (fingerprint) =>
            console.log(
                `New wifi scan result!: ${JSON.stringify(fingerprint)}`
            ),
        error: (error) =>
            console.error(`Wifi scan result could not be acquired: ${error}`),
    });
}

async function printBleScanUpdates(): Promise<Subscription> {
    const provider = contextApis.bleScanProvider;
    const ok = await prepareBleScanProvider(provider);

    const stream = ok
        ? provider.bleScanStream({
              reportInterval: 2000,
              scanMode: BleScanMode.LOW_LATENCY,
              iBeaconUuids: I_BEACON_UUIDS,
          })
        : of(null);

    return stream.subscribe({
        next: (bleScanResult) =>
            console.log(
                `New ble scan result!: ${JSON.stringify(bleScanResult)}`
            ),
        error: (error) =>
            console.error(`Ble scan result could not be acquired: ${error}`),
    });
}

export async function listenToActivityChanges(addListener = false) {
    for (const recognizerType of activityRecognizers) {
        try {
            await listenToActivityChangesFor(recognizerType, addListener);
        } catch (err) {
            console.error(
                `An error occurred while listening to ${recognizerType} res activity changes: ${JSON.stringify(
                    err
                )}`
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

let _preparingGeoProv: Promise<any>;
async function prepareGeolocationProvider(
    provider: GeolocationProvider
): Promise<boolean> {
    const isReady = await provider.isReady();
    if (isReady) {
        return true;
    }

    try {
        if (!_preparingGeoProv) {
            _preparingGeoProv = provider.prepare();
        }
        await _preparingGeoProv;
        return true;
    } catch (e) {
        console.error(
            `GeolocationProvider couldn't be prepared: ${JSON.stringify(e)}`
        );
        return false;
    } finally {
        _preparingGeoProv = null;
    }
}

let _preparingWifiProv: Promise<any>;
async function prepareWifiScanProvider(
    provider: WifiScanProvider
): Promise<boolean> {
    const isReady = await provider.isReady();
    if (isReady) {
        return true;
    }

    try {
        if (!_preparingWifiProv) {
            _preparingWifiProv = provider.prepare();
        }
        await _preparingWifiProv;
        return true;
    } catch (e) {
        console.error(
            `WifiScanProvider couldn't be prepared: ${JSON.stringify(e)}`
        );
        return false;
    } finally {
        _preparingWifiProv = null;
    }
}

let _preparingBleProv: Promise<any>;
async function prepareBleScanProvider(
    provider: BleScanProvider
): Promise<boolean> {
    const isReady = await provider.isReady();
    if (isReady) {
        return true;
    }

    try {
        if (!_preparingBleProv) {
            _preparingBleProv = provider.prepare();
        }
        await _preparingBleProv;
        return true;
    } catch (e) {
        console.error(
            `BleScanProvider couldn't be prepared: ${JSON.stringify(e)}`
        );
        return false;
    } finally {
        _preparingBleProv = null;
    }
}
