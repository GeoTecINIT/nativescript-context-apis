# NativeScript Context APIs

[![npm](https://img.shields.io/npm/v/nativescript-context-apis.svg)](https://www.npmjs.com/package/nativescript-context-apis)
[![npm](https://img.shields.io/npm/dm/nativescript-context-apis.svg)](https://www.npmjs.com/package/nativescript-context-apis)
[![Build Status](https://dev.azure.com/GeoTecINIT/nativescript-context-apis/_apis/build/status/GeoTecINIT.nativescript-context-apis?branchName=master)](https://dev.azure.com/GeoTecINIT/nativescript-context-apis/_build/latest?definitionId=1&branchName=master)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.6866226.svg)](https://doi.org/10.5281/zenodo.6866226)

Painless access to contextual information for your NativeScript apps. Does your app need to know where are your users located? See the Wi-Fi APs that surround them? Maybe the nearby BLE devices? Or perhaps which kind of activities are they doing? If the answer to any of these questions is yes, then, this is your plugin.

Currently we offer:

| Information source                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Android | iOS     |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|
| **Current user location and location stream (with distance filtering)**                       | Coarse- and fine-grained location reporting. We offer the functionality set by the [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation) plugin, extending it with [RxJS Observable](https://rxjs-dev.firebaseapp.com/guide/observable) streams for location stream. By obtaining user locations wrapped in an Observable, you'll able to filter them, take the best one among a small amount or control the stream quite easily by means of the [RxJS Operators](https://rxjs-dev.firebaseapp.com/guide/operators).                                                                                                                                                                                                                    | ✅       | ✅       |
| **Coarse- and medium-grained human activity detection**                                       | Coarse activity detection (user being still, walking, running, riding a bike or on a vehicle) will notify your app when the user starts or ends an activity and when did that happen. Medium grained detection will allow you to specify the detection interval and leaves for you in-activity filtering. For example, the plugin will report a transition from being in a vehicle to being still when the vehicle stops at a traffic light, thing that does not happen with the coarse activity detection mechanism. [More info here](https://developers.google.com/android/reference/com/google/android/gms/location/ActivityRecognitionClient).                                                                                                                     | ✅       | Planned |
| **List current nearby Wi-Fi APs (a.k.a Wi-Fi fingerprinting) and obtain fingerprint updates** | Simple and batched Wi-Fi fingerprint reporting. We offer two ways of obtaining updates regarding nearby Wi-Fi APs: at a fixed, faster rate (with duplicates) and at the minimum slower rate which ensures all reported scans are new. The later either can be configured to offer a continuous flow of single scans (no grouping) or to provide scans in batches of 2 (intermediate grouping) or 4 (maximum grouping) fingerprints, complying with the latest limitations of the Android OS. Similarly to location updates, wifi scans can be delivered through [RxJS Observable](https://rxjs-dev.firebaseapp.com/guide/observable), hence allowing all the powerful [RxJS Operators](https://rxjs-dev.firebaseapp.com/guide/operators) to be applied on top of them. | ✅       | ❌       |
| **List current nearby BLE devices and obtain updates regarding their presence**               | Simple and batched BLE scan reporting. The interval and the mode of the scan can be configured, making it suitable for multiple use cases. By combining a scanning of 0 reporting interval with a low latency mode, devices can be reported as soon as they are detected. Whilst more energy-efficient strategies are possible with larger reporting intervals and low power usage modes. Equally to location and Wi-Fi fingerprint updates, BLE scan updates are delivered through [RxJS Observable](https://rxjs-dev.firebaseapp.com/guide/observable), thus offering a lot of flexibility to process the list of detected devices.                                                                                                                                  | ✅       | ❌       |

What we plan to offer in the future:
- Low level access to on-device sensors (accelerometer, gyroscope, compass, etc.).
- Human activity detection in iOS too.
- A whole new fine-grained human activity detection mechanism, based on real-time sensor monitoring.
- User location reverse geocoding.
- Weather at current user location. 

## Prerequisites

### Android only

> Android SDK 22 (5.1) is required as a minimum due to the dependency of this plugin on [@triniwiz/nativescript-couchbase](https://github.com/triniwiz/nativescript-plugins/tree/master/packages/nativescript-couchbase)

#### Google Play Services conflicts

Given that we rely on [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation) and use Google Play Services APIs for activity detection on Android devices, you might find Google Play Services version conflicts with other installed plugins.

In order to avoid them, we advise you to force a specific Google Play Services version. For a better human activity detection functionality, version 17 or above is highly recommended. In order to do so, please, indicate the Google Play Services Version number in your `app/App_Resources/Android/before-plugins.gradle` file (if the file does not exist, just create it):

```gradle
android {  
  // other things here

  project.ext {
    googlePlayServicesVersion = "17.+"
  }
}
```

#### Permissions

Next, for each one of the information sources that this plugin offers, you can see the permissions that need to be added to you app's `AndroidManifest.xml` located inside the `App_Resources/Android/src/main` directory.

> **Note**: If your app is expected to use more than one of the information sources offered by this plugin, **we advise to avoid just copying and pasting the content of each of the following sections** inside your application manifest. Check twice for duplicated permissions (e.g., location permissions necessary for both location and Wi-Fi to work) to avoid possible manifest merging errors. 

Click on each of the collapsible sections bellow to see the specific permissions required by each information source:

<details>

<summary>Geolocation</summary>

In order to access geolocation in Android, you'll need to add the following permission(s) to your app's `AndroidManifest.xml`:

```xml
<!-- Always include this permission if your app needs location access -->
<!-- This permission is for "approximate" location data -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

<!-- Include only if your app benefits from precise location access. -->
<!-- This permission is for "precise" location data -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

<!-- Required only when requesting background location access on Android 10 (API level 29) and higher. -->
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

More information can be found in the [Android docs here](https://developer.android.com/training/location/permissions).

> Source: [https://github.com/NativeScript/nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation)

</details>

<details>

<summary>Human activity detection</summary>

In order to receive human activity changes in Android, you'll need to add the following permission(s) to your app's `AndroidManifest.xml`:

```xml
<!-- The following two permissions are required if your app wants to receive human activity changes -->
<uses-permission android:name="com.google.android.gms.permission.ACTIVITY_RECOGNITION"/>
<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION"/>
```

More information can be found in the [Android docs here](https://developer.android.com/about/versions/10/privacy/changes#physical-activity-recognition).

</details>

<details>

<summary>Wi-Fi scan updates</summary>

In order to receive Wi-Fi scan updates in Android, you'll need to add the following permission(s) to your app's `AndroidManifest.xml`:

```xml
<!-- ALL the following permissions are required in order to ask and retrieve Wi-Fi scan updates -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
```

More information can be found in the [Android docs here](https://developer.android.com/guide/topics/connectivity/wifi-scan).

</details>

<details>

<summary>BLE scan updates</summary>

In order to receive BLE scan updates in Android, you'll need to add the following permission(s) to your app's `AndroidManifest.xml`:

```xml
<!-- ALL the following permissions are required in order to ask and retrieve BLE scan updates -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
<uses-permission android:name="android.permission.BLUETOOTH_SCAN"/>
```

More information can be found in the [Android docs here](https://developer.android.com/reference/android/bluetooth/le/BluetoothLeScanner#startScan(android.bluetooth.le.ScanCallback)).

Additionally, the BLE scanning API uses the [well-known scanning library](https://github.com/NordicSemiconductor/Android-Scanner-Compat-Library) developed by Nordic Semiconductors. To ensure this library is only included when the BLE scanning apis are meant to be accessed. To do that, you'll have to update your app's `app.gradle` file located inside the `App_Resources/Android/src` folder as follows:

```gradle
// Uncomment
dependencies {
    implementation 'no.nordicsemi.android.support.v18:scanner:1.6.0'
}
```

</details>

## Installation

Run the following command in your project's root folder.

NS7+:

```bash
ns plugin add nativescript-context-apis
```

NS6:
```bash
tns plugin add nativescript-context-apis@1
```

(Optional) You'll need RxJS also to properly work with geolocation streams

NS7+:
```bash
npm install rxjs --save
```

NS6:
```bash
npm install rxjs@6 --save
```

## Usage 

### For human activity detection only

For activity detection to properly work, we need to wire native and JavaScript/TypeScript code somewhere.

The best place to do it is in your app's entry point script. You'll need to add a couple of lines to it:

```ts
// app.ts / main.ts
// TypeScript App:
import * as app from "tns-core-modules/application";
// or Angular App:
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app/app.module";

// NativeScript Task Context APIs plugin import
// (always between imports and app initialization)
import { contextApis } from "nativescript-context-apis";

contextApis.init().catch((err) => {
  // You can catch initialization errors here
});

// TypeScript App:
app.run({ moduleName: "app-root" });
// Angular App:
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

### Geolocation

In case you want to obtain geolocation updates, first you'll need to check if you have permissions to do so and if not, ask for them as follows:

```ts
import { contextApis } from "nativescript-context-apis";

async function checkGeolocationAccessStatus(): Promise<void> {
    const provider = contextApis.geolocationProvider;
    const isReady = await provider.isReady();
    if (!isReady) {
      await provider.prepare();
    }
}
```

Once done (keep in mind that `isReady()` and `prepare()` methods are asynchronous), you'll be able to ask for current user's location or a stream of locations:

```ts
import { contextApis } from "nativescript-context-apis";

// You can get the current location like this
async function printCurrentLocation() {
    const provider = contextApis.geolocationProvider;
    const location = await provider.acquireLocation({
            highAccuracy: true, // Accuracy is high by default
            timeout: 5000, // You can also specify the operation timeout (highly advised)
        });
    console.log("Current location:", location);
}

// Or a location stream
import { Subscription } from "rxjs";

async function printLocationUpdates(): Promise<Subscription> {
    const provider = contextApis.geolocationProvider;
    
    const stream = provider.locationStream({
          highAccuracy: true, // Again, accuracy is high by default
          stdInterval: 1000, // The location fetch interval
          minInterval: 100, // Opportunistic interval (another app asked for a location)
          timeout: 5000, // You can also specify the operation timeout (highly advised)
          maxAge: 60000, // And filter-out old locations
      });

    return stream.subscribe({
        next: (location) =>
            console.log("New location acquired!:", location),
        error: (error) =>
            console.error("Location updates could not be acquired:", error)
    });
}
```

### Human activity detection

In case you want to obtain coarse grained human activity changes, first you'll need to check if you have permissions to do so and if not, ask them for as follows:

```ts
import { contextApis } from "nativescript-context-apis";
import { Resolution } from "nativescript-context-apis/activity-recognition";

async function checkActivityRecognitionStatus(): Promise<void> {
    const recognizer = contextApis.getActivityRecognizer(Resolution.LOW);
    const isReady = recognizer.isReady();
    if (!isReady) {
        console.log(
            `Up to prepare coarse-grained activity recognizer...`
        );
        await recognizer.prepare();
    }
    console.log(`Coarse-grained activity recognizer is ready`);
}
```

> Note: If you want to use the medium-grained recognizer, just replace `Resolution.LOW` with `Resolution.MEDIUM`.

Then you will be able to add or remove activity change listeners.

```ts
import { contextApis } from "nativescript-context-apis";
import { Resolution } from "nativescript-context-apis/activity-recognition";

const recognizer = contextApis.getActivityRecognizer(Resolution.LOW);

// Register a listener
const listenerId = recognizer.listenActivityChanges((activityChange) => {
  console.log("ActivityChange:", activityChange);
});
console.log(`Coarse-grained activity recognizer has registered a listener (id: ${listenerId})`);

// ...
// Somewhere else
// ...

// Deregister a concrete listener
recognizer.stopListening(listenerId);
// Or all of them
recognizer.stopListening();
```

After registering your listeners, you will be all set to indicate the activity recognizer to start or stop recognizing activity changes

```ts
import { contextApis } from "nativescript-context-apis";
import { Resolution } from "nativescript-context-apis/activity-recognition";

const recognizer = contextApis.getActivityRecognizer(Resolution.LOW);

// Start recognizing
recognizer.startRecognizing();

// ...
// Somewhere else
// ...

// Stop recognizing
recognizer.stopRecognizing();
```

> Note: Thanks to plugin design recognition state will be kept even if your app gets closed, or the device gets rebooted. It is safe to call multiple times to startRecognizing method. If you want to change your start parameters, stop recognizing first. It is also safe to call multiple times to stopRecognizing method, even if the recognizer is not running.

### Nearby Wi-Fi APs updates

In case you want to obtain Wi-Fi scan updates, first you'll need to check if you have permissions to do so and if not, ask for them as follows:

```ts
import { contextApis } from "nativescript-context-apis";

async function checkWifiScanAccessStatus(): Promise<void> {
    const provider = contextApis.wifiScanProvider;
    const isReady = await provider.isReady();
    if (!isReady) {
      await provider.prepare();
    }
}
```

Once done (keep in mind that `isReady()` and `prepare()` methods are asynchronous), you'll be able to ask for current nearby Wi-Fi APs' information or a stream of Wi-Fi scan updates:

```ts
import { contextApis } from "nativescript-context-apis";

// You can get the current nearby Wi-Fi APs' information like this
async function printCurrentNearbyWiFiAPs() {
    const provider = contextApis.wifiScanProvider;
    const scanResult = await provider.acquireWifiFingerprint(
            true // Ensures the scan result is new (true by default), 
                 // thus adhering to Android OS Wi-Fi scanning limits: 
                 // https://developer.android.com/guide/topics/connectivity/wifi-scan#wifi-scan-throttling
        );
    console.log("Current nearby Wi-Fi APs:", scanResult);
}

// Or a Wi-Fi scan updates stream
import { Subscription } from "rxjs";
import { FingerprintGrouping } from "nativescript-context-apis/wifi";

async function printWifiScanUpdates(): Promise<Subscription> {
    const provider = contextApis.wifiScanProvider;
    
    const stream = provider.wifiFingerprintStream({
        ensureAlwaysNew: true, // Identical in purpose to the parameter in acquireWifiFingerpint()
        grouping: FingerprintGrouping.NONE, // Configure Wi-Fi scan updates batching (see API bellow)
        continueOnFailure: true, // Determines if the stream has to report any scanning error and close
      });

    return stream.subscribe({
        next: (fingerprint) =>
            console.log("New wifi scan result!:", fingerprint),
        error: (error) =>
            console.error("Wifi scan result could not be acquired:", error),
    });
}
```

### Nearby BLE devices updates

In case you want to obtain BLE scan updates, first you'll need to check if you have permissions to do so and if not, ask for them as follows:

```ts
import { contextApis } from "nativescript-context-apis";

async function checkBleScanAccessStatus(): Promise<void> {
    const provider = contextApis.bleScanProvider;
    const isReady = await provider.isReady();
    if (!isReady) {
      await provider.prepare();
    }
}
```

Once done (keep in mind that `isReady()` and `prepare()` methods are asynchronous), you'll be able to ask for current nearby BLE devices' information or a stream of BLE scan updates:

```ts
import { contextApis } from "nativescript-context-apis";
import { BleScanMode } from "nativescript-context-apis/ble";

// You can get the current nearby BLE devices' information like this
async function printCurrentNearbyBleDevices() {
    const provider = contextApis.bleScanProvider;
    const scanResult = await provider.acquireBleScan({
        scanTime: 5000, // (optional) when not specified it will wait until seeing a device and inmediatelly return, 
                        // otherwise it accumulates the seen devices and outputs after the scan time finishes.
                        // It may throw a timeout when used in conjunction with a list of iBeacon UUIDs 
                        // (in case no known beacon has been detected in the meantime)  
        scanMode: BleScanMode.BALANCED, // (optional) Can be LOW_POWER or LOW_LATENCY too. BALANCED by default
        iBeaconUuids: [
            // (optional) add a list of iBeacon UUIDs if you're just looking for known beacons
        ],
    });
    console.log("Current nearby BLE devices:", scanResult);
}

// Or a BLE scan updates stream
import { Subscription } from "rxjs";

async function printWifiScanUpdates(): Promise<Subscription> {
    const provider = contextApis.bleScanProvider;
    
    const stream = provider.bleScanStream({
        reportInterval: 2000, // (optional) when not specified it will output a result as soon as a device is seen, 
                              // otherwise it accumulates the detected devices and outputs when told
        scanMode: BleScanMode.LOW_LATENCY, // (optional) same as for the acquire method
        iBeaconUuids: [
            // (optional) Same as for the acquire method
        ],
    })

    return stream.subscribe({
        next: (bleScanResult) =>
            console.log(
                `New ble scan result!: ${JSON.stringify(bleScanResult)}`
            ),
        error: (error) =>
            console.error(`Ble scan result could not be acquired: ${error}`),
    });
}
```

> Note: Check plugin demo app for further usage details

## API

| Method signature                                                                   | Return type                                   | Description                                                                                        |
|------------------------------------------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------|
| init()                                                                             | `Promise<void>`                               | Meant to be called on application start. Only needed if your app listens to human activity changes |
| geolocationProvider                                                                | [`GeolocationProvider`](#geolocationprovider) | Property which gives access to the geolocation provider singleton                                  |
| getActivityRecognizer(resolution: [Resolution](#available-recognizer-resolutions)) | [`ActivityRecognizer`](#activityrecognizer)   | Meant to be called on application start. Only needed if your app listens to human activity changes |
| wifiScanProvider                                                                   | [`WifiScanProvider`](#wifiscanprovider)       | Property which gives access to the Wi-Fi scan provider singleton                                   |
| bleScanProvider                                                                    | [`BleScanProvider`](#blescanprovider)         | Property which gives access to the BLE scan provider singleton                                     |

Click on each of the collapsible sections bellow to see more API details for each information source:

<details>

<summary>Geolocation access</summary>

#### [Geolocation](./src/internal/geolocation/geolocation.ts)

| Property           | Type     | Description                                    |
|--------------------|----------|------------------------------------------------|
| latitude           | `number` | Location's latitude                            |
| longitude          | `number` | Location's longitude                           |
| altitude           | `number` | Location's altitude                            |
| horizontalAccuracy | `number` | Location's horizontal accuracy (in meters)     |
| verticalAccuracy   | `number` | Location's vertical accuracy (in meters)       |
| speed              | `number` | Speed by the time of the location fix (in m/s) |
| direction          | `number` | Location bearing (in degrees)                  |
| timestamp          | `Date`   | Time of the location fix                       |

| Method signature                               | Return type | Description                                                                                                |
|------------------------------------------------|-------------|------------------------------------------------------------------------------------------------------------|
| distance(to: Geolocation _OR_ GeolocationLike) | `number`    | Allows to check the distance from a geolocation to another or a [GeolocationLike](#geolocationlike) object |

#### [GeolocationLike](./src/internal/geolocation/geolocation.ts) (Interface)

Same as [Geolocation](#geolocation), but only latitude and longitude are mandatory. The rest of the attributes are optional.

#### Geolocation acquire options

Before requesting user's current location some options can be customized in order to achieve the expected result.

| Property        | Type      | Description                                                                                      |
|-----------------|-----------|--------------------------------------------------------------------------------------------------|
| highAccuracy    | `boolean` | Indicate if high accuracy (battery consuming) geolocation should be used. True by default        |
| timeout         | `number`  | Location fix maximum wait time. 5 minutes by default                                             |
| allowBackground | `boolean` | (iOS only) indicate if the location is going to be collected in the background. False by default |

> Note: These options are identical (only the name changes) to the ones from [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation). Check plugin docs in case of doubt.

#### Geolocation stream options

Before requesting user's location updates some options can be customized in order to achieve the expected result.

| Property        | Type      | Description                                                                                                                                                                 |
|-----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| highAccuracy    | `boolean` | Indicate if high accuracy (battery consuming) geolocation should be used. True by default                                                                                   |
| distanceFilter  | `number`  | The distance in meters that the user has to cover before reporting a new location. None by default                                                                          |
| stdInterval     | `number`  | (Android only) The standard location fetch interval (in milliseconds). 1 minute by default                                                                                  |
| minInterval     | `number`  | (Android only) Opportunistic location report interval (in milliseconds). 5 seconds by default. Used when another app requests the location of the user at a higher interval |
| maxAge          | `number`  | How old at a maximum reported locations can be (in milliseconds from `Date.now()`). Unlimited by default                                                                    |
| timeout         | `number`  | Location fix maximum wait time. 5 minutes by default                                                                                                                        |
| allowBackground | `boolean` | (iOS only) indicate if the location is going to be collected in the background. False by default                                                                            |
| saveBattery     | `boolean` | (iOS only) indicate location reporting should be paused when app is no longer visible. True by default                                                                      |

> Note: These options are identical (only the name changes) to the ones from [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation). Check plugin docs in case of doubt.

#### [GeolocationProvider](./src/internal/geolocation/index.ts)

| Method signature                                                         | Return type               | Description                                                                                                                                              |
|--------------------------------------------------------------------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| isReady()                                                                | `boolean`                 | Allows to check if the provider is ready or not (i.e., required permissions have been granted)                                                           |
| prepare()                                                                | `Promise<boolean>`        | Allows to prepare the provider for its usage (i.e., ask the required permissions). **WARNING! Only call this method if your app is visible to the user** |
| acquireLocation(options: [AcquireOptions](#geolocation-acquire-options)) | `Promise<Geolocation>`    | Allows to obtain user's current location                                                                                                                 |
| locationStream(options: [StreamOptions](#geolocation-stream-options))    | `Observable<Geolocation>` | Allows to actively obtain user's location updates                                                                                                        |

</details>

<details>

<summary>Human activity recognition</summary>

#### Available recognizer resolutions

| Type                | Description                                                                                 |
|---------------------|---------------------------------------------------------------------------------------------|
| `Resolution.LOW`    | Coarse-grained activity recognition. Activity changes are delivered in a push-based manner. |
| `Resolution.MEDIUM` | Medium-grained activity recognition. Activity changes are queried at a configurable delay   |
| `Resolution.HIGH`   | _Available soon_                                                                            |

#### Available human activities

| Type                       | Description                               |
|----------------------------|-------------------------------------------|
| `HumanActivity.STILL`      | No significant movement has been detected |
| `HumanActivity.WALKING`    | Low frequency on-foot movements           |
| `HumanActivity.RUNNING`    | High frequency on-foot movements          |
| `HumanActivity.ON_BICYCLE` | The device is worn while riding a bicycle |
| `HumanActivity.IN_VEHICLE` | The device is commuting at a high speed   |
| `HumanActivity.TILTING`    | Device's angle has changed noticeably     |

#### Available activity transitions

| Type                 | Description                            |
|----------------------|----------------------------------------|
| `Transition.STARTED` | The related human activity has started |
| `Transition.ENDED`   | The related human activity has ended   |

#### [ActivityChange](./src/internal/activity-recognition/activity-change.ts)

| Property   | Type                                            | Description                                                                                               |
|------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| type       | [`HumanActivity`](#available-human-activities)  | The human activity whose change has been detected                                                         |
| transition | [`Transition`](#available-activity-transitions) | Indicates if the activity has started or ended                                                            |
| confidence | `number`                                        | If the underlying recognizer supports it, the degree of confidence of the detected activity (from 0 to 1) |
| timestamp  | `Date`                                          | Indicates when was the activity change detected                                                           |

#### Activity recognizer [StartOptions](./src/internal/activity-recognition/recognizers/index.ts)

| Property          | Type     | Description                                                                                                           |
|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| detectionInterval | `number` | (Optional) Allows to specify recognizer detection interval (ignored in `Resolution.LOW` due to its push-based nature) |

#### [ActivityRecognizer](./src/internal/activity-recognition/recognizers/index.ts)

| Method signature                                                              | Return type        | Description                                                                                                                                                         |
|-------------------------------------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isReady()                                                                     | `boolean`          | Allows to check if the activity recognizer is ready or not (i.e., required permissions have been granted)                                                           |
| prepare()                                                                     | `Promise<boolean>` | Allows to prepare the activity recognizer for its usage (i.e., ask the required permissions). **WARNING! Only call this method if your app is visible to the user** |
| setup()                                                                       | `Promise<void>`    | For internal usage only. Allows to adjust the recognizer to the previous state before the app was closed                                                            |
| startRecognizing(options?: [StartOptions](#activity-recognizer-startoptions)) | `Promise<void>`    | Tell the activity recognizer to start working                                                                                                                       |
| stopRecognizing()                                                             | `Promise<void>`    | Tell the activity recognizer to stop working                                                                                                                        |
| listenActivityChanges(callback: (activityChange: ActivityChange) => void)     | `number`           | Add an activity changes listener                                                                                                                                    |
| stopListening(listenerId?: number)                                            | `void`             | Remove an activity changes listener. If no listener number is passed by, all the listeners will be removed instead                                                  |

</details>

<details>

<summary>Nearby Wi-Fi APs' information access</summary>

#### [WifiFingerprint](./src/internal/wifi/fingerprint.ts)

| Property  | Type                               | Description                                                                                                                                                                                        |
|-----------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| seen      | [`Array<WifiApInfo>`](#wifiapinfo) | The list of APs (and their information) which have been seen during this scan                                                                                                                      |
| isNew     | `boolean`                          | Indicates if the fingerprint results from a successful Wi-Fi scan or comes from a cached result (e.g., when OS throttling enters into play)                                                        |
| timestamp | `Date`                             | The timestamp at which the fingerprint has been generated. Please note, two identical fingerprints (one new, and the other cached) can have different timestamps and still be the same fingerprint |

#### [WifiApInfo](./src/internal/wifi/fingerprint.ts)

| Property     | Type                                    | Description                                                                                                        |
|--------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| ssid         | `string`                                | AP SSID (can be empty in case the AP is not broadcasting its SSID)                                                 |
| bssid        | `string`                                | AP BSSID (MAC address)                                                                                             |
| capabilities | `string`                                | A list containing the AP security capabilities                                                                     |
| frequency    | `number`                                | The frequency in which the AP has been seen                                                                        |
| centerFreq0  | `number`                                | See [Android docs](https://developer.android.com/reference/android/net/wifi/ScanResult#centerFreq0)                |
| centerFreq1  | `number`                                | See [Android docs](https://developer.android.com/reference/android/net/wifi/ScanResult#centerFreq1)                |
| bandwidth    | [`ChannelBandwidth`](#channelbandwidth) | The bandwidth the AP is using to broadcast (see linked enum to know the possible supported values)                 |
| standard     | [`WifiStandard`](#wifistandard)         | The Wi-Fi standard used by the detected AP (see linked enum to know the possible supported values)                 |
| ageMicros    | `number`                                | The number of microseconds (counting from phone boot) after which this AP has been seen                            |
| chainsInfo   | [`WifiChainInfo`](#wifistandard)        | Information of each of the links used by the device to connect to this specific AP (see linked interface for more) |
| rssi         | `number`                                | The received signal level with which this app has been seen during the scan                                        |

#### [ChannelBandwidth](./src/internal/wifi/fingerprint.ts)

| Type                           | Description                                                                              |
|--------------------------------|------------------------------------------------------------------------------------------|
| `ChannelBandwidth.UNSPECIFIED` | The channel bandwidth cannot be discerned by the phone (hardware or software limitation) |
| `ChannelBandwidth.MHZ20`       | 20 MHz bandwidth                                                                         |
| `ChannelBandwidth.MHZ40`       | 40 MHz bandwidth                                                                         |
| `ChannelBandwidth.MHZ80`       | 80 MHz bandwidth                                                                         |
| `ChannelBandwidth.MHZ160`      | 160 MHz bandwidth                                                                        |
| `ChannelBandwidth.MHZ80_80`    | 80+80 MHz bandwidth                                                                      |
| `ChannelBandwidth.MHZ320`      | 320 MHz bandwidth                                                                        |

#### [WifiStandard](./src/internal/wifi/fingerprint.ts)

| Type                   | Description                                                                           |
|------------------------|---------------------------------------------------------------------------------------|
| `WifiStandard.UNKNOWN` | The Wi-Fi standard in which the AP is broadcasting is not known (software limitation) |
| `WifiStandard.LEGACY`  | 802.11a/b/g                                                                           |
| `WifiStandard.N`       | 802.11n                                                                               |
| `WifiStandard.AC`      | 802.11ac                                                                              |
| `WifiStandard.AX`      | 802.11ax                                                                              |
| `WifiStandard.AD`      | 802.11ad                                                                              |
| `WifiStandard.BE`      | 802.11be                                                                              |

#### [WifiChainInfo](./src/internal/wifi/fingerprint.ts)

| Property | Type     | Description                                        |
|----------|----------|----------------------------------------------------|
| id       | `number` | Sequential ID number for the chain (starts from 0) |
| rssi     | `number` | Received signal strength level this specific chain |


#### Wi-Fi fingerprint acquire parameters

Before requesting current information about the nearby Wi-Fi APs some options can be customized in order to achieve the expected result.

| Parameter       | Type      | Description                                                                                                                                                                                   |
|-----------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ensureIsNew     | `boolean` | Ensures the scan result is new (true by default), thus adhering to [Android OS Wi-Fi scanning limits](https://developer.android.com/guide/topics/connectivity/wifi-scan#wifi-scan-throttling) |

#### Wi-Fi fingerprint stream options

Before requesting updates on information about the nearby Wi-Fi APs some options can be customized in order to achieve the expected result.

| Property          | Type                                          | Description                                                                                                                                                                                                                                                                                                                                          |
|-------------------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ensureAlwaysNew   | `boolean`                                     | Ensures each scan result in the stream is always new (true by default), thus adhering to [Android OS Wi-Fi scanning limits](https://developer.android.com/guide/topics/connectivity/wifi-scan#wifi-scan-throttling)                                                                                                                                  |
| grouping          | [`FingerprintGrouping`](#fingerprintgrouping) | **(Only meant to be used with `ensureAlwaysNew: true`)**. Allows to indicate if the scan results must be batched and the size of the batch (NONE by default, i.e., batch size: 1). See linked enum for more details. Again conditioned by Android OS Wi-Fi scan throttling. Note, although batching becomes applied, scans are reported as they come |
| interval          | `number`                                      | **(Only meant to be used with `ensureAlwaysNew: false`)**. Allows to manually indicate the interval between the Wi-Fi scans (in milliseconds). Cannot be lower than (5000, i.e., 5 seconds). If scan throttling is not disabled in phone's developer settings. The max frequency at which a new fingerprint will be retrieved is every 30 seconds    |
| continueOnFailure | `boolean`                                     | Indicates if scanning failures should be reported via the stream (breaking it) or not                                                                                                                                                                                                                                                                |

#### [FingerprintGrouping](./src/internal/wifi/provider.ts)

| Type                               | Description                                                                                                           |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `FingerprintGrouping.NONE`         | Apply no fingerprint batching during the scan (report interval of new fingerprints: 30s)                              |
| `FingerprintGrouping.INTERMEDIATE` | Perform two consecutive fingerprint scans (separated in time by 5s) (report interval of new fingerprints: 60s)        |
| `FingerprintGrouping.MAX`          | Perform four consecutive fingerprint scans (separated in time by 5s) (report interval of new fingerprints: 2 minutes) |

#### [WifiScanProvider](./src/internal/wifi/provider.ts)

| Method signature                                                                      | Return type                   | Description                                                                                                                                              |
|---------------------------------------------------------------------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| isReady()                                                                             | `boolean`                     | Allows to check if the provider is ready or not (i.e., required permissions have been granted)                                                           |
| prepare()                                                                             | `Promise<boolean>`            | Allows to prepare the provider for its usage (i.e., ask the required permissions). **WARNING! Only call this method if your app is visible to the user** |
| acquireWifiFingerprint(ensureIsNew: [boolean](#wi-fi-fingerprint-acquire-parameters)) | `Promise<WifiFingerprint>`    | Allows to obtain information about the nearby Wi-Fi APs (fingerprinting)                                                                                 |
| wifiFingerprintStream(options: [StreamOptions](#wi-fi-fingerprint-stream-options))    | `Observable<WifiFingerprint>` | Allows to actively obtain information about the nearby Wi-Fi APs (fingerprinting)                                                                        |

</details>

<details>

<summary>Nearby BLE devices' information access</summary>

#### [BleScanResult](./src/internal/ble/scan-result.ts)

| Property  | Type                                     | Description                                                                           |
|-----------|------------------------------------------|---------------------------------------------------------------------------------------|
| seen      | [`Array<BleDeviceInfo>`](#bledeviceinfo) | The list of BLE devices (and their information) which have been seen during this scan |
| timestamp | `Date`                                   | The timestamp at which this scan was finished.                                        |

#### [BleDeviceInfo](./src/internal/ble/scan-result.ts)

| Property            | Type                             | Description                                                                                                                                                                            |
|---------------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| address             | `string`                         | Device's MAC address                                                                                                                                                                   |
| name                | `string`                         | Device's name (can be empty)                                                                                                                                                           |
| advertiseFlags      | `number`                         | The advertising flags indicating the discoverable mode and capability of the device (-1 when not set)                                                                                  |
| advertisingSid      | `number`                         | Device's advertising SID (255 when not present)                                                                                                                                        |
| advertisingInterval | `number`                         | Ranges from 6 (7.5ms) to 65536 (81918.75ms), in units of 1.25ms (0 when not present)                                                                                                   |
| txPowerLevel        | `number`                         | Transmission power level of the packet in dBm (-2147483648, a.k.a -inf, when not set). The difference between the `txPowerLevel` and the `rssi` can be used to calculate the path loss |
| txPower             | `number`                         | Transmission power in dBm. Ranges from -127 to 126 (127 when not present)                                                                                                              |
| primaryPhy          | [`PhyType`](#phytype)            | Can be: 1M, coded or none (when the device does not support retrieving this information)                                                                                               |
| secondaryPhy        | [`PhyType`](#phytype)            | Can be: 2M, coded or none (when either the device does not support retrieving this information or the BLE device does not use a secondary physical channel)                            |
| serviceUuids        | `Array<string>`                  | A set of BLE service UUIDs offered by the device (do not confuse with iBeacon UUIDs, these come later)                                                                                 |
| legacy              | `boolean`                        | When true, indicates that the detected device's spec is prior to the BLEv5 specification                                                                                               |
| connectable         | `boolean`                        | When true, indicates that the detected device accepts input connections                                                                                                                |
| iBeacon             | [`IBeaconData`](#ibeacondata)    | Undefined when the detected device does not broadcast iBeacon data. If defined, contains an object with the UUID, Major and Minor numbers of the beacon                                |
| rssi                | `number`                         | The received signal level with which this app has been seen during the scan                                                                                                            |
| ageNanos            | `number`                         | The number of nanoseconds (counting from phone boot) after which this device has been seen                                                                                             |

#### [PhyType](./src/internal/ble/scan-result.ts)

| Type                        | Description                                                                               |
|-----------------------------|-------------------------------------------------------------------------------------------|
| `PhyType.UNUSED`            | The physical channel is not in use or the phone cannot detect its type (Android SDK < 26) |
| `PhyType.LE_1M`             | The device uses the primary physical channel                                              |
| `PhyType.LE_2M`             | The device uses the secondary physical channel                                            |
| `PhyType.LE_CODED`          | The device uses the respective physical channel with a mask                               |

#### [IBeaconData](./src/internal/ble/scan-result.ts)

| Property | Type     | Description                                                            |
|----------|----------|------------------------------------------------------------------------|
| uuid     | `string` | The UUID of the iBeacon deployment                                     |
| major    | `number` | The iBeacon major number used to identify a beacon within a deployment |
| minor    | `number` | The iBeacon minor number used to identify a beacon within a deployment |


#### BLE scan acquire options

Before requesting current information about the nearby BLE devices some options can be customized in order to achieve the expected result.

| Property     | Type                          | Description                                                                                                                                                                                                                                     |
|--------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scanTime     | `boolean`                     | Indicates the amount of time to wait for while scanning. When 0 it waits until the first device is detected. Note: when is 0 and at least one iBeacon deployment UUID has been set it will wait until the firs beacon is seen. Use it with care |
| scanMode     | [`BleScanMode`](#blescanmode) | Indicates the scan mode to use (see linked enum for more information)                                                                                                                                                                           |
| iBeaconUuids | `Array<string>`               | Optionally indicate a list of iBeacon deployment UUIDs to just report scan results containing them                                                                                                                                              |

#### [BleScanMode](./src/internal/ble/common.ts)

| Type                      | Description                                                                                                                                    |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `BleScanMode.LOW_POWER`   | Scans for 0.5s and waits for 4.5s before running another scan. Good for using it in combination with scan times and intervals greater than 5s. |
| `BleScanMode.LOW_LATENCY` | Scans using the highest frequency, with no waits. Very power hungry, use with care                                                             |
| `BleScanMode.BALANCED`    | In the middle of the other two. Scans for 2s and waits for 3s. Great reliability / battery usage balance                                       |

#### BLE scan stream options

Before requesting updates on information about the nearby BLE devices some options can be customized in order to achieve the expected result.

| Property       | Type                          | Description                                                                                                                                                                                                                                                             |
|----------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| reportInterval | `boolean`                     | Indicates the amount of time to wait between reporting the list of the devices which have been detected since the last successful scan. When 0 it notifies right after seeing a new device. Note: the reporting frequency can end up being quite high. Use it with care |
| scanMode       | [`BleScanMode`](#blescanmode) | Indicates the scan mode to use (see linked enum for more information)                                                                                                                                                                                                   |
| iBeaconUuids   | `Array<string>`               | Optionally indicate a list of iBeacon deployment UUIDs to just report scan results containing them                                                                                                                                                                      |

#### [BleScanProvider](./src/internal/wifi/provider.ts)

| Method signature                                                          | Return type                 | Description                                                                                                                                              |
|---------------------------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| isReady()                                                                 | `boolean`                   | Allows to check if the provider is ready or not (i.e., required permissions have been granted)                                                           |
| prepare()                                                                 | `Promise<boolean>`          | Allows to prepare the provider for its usage (i.e., ask the required permissions). **WARNING! Only call this method if your app is visible to the user** |
| acquireBleScan(options: [AcquireOptions](#ble-scan-acquire-options))      | `Promise<BleScanResult>`    | Allows to obtain information about the nearby BLE devices as soon as one is detected or after the specified scan time                                    |
| wifiFingerprintStream(options: [StreamOptions](#ble-scan-stream-options)) | `Observable<BleScanResult>` | Allows to actively obtain information about the nearby BLE devices as soon as they are detected or in batches when indicating a report interval          |

</details>

## Plugin authors

<a href="https://github.com/agonper" title="Alberto González Pérez">
  <img src="https://avatars3.githubusercontent.com/u/10727467?s=120" alt="Alberto González Pérez" width="120"/>
</a>
<a href="https://github.com/matey97" title="Miguel Matey Sanz">
  <img src="https://avatars3.githubusercontent.com/u/25453537?s=120" alt="Miguel Matey Sanz" width="120"/>
</a>

## Acknowledgements

The development of this plugin has been made possible thanks to the Spanish Government. Concretely from, Spanish Ministry of Education, Culture and Sports (grant reference FPU17/03832), and “Programa Estatal de I+D+i Orientada a los Retos de la Sociedad" (reference RTI2018-099939-BI-00).

This project is an open-sourced excerpt coming from [SyMptOMS](http://geotec.uji.es/projects/symptoms/) project at [Geotec](http://geotec.uji.es/). Concretely, it has been heavily used in SyMptOMS mobile app for more than two years and contains all the lessons we have learned there.
