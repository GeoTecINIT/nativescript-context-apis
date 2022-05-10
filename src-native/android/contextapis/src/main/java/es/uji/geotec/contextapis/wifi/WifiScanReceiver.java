package es.uji.geotec.contextapis.wifi;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class WifiScanReceiver extends BroadcastReceiver {
    private static String tag = "WifiScanReceiver";

    private final WifiScanReceiverDelegate delegate;

    public WifiScanReceiver(WifiScanReceiverDelegate delegate) {
        this.delegate = delegate;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if (context == null || intent == null) {
            return;
        }

        Log.d(tag, "Wifi scan received!");
        delegate.onReceive(context, intent);
    }
}
