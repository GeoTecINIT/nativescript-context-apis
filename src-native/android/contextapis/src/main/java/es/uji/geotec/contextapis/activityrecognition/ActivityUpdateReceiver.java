package es.uji.geotec.contextapis.activityrecognition;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import es.uji.geotec.contextapis.common.ReceiverActivationCache;

public class ActivityUpdateReceiver extends BroadcastReceiver {
    private static String tag = "ActivityUpdateReceiver";

    private static ReceiverActivationCache activationCache;
    private static ActivityUpdateReceiverDelegate delegate;

    @Override
    public void onReceive(Context context, Intent intent) {
        if (context == null || intent == null) {
            return;
        }

        Log.d(tag, "Activity update received!");
        if (delegate != null) {
            delegate.onReceive(context, intent);
        } else {
            Log.w(tag, "Receiver delegate was not set! Caching method call...");
            activationCache = new ReceiverActivationCache(context, intent);
        }
    }

    public static void setActivityUpdateReceiverDelegate(ActivityUpdateReceiverDelegate receiverDelegate) {
        delegate = receiverDelegate;
        if (activationCache != null) {
            delegate.onReceive(activationCache.getContext(), activationCache.getIntent());
            activationCache = null;
        }
    }
}
