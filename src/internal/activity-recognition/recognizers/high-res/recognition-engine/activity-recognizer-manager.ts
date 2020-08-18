import { getAccelerometerRecorder, AccelerometerRecords, AccelerometerRecorder } from "./accelerometer-recorder";
import { extractFeatureFromRecords, Features } from "./feature-extraction";
import { getAccelerometerGatherer, getRecognizer } from ".";
import { AccelerometerGatherer } from "./accelerometer-gatherer";
import { Recognizer } from "./abstract-recognizer";

export class ActivityRecognizerManager {
    constructor(private accelerometerGatherer: AccelerometerGatherer,
        private accelerometerRecorder: AccelerometerRecorder,
        private recognizer: Recognizer) {
    }

    requestActivityUpdates(): void {
        this.accelerometerRecorder.setEnoughRecordsCallback(this.enoughAccelerometerRecordsGathered);
        this.accelerometerGatherer.startGathering();
    }

    disableActivityUpdates(): void {
        this.accelerometerGatherer.stopGathering();
    }

    private enoughAccelerometerRecordsGathered(records: AccelerometerRecords): void {
        const features: Features = extractFeatureFromRecords(records);
        this.recognizer.recognize(features);
    }
}

let _instance;
export function getActivityRecognizerManager() {
    if (!_instance) {
        _instance = new ActivityRecognizerManager(
            getAccelerometerGatherer(),
            getAccelerometerRecorder(),
            getRecognizer()
        );
    }
    return _instance;
}