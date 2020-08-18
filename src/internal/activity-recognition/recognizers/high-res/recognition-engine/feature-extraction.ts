import { AccelerometerRecords } from "./accelerometer-recorder";

type AxisData = number[];
type FeatureExtractionFunction = (data: AxisData, param?: number) => number;
export type Features = number[];

export function extractFeatureFromRecords(records: AccelerometerRecords): Features {
    const [meanX, meanY, meanZ] = extractFeature(mean, records);
    const [maxX, maxY, maxZ] = extractFeature(max, records);
    const [minX, minY, minZ] = extractFeature(min, records);

    const features = [
        ...pitchAndRoll(records),
        meanX, meanY, meanZ,
        ...extractFeature(median, records),
        maxX, maxY, maxZ,
        minX, minY, minZ,
        ...extractFeature(std, records, [meanX, meanY, meanZ]),
        maxX - minX, maxY - minY, maxZ - minZ,
        ...extractFeature(rms, records),
        ...extractFeature(diffs, records),
        ...extractFeature(zeroCrossings, records, [meanX, meanY, meanZ])
    ];

    return normalize(features);
}

function extractFeature(feature: FeatureExtractionFunction, records: AccelerometerRecords, params?: number[]): number[] {
    const xFeature = params ? feature(records.x, params[0]) : feature(records.x);
    const yFeature = params ? feature(records.y, params[1]) : feature(records.y);
    const zFeature = params ? feature(records.z, params[2]) : feature(records.z);

    return [xFeature, yFeature, zFeature];
}

function pitchAndRoll(records: AccelerometerRecords): number[] {
    function angularFunction(a, b) {
        const atanArray = [];
        for (let i = 0; i < a.length; i++) {
            atanArray.push(Math.atan2(a[i] / 9.81, b[i] / 9.81) * 180 / Math.PI);
        }
        return mean(atanArray);
    }

    const { x, y, z } = records;
    return [angularFunction(y, z), angularFunction(x, z)];
}

function mean(array: AxisData): number {
    const sum = array.reduce((a, b) => {
        return a + b;
    }, 0);
    return sum / array.length;
}

function median(array: AxisData): number {
    const copy = array.slice();
    copy.sort();
    const half = Math.floor(copy.length / 2.0);

    if (copy.length % 2)
        return copy[half];

    return (copy[half - 1] + copy[half]) / 2.0;
}

function max(array: AxisData): number {
    return Math.max(...array);
}

function min(array: AxisData): number {
    return Math.min(...array);
}

function std(array: AxisData, mean: number): number {
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2))
        .reduce((a, b) => a + b) / array.length);
}

// Root Mean Square
function rms(array: AxisData): number {
    return Math.sqrt(array.map(x => x * x)
        .reduce((a, b) => a + b) / array.length);
}

function diffs(array: AxisData): number {
    const diffArray = [];
    for (let i = 1; i < array.length; i++) {
        diffArray.push(Math.abs(array[i] - array[i - 1]));
    }
    return mean(diffArray);
}

function zeroCrossings(array: AxisData, mean: number): number {
    const signArray = array.map(x => Math.sign(x - mean));

    let crossings = 0;
    for (let i = 0; i < signArray.length - 1; i++) {
        if (signArray[i] !== signArray[i + 1])
            crossings++;
    }

    return crossings;
}

function normalize(features: Features): Features {
    const maxVal = max(features);
    const minVal = min(features);
    return features.map(x => (x - minVal) / (maxVal - minVal));
}
