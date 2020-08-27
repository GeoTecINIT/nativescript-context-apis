import { android as androidApp } from "tns-core-modules/application/application";

import { AbstractAccelerometerGatherer } from '../abstract-accelerometer-gatherer';
import { AccelerometerData, getAccelerometerRecorder, AccelerometerRecorder } from '../accelerometer-recorder';
import { AccelerometerGatherer } from '../accelerometer-gatherer';

export class AndroidAccelerometerGatherer extends AbstractAccelerometerGatherer {

    private _sensorListener: android.hardware.SensorEventListener;
    private _intent: android.content.Intent;

    constructor(accelerometerRecords: AccelerometerRecorder) {
        super(accelerometerRecords);
    }

    startGathering() {
        this.accelerometerRecords.clearRecords();
        androidx.core.content.ContextCompat.startForegroundService(androidApp.context, this.getServiceIntent());
    }

    stopGathering() {
        androidApp.context.stopService(this.getServiceIntent());
    }

    private getServiceIntent(): android.content.Intent {
        if (!this._intent) {
            this._intent = new android.content.Intent();
            const componentRef = new android.content.ComponentName(
                androidApp.context,
                "es.uji.geotec.contextapis.activityrecognition.AccelerometerRecordingService"
            );
            this._intent.setComponent(componentRef);
        }
        return this._intent;
    }

    public getSensorListener(): android.hardware.SensorEventListener {
        if (!this._sensorListener) {
            this._sensorListener = new android.hardware.SensorEventListener({
                onSensorChanged: event => {
                    if (event.sensor.getType() !== android.hardware.Sensor.TYPE_ACCELEROMETER) {
                        return;
                    }

                    const values = event.values;
                    const accelerometerData: AccelerometerData = {
                        x: values[0],
                        y: values[1],
                        z: values[2],
                        timestamp: java.lang.System.currentTimeMillis()
                    };
                    this.addNewRecord(accelerometerData);
                },
                onAccuracyChanged: (
                    sensor: android.hardware.Sensor,
                    accuracy: number
                ) => {
                    console.log('AccuracyChanged:', accuracy);
                }
            });
        }
        return this._sensorListener;
    }
}

let _instance: AccelerometerGatherer;
export function getAndroidAccelerometerGatherer(): AccelerometerGatherer {
    if (!_instance) {
        _instance = new AndroidAccelerometerGatherer(
            getAccelerometerRecorder()
        );
    }
    return _instance;
}