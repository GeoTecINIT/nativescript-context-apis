import { getAccelerometerGatherer } from "./accelerometer-gatherer.android";
import { getAccelerometerRecorder, AccelerometerRecords } from "../../accelerometer-recorder";
import { extractFeatureFromRecords } from "../../feature-extraction";

export class ActivityRecognizerManager {
    constructor(private accelerometerGatherer = getAccelerometerGatherer(),
        private accelerometerRecorder = getAccelerometerRecorder()) {
    }

    requestActivityUpdates(): void {
        this.accelerometerRecorder.setEnoughRecordsCallback(this.enoughAccelerometerRecordsGathered);
        this.accelerometerGatherer.startGathering();
    }

    disableActivityUpdates(): void {
        this.accelerometerGatherer.stopGathering();
    }

    private enoughAccelerometerRecordsGathered(records: AccelerometerRecords): void {
        // TODO: DO SOMETHING (⌐■_■)
        extractFeatureFromRecords(records);
    }
}

let _instance;
export function getActivityRecognizerManager() {
    if (!_instance) {
        _instance = new ActivityRecognizerManager();
    }
    return _instance;
}