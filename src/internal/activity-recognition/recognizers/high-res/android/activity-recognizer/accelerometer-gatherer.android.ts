import { AndroidSensors, AndroidSensorListener, SensorDelay } from 'nativescript-android-sensors';
import { AccelerometerRecorder, AccelerometerData, getAccelerometerRecorder } from '../../accelerometer-recorder';

export class AccelerometerGatherer {

    private accelerometer: android.hardware.Sensor;
    private accelerometerRecords: AccelerometerRecorder;
    private _sensorListener;

    constructor(private sensors = new AndroidSensors()) {
        this.accelerometerRecords = getAccelerometerRecorder();
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
                    console.log('SensorChangedEvent', result);
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
                    console.log('accuracy', accuracy);
                }
            });
        }
        return this._sensorListener;
    }

    private addNewRecord(record: AccelerometerData): void {
        this.accelerometerRecords.addNewRecord(record);
    }
}

let _instance: AccelerometerGatherer;
export function getAccelerometerGatherer(): AccelerometerGatherer {
    if (!_instance) {
        _instance = new AccelerometerGatherer();
    }
    return _instance;
}