import { Accuracy, GeolocationAdapter, Options } from "./adapter";
import { Geolocation } from "./geolocation";
import { Observable } from "rxjs";

const SECONDS = 1e3;
const MINUTES = 60 * SECONDS;
const defaultAccuracy = Accuracy.high;
const defaultInterval = MINUTES;
const defaultMinInterval = 5 * SECONDS;
const defaultTimeout = 5 * MINUTES;
const allowBackgroundByDefault = false;
const saveBatteryByDefault = true;

export class GeolocationProvider {
  constructor(private adapter: GeolocationAdapter) {}

  isReady(): Promise<boolean> {
    return this.adapter.isReady();
  }

  prepare(watchAlways = false, openSettingsIfDenied = false): Promise<void> {
    return this.adapter.prepare(watchAlways, openSettingsIfDenied);
  }

  async acquireLocation(options: AcquireOptions = {}): Promise<Geolocation> {
    const location = await this.adapter.acquireLocation(
      geolocationOptionsToPluginOptions(options)
    );
    return new Geolocation(location);
  }

  locationStream(options: StreamOptions = {}): Observable<Geolocation> {
    return new Observable((subscriber) => {
      const listenerId = this.adapter.listenChanges(
        (location) => subscriber.next(new Geolocation(location)),
        (err) => subscriber.error(err),
        geolocationOptionsToPluginOptions(options)
      );
      return () => this.adapter.stopListening(listenerId);
    });
  }
}

export interface AcquireOptions {
  highAccuracy?: boolean;
  timeout?: number;
  allowBackground?: boolean;
}

export interface StreamOptions extends AcquireOptions {
  distanceFilter?: number;
  stdInterval?: number;
  minInterval?: number;
  maxAge?: number;
  saveBattery?: boolean;
}

export { Geolocation, GeolocationLike } from "./geolocation";

function geolocationOptionsToPluginOptions(
  options: AcquireOptions | StreamOptions
): Options {
  const pluginOptions: Options = {
    desiredAccuracy: "highAccuracy" in options ? Accuracy.any : defaultAccuracy,
    updateTime:
      "stdInterval" in options ? options.stdInterval : defaultInterval,
    minimumUpdateTime:
      "minInterval" in options ? options.minInterval : defaultMinInterval,
    timeout: "timeout" in options ? options.timeout : defaultTimeout,
    iosAllowsBackgroundLocationUpdates:
      "allowBackground" in options
        ? options.allowBackground
        : allowBackgroundByDefault,
    iosPausesLocationUpdatesAutomatically:
      "saveBattery" in options ? options.saveBattery : saveBatteryByDefault,
  };

  if ("distanceFilter" in options) {
    pluginOptions.updateDistance = options.distanceFilter;
  }
  if ("maxAge" in options) {
    pluginOptions.maximumAge = options.maxAge;
  }
  return pluginOptions;
}

let _geolocationProvider: GeolocationProvider;
export function getGeolocationProvider(): GeolocationProvider {
  if (!_geolocationProvider) {
    _geolocationProvider = new GeolocationProvider(new GeolocationAdapter());
  }
  return _geolocationProvider;
}
