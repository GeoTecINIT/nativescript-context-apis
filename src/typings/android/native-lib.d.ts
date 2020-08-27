/// <reference path="android-declarations.d.ts"/>

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export class BootReceiver {
					public static class: java.lang.Class<es.uji.geotec.contextapis.BootReceiver>;
					public static setBootReceiverDelegate(param0: es.uji.geotec.contextapis.BootReceiverDelegate): void;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export class BootReceiverDelegate extends es.uji.geotec.contextapis.common.BroadcastReceiverDelegate {
					public static class: java.lang.Class<es.uji.geotec.contextapis.BootReceiverDelegate>;
					/**
					 * Constructs a new instance of the es.uji.geotec.contextapis.BootReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					});
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export class BuildConfig {
					public static class: java.lang.Class<es.uji.geotec.contextapis.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module activityrecognition {
					export class AccelerometerRecordingService {
						public static class: java.lang.Class<es.uji.geotec.contextapis.activityrecognition.AccelerometerRecordingService>;
						public constructor();
						public onDestroy(): void;
						public onCreate(): void;
						public static setAccelerometerRecordingServiceDelegate(param0: es.uji.geotec.contextapis.activityrecognition.AccelerometerRecordingServiceDelegate): void;
						public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module activityrecognition {
					export class AccelerometerRecordingServiceDelegate extends es.uji.geotec.contextapis.common.ServiceDelegate {
						public static class: java.lang.Class<es.uji.geotec.contextapis.activityrecognition.AccelerometerRecordingServiceDelegate>;
						/**
						 * Constructs a new instance of the es.uji.geotec.contextapis.activityrecognition.AccelerometerRecordingServiceDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCreate(param0: globalAndroid.app.Service): void;
							onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							onDestroy(): void;
						});
						public constructor();
						public onDestroy(): void;
						public onCreate(param0: globalAndroid.app.Service): void;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module activityrecognition {
					export class ActivityTransitionReceiver {
						public static class: java.lang.Class<es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public constructor();
						public static setActivityTransitionReceiverDelegate(param0: es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate): void;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module activityrecognition {
					export class ActivityTransitionReceiverDelegate extends es.uji.geotec.contextapis.common.BroadcastReceiverDelegate {
						public static class: java.lang.Class<es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate>;
						/**
						 * Constructs a new instance of the es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						});
						public constructor();
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module activityrecognition {
					export class ActivityUpdateReceiver {
						public static class: java.lang.Class<es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public constructor();
						public static setActivityUpdateReceiverDelegate(param0: es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate): void;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module activityrecognition {
					export class ActivityUpdateReceiverDelegate extends es.uji.geotec.contextapis.common.BroadcastReceiverDelegate {
						public static class: java.lang.Class<es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate>;
						/**
						 * Constructs a new instance of the es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						});
						public constructor();
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module common {
					export class BroadcastReceiverDelegate {
						public static class: java.lang.Class<es.uji.geotec.contextapis.common.BroadcastReceiverDelegate>;
						/**
						 * Constructs a new instance of the es.uji.geotec.contextapis.common.BroadcastReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						});
						public constructor();
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module common {
					export class ReceiverActivationCache {
						public static class: java.lang.Class<es.uji.geotec.contextapis.common.ReceiverActivationCache>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent);
						public getContext(): globalAndroid.content.Context;
						public getIntent(): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module common {
					export class ServiceActivationCache {
						public static class: java.lang.Class<es.uji.geotec.contextapis.common.ServiceActivationCache>;
						public constructor();
						public onStartCommandWasEarlyCalled(): boolean;
						public onStartCommandEarlyCalledHandled(): void;
						public onCreateWasEarlyCalled(): boolean;
						public getStartFlags(): number;
						public onCreateEarlyCalled(param0: globalAndroid.app.Service): void;
						public getStartIntent(): globalAndroid.content.Intent;
						public onCreateEarlyCalledHandled(): void;
						public onStartCommandEarlyCalled(param0: globalAndroid.content.Intent, param1: number, param2: number): void;
						public getService(): globalAndroid.app.Service;
						public getStartId(): number;
					}
				}
			}
		}
	}
}

declare module es {
	export module uji {
		export module geotec {
			export module contextapis {
				export module common {
					export class ServiceDelegate {
						public static class: java.lang.Class<es.uji.geotec.contextapis.common.ServiceDelegate>;
						/**
						 * Constructs a new instance of the es.uji.geotec.contextapis.common.ServiceDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCreate(param0: globalAndroid.app.Service): void;
							onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							onDestroy(): void;
						});
						public constructor();
						public onDestroy(): void;
						public onCreate(param0: globalAndroid.app.Service): void;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

//Generics information:

