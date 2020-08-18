import { AccelerometerGatherer } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/accelerometer-gatherer"
import { AccelerometerRecorder } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/accelerometer-recorder";
import { createAccelerometerGathererMock, createAccelerometerRecorderMock } from ".";
import { ActivityRecognizerManager } from "nativescript-context-apis/internal/activity-recognition/recognizers/high-res/recognition-engine/activity-recognizer-manager";

describe("Activity Recognizer Manager", () => {
    let accelerometerGatherer: AccelerometerGatherer;
    let accelerometerRecorder: AccelerometerRecorder;
    let manager: ActivityRecognizerManager

    beforeEach(() => {
        accelerometerGatherer = createAccelerometerGathererMock();
        accelerometerRecorder = createAccelerometerRecorderMock();
        manager = new ActivityRecognizerManager(
            accelerometerGatherer,
            accelerometerRecorder
        );

        spyOn(accelerometerGatherer, "startGathering");
        spyOn(accelerometerGatherer, "stopGathering");
        spyOn(accelerometerRecorder, "setEnoughRecordsCallback");
    });

    it("allows to request activity udpdates", () => {
        manager.requestActivityUpdates();
        expect(accelerometerRecorder.setEnoughRecordsCallback).toHaveBeenCalled();
        expect(accelerometerGatherer.startGathering).toHaveBeenCalled();
    })

    it("allows to disable activity updates", () => {
        manager.disableActivityUpdates();
        expect(accelerometerGatherer.stopGathering).toHaveBeenCalled();
    })
})