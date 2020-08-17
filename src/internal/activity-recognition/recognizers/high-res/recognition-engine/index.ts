import { android as androidApp } from "tns-core-modules/application/application";
import { getAndroidAccelerometerGatherer } from "../android/gatherer/accelerometer-gatherer.android";
import { AccelerometerGatherer } from "./accelerometer-gatherer";

export function getAccelerometerGatherer(): AccelerometerGatherer {
    if (androidApp) {
        return getAndroidAccelerometerGatherer();
    } else {
        return null;
    }
}