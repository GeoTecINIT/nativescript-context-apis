import { getAccelerometerGatherer, AccelerometerData } from "./accelerometer-gatherer.android";

export class ActivityRecognizerManager {
    constructor(private accelerometerGatherer = getAccelerometerGatherer()) {
    }

    requestActivityUpdates(): void {
        this.accelerometerGatherer.setEnoughRecordsCallback(this.enoughAccelerometerRecordsGathered);
        this.accelerometerGatherer.startGathering();
    }

    disableActivityUpdates(): void {
        this.accelerometerGatherer.stopGathering();
    }

    private enoughAccelerometerRecordsGathered(records: AccelerometerData[]): void {
        // TODO: DO SOMETHING (⌐■_■)
    }
}

let _instance;
export function getActivityRecognizerManager() {
    if (!_instance) {
        _instance = new ActivityRecognizerManager();
    }
    return _instance;
}