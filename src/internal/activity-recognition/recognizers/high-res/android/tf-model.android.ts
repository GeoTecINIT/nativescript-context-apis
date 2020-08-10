import FirebaseCustomRemoteModel = com.google.firebase.ml.custom.FirebaseCustomRemoteModel;
import FirebaseModelDownloadConditions = com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
import FirebaseModelManager = com.google.firebase.ml.common.modeldownload.FirebaseModelManager;
import OnSuccessListener = com.google.android.gms.tasks.OnSuccessListener;
import OnFailureListener = com.google.android.gms.tasks.OnFailureListener;

const MODEL_NAME = "model";
let _customModel: FirebaseCustomRemoteModel;
export async function getAndroidCustomModel() {
    if (!_customModel) {
        _customModel = new FirebaseCustomRemoteModel.Builder(
            MODEL_NAME
        ).build();
        const conditions = new FirebaseModelDownloadConditions.Builder().build();

        const downloadPromise = new Promise((resolve, reject) => {
            FirebaseModelManager.getInstance()
                .download(_customModel, conditions)
                .addOnSuccessListener(
                    new OnSuccessListener({
                        onSuccess() {
                            resolve();
                        },
                    })
                )
                .addOnFailureListener(
                    new OnFailureListener({
                        onFailure(ex) {
                            reject(ex);
                        },
                    })
                );
        });

        await downloadPromise;
    }
    return _customModel;
}
