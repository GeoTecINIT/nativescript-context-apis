import { AccelerometerData } from "./accelerometer-recorder";

export interface AccelerometerGatherer {
    startGathering(): void;
    stopGathering(): void;
    addNewRecord(data: AccelerometerData): void;
}