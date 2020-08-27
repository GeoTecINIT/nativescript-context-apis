package es.uji.geotec.contextapis.activityrecognition;

import android.annotation.SuppressLint;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

import es.uji.geotec.contextapis.common.ServiceActivationCache;

public class AccelerometerRecordingService extends Service {

    private static String tag = "AccelerometerRunnerService";

    @SuppressLint("StaticFieldLeak")
    private static ServiceActivationCache activationCache;
    private static AccelerometerRecordingServiceDelegate delegate;

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(tag, "Native onCreate method called! Wait for it...");
        if (delegate != null) {
            delegate.onCreate(this);
        } else {
            Log.w(tag, "Service delegate was not set! Caching method call...");
            activationCache = new ServiceActivationCache();
            activationCache.onCreateEarlyCalled(this);
        }
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        super.onStartCommand(intent, flags, startId);
        Log.d(tag, "Native onStartCommand method called! Wait for it...");
        if (delegate != null) {
            return delegate.onStartCommand(intent, flags, startId);
        }

        Log.w(tag, "Service delegate was not set! Caching method call...");
        activationCache.onStartCommandEarlyCalled(intent, flags, startId);
        return START_REDELIVER_INTENT;
    }

    @Override
    public void onDestroy() {
        Log.d(tag, "Native onDestroy method called! Wait for it...");
        if (delegate != null) {
            delegate.onDestroy();
        } else {
            Log.w(tag, "Service delegate was not set! Cleaning up!");
            activationCache = null;
        }
        super.onDestroy();
    }

    public static void setAccelerometerRecordingServiceDelegate(AccelerometerRecordingServiceDelegate serviceDelegate) {
        delegate = serviceDelegate;
        if (activationCache == null) return;
        if (activationCache.onCreateWasEarlyCalled()) {
            delegate.onCreate(activationCache.getService());
            activationCache.onCreateEarlyCalledHandled();
        }
        if (activationCache.onStartCommandWasEarlyCalled()) {
            delegate.onStartCommand(
                    activationCache.getStartIntent(),
                    activationCache.getStartFlags(),
                    activationCache.getStartId()
            );
            activationCache.onStartCommandEarlyCalledHandled();
        }
    }
}
