# NativeScript Context APIs

[![npm](https://img.shields.io/npm/v/nativescript-context-apis.svg)](https://www.npmjs.com/package/nativescript-context-apis)
[![npm](https://img.shields.io/npm/dm/nativescript-context-apis.svg)](https://www.npmjs.com/package/nativescript-context-apis)
[![Build Status](https://dev.azure.com/GeoTecINIT/nativescript-context-apis/_apis/build/status/GeoTecINIT.nativescript-context-apis?branchName=master)](https://dev.azure.com/GeoTecINIT/nativescript-context-apis/_build/latest?definitionId=1&branchName=master)

Painless access to contextual information for your NativeScript apps. Does your app need to know where is your user located at or which kind of activity is she doing? This is your plugin.

Currently we offer:

- **Coarse- and medium-grained human activity detection (Android only):** Coarse activity detection (user being still, walking, running, riding a bike or on a vehicle) will notify your app when the user starts or ends an activity and when did it happen. Medium grained detection will allow you to specify the detection interval and leaves for you in-activity filtering. For example, the plugin will report a transition from being in a vehicle to being still when the vehicle stops at a traffic light, thing that does not happen with the coarse activity detection mechanism. [More info here](https://developers.google.com/android/reference/com/google/android/gms/location/ActivityRecognitionClient).
- **Current user location and location stream (with distance filtering):** The plugin offers coarse- and fine-grained location reporting. We offer the functionality set by the [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation) plugin, extending it with [RxJS Observable](https://rxjs-dev.firebaseapp.com/guide/observable) streams for location stream. By obtaining user locations wrapped in an Observable, you'll able to filter them, take the best one among a small amount of them or control the stream quite easily by means of the [RxJS Operators](https://rxjs-dev.firebaseapp.com/guide/operators).

What we plan to offer in the future:
- Low level access to on-device sensors (accelerometer, gyroscope, compass, etc.).
- Human activity detection in iOS too.
- A whole new fine-grained human activity detection mechanism, based on real-time sensor monitoring.
- User location reverse geocoding.
- Weather at current user location. 

## (Optional) Prerequisites

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

In order to use geolocation on Android, you'll need to add the following permission(s) to your app's `AndroidManifest.xml` inside the `App_Resources/Android/src/main` dir:

```xml
  <!-- Always include this permission -->
  <!-- This permission is for "approximate" location data -->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

  <!-- Include only if your app benefits from precise location access. -->
  <!-- This permission is for "precise" location data -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

  <!-- Required only when requesting background location access on
       Android 10 (API level 29) and higher. -->
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

More information can be found in the [Android docs here](https://developer.android.com/training/location/permissions).

> Source: [https://github.com/NativeScript/nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation)

## Installation

Run the following command in your project's root folder.

NS7+:

```javascript
ns plugin add nativescript-context-apis
```

NS6:
```javascript
tns plugin add nativescript-context-apis@1.0.3
```

(Optional) You'll need RxJS also to properly work with geolocation streams

```javascript
npm install rxjs --save
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

### Human activity detection

In case you want to obtain coarse grained human activity changes, first of all you'll need to check if you have permissions to do so and if not, ask them as follows:

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
  console.log(`ActivityChange: ${JSON.stringify(activityChange)}`);
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

### Geolocation

Similar to human activity recognition, in case you want to obtain geolocation updates, first of all you'll need to check if you have permissions to do so and if not, ask them as follows:

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
    console.log(`Current location: ${JSON.stringify(location)}`);
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
            console.log(`New location acquired!: ${JSON.stringify(location)}`),
        error: (error) =>
            console.error(`Location updates could not be acquired: ${error}`)
    });
}
```

> Note: Check plugin demo app for further usage details

## API

| Method signature | Return type | Description |
| --- | --- | --- |
| init() | `Promise<void>` | Meant to be called on application start. Only needed if your app listens to human activity changes |
| getActivityRecognizer(resolution: [Resolution](#available-recognizer-resolutions)) | [`ActivityRecognizer`](#activityrecognizer) | Meant to be called on application start. Only needed if your app listens to human activity changes |
| geolocationProvider | [`GeolocationProvider`](#geolocationprovider) | Property which gives access to the geolocation provider singleton |


### Human activity recognition

#### Available recognizer resolutions

| Type | Description |
| ---- | ----------- |
| `Resolution.LOW` | Coarse-grained activity recognition. Activity changes are delivered in a push-based manner. |
| `Resolution.MEDIUM` | Medium-grained activity recognition. Activity changes are queried at a configurable delay |
| `Resolution.HIGH` | _Available soon_ |

#### Available human activities

| Type | Description |
| ---- | ----------- |
| `HumanActivity.STILL` | No significant movement has been detected |
| `HumanActivity.WALKING` | Low frequency on-foot movements |
| `HumanActivity.RUNNING` | High frequency on-foot movements |
| `HumanActivity.ON_BICYCLE` | The device is worn while riding a bicycle |
| `HumanActivity.IN_VEHICLE` | The device is commuting at a high speed |
| `HumanActivity.TILTING` | Device's angle has changed noticeably |

#### Available activity transitions

| Type | Description |
| ---- | ----------- |
| `Transition.STARTED` | The related human activity has started |
| `Transition.ENDED` | The related human activity has ended |

#### [ActivityChange](https://github.com/GeoTecINIT/nativescript-context-apis/blob/master/src/internal/activity-recognition/activity-change.ts)

| Property | Type | Description |
| --- | --- | --- |
| type | [`HumanActivity`](#available-human-activities) | The human activity whose change has been detected |
| transition | [`Transition`](#available-activity-transitions) | Indicates if the activity has started or ended |
| confidence | `number` | If the underlying recognizer supports it, the degree of confidence of the detected activity (from 0 to 1) |
| timestamp | `Date` | Indicates when was the activity change detected |

#### Activity recognizer [StartOptions](https://github.com/GeoTecINIT/nativescript-context-apis/blob/master/src/internal/activity-recognition/recognizers/index.ts)

| Property | Type | Description |
| --- | --- | --- |
| detectionInterval | `number` | (Optional) Allows to specify recognizer detection interval (ignored in `Resolution.LOW` due to its push-based nature) |

#### [ActivityRecognizer](https://github.com/GeoTecINIT/nativescript-context-apis/blob/master/src/internal/activity-recognition/recognizers/index.ts)

| Method signature | Return type | Description |
| --- | --- | --- |
| isReady() | `boolean` | Allows to check if the activity recognizer is ready or not (i.e., required permissions have been granted) |
| prepare() | `Promise<boolean>` | Allows to prepare the activity recognizer for its usage (i.e., ask the required permissions). **WARNING! Only call this method if your app is visible to the user** |
| setup() | `Promise<void>` | For internal usage only. Allows to adjust the recognizer to the previous state before the app was closed |
| startRecognizing(options?: [StartOptions](#activity-recognizer-startoptions)) | `Promise<void>` | Tell the activity recognizer to start working |
| stopRecognizing() | `Promise<void>` | Tell the activity recognizer to stop working |
| listenActivityChanges(callback: (activityChange: ActivityChange) => void) | `number` | Add an activity changes listener |
| stopListening(listenerId?: number) | `void` | Remove an activity changes listener. If no listener number is passed by, all the listeners will be removed instead |

### Geolocation access

#### [Geolocation](https://github.com/GeoTecINIT/nativescript-context-apis/blob/master/src/internal/geolocation/geolocation.ts)

| Property | Type | Description |
| --- | --- | --- |
| latitude | `number` | Location's latitude |
| longitude | `number` | Location's longitude |
| altitude | `number` | Location's altitude |
| horizontalAccuracy | `number` | Location's horizontal accuracy (in meters) |
| verticalAccuracy | `number` | Location's vertical accuracy (in meters) |
| speed | `number` | Speed by the time of the location fix (in m/s) |
| direction | `number` | Location bearing (in degrees) |
| timestamp | `Date` | Time of the location fix |

| Method signature | Return type | Description |
| --- | --- | --- |
| distance(to: Geolocation _OR_ GeolocationLike) | `number` | Allows to check the distance from a geolocation to another or a [GeolocationLike](#geolocationlike) object |

#### [GeolocationLike](https://github.com/GeoTecINIT/nativescript-context-apis/blob/master/src/internal/geolocation/geolocation.ts) (Interface)

Same as [Geolocation](#geolocation), but only latitude and longitude are mandatory. The rest of the attributes are optional.

#### Geolocation acquire options

Before requesting user's current location some options can be customized in order to achieve the expected result.

| Property | Type | Description |
| --- | --- | --- |
| highAccuracy | `boolean` | Indicate if high accuracy (battery consuming) geolocation should be used. True by default |
| timeout | `number` | Location fix maximum wait time. 5 minutes by default |
| allowBackground | `boolean` | (iOS only) indicate if the location is going to be collected in the background. False by default |

> Note: These options are identical (only the name changes) to the ones from [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation). Check plugin docs in case of doubt.

#### Geolocation stream options

Before requesting user's current location some options can be customized in order to achieve the expected result.

| Property | Type | Description |
| --- | --- | --- |
| highAccuracy | `boolean` | Indicate if high accuracy (battery consuming) geolocation should be used. True by default |
| distanceFilter | `number` | The distance in meters that the user has to cover before reporting a new location. None by default |
| stdInterval | `number` | (Android only) The standard location fetch interval (in milliseconds). 1 minute by default |
| minInterval | `number` | (Android only) Opportunistic location report interval (in milliseconds). 5 seconds by default. Used when another app requests the location of the user at a higher interval |
| maxAge | `number` | How old at a maximum reported locations can be (in milliseconds from `Date.now()`). Unlimited by default |
| timeout | `number` | Location fix maximum wait time. 5 minutes by default |
| allowBackground | `boolean` | (iOS only) indicate if the location is going to be collected in the background. False by default |
| saveBattery | `boolean` | (iOS only) indicate location reporting should be paused when app is no longer visible. True by default |

> Note: These options are identical (only the name changes) to the ones from [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation). Check plugin docs in case of doubt.

#### [GeolocationProvider](https://github.com/GeoTecINIT/nativescript-context-apis/blob/master/src/internal/geolocation/index.ts)

| Method signature | Return type | Description |
| --- | --- | --- |
| isReady() | `boolean` | Allows to check if the provider is ready or not (i.e., required permissions have been granted) |
| prepare() | `Promise<boolean>` | Allows to prepare the provider for its usage (i.e., ask the required permissions). **WARNING! Only call this method if your app is visible to the user** |
| acquireLocation(options: [AcquireOptions](#geolocation-acquire-options) | `Promise<Geolocation>` | Allows to obtain user's current location |
| locationStream(options: [StreamOptions](#geolocation-stream-options) | `Observable<Geolocation>` | Allows to actively obtain user's location updates |

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
