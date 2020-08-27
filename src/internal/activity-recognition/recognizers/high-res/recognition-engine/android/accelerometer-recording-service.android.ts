import { getAndroidAccelerometerGatherer, AndroidAccelerometerGatherer } from "./accelerometer-gatherer.android";

const CHANNEL_ID = "ContextAPIs";
const CHANNEL_NAME = "ContextAPIs High Resolution Recognizer";
const NOTIFICATION_ID = 53;

export class AccelerometerRecordingService implements es.uji.geotec.contextapis.activityrecognition.AccelerometerRecordingServiceDelegate {

    private nativeService: android.app.Service;

    private sensorManager: android.hardware.SensorManager;
    private sensorListener: android.hardware.SensorEventListener;

    private notificationManager: android.app.NotificationManager;
    private wakeLock: android.os.PowerManager.WakeLock;

    public onCreate(nativeService: globalAndroid.app.Service): void {
        this.nativeService = nativeService;

        this.sensorManager = this.nativeService.getSystemService(
            android.content.Context.SENSOR_SERVICE
        ) as android.hardware.SensorManager;

        this.sensorListener = (getAndroidAccelerometerGatherer() as AndroidAccelerometerGatherer).getSensorListener();

        this.notificationManager = this.nativeService.getSystemService(android.app.NotificationManager.class);

        const powerManager = this.nativeService.getSystemService(
            android.content.Context.POWER_SERVICE
        ) as android.os.PowerManager;
        this.wakeLock = powerManager.newWakeLock(
            android.os.PowerManager.PARTIAL_WAKE_LOCK,
            "ContextApis:AccelerometerRecordingService"
        );
    }
    public onStartCommand(intent: globalAndroid.content.Intent, flags: number, startId: number): number {
        this.wakeLock.acquire();
        this.runInForegroundWithNotification();
        this.registerListener();

        return android.app.Service.START_STICKY;
    }

    public onDestroy(): void {
        this.unregisterListener();
        this.wakeLock.release();
        this.nativeService.stopForeground(true);
    }

    private registerListener() {
        const sensor = this.sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_ACCELEROMETER);
        this.sensorManager.registerListener(this.sensorListener, sensor, android.hardware.SensorManager.SENSOR_DELAY_GAME);
    }

    private unregisterListener() {
        this.sensorManager.unregisterListener(this.sensorListener);
    }

    private runInForegroundWithNotification() {
        this.createNotificationChannel();
        this.nativeService.startForeground(NOTIFICATION_ID, this.createNotification());
    }

    private createNotificationChannel() {
        const notificationChannel = new android.app.NotificationChannel(
            CHANNEL_ID,
            CHANNEL_NAME,
            android.app.NotificationManager.IMPORTANCE_HIGH
        );
        notificationChannel.setDescription("Recognition foreground notification");

        this.notificationManager.createNotificationChannel(notificationChannel);
    }

    private createNotification(): android.app.Notification {
        return new androidx.core.app.NotificationCompat.Builder(
            this.nativeService,
            CHANNEL_ID
        ).setContentTitle("ContextAPIs recognizer is working")
            .setContentText("Accelerometer data is being gathered")
            .build();
    }
}

let _instance: AccelerometerRecordingService;
export function getAccelerometerRecordingService(): AccelerometerRecordingService {
    if (!_instance) {
        _instance = new AccelerometerRecordingService();
    }

    return _instance;
}