import {
    GeolocationAdapter,
    Options,
    Location,
} from "nativescript-context-apis/internal/geolocation/adapter";

export function createGeolocationAdapterMock(): GeolocationAdapter {
    return {
        isReady() {
            return Promise.resolve(false);
        },
        prepare(always?: boolean, openSettingsIfDenied?: boolean) {
            return Promise.resolve();
        },
        acquireLocation(options: Options): Promise<Location> {
            return Promise.resolve(null);
        },
        listenChanges(
            onChange: (loc: Location) => void,
            onError: (err: Error) => void
        ): number {
            return 0;
        },
        stopListening(watchId: number) {},
    };
}
