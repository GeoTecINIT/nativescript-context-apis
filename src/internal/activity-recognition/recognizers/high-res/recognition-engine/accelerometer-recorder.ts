const LIMIT = 50;

export class AccelerometerRecorder {

    private x: number[];
    private y: number[];
    private z: number[];
    private timestamps: number[];

    private _enoughRecordsCallback: (records: AccelerometerRecords) => void;

    public get size(): number {
        return this.x.length;
    }

    constructor(private limit: number) {
        this.x = [];
        this.y = [];
        this.z = [];
        this.timestamps = [];
    }

    addNewRecord(accelerometerData: AccelerometerData) {
        this.x.push(accelerometerData.x);
        this.y.push(accelerometerData.y);
        this.z.push(accelerometerData.z);
        this.timestamps.push(accelerometerData.timestamp);

        if (this.size !== this.limit) {
            return;
        }

        const records: AccelerometerRecords = {
            x: this.x.slice(),
            y: this.y.slice(),
            z: this.z.slice(),
            timestamps: this.timestamps.slice(),

        };
        this._enoughRecordsCallback(records);
        this.removeHalfRecords();
    }

    setEnoughRecordsCallback(callback: (records: AccelerometerRecords) => void): void {
        this._enoughRecordsCallback = callback;
    }

    clearRecords() {
        this.x = [];
        this.y = [];
        this.z = [];
        this.timestamps = [];
    }

    private removeHalfRecords(): void {
        const start = this.limit / 2;
        this.x = this.x.slice(start);
        this.y = this.y.slice(start);
        this.z = this.z.slice(start);
        this.timestamps = this.timestamps.slice(start);
    }
}

export interface AccelerometerData {
    x: number;
    y: number;
    z: number;
    timestamp: number;
}

// Note that AccelerometerRecords is not the same as AccelerometerData[]
// AccelerometerRecords is an object with an array for each axis --> easier to extract features
// AccelerometerData[] is a list of objects --> difficult to extract features
export interface AccelerometerRecords {
    x: number[];
    y: number[];
    z: number[];
    timestamps: number[];
}

let _instance;
export function getAccelerometerRecorder(): AccelerometerRecorder {
    if (!_instance) {
        _instance = new AccelerometerRecorder(LIMIT);
    }

    return _instance;
}