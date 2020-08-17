import { AccelerometerRecorder, getAccelerometerRecorder, AccelerometerData } from "./accelerometer-recorder";
import { AccelerometerGatherer } from "./accelerometer-gatherer";

export abstract class AbstractAccelerometerGatherer implements AccelerometerGatherer {

    constructor(protected accelerometerRecords: AccelerometerRecorder) {
    }

    abstract startGathering();

    abstract stopGathering();

    addNewRecord(record: AccelerometerData): void {
        this.accelerometerRecords.addNewRecord(record);
    }
}