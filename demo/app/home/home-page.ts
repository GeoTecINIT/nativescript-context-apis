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
import { android as androidApp } from "tns-core-modules/application/application";

import { HomeViewModel } from "./home-view-model";

import { contextApis } from "nativescript-context-apis";
import { Resolution, ActivityRecognizer } from "nativescript-context-apis/activity-recognition";

import {
    GeolocationProvider,
    Geolocation,
} from "nativescript-context-apis/geolocation";
import { of, Subscription } from "rxjs";
import * as fs from "tns-core-modules/file-system";

import FirebaseCustomRemoteModel = com.google.firebase.ml.custom.FirebaseCustomRemoteModel;
import FirebaseModelManager = com.google.firebase.ml.common.modeldownload.FirebaseModelManager;
import FirebaseModelDownloadConditions = com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
import FirebaseStorage = com.google.firebase.storage.FirebaseStorage;
import StorageReference = com.google.firebase.storage.StorageReference;
import Task = com.google.android.gms.tasks.Task;
import OnSuccessListener = com.google.android.gms.tasks.OnSuccessListener;
import OnFailureListener = com.google.android.gms.tasks.OnFailureListener;
import OnCompleteListener = com.google.android.gms.tasks.OnCompleteListener;
import { RecognizerOptions } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/abstract-recognizer";
import { AndroidHighResRecognizer } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/android/recognizer.android";

const activityRecognizers = [Resolution.LOW, Resolution.MEDIUM, Resolution.HIGH];

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    let locationSubscription: Subscription;

    on(resumeEvent, () => {
        if (!_preparing) {
            printCurrentLocation().catch((err) => {
                console.error(`Could not print current location: ${err}`);
            });
            printLocationUpdates()
                .then((subscription) => (locationSubscription = subscription))
                .catch(
                    (err) =>
                        `An error occurred while getting location updates: ${err}`
                );
        }
        listenToActivityChanges();
    });

    on(suspendEvent, () => {
        if (locationSubscription) {
            locationSubscription.unsubscribe();
        }
        stopListeningToChanges();
    });

    printCurrentLocation().catch((err) => {
        console.error(`Could not print current location: ${err}`);
    });
    printLocationUpdates()
        .then((subscription) => (locationSubscription = subscription))
        .catch(
            (err) => `An error occurred while getting location updates: ${err}`
        );
    listenToActivityChanges(true);
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
        : of<Geolocation>(null);

    return stream.subscribe(
        (location) => {
            console.log(`New location acquired!: ${JSON.stringify(location)}`);
        },
        (error) =>
            console.error(`Location updates could not be acquired: ${error}`)
    );
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
            `${recognizerType} res activity recognizer is no longer listening to changes`
        );
    });
}

async function listenToActivityChangesFor(
    recognizerType: Resolution,
    addListener: boolean
) {
    const recognizer = contextApis.getActivityRecognizer(recognizerType);

    if (recognizerType === Resolution.HIGH) {
        await initializeHighResRecognizer(recognizer);
    }

    const isReady = recognizer.isReady();
    console.log(`${recognizerType} res activity ready: ${isReady}`);
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
        console.error(`GeolocationProvider couldn't be prepared: ${e}`);
        return false;
    } finally {
        _preparing = null;
    }
}

async function initializeHighResRecognizer(recognizer: ActivityRecognizer) {
    if (androidApp) {
        const options: RecognizerOptions = await downloadModelResources();
        (recognizer as AndroidHighResRecognizer).initializeRecongnizer(options);
    } else {

    }
}

async function downloadModelResources(): Promise<RecognizerOptions> {
    const localModelFilePath = await downloadModelFile();
    const labelsFilePath = await downloadLabelsFile();

    return {
        localModelFilePath,
        labelsFilePath,
    };
}

async function downloadModelFile(): Promise<string> {
    const firebaseModelManager: FirebaseModelManager = FirebaseModelManager.getInstance();
    const remoteModel: FirebaseCustomRemoteModel = new FirebaseCustomRemoteModel.Builder("mi_modelo_pocho").build();
    const conditions: FirebaseModelDownloadConditions = new FirebaseModelDownloadConditions.Builder().build();

    const downloadTask = firebaseModelManager.download(remoteModel, conditions);

    const downloadPromise = new Promise((resolve, reject) => {
        downloadTask.addOnSuccessListener(new OnSuccessListener({
            onSuccess: () => resolve()

        })).addOnFailureListener(new OnFailureListener({
            onFailure: ex => {
                console.log(ex);
                reject();
            }
        }))
    });

    await downloadPromise;

    const modelFile = firebaseModelManager.getLatestModelFile(remoteModel);
    const modelFilePromise = new Promise<java.io.File>((resolve, reject) => {
        modelFile.addOnCompleteListener(new OnCompleteListener({
            onComplete: task => {
                resolve(task.getResult());
            }
        })).addOnFailureListener(new OnFailureListener({
            onFailure: ex => {
                console.log(ex);
                reject(ex);
            }
        }))
    })

    const model: java.io.File = await modelFilePromise;
    return model.getAbsolutePath();
}

async function downloadLabelsFile(): Promise<string> {
    const storage: FirebaseStorage = FirebaseStorage.getInstance();
    const reference: StorageReference = storage.getReference("labels.txt");

    const labelsPath = fs.knownFolders.currentApp().path + fs.path.separator + "labels.txt";
    const labelsFile = new java.io.File(labelsPath);

    if (!labelsFile.exists()) {
        const downloadTask = reference.getFile(labelsFile);
        const downloadPromise = new Promise((resolve, reject) => {
            downloadTask.addOnSuccessListener(new OnSuccessListener({
                onSuccess: result => {
                    resolve();
                }
            })).addOnFailureListener(new OnFailureListener({
                onFailure: ex => {
                    reject(ex);
                }
            }));
        })

        await downloadPromise;
    }
    // TODO: Maybe check file metadata to download the file again if it has been changed.

    return labelsFile.getPath();
}
