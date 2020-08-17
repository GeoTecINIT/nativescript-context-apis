import { AccelerometerRecorder, AccelerometerData, AccelerometerRecords } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/accelerometer-recorder";
import { AccelerometerGatherer } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/accelerometer-gatherer";

export function createAccelerometerGathererMock(): AccelerometerGatherer {
    return {
        startGathering() {
            return;
        },
        stopGathering() {
            return;
        },
        addNewRecord(data: AccelerometerData) {
            return
        }
    } as AccelerometerGatherer;
}

export function createAccelerometerRecorderMock(): AccelerometerRecorder {
    return {
        size(): number {
            return 0;
        },
        addNewRecord(accelerometerData: AccelerometerData) {
            return;
        },
        setEnoughRecordsCallback(callback: (records: AccelerometerRecords) => void) {
            return;
        },
        clearRecords() {
            return;
        },
        removeHalfRecords() {
            return;
        }
    } as unknown as AccelerometerRecorder;
}