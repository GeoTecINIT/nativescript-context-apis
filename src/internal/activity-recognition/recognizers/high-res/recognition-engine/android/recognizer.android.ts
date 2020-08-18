import * as fs from "tns-core-modules/file-system";
import { AbstractRecognizer, Probas } from "../abstract-recognizer";
import { Features } from "../feature-extraction";

import ByteBuffer = java.nio.ByteBuffer;
import { getAndroidHighResRecognizer, ActivityDetected } from "../../android/recognizer.android";

export class AndroidRecognizer extends AbstractRecognizer {

    constructor() {
        super();
    }

    recognize(features: Features) {
        if (!this.isReady()) {
            return;
        }

        const inputBuffer = this.createInputBuffer(features);
        const outputBuffer = this.createOutputBuffer();

        this.getInterpreter().run(inputBuffer, outputBuffer);

        const probas: Probas = this.getMostProbable(outputBuffer);
        const activityDetected: ActivityDetected = this.predict(probas);

        getAndroidHighResRecognizer().onActivityDetected(activityDetected);
    }

    getInterpreter(): org.tensorflow.lite.Interpreter {
        if (!this._interpreter) {
            const interpreterPath = fs.knownFolders.currentApp().path + this.options.localModelFile;
            const content = fs.File.fromPath(interpreterPath).readSync();
            const file = new java.io.File(interpreterPath);

            new org.tensorflow.lite.Interpreter(file);
            return new org.tensorflow.lite.Interpreter(content);
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

        return ByteBuffer.allocateDirect(size).order(java.nio.ByteOrder.nativeOrder());
    }

    private getSizeInBytes(size: number, dataTypeSize: any): number {
        return size * dataTypeSize / java.lang.Byte.SIZE;
    }

    private getMostProbable(outputBuffer: ByteBuffer): Probas {
        const limit = this.options.kBest ? this.options.kBest : 3;

        outputBuffer.rewind();
        const probaBuffer: java.nio.FloatBuffer = outputBuffer.asFloatBuffer();

        const labels = this.getLabels();
        const probas = [];
        for (let i = 0; i < probaBuffer.capacity(); i++) {
            probas.push([labels[i], probaBuffer.get(i)]);
        }

        probas.sort((a, b) => b[1] - a[1]);

        return probas.slice(0, limit);
    }
}

let _instance: AndroidRecognizer;
export function getAndroidRecongizer() {
    if (!_instance) {
        _instance = new AndroidRecognizer();
    }

    return _instance;
}