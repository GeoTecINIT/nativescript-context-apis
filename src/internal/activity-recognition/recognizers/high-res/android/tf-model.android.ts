import { promisify } from "../../utils.android";
import FirebaseCustomRemoteModel = com.google.firebase.ml.custom.FirebaseCustomRemoteModel;
import FirebaseModelDownloadConditions = com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
import FirebaseModelManager = com.google.firebase.ml.common.modeldownload.FirebaseModelManager;

const MODEL_NAME = "model";
let _customModel: FirebaseCustomRemoteModel;
export async function getCustomModel(): Promise<FirebaseCustomRemoteModel> {
    if (!_customModel) {
        _customModel = new FirebaseCustomRemoteModel.Builder(
            MODEL_NAME
        ).build();

        const firebaseModelManager = FirebaseModelManager.getInstance();
        const isDownloaded = firebaseModelManager.isModelDownloaded(_customModel);

        await promisify(isDownloaded);

        const conditions = new FirebaseModelDownloadConditions.Builder().build();
        const downloadPromise = firebaseModelManager.download(_customModel, conditions);

        await promisify(downloadPromise);
    }
    return _customModel;
}

export function isCustomModelReady(): boolean {
    return !!_customModel;
}
