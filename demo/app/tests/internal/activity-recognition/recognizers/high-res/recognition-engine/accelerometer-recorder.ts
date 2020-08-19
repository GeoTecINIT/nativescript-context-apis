import { AccelerometerRecorder, AccelerometerData } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/accelerometer-recorder";

describe("Accelerometer recorder", () => {
    const limit = 4;
    let recorder = new AccelerometerRecorder(limit);

    let accelerometerData: AccelerometerData = {
        x: 10,
        y: 10,
        z: 10,
        timestamp: 159766167
    }

    it("allows to add a new record", () => {
        const prevSize = recorder.size;
        recorder.addNewRecord(accelerometerData);

        expect(recorder.size).toBe(prevSize + 1);
    });

    it("allows to remove all stored records", () => {
        recorder.addNewRecord(accelerometerData);
        recorder.addNewRecord(accelerometerData);
        recorder.addNewRecord(accelerometerData);
        recorder.clearRecords();

        expect(recorder.size).toBe(0);
    })

    it("removes half records when it reached the limit", () => {
        const callbackMock = jasmine.createSpy();
        recorder.setEnoughRecordsCallback(callbackMock);
        recorder.addNewRecord(accelerometerData);
        recorder.addNewRecord(accelerometerData);
        recorder.addNewRecord(accelerometerData);
        recorder.addNewRecord(accelerometerData);

        expect(callbackMock).toHaveBeenCalled();
        expect(recorder.size).toBe(limit / 2);
    })

    afterEach(() => {
        recorder.clearRecords();
    });
})