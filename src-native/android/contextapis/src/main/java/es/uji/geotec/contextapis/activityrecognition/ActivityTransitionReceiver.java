package es.uji.geotec.contextapis.activityrecognition;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import es.uji.geotec.contextapis.common.ReceiverActivationCache;

public class ActivityTransitionReceiver extends BroadcastReceiver {
    private static String tag = "ActivityTransitionReceiver";

    private static ReceiverActivationCache activationCache;
    private static ActivityTransitionReceiverDelegate delegate;

    @Override
    public void onReceive(Context context, Intent intent) {
        if (context == null || intent == null) {
            return;
        }

        Log.d(tag, "Activity transition received!");
        if (delegate != null) {
            delegate.onReceive(context, intent);
        } else {
            Log.w(tag, "Receiver delegate was not set! Caching method call...");
            activationCache = new ReceiverActivationCache(context, intent);
        }
    }

    public static void setActivityTransitionReceiverDelegate(ActivityTransitionReceiverDelegate receiverDelegate) {
        delegate = receiverDelegate;
        if (activationCache != null) {
            delegate.onReceive(activationCache.getContext(), activationCache.getIntent());
            activationCache = null;
        }
    }
}
