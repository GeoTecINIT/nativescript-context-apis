import { AbstractRecognizer, Proba, Recognizer } from "../abstract-recognizer";
import { Features, TimedFeatures } from "../feature-extraction";

import ByteBuffer = java.nio.ByteBuffer;
import { ActivityDetected } from "../..";

export class AndroidRecognizer extends AbstractRecognizer {

    constructor() {
        super();
    }

    recognize(timedFeatures: TimedFeatures): ActivityDetected {
        if (!this.isReady()) {
            return null;
        }
        const features: Features = timedFeatures.features;
        const timestamp: number = timedFeatures.timestamp;

        const inputBuffer = this.createInputBuffer(features);
        const outputBuffer = this.createOutputBuffer();

        this.getInterpreter().run(inputBuffer, outputBuffer);

        const probas: Proba = this.getMostProbable(outputBuffer);
        const activityDetected: ActivityDetected = this.buildActivityDetected(probas, timestamp);

        return activityDetected;
    }

    getInterpreter() {
        if (!this._interpreter) {
            const file = new java.io.File(this.options.localModelFilePath);
            return new org.tensorflow.lite.Interpreter(file);
        }

        return this._interpreter;
    }

    private createInputBuffer(features: Features): ByteBuffer {
        const input: ByteBuffer = this.createBuffer(features.length, java.lang.Float.SIZE);

        for (let feature of features) {
            input.putFloat(feature);
        }

        return input;
    }

    private createOutputBuffer(): ByteBuffer {
        return this.createBuffer(this.getLabels().length, java.lang.Float.SIZE);
    }

    private createBuffer(size: number, dataTypeSize: any): ByteBuffer {
        const bufferSize: number = this.getSizeInBytes(size, dataTypeSize);

        return ByteBuffer.allocateDirect(bufferSize).order(java.nio.ByteOrder.nativeOrder());
    }

    private getSizeInBytes(size: number, dataTypeSize: any): number {
        return size * dataTypeSize / java.lang.Byte.SIZE;
    }

    private getMostProbable(outputBuffer: ByteBuffer): Proba {
        outputBuffer.rewind();
        const probaBuffer: java.nio.FloatBuffer = outputBuffer.asFloatBuffer();

        const labels = this.getLabels();
        const probas = [];
        for (let i = 0; i < probaBuffer.capacity(); i++) {
            probas.push([labels[i], probaBuffer.get(i)]);
        }

        probas.sort((a, b) => b[1] - a[1]);

        return probas[0];
    }
}

let _instance: AndroidRecognizer;
export function getAndroidRecongizer(): Recognizer {
    if (!_instance) {
        _instance = new AndroidRecognizer();
    }

    return _instance;
}