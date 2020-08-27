package es.uji.geotec.contextapis.common;

import android.app.Service;
import android.content.Intent;

public interface ServiceDelegate {
    void onCreate(Service nativeService);
    int onStartCommand(Intent intent, int flags, int startId);
    void onDestroy();
}
