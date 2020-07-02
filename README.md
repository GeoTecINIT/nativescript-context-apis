# NativeScript Context APIs

[![npm](https://img.shields.io/npm/v/nativescript-context-apis.svg)](https://www.npmjs.com/package/nativescript-context-apis)
[![npm](https://img.shields.io/npm/dm/nativescript-context-apis.svg)](https://www.npmjs.com/package/nativescript-context-apis)
[![Build Status](https://travis-ci.com/GeoTecINIT/nativescript-task-dispatcher.svg?token=cYMN5eetmCX8aPqFVaQb&branch=master)](https://travis-ci.com/GeoTecINIT/nativescript-context-apis)

Painless access to contextual information for your NativeScript apps. Does your app need to know where is your user located at or which kind of activity is she doing? This is your plugin.

Currently we offer:

* Coarse- and medium-grained human activity detection (Android only): Coarse activity detection (user being still, walking, running, riding a bike or on a vehicle) will notify your app when the user starts or ends an activity and when did it happen. Medium grained detection will allow you to specify the detection interval and leaves for you in-activity filtering. For example, the plugin will report a transition from being in a vehicle to being still when the vehicle stops at a traffic light, thing that does not happen with the coarse activity detection mechanism. [More info here](https://developers.google.com/android/reference/com/google/android/gms/location/ActivityRecognitionClient).
* Current user location and location stream (with distance filtering): The plugin offers coarse- and fine-grained location reporting. We offer the functionality set by the [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation) plugin, extending it with [RxJS Observable](https://rxjs-dev.firebaseapp.com/guide/observable) streams for location stream. By obtaining user locations wrapped in an Observable, you'll able to filter them, take the best one among a small amount of them or control the stream quite easily by means of the [RxJS Operators](https://rxjs-dev.firebaseapp.com/guide/operators).

What we plan to offer in the future:
* Low level access to on-device sensors (accelerometer, gyroscope, compass, etc.).
* Human activity detection in iOS too.
* A whole new fine-grained human activity detection mechanism, based on real-time sensor monitoring.
* User location reverse geocoding.
* Weather at current user location. 

## (Optional) Prerequisites

### Android only

Given that we rely on  [nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation) and use Google Play Services APIs for activity detection on Android devices, you might find Google Play Services version conflicts with other installed plugins.

In order to avoid them, we advise you to force a specific Google Play Services version. For a better human activity detection functionality, version 17 or above is highly recommended. In order to do so, please, indicate the Google Play Services Version number in your `app/App_Resources/Android/before-plugins.gradle` file (if the file does not exist, just create it):

```gradle
android {  
  // other things here

  project.ext {
    googlePlayServicesVersion = "17.+"
  }
}
```

> Source: [https://github.com/NativeScript/nativescript-geolocation](https://github.com/NativeScript/nativescript-geolocation)

## Installation

Run the following command in your project's root folder:

```javascript
tns plugin add nativescript-context-apis
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
          minInterval: 100, // Oportunistic interval (another app asked for a location)
          timeout: 5000, // You can also specify the operation timeout (highly advised)
          maxAge: 60000, // And filter-out old locations
      });

    return stream.subscribe(
        (location) => {
            console.log(`New location acquired!: ${JSON.stringify(location)}`);
        },
        (error) =>
            console.error(`Location updates could not be acquired: ${error}`)
    );
}
```

## API

(WIP)

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.
    
| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. |
    
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
