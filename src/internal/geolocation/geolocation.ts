import { Location, distance } from "@nativescript/geolocation";

export class Geolocation extends Location {
  constructor(location: Location | GeolocationLike) {
    super();
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.altitude = isNumber(location.altitude) ? location.altitude : 0;
    this.horizontalAccuracy = isNumber(location.horizontalAccuracy)
      ? location.horizontalAccuracy
      : 0;
    this.verticalAccuracy = isNumber(location.verticalAccuracy)
      ? location.verticalAccuracy
      : 0;
    this.speed = isNumber(location.speed) ? location.speed : 0;
    this.direction = isNumber(location.direction) ? location.direction : 0;
    this.timestamp = location.timestamp ? location.timestamp : new Date();
  }

  distance(to: Location | GeolocationLike): number {
    return distance(this, toLocation(to));
  }
}

function isNumber(num: number) {
  return typeof num === "number";
}

function toLocation(location: Location | GeolocationLike): Location {
  if (location instanceof Location) {
    return location;
  }
  return new Geolocation(location);
}

export interface GeolocationLike {
  latitude: number;
  longitude: number;
  altitude?: number;
  horizontalAccuracy?: number;
  verticalAccuracy?: number;
  speed?: number;
  direction?: number;
  timestamp?: Date;
}
