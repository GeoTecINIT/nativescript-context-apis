import { getAccelerometerRecorder, AccelerometerRecords, AccelerometerRecorder } from "./accelerometer-recorder";
import { extractFeatureFromRecords, Features } from "./feature-extraction";
import { getAccelerometerGatherer } from ".";
import { AccelerometerGatherer } from "./accelerometer-gatherer";

export class ActivityRecognizerManager {
    constructor(private accelerometerGatherer: AccelerometerGatherer,
        private accelerometerRecorder: AccelerometerRecorder) {
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
        // TODO: DO SOMETHING (⌐■_■)
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