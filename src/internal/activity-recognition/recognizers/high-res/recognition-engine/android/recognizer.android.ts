import * as fs from "tns-core-modules/file-system";
import { AbstractRecognizer, RecognizerOptions } from "../abstract-recognizer";
import { Features } from "../feature-extraction";


export class AndroidRecognizer extends AbstractRecognizer {

    constructor(options: RecognizerOptions) {
        super(options);
    }

    recognize(features: Features): string {
        return "";
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
}

let _instance: AndroidRecognizer;
export function getAndroidRecongizer(options?: RecognizerOptions) {
    if (!_instance) {
        _instance = new AndroidRecognizer(options);
    }

    return _instance;
}