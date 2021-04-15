import {
    GeolocationAdapter,
    Location,
    Options,
    Accuracy,
} from "nativescript-context-apis/internal/geolocation/adapter";
import {
    GeolocationProvider,
    AcquireOptions,
    StreamOptions,
    Geolocation,
} from "nativescript-context-apis/internal/geolocation";

import { createGeolocationAdapterMock } from "./index";

import { take, toArray } from "rxjs/operators";

describe("Geolocation provider", () => {
    let adapter: GeolocationAdapter;
    let provider: GeolocationProvider;

    const acquireOptions: AcquireOptions = {
        highAccuracy: false,
        timeout: 5 * 1e3,
        allowBackground: true,
    };

    const streamOptions: StreamOptions = {
        highAccuracy: acquireOptions.highAccuracy,
        distanceFilter: 10,
        stdInterval: 1e3,
        minInterval: 0,
        maxAge: 60 * 1e3,
        timeout: acquireOptions.timeout,
        allowBackground: acquireOptions.allowBackground,
        saveBattery: false,
    };

    const expectedDefaultOptions: Options = {
        desiredAccuracy: Accuracy.high,
        updateTime: 60 * 1e3,
        minimumUpdateTime: 5 * 1e3,
        timeout: 5 * 60 * 1e3,
        iosAllowsBackgroundLocationUpdates: false,
        iosPausesLocationUpdatesAutomatically: true,
    };

    const expectedAcquireOptions: Options = {
        desiredAccuracy: Accuracy.any,
        updateTime: expectedDefaultOptions.updateTime,
        minimumUpdateTime: expectedDefaultOptions.minimumUpdateTime,
        timeout: acquireOptions.timeout,
        iosAllowsBackgroundLocationUpdates: true,
        iosPausesLocationUpdatesAutomatically: true,
    };

    const expectedStreamOptions: Options = {
        desiredAccuracy: Accuracy.any,
        updateDistance: streamOptions.distanceFilter,
        updateTime: streamOptions.stdInterval,
        minimumUpdateTime: streamOptions.minInterval,
        maximumAge: streamOptions.maxAge,
        timeout: streamOptions.timeout,
        iosAllowsBackgroundLocationUpdates: streamOptions.allowBackground,
        iosPausesLocationUpdatesAutomatically: streamOptions.saveBattery,
    };

    const locations = createFakeLocations();

    beforeEach(() => {
        adapter = createGeolocationAdapterMock();
        provider = new GeolocationProvider(adapter);
    });

    it("allows to check if the underlying provider is ready", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(true));
        const isReady = await provider.isReady();
        expect(isReady).toBeTrue();
        expect(adapter.isReady).toHaveBeenCalled();
    });

    it("allows to prepare the underlying provider", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(false));
        spyOn(adapter, "prepare").and.returnValue(Promise.resolve());
        await provider.prepare(true, true);
        expect(adapter.prepare).toHaveBeenCalledWith(true, true);
    });

    it("allows to request current location to the underlying provider", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(true));
        spyOn(adapter, "acquireLocation").and.returnValue(
            Promise.resolve(locations[0])
        );
        const geolocation = await provider.acquireLocation();
        expect(adapter.acquireLocation).toHaveBeenCalledWith(
            expectedDefaultOptions
        );
        expect(geolocation).toEqual(new Geolocation(locations[0]));
    });

    it("throws an error when trying to capture a location and not being ready", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(false));
        await expectAsync(provider.acquireLocation()).toBeRejected();
    });

    it("allows to customize the request of the current location", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(true));
        spyOn(adapter, "acquireLocation").and.returnValue(
            Promise.resolve(locations[0])
        );
        await provider.acquireLocation(acquireOptions);
        expect(adapter.acquireLocation).toHaveBeenCalledWith(
            expectedAcquireOptions
        );
    });

    it("allows to obtain a location stream from the underlying provider", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(true));
        spyOn(adapter, "listenChanges").and.callFake((onChange, onError) => {
            let i = 0;
            const intervalId = setInterval(() => {
                if (i >= locations.length) {
                    clearInterval(intervalId);
                    onError(new Error("No locations available"));
                }
                onChange(locations[i]);
                i++;
            });
            return (intervalId as unknown) as number;
        });
        spyOn(adapter, "stopListening").and.callFake((listenerId) => {
            clearInterval(listenerId);
        });

        const count = 3;
        const stream = provider.locationStream().pipe(take(count), toArray());
        let subscription: any;

        const collectedLocations = await new Promise<Array<Geolocation>>(
            (resolve, reject) => {
                subscription = stream.subscribe(
                    (collectedLocations) => resolve(collectedLocations),
                    (err) => reject(err)
                );
            }
        );
        if (subscription) {
            subscription.unsubscribe();
        }

        expect(adapter.listenChanges).toHaveBeenCalledWith(
            jasmine.anything(),
            jasmine.anything(),
            expectedDefaultOptions
        );
        expect(collectedLocations.length).toBe(count);
        expect(adapter.stopListening).toHaveBeenCalled();
    });

    it("allows to customize the location stream request", async () => {
        spyOn(adapter, "isReady").and.returnValue(Promise.resolve(true));
        const listenerId = 0;
        spyOn(adapter, "listenChanges").and.returnValue(listenerId);
        spyOn(adapter, "stopListening");

        const stream = provider.locationStream(streamOptions);
        stream.subscribe().unsubscribe();

        expect(adapter.listenChanges).toHaveBeenCalledWith(
            jasmine.anything(),
            jasmine.anything(),
            expectedStreamOptions
        );
        expect(adapter.stopListening).toHaveBeenCalledWith(listenerId);
    });
});

function createFakeLocations(): Array<Location> {
    return [
        new Geolocation({
            latitude: 38.9939429,
            longitude: -1.0738488,
            altitude: 133.8000030517578,
            horizontalAccuracy: 12.486000061035156,
            verticalAccuracy: 10.486000061035156,
            speed: 0.10904105752706528,
            direction: 313.95758056640625,
            timestamp: new Date("2020-01-28T15:09:59.000Z"),
        }),
        new Geolocation({
            latitude: 38.9939409,
            longitude: -1.0738495,
            altitude: 133.8000030517578,
            horizontalAccuracy: 12.565999984741211,
            verticalAccuracy: 9.565999984741211,
            speed: 0.07058636844158173,
            direction: 274.8623962402344,
            timestamp: new Date("2020-01-28T15:10:00.000Z"),
        }),
        new Geolocation({
            latitude: 38.9939401,
            longitude: -1.0738498,
            altitude: 133.8000030517578,
            horizontalAccuracy: 12.576000213623047,
            verticalAccuracy: 8.576000213623047,
            speed: 0.05994986742734909,
            direction: 236.01693725585938,
            timestamp: new Date("2020-01-28T15:10:01.000Z"),
        }),
        new Geolocation({
            latitude: 38.9939143,
            longitude: -1.0738398,
            altitude: 133.8000030517578,
            horizontalAccuracy: 13.303000450134277,
            verticalAccuracy: 11.303000450134277,
            speed: 0.0035138472449034452,
            direction: 332.4197082519531,
            timestamp: new Date("2020-01-28T15:10:02.000Z"),
        }),
        new Geolocation({
            latitude: 38.9939159,
            longitude: -1.0738408,
            altitude: 133.8000030517578,
            horizontalAccuracy: 13.373000144958496,
            speed: 0.046229247003793716,
            direction: 333.66839599609375,
            timestamp: new Date("2020-01-28T15:10:03.000Z"),
        }),
    ];
}
