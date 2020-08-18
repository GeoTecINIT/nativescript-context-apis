import * as fs from "tns-core-modules/file-system";
import { Features } from "./feature-extraction";
import { ActivityDetected } from "../android/recognizer.android";

export type Probas = [string, number][];

export abstract class AbstractRecognizer implements Recognizer {

    protected _interpreter: org.tensorflow.lite.Interpreter;
    protected _labels: string[];
    protected options: RecognizerOptions;
    protected memory: Probas[];

    constructor() {
        this.memory = [];
    }

    abstract recognize(features: Features);

    abstract getInterpreter(): org.tensorflow.lite.Interpreter;

    predict(probas: Probas): ActivityDetected {
        return null;
    }

    initializeRecognizer(options: RecognizerOptions) {
        this.options = options;
    }

    isReady() {
        return !!this.options;
    }

    getLabels(): string[] {
        if (!this._labels) {
            const labelsPath = fs.knownFolders.currentApp().path + this.options.labelsFile;
            const content = fs.File.fromPath(labelsPath).readSync();
            this._labels = content.split("\n");
        }

        return this._labels;
    }

}

export interface Recognizer {
    recognize(features: Features);
    predict(probas: Probas): ActivityDetected;
    getInterpreter(): org.tensorflow.lite.Interpreter;
    getLabels(): string[];
}

export interface RecognizerOptions {
    localModelFile: string;
    labelsFile: string;
    predicitonMemory?: number;
    kBest?: number;
}