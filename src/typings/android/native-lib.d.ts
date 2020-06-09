/// <reference path="android-declarations.d.ts"/>

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export class BootReceiver {
          public static class: java.lang.Class<
            es.uji.geotec.contextapis.BootReceiver
          >;
          public static setBootReceiverDelegate(
            param0: es.uji.geotec.contextapis.BootReceiverDelegate
          ): void;
          public constructor();
          public onReceive(
            param0: globalAndroid.content.Context,
            param1: globalAndroid.content.Intent
          ): void;
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export class BootReceiverDelegate extends es.uji.geotec.contextapis
          .common.BroadcastReceiverDelegate {
          public static class: java.lang.Class<
            es.uji.geotec.contextapis.BootReceiverDelegate
          >;
          /**
           * Constructs a new instance of the es.uji.geotec.contextapis.BootReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onReceive(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            ): void;
          });
          public constructor();
          public onReceive(
            param0: globalAndroid.content.Context,
            param1: globalAndroid.content.Intent
          ): void;
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export class BuildConfig {
          public static class: java.lang.Class<
            es.uji.geotec.contextapis.BuildConfig
          >;
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

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export namespace activityrecognition {
          export class ActivityTransitionReceiver {
            public static class: java.lang.Class<
              es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiver
            >;
            public onReceive(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            ): void;
            public constructor();
            public static setActivityTransitionReceiverDelegate(
              param0: es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export namespace activityrecognition {
          export class ActivityTransitionReceiverDelegate extends es.uji.geotec
            .contextapis.common.BroadcastReceiverDelegate {
            public static class: java.lang.Class<
              es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate
            >;
            /**
             * Constructs a new instance of the es.uji.geotec.contextapis.activityrecognition.ActivityTransitionReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onReceive(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.Intent
              ): void;
            });
            public constructor();
            public onReceive(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            ): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export namespace activityrecognition {
          export class ActivityUpdateReceiver {
            public static class: java.lang.Class<
              es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiver
            >;
            public onReceive(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            ): void;
            public constructor();
            public static setActivityUpdateReceiverDelegate(
              param0: es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export namespace activityrecognition {
          export class ActivityUpdateReceiverDelegate extends es.uji.geotec
            .contextapis.common.BroadcastReceiverDelegate {
            public static class: java.lang.Class<
              es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate
            >;
            /**
             * Constructs a new instance of the es.uji.geotec.contextapis.activityrecognition.ActivityUpdateReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onReceive(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.Intent
              ): void;
            });
            public constructor();
            public onReceive(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            ): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export namespace common {
          export class BroadcastReceiverDelegate {
            public static class: java.lang.Class<
              es.uji.geotec.contextapis.common.BroadcastReceiverDelegate
            >;
            /**
             * Constructs a new instance of the es.uji.geotec.contextapis.common.BroadcastReceiverDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onReceive(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.Intent
              ): void;
            });
            public constructor();
            public onReceive(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            ): void;
          }
        }
      }
    }
  }
}

declare namespace es {
  export namespace uji {
    export namespace geotec {
      export namespace contextapis {
        export namespace common {
          export class ReceiverActivationCache {
            public static class: java.lang.Class<
              es.uji.geotec.contextapis.common.ReceiverActivationCache
            >;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.content.Intent
            );
            public getContext(): globalAndroid.content.Context;
            public getIntent(): globalAndroid.content.Intent;
          }
        }
      }
    }
  }
}

// Generics information:
