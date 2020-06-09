package es.uji.geotec.contextapis.common;

import android.content.Context;
import android.content.Intent;

import java.lang.ref.WeakReference;

public class ReceiverActivationCache {
    private final WeakReference<Context> context;
    private final Intent intent;

    public ReceiverActivationCache(Context context, Intent intent) {
        this.context = new WeakReference<>(context);
        this.intent = intent;
    }

    public Context getContext() { return context.get(); }

    public Intent getIntent() { return intent; }
}
