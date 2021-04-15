import {
  Options,
  Location,
  isEnabled,
  enableLocationRequest,
  getCurrentLocation,
  watchLocation,
  clearWatch,
} from "nativescript-geolocation";

export class GeolocationAdapter {
  isReady(): Promise<boolean> {
    return isEnabled();
  }

  prepare(
    always: boolean = false,
    openSettingsIfDenied: boolean = false
  ): Promise<void> {
    return enableLocationRequest(always, openSettingsIfDenied);
  }

  acquireLocation(options: Options): Promise<Location> {
    return getCurrentLocation(options);
  }

  listenChanges(
    onChange: (location: Location) => void,
    onError: (error: Error) => void,
    options: Options
  ): number {
    return watchLocation(onChange, onError, options);
  }

  stopListening(watchId: number): void {
    clearWatch(watchId);
  }
}

export { Options, Location } from "nativescript-geolocation";
export { Accuracy } from "@nativescript/core/ui/enums";
