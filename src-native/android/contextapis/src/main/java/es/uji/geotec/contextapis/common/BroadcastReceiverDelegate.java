package es.uji.geotec.contextapis.common;

import android.content.Context;
import android.content.Intent;

public interface BroadcastReceiverDelegate {
    void onReceive(Context context, Intent intent);
}
