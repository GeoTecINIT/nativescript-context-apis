import { AndroidSensors, AndroidSensorListener, SensorDelay } from 'nativescript-android-sensors';

import { AbstractAccelerometerGatherer } from '../../recognition-engine/abstract-accelerometer-gatherer';
import { AccelerometerData, getAccelerometerRecorder, AccelerometerRecorder } from '../../recognition-engine/accelerometer-recorder';
import { AccelerometerGatherer } from '../../recognition-engine/accelerometer-gatherer';

export class AndroidAccelerometerGatherer extends AbstractAccelerometerGatherer {

    private accelerometer: android.hardware.Sensor;
    private _sensorListener;

    constructor(private sensors: AndroidSensors,
        accelerometerRecords: AccelerometerRecorder) {
        super(accelerometerRecords);
    }

    // TODO: Android Sensors plugin uses a background thread for the gathering.
    // Check if it works properly when the device has the screen off, is inactive...
    // If it doesn't work properly, a low level implementation with a service 
    // and wakelocks must be implemented.
    startGathering() {
        this.sensors.setListener(this.getSensorListener());
        this.accelerometerRecords.clearRecords();
        this.accelerometer = this.sensors.startSensor(
            android.hardware.Sensor.TYPE_ACCELEROMETER,
            SensorDelay.GAME
        );
    }

    stopGathering() {
        this.sensors.stopSensor(this.accelerometer);
    }

    private getSensorListener() {
        if (!this._sensorListener) {
            this._sensorListener = new AndroidSensorListener({
                onSensorChanged: result => {
                    const parsedData = JSON.parse(result);
                    const rawData = parsedData.data;

                    const accelerometerData: AccelerometerData = {
                        x: rawData.x,
                        y: rawData.y,
                        z: rawData.z,
                        timestamp: parsedData.time
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
            new AndroidSensors(),
            getAccelerometerRecorder()
        );
    }
    return _instance;
}