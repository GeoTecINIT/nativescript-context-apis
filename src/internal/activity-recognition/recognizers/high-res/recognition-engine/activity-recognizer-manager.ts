import { getAccelerometerRecorder, AccelerometerRecords, AccelerometerRecorder } from "./accelerometer-recorder";
import { extractFeaturesFromRecords, TimedFeatures } from "./feature-extraction";
import { getAccelerometerGatherer, getRecognizer } from ".";
import { AccelerometerGatherer } from "./accelerometer-gatherer";
import { Recognizer } from "./abstract-recognizer";
import { getHighResRecognizer, ActivityNotifier, ActivityDetected } from "..";

export class ActivityRecognizerManager {
    constructor(private accelerometerGatherer: AccelerometerGatherer,
        private accelerometerRecorder: AccelerometerRecorder,
    ) {
    }

    requestActivityUpdates(): void {
        this.accelerometerRecorder.setEnoughRecordsCallback(this.enoughAccelerometerRecordsGathered);
        this.accelerometerGatherer.startGathering();
    }

    disableActivityUpdates(): void {
        this.accelerometerGatherer.stopGathering();
    }

    private enoughAccelerometerRecordsGathered(records: AccelerometerRecords): void {
        const features: TimedFeatures = extractFeaturesFromRecords(records);
        const activityDetected: ActivityDetected = getRecognizer().recognize(features);
        (getHighResRecognizer() as ActivityNotifier).onActivityDetected(activityDetected);
    }
}

let _instance;
export function getActivityRecognizerManager() {
    if (!_instance) {
        _instance = new ActivityRecognizerManager(
            getAccelerometerGatherer(),
            getAccelerometerRecorder()
        );
    }
    return _instance;
}