import * as fs from "tns-core-modules/file-system";
import { Features } from "./feature-extraction";

export abstract class AbstractRecognizer implements Recognizer {

    protected _interpreter: org.tensorflow.lite.Interpreter;
    protected _labels: string[];

    constructor(protected options: RecognizerOptions) {
    }

    abstract recognize(features: Features): string;

    abstract getInterpreter(): org.tensorflow.lite.Interpreter;

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
    recognize(features: Features): string;
    getInterpreter(): org.tensorflow.lite.Interpreter;
    getLabels(): string[];
}

export interface RecognizerOptions {
    localModelFile: string;
    labelsFile: string;
}