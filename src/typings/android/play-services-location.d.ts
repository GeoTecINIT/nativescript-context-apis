/// <reference path="android-declarations.d.ts"/>

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class GoogleSignInAccount {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.GoogleSignInAccount
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.auth.api.signin.GoogleSignInAccount
                >;
                public getAccount(): globalAndroid.accounts.Account;
                public getGrantedScopes(): java.util.Set<
                  com.google.android.gms.common.api.Scope
                >;
                public getGivenName(): string;
                public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                public equals(param0: any): boolean;
                public getIdToken(): string;
                public getDisplayName(): string;
                public isExpired(): boolean;
                public zab(): string;
                public getFamilyName(): string;
                public getRequestedScopes(): java.util.Set<
                  com.google.android.gms.common.api.Scope
                >;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
                public static zaa(
                  param0: string
                ): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                public getPhotoUrl(): globalAndroid.net.Uri;
                public getEmail(): string;
                public getServerAuthCode(): string;
                public zac(): string;
                public requestExtraScopes(
                  param0: native.Array<com.google.android.gms.common.api.Scope>
                ): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                public getId(): string;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class GoogleSignInOptions
                implements
                  com.google.android.gms.common.api.Api.ApiOptions.Optional {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.GoogleSignInOptions
                >;
                public static zar: com.google.android.gms.common.api.Scope;
                public static zas: com.google.android.gms.common.api.Scope;
                public static zat: com.google.android.gms.common.api.Scope;
                public static zau: com.google.android.gms.common.api.Scope;
                public static zav: com.google.android.gms.common.api.Scope;
                public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.auth.api.signin.GoogleSignInOptions
                >;
                public getAccount(): globalAndroid.accounts.Account;
                public getServerClientId(): string;
                public isForceCodeForRefreshToken(): boolean;
                public equals(param0: any): boolean;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
                public static zab(
                  param0: string
                ): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                public zae(): string;
                public getScopes(): java.util.ArrayList<
                  com.google.android.gms.common.api.Scope
                >;
                public isServerAuthCodeRequested(): boolean;
                public isIdTokenRequested(): boolean;
                public hashCode(): number;
                public getExtensions(): java.util.ArrayList<
                  com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable
                >;
                public getScopeArray(): native.Array<
                  com.google.android.gms.common.api.Scope
                >;
              }
              export namespace GoogleSignInOptions {
                export class Builder {
                  public static class: java.lang.Class<
                    com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder
                  >;
                  public requestServerAuthCode(
                    param0: string
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public constructor();
                  public requestScopes(
                    param0: com.google.android.gms.common.api.Scope,
                    param1: native.Array<
                      com.google.android.gms.common.api.Scope
                    >
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestIdToken(
                    param0: string
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public addExtension(
                    param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public setAccountName(
                    param0: string
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestServerAuthCode(
                    param0: string,
                    param1: boolean
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public setHostedDomain(
                    param0: string
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public constructor(
                    param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions
                  );
                  public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class GoogleSignInOptionsExtension {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getExtensionType(): number;
                  toBundle(): globalAndroid.os.Bundle;
                  getImpliedScopes(): java.util.List<
                    com.google.android.gms.common.api.Scope
                  >;
                });
                public constructor();
                public static FITNESS: number;
                public static GAMES: number;
                public toBundle(): globalAndroid.os.Bundle;
                public getImpliedScopes(): java.util.List<
                  com.google.android.gms.common.api.Scope
                >;
                public getExtensionType(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export namespace internal {
                export class GoogleSignInOptionsExtensionParcelable {
                  public static class: java.lang.Class<
                    com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable
                  >;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<
                    com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable
                  >;
                  public constructor(
                    param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension
                  );
                  public writeToParcel(
                    param0: globalAndroid.os.Parcel,
                    param1: number
                  ): void;
                  public getType(): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export namespace internal {
                export class HashAccumulator {
                  public static class: java.lang.Class<
                    com.google.android.gms.auth.api.signin.internal.HashAccumulator
                  >;
                  public constructor();
                  public zaa(
                    param0: boolean
                  ): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
                  public addObject(
                    param0: any
                  ): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
                  public hash(): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export namespace internal {
                export class Storage {
                  public static class: java.lang.Class<
                    com.google.android.gms.auth.api.signin.internal.Storage
                  >;
                  public getSavedRefreshToken(): string;
                  public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                  public clear(): void;
                  public zaf(): void;
                  public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                  public static getInstance(
                    param0: globalAndroid.content.Context
                  ): com.google.android.gms.auth.api.signin.internal.Storage;
                  public saveDefaultGoogleSignInAccount(
                    param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount,
                    param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions
                  ): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export namespace internal {
                export class zaa extends globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable
                > {
                  public static class: java.lang.Class<
                    com.google.android.gms.auth.api.signin.internal.zaa
                  >;
                  public constructor();
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class zaa {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.zaa
                >;
                public compare(param0: any, param1: any): number;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class zab extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.auth.api.signin.GoogleSignInAccount
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.zab
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class zac extends java.util.Comparator<
                com.google.android.gms.common.api.Scope
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.zac
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace auth {
          export namespace api {
            export namespace signin {
              export class zad extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.auth.api.signin.GoogleSignInOptions
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.auth.api.signin.zad
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export class ErrorDialogFragment {
            public static class: java.lang.Class<
              com.google.android.gms.common.ErrorDialogFragment
            >;
            public show(
              param0: globalAndroid.app.FragmentManager,
              param1: string
            ): void;
            public constructor();
            public static newInstance(
              param0: globalAndroid.app.Dialog
            ): com.google.android.gms.common.ErrorDialogFragment;
            public onCancel(
              param0: globalAndroid.content.DialogInterface
            ): void;
            public onCreateDialog(
              param0: globalAndroid.os.Bundle
            ): globalAndroid.app.Dialog;
            public static newInstance(
              param0: globalAndroid.app.Dialog,
              param1: globalAndroid.content.DialogInterface.OnCancelListener
            ): com.google.android.gms.common.ErrorDialogFragment;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export class GoogleApiAvailability {
            public static class: java.lang.Class<
              com.google.android.gms.common.GoogleApiAvailability
            >;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public makeGooglePlayServicesAvailable(
              param0: globalAndroid.app.Activity
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public static zaa(
              param0: globalAndroid.app.Activity,
              param1: globalAndroid.content.DialogInterface.OnCancelListener
            ): globalAndroid.app.Dialog;
            public constructor();
            public showErrorNotification(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.ConnectionResult
            ): void;
            public getErrorResolutionPendingIntent(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.ConnectionResult
            ): globalAndroid.app.PendingIntent;
            public getErrorDialog(
              param0: globalAndroid.app.Activity,
              param1: number,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener
            ): globalAndroid.app.Dialog;
            public zaa(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.internal.zabr
            ): com.google.android.gms.common.api.internal.zabq;
            public getClientVersion(
              param0: globalAndroid.content.Context
            ): number;
            public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
            public showErrorDialogFragment(
              param0: globalAndroid.app.Activity,
              param1: number,
              param2: number
            ): boolean;
            public zaa(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.ConnectionResult,
              param2: number
            ): boolean;
            public checkApiAvailability(
              param0: com.google.android.gms.common.api.GoogleApi<any>,
              param1: native.Array<
                com.google.android.gms.common.api.GoogleApi<any>
              >
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public showErrorNotification(
              param0: globalAndroid.content.Context,
              param1: number
            ): void;
            public getErrorResolutionPendingIntent(
              param0: globalAndroid.content.Context,
              param1: number,
              param2: number
            ): globalAndroid.app.PendingIntent;
            public getErrorResolutionIntent(
              param0: globalAndroid.content.Context,
              param1: number,
              param2: string
            ): globalAndroid.content.Intent;
            public zaa(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.internal.LifecycleFragment,
              param2: number,
              param3: number,
              param4: globalAndroid.content.DialogInterface.OnCancelListener
            ): boolean;
            public setDefaultNotificationChannelId(
              param0: globalAndroid.content.Context,
              param1: string
            ): void;
            public showErrorDialogFragment(
              param0: globalAndroid.app.Activity,
              param1: number,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener
            ): boolean;
            public getErrorDialog(
              param0: globalAndroid.app.Activity,
              param1: number,
              param2: number
            ): globalAndroid.app.Dialog;
            public getErrorString(param0: number): string;
            public isGooglePlayServicesAvailable(
              param0: globalAndroid.content.Context
            ): number;
            public isGooglePlayServicesAvailable(
              param0: globalAndroid.content.Context,
              param1: number
            ): number;
            public isUserResolvableError(param0: number): boolean;
          }
          export namespace GoogleApiAvailability {
            export class zaa extends com.google.android.gms.internal.base.zap {
              public static class: java.lang.Class<
                com.google.android.gms.common.GoogleApiAvailability.zaa
              >;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(
                param0: com.google.android.gms.common.GoogleApiAvailability,
                param1: globalAndroid.content.Context
              );
              public constructor(
                param0: globalAndroid.os.Looper,
                param1: globalAndroid.os.Handler.Callback
              );
              public handleMessage(param0: globalAndroid.os.Message): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export class GooglePlayServicesUtil {
            public static class: java.lang.Class<
              com.google.android.gms.common.GooglePlayServicesUtil
            >;
            public static GMS_ERROR_DIALOG: string;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static GOOGLE_PLAY_STORE_PACKAGE: string;
            /** @deprecated */
            public static showErrorNotification(
              param0: number,
              param1: globalAndroid.content.Context
            ): void;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(
              param0: globalAndroid.content.Context,
              param1: number
            ): number;
            public static getRemoteContext(
              param0: globalAndroid.content.Context
            ): globalAndroid.content.Context;
            /** @deprecated */
            public static getErrorString(param0: number): string;
            public static showErrorDialogFragment(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: androidx.fragment.app.Fragment,
              param3: number,
              param4: globalAndroid.content.DialogInterface.OnCancelListener
            ): boolean;
            public static getRemoteResource(
              param0: globalAndroid.content.Context
            ): globalAndroid.content.res.Resources;
            /** @deprecated */
            public static showErrorDialogFragment(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener
            ): boolean;
            /** @deprecated */
            public static getErrorPendingIntent(
              param0: number,
              param1: globalAndroid.content.Context,
              param2: number
            ): globalAndroid.app.PendingIntent;
            /** @deprecated */
            public static isUserRecoverableError(param0: number): boolean;
            /** @deprecated */
            public static getErrorDialog(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener
            ): globalAndroid.app.Dialog;
            /** @deprecated */
            public static showErrorDialogFragment(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: number
            ): boolean;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(
              param0: globalAndroid.content.Context
            ): number;
            /** @deprecated */
            public static getErrorDialog(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: number
            ): globalAndroid.app.Dialog;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export class SignInButton {
            public static class: java.lang.Class<
              com.google.android.gms.common.SignInButton
            >;
            public static SIZE_STANDARD: number;
            public static SIZE_WIDE: number;
            public static SIZE_ICON_ONLY: number;
            public static COLOR_DARK: number;
            public static COLOR_LIGHT: number;
            public static COLOR_AUTO: number;
            public setSize(param0: number): void;
            /** @deprecated */
            public setScopes(
              param0: native.Array<com.google.android.gms.common.api.Scope>
            ): void;
            /** @deprecated */
            public setStyle(
              param0: number,
              param1: number,
              param2: native.Array<com.google.android.gms.common.api.Scope>
            ): void;
            public constructor(param0: globalAndroid.content.Context);
            public setColorScheme(param0: number): void;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.util.AttributeSet,
              param2: number
            );
            public setOnClickListener(
              param0: globalAndroid.view.View.OnClickListener
            ): void;
            public setStyle(param0: number, param1: number): void;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: globalAndroid.util.AttributeSet
            );
            public setEnabled(param0: boolean): void;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export namespace SignInButton {
            export class ButtonSize {
              public static class: java.lang.Class<
                com.google.android.gms.common.SignInButton.ButtonSize
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ColorScheme {
              public static class: java.lang.Class<
                com.google.android.gms.common.SignInButton.ColorScheme
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export class SupportErrorDialogFragment {
            public static class: java.lang.Class<
              com.google.android.gms.common.SupportErrorDialogFragment
            >;
            public constructor();
            public show(
              param0: androidx.fragment.app.FragmentManager,
              param1: string
            ): void;
            public onCancel(
              param0: globalAndroid.content.DialogInterface
            ): void;
            public static newInstance(
              param0: globalAndroid.app.Dialog,
              param1: globalAndroid.content.DialogInterface.OnCancelListener
            ): com.google.android.gms.common.SupportErrorDialogFragment;
            public onCreateDialog(
              param0: globalAndroid.os.Bundle
            ): globalAndroid.app.Dialog;
            public static newInstance(
              param0: globalAndroid.app.Dialog
            ): com.google.android.gms.common.SupportErrorDialogFragment;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class Api<O> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.Api<any>
              >;
              public constructor(
                param0: string,
                param1: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                  any,
                  any
                >,
                param2: com.google.android.gms.common.api.Api.ClientKey<any>
              );
              public zah(): com.google.android.gms.common.api.Api.BaseClientBuilder<
                any,
                O
              >;
              public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<
                any
              >;
              public zai(): com.google.android.gms.common.api.Api.AbstractClientBuilder<
                any,
                O
              >;
              public getName(): string;
            }
            export namespace Api {
              export abstract class AbstractClientBuilder<T, O> extends com
                .google.android.gms.common.api.Api.BaseClientBuilder<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    any
                  >
                >;
                public buildClient(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                  param3: any,
                  param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): any;
                public constructor();
              }
              export class AnyClient {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.AnyClient
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class AnyClientKey<C> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.AnyClientKey<any>
                >;
                public constructor();
              }
              export class ApiOptions {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.ApiOptions
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export namespace ApiOptions {
                export class HasAccountOptions
                  implements
                    com.google.android.gms.common.api.Api.ApiOptions.HasOptions,
                    com.google.android.gms.common.api.Api.ApiOptions
                      .NotRequiredOptions {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    getAccount(): globalAndroid.accounts.Account;
                  });
                  public constructor();
                  public getAccount(): globalAndroid.accounts.Account;
                }
                export class HasGoogleSignInAccountOptions extends com.google
                  .android.gms.common.api.Api.ApiOptions.HasOptions {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                  });
                  public constructor();
                  public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                }
                export class HasOptions extends com.google.android.gms.common
                  .api.Api.ApiOptions {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.Api.ApiOptions.HasOptions
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
                export class NoOptions extends com.google.android.gms.common.api
                  .Api.ApiOptions.NotRequiredOptions {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.Api.ApiOptions.NoOptions
                  >;
                }
                export class NotRequiredOptions extends com.google.android.gms
                  .common.api.Api.ApiOptions {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
                export class Optional
                  implements
                    com.google.android.gms.common.api.Api.ApiOptions.HasOptions,
                    com.google.android.gms.common.api.Api.ApiOptions
                      .NotRequiredOptions {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.Api.ApiOptions.Optional
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
              }
              export class BaseClientBuilder<T, O> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.BaseClientBuilder<
                    any,
                    any
                  >
                >;
                public static API_PRIORITY_GAMES: number;
                public static API_PRIORITY_PLUS: number;
                public static API_PRIORITY_OTHER: number;
                public getImpliedScopes(
                  param0: O
                ): java.util.List<com.google.android.gms.common.api.Scope>;
                public getPriority(): number;
                public constructor();
              }
              export class Client extends com.google.android.gms.common.api.Api
                .AnyClient {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.Client
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  connect(
                    param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
                  ): void;
                  disconnect(): void;
                  isConnected(): boolean;
                  isConnecting(): boolean;
                  getRemoteService(
                    param0: com.google.android.gms.common.internal.IAccountAccessor,
                    param1: java.util.Set<
                      com.google.android.gms.common.api.Scope
                    >
                  ): void;
                  requiresSignIn(): boolean;
                  onUserSignOut(
                    param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
                  ): void;
                  requiresAccount(): boolean;
                  requiresGooglePlayServices(): boolean;
                  providesSignIn(): boolean;
                  getSignInIntent(): globalAndroid.content.Intent;
                  dump(
                    param0: string,
                    param1: java.io.FileDescriptor,
                    param2: java.io.PrintWriter,
                    param3: native.Array<string>
                  ): void;
                  getServiceBrokerBinder(): globalAndroid.os.IBinder;
                  getRequiredFeatures(): native.Array<
                    com.google.android.gms.common.Feature
                  >;
                  getEndpointPackageName(): string;
                  getMinApkVersion(): number;
                  getAvailableFeatures(): native.Array<
                    com.google.android.gms.common.Feature
                  >;
                });
                public constructor();
                public getRemoteService(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: java.util.Set<com.google.android.gms.common.api.Scope>
                ): void;
                public connect(
                  param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
                ): void;
                public requiresSignIn(): boolean;
                public onUserSignOut(
                  param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
                ): void;
                public getSignInIntent(): globalAndroid.content.Intent;
                public getRequiredFeatures(): native.Array<
                  com.google.android.gms.common.Feature
                >;
                public getServiceBrokerBinder(): globalAndroid.os.IBinder;
                public getEndpointPackageName(): string;
                public requiresGooglePlayServices(): boolean;
                public isConnected(): boolean;
                public requiresAccount(): boolean;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public getMinApkVersion(): number;
                public disconnect(): void;
                public getAvailableFeatures(): native.Array<
                  com.google.android.gms.common.Feature
                >;
                public isConnecting(): boolean;
                public providesSignIn(): boolean;
              }
              export class ClientKey<C> extends com.google.android.gms.common
                .api.Api.AnyClientKey<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.ClientKey<any>
                >;
                public constructor();
              }
              export class SimpleClient<T> extends com.google.android.gms.common
                .api.Api.AnyClient {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.SimpleClient<any>
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$SimpleClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getStartServiceAction(): string;
                  getServiceDescriptor(): string;
                  createServiceInterface(param0: globalAndroid.os.IBinder): any;
                  getContext(): globalAndroid.content.Context;
                  setState(param0: number, param1: any): void;
                });
                public constructor();
                public getStartServiceAction(): string;
                public createServiceInterface(
                  param0: globalAndroid.os.IBinder
                ): any;
                public getContext(): globalAndroid.content.Context;
                public getServiceDescriptor(): string;
                public setState(param0: number, param1: any): void;
              }
              export class zaa<T, O> extends com.google.android.gms.common.api
                .Api.BaseClientBuilder<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.zaa<any, any>
                >;
              }
              export class zab<C> extends com.google.android.gms.common.api.Api
                .AnyClientKey<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Api.zab<any>
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class AvailabilityException {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.AvailabilityException
              >;
              public constructor(
                param0: androidx.collection.ArrayMap<
                  com.google.android.gms.common.api.internal.zai<any>,
                  com.google.android.gms.common.ConnectionResult
                >
              );
              public zaj(): androidx.collection.ArrayMap<
                com.google.android.gms.common.api.internal.zai<any>,
                com.google.android.gms.common.ConnectionResult
              >;
              public getMessage(): string;
              public getConnectionResult(
                param0: com.google.android.gms.common.api.GoogleApi<any>
              ): com.google.android.gms.common.ConnectionResult;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class Batch extends com.google.android.gms.common.api
              .internal.BasePendingResult<
              com.google.android.gms.common.api.BatchResult
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.Batch
              >;
              public cancel(): void;
              public createFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): com.google.android.gms.common.api.BatchResult;
              public createFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): any;
            }
            export namespace Batch {
              export class Builder {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.Batch.Builder
                >;
                public build(): com.google.android.gms.common.api.Batch;
                public add(
                  param0: com.google.android.gms.common.api.PendingResult<any>
                ): com.google.android.gms.common.api.BatchResultToken<any>;
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class BatchResult {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.BatchResult
              >;
              public getStatus(): com.google.android.gms.common.api.Status;
              public take(
                param0: com.google.android.gms.common.api.BatchResultToken<any>
              ): com.google.android.gms.common.api.Result;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class BatchResultToken<R> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.BatchResultToken<any>
              >;
              public mId: number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class BooleanResult {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.BooleanResult
              >;
              public constructor(
                param0: com.google.android.gms.common.api.Status,
                param1: boolean
              );
              public getStatus(): com.google.android.gms.common.api.Status;
              public hashCode(): number;
              public getValue(): boolean;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class DataBufferResponse<T, R>
              extends com.google.android.gms.common.api.Response<any>
              implements com.google.android.gms.common.data.DataBuffer<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.DataBufferResponse<any, any>
              >;
              public constructor();
              public singleRefIterator(): java.util.Iterator<any>;
              public getMetadata(): globalAndroid.os.Bundle;
              public close(): void;
              public iterator(): java.util.Iterator<any>;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public isClosed(): boolean;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public getCount(): number;
              public constructor(param0: any);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class GoogleApi<O> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.GoogleApi<any>
              >;
              public zabm: com.google.android.gms.common.api.internal.GoogleApiManager;
              public doRegisterEventListener(
                param0: com.google.android.gms.common.api.internal.RegistrationMethods<
                  any,
                  any
                >
              ): com.google.android.gms.tasks.Task<any>;
              public registerListener(
                param0: any,
                param1: string
              ): com.google.android.gms.common.api.internal.ListenerHolder<any>;
              public zaa(
                param0: globalAndroid.os.Looper,
                param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                  O
                >
              ): com.google.android.gms.common.api.Api.Client;
              public doWrite(
                param0: com.google.android.gms.common.api.internal.TaskApiCall<
                  any,
                  any
                >
              ): com.google.android.gms.tasks.Task<any>;
              public doBestEffortWrite(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                any,
                any
              >;
              public doUnregisterEventListener(
                param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                  any
                >
              ): com.google.android.gms.tasks.Task<java.lang.Boolean>;
              public getLooper(): globalAndroid.os.Looper;
              public getApi(): com.google.android.gms.common.api.Api<O>;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
              );
              public getApiOptions(): O;
              public constructor(
                param0: globalAndroid.app.Activity,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.GoogleApi.Settings
              );
              public zak(): com.google.android.gms.common.api.internal.zai<O>;
              public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
              /** @deprecated */
              public doRegisterEventListener(
                param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<
                  any,
                  any
                >,
                param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<
                  any,
                  any
                >
              ): com.google.android.gms.tasks.Task<any>;
              public getInstanceId(): number;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: globalAndroid.os.Looper,
                param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
              );
              public doRead(
                param0: com.google.android.gms.common.api.internal.TaskApiCall<
                  any,
                  any
                >
              ): com.google.android.gms.tasks.Task<any>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: globalAndroid.os.Looper
              );
              public getApplicationContext(): globalAndroid.content.Context;
              public doWrite(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                any,
                any
              >;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.app.Activity,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
              );
              public disconnectService(): com.google.android.gms.tasks.Task<
                java.lang.Boolean
              >;
              public zaa(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler
              ): com.google.android.gms.common.api.internal.zace;
              public doBestEffortWrite(
                param0: com.google.android.gms.common.api.internal.TaskApiCall<
                  any,
                  any
                >
              ): com.google.android.gms.tasks.Task<any>;
              public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.GoogleApi.Settings
              );
              public doRead(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                any,
                any
              >;
            }
            export namespace GoogleApi {
              export class Settings {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.GoogleApi.Settings
                >;
                public static DEFAULT_SETTINGS: com.google.android.gms.common.api.GoogleApi.Settings;
                public zabn: com.google.android.gms.common.api.internal.StatusExceptionMapper;
                public zabo: globalAndroid.os.Looper;
              }
              export namespace Settings {
                export class Builder {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.GoogleApi.Settings.Builder
                  >;
                  public constructor();
                  public setLooper(
                    param0: globalAndroid.os.Looper
                  ): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
                  public build(): com.google.android.gms.common.api.GoogleApi.Settings;
                  public setMapper(
                    param0: com.google.android.gms.common.api.internal.StatusExceptionMapper
                  ): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class GoogleApiActivity {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.GoogleApiActivity
              >;
              public constructor();
              public onCancel(
                param0: globalAndroid.content.DialogInterface
              ): void;
              public onActivityResult(
                param0: number,
                param1: number,
                param2: globalAndroid.content.Intent
              ): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public static zaa(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.app.PendingIntent,
                param2: number
              ): globalAndroid.app.PendingIntent;
              public static zaa(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.app.PendingIntent,
                param2: number,
                param3: boolean
              ): globalAndroid.content.Intent;
              public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export abstract class GoogleApiClient {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.GoogleApiClient
              >;
              public static DEFAULT_ACCOUNT: string;
              public static SIGN_IN_MODE_REQUIRED: number;
              public static SIGN_IN_MODE_OPTIONAL: number;
              public isConnectionFailedListenerRegistered(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): boolean;
              public static dumpAll(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public registerConnectionFailedListener(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): void;
              public unregisterConnectionCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): void;
              public registerConnectionCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): void;
              public getLooper(): globalAndroid.os.Looper;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public zaa(
                param0: com.google.android.gms.common.api.internal.zacm<any>
              ): void;
              public hasConnectedApi(
                param0: com.google.android.gms.common.api.Api<any>
              ): boolean;
              public blockingConnect(): com.google.android.gms.common.ConnectionResult;
              public zab(
                param0: com.google.android.gms.common.api.internal.zacm<any>
              ): void;
              public connect(): void;
              public execute(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                any,
                any
              >;
              public maybeSignOut(): void;
              public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public stopAutoManage(
                param0: androidx.fragment.app.FragmentActivity
              ): void;
              public hasApi(
                param0: com.google.android.gms.common.api.Api<any>
              ): boolean;
              public constructor();
              public isConnectionCallbacksRegistered(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): boolean;
              public getContext(): globalAndroid.content.Context;
              public disconnect(): void;
              public isConnected(): boolean;
              public reconnect(): void;
              public unregisterConnectionFailedListener(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): void;
              public getConnectionResult(
                param0: com.google.android.gms.common.api.Api<any>
              ): com.google.android.gms.common.ConnectionResult;
              public isConnecting(): boolean;
              public enqueue(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                any,
                any
              >;
              public registerListener(
                param0: any
              ): com.google.android.gms.common.api.internal.ListenerHolder<any>;
              public blockingConnect(
                param0: number,
                param1: java.util.concurrent.TimeUnit
              ): com.google.android.gms.common.ConnectionResult;
              public maybeSignIn(
                param0: com.google.android.gms.common.api.internal.SignInConnectionListener
              ): boolean;
              public static getAllClients(): java.util.Set<
                com.google.android.gms.common.api.GoogleApiClient
              >;
              public getClient(
                param0: com.google.android.gms.common.api.Api.AnyClientKey<any>
              ): com.google.android.gms.common.api.Api.Client;
              public connect(param0: number): void;
            }
            export namespace GoogleApiClient {
              export class Builder {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.GoogleApiClient.Builder
                >;
                public build(): com.google.android.gms.common.api.GoogleApiClient;
                public enableAutoManage(
                  param0: androidx.fragment.app.FragmentActivity,
                  param1: number,
                  param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addConnectionCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public buildClientSettings(): com.google.android.gms.common.internal.ClientSettings;
                public addScopeNames(
                  param0: native.Array<string>
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addScope(
                  param0: com.google.android.gms.common.api.Scope
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addOnConnectionFailedListener(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                );
                public setViewForPopups(
                  param0: globalAndroid.view.View
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setHandler(
                  param0: globalAndroid.os.Handler
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addApiIfAvailable(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: native.Array<com.google.android.gms.common.api.Scope>
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public constructor(param0: globalAndroid.content.Context);
                public addApi(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addApi(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addApiIfAvailable(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions,
                  param2: native.Array<com.google.android.gms.common.api.Scope>
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public enableAutoManage(
                  param0: androidx.fragment.app.FragmentActivity,
                  param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setGravityForPopups(
                  param0: number
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setAccountName(
                  param0: string
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
              }
              export class ConnectionCallbacks {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onConnected(param0: globalAndroid.os.Bundle): void;
                  onConnectionSuspended(param0: number): void;
                });
                public constructor();
                public static CAUSE_SERVICE_DISCONNECTED: number;
                public static CAUSE_NETWORK_LOST: number;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class OnConnectionFailedListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onConnectionFailed(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                });
                public constructor();
                public onConnectionFailed(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export abstract class OptionalPendingResult<R> extends com.google
              .android.gms.common.api.PendingResult<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.OptionalPendingResult<any>
              >;
              public constructor();
              public get(): any;
              public isDone(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export abstract class PendingResult<R> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.PendingResult<any>
              >;
              public constructor();
              public cancel(): void;
              public isCanceled(): boolean;
              public await(
                param0: number,
                param1: java.util.concurrent.TimeUnit
              ): R;
              public await(): R;
              public addStatusListener(
                param0: com.google.android.gms.common.api.PendingResult.StatusListener
              ): void;
              public then(
                param0: com.google.android.gms.common.api.ResultTransform<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.TransformedResult<any>;
              public setResultCallback(
                param0: com.google.android.gms.common.api.ResultCallback<any>,
                param1: number,
                param2: java.util.concurrent.TimeUnit
              ): void;
              public setResultCallback(
                param0: com.google.android.gms.common.api.ResultCallback<any>
              ): void;
              public zam(): java.lang.Integer;
            }
            export namespace PendingResult {
              export class StatusListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.PendingResult.StatusListener
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onComplete(
                    param0: com.google.android.gms.common.api.Status
                  ): void;
                });
                public constructor();
                public onComplete(
                  param0: com.google.android.gms.common.api.Status
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class PendingResults {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.PendingResults
              >;
              public static immediateFailedResult(
                param0: com.google.android.gms.common.api.Result,
                param1: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.common.api.PendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Status
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public static canceledPendingResult(
                param0: com.google.android.gms.common.api.Result
              ): com.google.android.gms.common.api.PendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Result,
                param1: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.common.api.OptionalPendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Result
              ): com.google.android.gms.common.api.OptionalPendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Status,
                param1: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            }
            export namespace PendingResults {
              export class zaa<R> extends com.google.android.gms.common.api
                .internal.BasePendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.PendingResults.zaa<any>
                >;
                public constructor(param0: any);
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public createFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): any;
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
              export class zab<R> extends com.google.android.gms.common.api
                .internal.BasePendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.PendingResults.zab<any>
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: any
                );
                public createFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): any;
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
              export class zac<R> extends com.google.android.gms.common.api
                .internal.BasePendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.PendingResults.zac<any>
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public createFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): any;
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export abstract class ResultTransform<R, S> extends java.lang
              .Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.ResultTransform<any, any>
              >;
              public constructor();
              public onSuccess(
                param0: R
              ): com.google.android.gms.common.api.PendingResult<S>;
              public createFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): com.google.android.gms.common.api.PendingResult<S>;
              public onFailure(
                param0: com.google.android.gms.common.api.Status
              ): com.google.android.gms.common.api.Status;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export abstract class TransformedResult<R> extends java.lang
              .Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.TransformedResult<any>
              >;
              public constructor();
              public then(
                param0: com.google.android.gms.common.api.ResultTransform<
                  any,
                  any
                >
              ): com.google.android.gms.common.api.TransformedResult<any>;
              public andFinally(
                param0: com.google.android.gms.common.api.ResultCallbacks<any>
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class ActivityLifecycleObserver {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.ActivityLifecycleObserver
                >;
                public onStopCallOnce(
                  param0: java.lang.Runnable
                ): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
                public static of(
                  param0: globalAndroid.app.Activity
                ): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class ApiExceptionMapper {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.ApiExceptionMapper
                >;
                public constructor();
                public getException(
                  param0: com.google.android.gms.common.api.Status
                ): java.lang.Exception;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class BaseImplementation {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.BaseImplementation
                >;
                public constructor();
              }
              export namespace BaseImplementation {
                export abstract class ApiMethodImpl<R, A>
                  extends com.google.android.gms.common.api.internal
                    .BasePendingResult<any>
                  implements
                    com.google.android.gms.common.api.internal
                      .BaseImplementation.ResultHolder<any> {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                      any,
                      any
                    >
                  >;
                  public constructor();
                  public getApi(): com.google.android.gms.common.api.Api<any>;
                  /** @deprecated */
                  public constructor(
                    param0: com.google.android.gms.common.api.Api.AnyClientKey<
                      any
                    >,
                    param1: com.google.android.gms.common.api.GoogleApiClient
                  );
                  public run(param0: any): void;
                  public constructor(
                    param0: com.google.android.gms.common.api.GoogleApiClient
                  );
                  public setFailedResult(
                    param0: com.google.android.gms.common.api.Status
                  ): void;
                  /** @deprecated */
                  public constructor(param0: globalAndroid.os.Looper);
                  public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<
                    any
                  >;
                  public onSetFailedResult(param0: any): void;
                  public constructor(
                    param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                      any
                    >
                  );
                  public doExecute(param0: any): void;
                  public setResult(param0: any): void;
                  public constructor(
                    param0: com.google.android.gms.common.api.Api<any>,
                    param1: com.google.android.gms.common.api.GoogleApiClient
                  );
                }
                export class ResultHolder<R> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                      any
                    >
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    setResult(param0: R): void;
                    setFailedResult(
                      param0: com.google.android.gms.common.api.Status
                    ): void;
                  });
                  public constructor();
                  public setResult(param0: R): void;
                  public setFailedResult(
                    param0: com.google.android.gms.common.api.Status
                  ): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class BasePendingResult<R> extends com.google
                .android.gms.common.api.PendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.BasePendingResult<
                    any
                  >
                >;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>
                ): void;
                public setCancelToken(
                  param0: com.google.android.gms.common.internal.ICancelToken
                ): void;
                public then(
                  param0: com.google.android.gms.common.api.ResultTransform<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.TransformedResult<any>;
                public static zab(
                  param0: com.google.android.gms.common.api.Result
                ): void;
                public cancel(): void;
                public zab(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public zat(): boolean;
                public createFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): any;
                public constructor();
                public await(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): any;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>,
                  param1: number,
                  param2: java.util.concurrent.TimeUnit
                ): void;
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
                public setResult(param0: any): void;
                public await(): any;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zacs
                ): void;
                public zau(): void;
                public isCanceled(): boolean;
                public isReady(): boolean;
                public addStatusListener(
                  param0: com.google.android.gms.common.api.PendingResult.StatusListener
                ): void;
                public zam(): java.lang.Integer;
              }
              export namespace BasePendingResult {
                export class CallbackHandler<R> extends com.google.android.gms
                  .internal.base.zap {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                      any
                    >
                  >;
                  public constructor();
                  public zaa(
                    param0: com.google.android.gms.common.api.ResultCallback<
                      any
                    >,
                    param1: any
                  ): void;
                  public constructor(
                    param0: globalAndroid.os.Looper,
                    param1: globalAndroid.os.Handler.Callback
                  );
                  public handleMessage(param0: globalAndroid.os.Message): void;
                  public constructor(param0: globalAndroid.os.Looper);
                }
                export class zaa {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.BasePendingResult.zaa
                  >;
                  public finalize(): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class DataHolderNotifier<L> extends com.google
                .android.gms.common.api.internal.ListenerHolder.Notifier<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.DataHolderNotifier<
                    any
                  >
                >;
                public onNotifyListenerFailed(): void;
                public notifyListener(
                  param0: any,
                  param1: com.google.android.gms.common.data.DataHolder
                ): void;
                public notifyListener(param0: any): void;
                public constructor(
                  param0: com.google.android.gms.common.data.DataHolder
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class DataHolderResult {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.DataHolderResult
                >;
                public mStatus: com.google.android.gms.common.api.Status;
                public mDataHolder: com.google.android.gms.common.data.DataHolder;
                public constructor(
                  param0: com.google.android.gms.common.data.DataHolder,
                  param1: com.google.android.gms.common.api.Status
                );
                public getStatus(): com.google.android.gms.common.api.Status;
                public release(): void;
                public constructor(
                  param0: com.google.android.gms.common.data.DataHolder
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class GoogleApiManager {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.GoogleApiManager
                >;
                public static zahx: com.google.android.gms.common.api.Status;
                public zac(
                  param0: com.google.android.gms.common.api.GoogleApi<any>
                ): com.google.android.gms.tasks.Task<java.lang.Boolean>;
                public zao(): void;
                public handleMessage(param0: globalAndroid.os.Message): boolean;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zaae
                ): void;
                public static zabc(): com.google.android.gms.common.api.internal.GoogleApiManager;
                public zabd(): number;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: com.google.android.gms.common.api.internal.RegisterListenerMethod<
                    any,
                    any
                  >,
                  param2: com.google.android.gms.common.api.internal.UnregisterListenerMethod<
                    any,
                    any
                  >
                ): com.google.android.gms.tasks.Task<any>;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                    any
                  >
                ): com.google.android.gms.tasks.Task<any>;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: number
                ): void;
                public static reportSignOut(): void;
                public zaa(
                  param0: java.lang.Iterable<any>
                ): com.google.android.gms.tasks.Task<
                  java.util.Map<
                    com.google.android.gms.common.api.internal.zai<any>,
                    string
                  >
                >;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>
                ): void;
                public static zab(
                  param0: globalAndroid.content.Context
                ): com.google.android.gms.common.api.internal.GoogleApiManager;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: number,
                  param2: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: number,
                  param2: com.google.android.gms.common.api.internal.TaskApiCall<
                    any,
                    any
                  >,
                  param3: com.google.android.gms.tasks.TaskCompletionSource<
                    any
                  >,
                  param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
                ): void;
              }
              export namespace GoogleApiManager {
                export class zaa<O> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                      any
                    >
                  >;
                  public zag(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                  public zabm(): com.google.android.gms.common.ConnectionResult;
                  public zaa(
                    param0: com.google.android.gms.common.ConnectionResult,
                    param1: com.google.android.gms.common.api.Api<any>,
                    param2: boolean
                  ): void;
                  public requiresSignIn(): boolean;
                  public zaa(
                    param0: com.google.android.gms.common.api.internal.zab
                  ): void;
                  public connect(): void;
                  public zabl(): void;
                  public zaa(
                    param0: com.google.android.gms.common.api.internal.zak
                  ): void;
                  public getInstanceId(): number;
                  public onConnected(param0: globalAndroid.os.Bundle): void;
                  public constructor(
                    param0: com.google.android.gms.common.api.GoogleApi<O>
                  );
                  public zabp(): boolean;
                  public onConnectionSuspended(param0: number): void;
                  public zaab(): com.google.android.gms.common.api.Api.Client;
                  public zabk(): java.util.Map<
                    com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                      any
                    >,
                    com.google.android.gms.common.api.internal.zabw
                  >;
                  public onConnectionFailed(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                  public resume(): void;
                  public zaav(): void;
                  public zabj(): void;
                  public zac(
                    param0: com.google.android.gms.common.api.Status
                  ): void;
                }
                export class zab {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.GoogleApiManager.zab
                  >;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                }
                export class zac extends com.google.android.gms.common.api
                  .internal.zach {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.GoogleApiManager.zac
                  >;
                  public zag(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                  public onReportServiceBinding(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                  public constructor(
                    param0: com.google.android.gms.common.api.Api.Client,
                    param1: com.google.android.gms.common.api.internal.zai<any>
                  );
                  public zaa(
                    param0: com.google.android.gms.common.internal.IAccountAccessor,
                    param1: java.util.Set<
                      com.google.android.gms.common.api.Scope
                    >
                  ): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class IStatusCallback {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.IStatusCallback
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.IStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onResult(
                    param0: com.google.android.gms.common.api.Status
                  ): void;
                });
                public constructor();
                public onResult(
                  param0: com.google.android.gms.common.api.Status
                ): void;
              }
              export namespace IStatusCallback {
                export abstract class Stub
                  extends com.google.android.gms.internal.base.zab
                  implements
                    com.google.android.gms.common.api.internal.IStatusCallback {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.IStatusCallback.Stub
                  >;
                  public constructor(param0: string);
                  public constructor();
                  public onResult(
                    param0: com.google.android.gms.common.api.Status
                  ): void;
                  public dispatchTransaction(
                    param0: number,
                    param1: globalAndroid.os.Parcel,
                    param2: globalAndroid.os.Parcel,
                    param3: number
                  ): boolean;
                  public static asInterface(
                    param0: globalAndroid.os.IBinder
                  ): com.google.android.gms.common.api.internal.IStatusCallback;
                }
                export namespace Stub {
                  export class zaa
                    extends com.google.android.gms.internal.base.zaa
                    implements
                      com.google.android.gms.common.api.internal
                        .IStatusCallback {
                    public static class: java.lang.Class<
                      com.google.android.gms.common.api.internal.IStatusCallback.Stub.zaa
                    >;
                    public onResult(
                      param0: com.google.android.gms.common.api.Status
                    ): void;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class ListenerHolder<L> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.ListenerHolder<any>
                >;
                public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                  L
                >;
                public clear(): void;
                public notifyListener(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<
                    any
                  >
                ): void;
                public hasListener(): boolean;
              }
              export namespace ListenerHolder {
                export class ListenerKey<L> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                      any
                    >
                  >;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                }
                export class Notifier<L> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.ListenerHolder.Notifier<
                      any
                    >
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    notifyListener(param0: L): void;
                    onNotifyListenerFailed(): void;
                  });
                  public constructor();
                  public notifyListener(param0: L): void;
                  public onNotifyListenerFailed(): void;
                }
                export class zaa extends com.google.android.gms.internal.base
                  .zap {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.ListenerHolder.zaa
                  >;
                  public constructor();
                  public constructor(
                    param0: globalAndroid.os.Looper,
                    param1: globalAndroid.os.Handler.Callback
                  );
                  public handleMessage(param0: globalAndroid.os.Message): void;
                  public constructor(param0: globalAndroid.os.Looper);
                  public constructor(
                    param0: com.google.android.gms.common.api.internal.ListenerHolder<
                      any
                    >,
                    param1: globalAndroid.os.Looper
                  );
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class ListenerHolders {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.ListenerHolders
                >;
                public static createListenerKey(
                  param0: any,
                  param1: string
                ): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                  any
                >;
                public constructor();
                public static createListenerHolder(
                  param0: any,
                  param1: globalAndroid.os.Looper,
                  param2: string
                ): com.google.android.gms.common.api.internal.ListenerHolder<
                  any
                >;
                public release(): void;
                public zaa(
                  param0: any,
                  param1: globalAndroid.os.Looper,
                  param2: string
                ): com.google.android.gms.common.api.internal.ListenerHolder<
                  any
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class OptionalPendingResultImpl<R> extends com.google
                .android.gms.common.api.OptionalPendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.OptionalPendingResultImpl<
                    any
                  >
                >;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>
                ): void;
                public then(
                  param0: com.google.android.gms.common.api.ResultTransform<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.TransformedResult<any>;
                public cancel(): void;
                public get(): any;
                public constructor();
                public isDone(): boolean;
                public await(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): any;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>,
                  param1: number,
                  param2: java.util.concurrent.TimeUnit
                ): void;
                public await(): any;
                public isCanceled(): boolean;
                public constructor(
                  param0: com.google.android.gms.common.api.PendingResult<any>
                );
                public addStatusListener(
                  param0: com.google.android.gms.common.api.PendingResult.StatusListener
                ): void;
                public zam(): java.lang.Integer;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class PendingResultFacade<A, B> extends com.google
                .android.gms.common.api.PendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.PendingResultFacade<
                    any,
                    any
                  >
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class RegisterListenerMethod<A, L> extends java
                .lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.RegisterListenerMethod<
                    any,
                    any
                  >
                >;
                public registerListener(
                  param0: A,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Void
                  >
                ): void;
                public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                  L
                >;
                public clearListener(): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder<
                    L
                  >,
                  param1: native.Array<com.google.android.gms.common.Feature>,
                  param2: boolean
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder<
                    L
                  >
                );
                public getRequiredFeatures(): native.Array<
                  com.google.android.gms.common.Feature
                >;
                public shouldAutoResolveMissingFeatures(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class RegistrationMethods<A, L> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.RegistrationMethods<
                    any,
                    any
                  >
                >;
                public zajz: com.google.android.gms.common.api.internal.RegisterListenerMethod<
                  A,
                  L
                >;
                public zaka: com.google.android.gms.common.api.internal.UnregisterListenerMethod<
                  A,
                  L
                >;
                public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                  any,
                  any
                >;
              }
              export namespace RegistrationMethods {
                export class Builder<A, L> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                      any,
                      any
                    >
                  >;
                  public setAutoResolveMissingFeatures(
                    param0: boolean
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                  public withHolder(
                    param0: com.google.android.gms.common.api.internal.ListenerHolder<
                      L
                    >
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                  /** @deprecated */
                  public register(
                    param0: com.google.android.gms.common.util.BiConsumer<
                      A,
                      com.google.android.gms.tasks.TaskCompletionSource<
                        java.lang.Void
                      >
                    >
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                  public unregister(
                    param0: com.google.android.gms.common.api.internal.RemoteCall<
                      A,
                      com.google.android.gms.tasks.TaskCompletionSource<
                        java.lang.Boolean
                      >
                    >
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                  public register(
                    param0: com.google.android.gms.common.api.internal.RemoteCall<
                      A,
                      com.google.android.gms.tasks.TaskCompletionSource<
                        java.lang.Void
                      >
                    >
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                  public build(): com.google.android.gms.common.api.internal.RegistrationMethods<
                    A,
                    L
                  >;
                  public setFeatures(
                    param0: native.Array<com.google.android.gms.common.Feature>
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                  /** @deprecated */
                  public unregister(
                    param0: com.google.android.gms.common.util.BiConsumer<
                      A,
                      com.google.android.gms.tasks.TaskCompletionSource<
                        java.lang.Boolean
                      >
                    >
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<
                    A,
                    L
                  >;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class RemoteCall<T, U> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.RemoteCall<
                    any,
                    any
                  >
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  accept(param0: T, param1: U): void;
                });
                public constructor();
                public accept(param0: T, param1: U): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class SignInConnectionListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.SignInConnectionListener
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.SignInConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onComplete(): void });
                public constructor();
                public onComplete(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class StatusCallback extends com.google.android.gms.common
                .api.internal.IStatusCallback.Stub {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.StatusCallback
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                    com.google.android.gms.common.api.Status
                  >
                );
                public constructor();
                public onResult(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class StatusPendingResult extends com.google.android.gms
                .common.api.internal.BasePendingResult<
                com.google.android.gms.common.api.Status
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.StatusPendingResult
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class TaskApiCall<A, ResultT> extends java.lang
                .Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.TaskApiCall<
                    any,
                    any
                  >
                >;
                /** @deprecated */
                public constructor();
                public zabt(): native.Array<
                  com.google.android.gms.common.Feature
                >;
                public doExecute(
                  param0: A,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    ResultT
                  >
                ): void;
                public shouldAutoResolveMissingFeatures(): boolean;
                public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<
                  any,
                  any
                >;
              }
              export namespace TaskApiCall {
                export class Builder<A, ResultT> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.TaskApiCall.Builder<
                      any,
                      any
                    >
                  >;
                  public setFeatures(
                    param0: native.Array<com.google.android.gms.common.Feature>
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<
                    A,
                    ResultT
                  >;
                  public build(): com.google.android.gms.common.api.internal.TaskApiCall<
                    A,
                    ResultT
                  >;
                  public run(
                    param0: com.google.android.gms.common.api.internal.RemoteCall<
                      A,
                      com.google.android.gms.tasks.TaskCompletionSource<ResultT>
                    >
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<
                    A,
                    ResultT
                  >;
                  public setAutoResolveMissingFeatures(
                    param0: boolean
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<
                    A,
                    ResultT
                  >;
                  /** @deprecated */
                  public execute(
                    param0: com.google.android.gms.common.util.BiConsumer<
                      A,
                      com.google.android.gms.tasks.TaskCompletionSource<ResultT>
                    >
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<
                    A,
                    ResultT
                  >;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class TaskUtil {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.TaskUtil
                >;
                public static setResultOrApiException(
                  param0: com.google.android.gms.common.api.Status,
                  param1: any,
                  param2: com.google.android.gms.tasks.TaskCompletionSource<any>
                ): void;
                public static setResultOrApiException(
                  param0: com.google.android.gms.common.api.Status,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Void
                  >
                ): void;
                public constructor();
                /** @deprecated */
                public static toVoidTaskThatFailsOnFalse(
                  param0: com.google.android.gms.tasks.Task<java.lang.Boolean>
                ): com.google.android.gms.tasks.Task<java.lang.Void>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class UnregisterListenerMethod<A, L> extends java
                .lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.UnregisterListenerMethod<
                    any,
                    any
                  >
                >;
                public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                  L
                >;
                public unregisterListener(
                  param0: A,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Boolean
                  >
                ): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                    L
                  >
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaa extends com.google.android.gms.common.api
                .internal.ActivityLifecycleObserver {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaa
                >;
                public onStopCallOnce(
                  param0: java.lang.Runnable
                ): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
                public constructor(param0: globalAndroid.app.Activity);
                public constructor();
              }
              export namespace zaa {
                export class zaa {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.zaa.zaa
                  >;
                  public onStop(): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaaa extends com.google.android.gms.tasks
                .OnCompleteListener<
                java.util.Map<
                  com.google.android.gms.common.api.internal.zai<any>,
                  string
                >
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaaa
                >;
                public onComplete(
                  param0: com.google.android.gms.tasks.Task<any>
                ): void;
                public onComplete(
                  param0: com.google.android.gms.tasks.Task<
                    java.util.Map<
                      com.google.android.gms.common.api.internal.zai<any>,
                      string
                    >
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaab {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaab
                >;
                public constructor();
                public zaai(): void;
                public zaah(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaac extends com.google.android.gms.common.api
                .PendingResult.StatusListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaac
                >;
                public onComplete(
                  param0: com.google.android.gms.common.api.Status
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaad extends com.google.android.gms.tasks
                .OnCompleteListener<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaad
                >;
                public onComplete(
                  param0: com.google.android.gms.tasks.Task<any>
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaae extends com.google.android.gms.common.api
                .internal.zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaae
                >;
                public zao(): void;
                public static zaa(
                  param0: globalAndroid.app.Activity,
                  param1: com.google.android.gms.common.api.internal.GoogleApiManager,
                  param2: com.google.android.gms.common.api.internal.zai<any>
                ): void;
                public onResume(): void;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: number
                ): void;
                public onStop(): void;
                public onStart(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaaf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaaf
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zai<any>
                );
                public zaal(): com.google.android.gms.tasks.TaskCompletionSource<
                  java.lang.Boolean
                >;
                public zak(): com.google.android.gms.common.api.internal.zai<
                  any
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaag extends com.google.android.gms.common.api
                .GoogleApiClient {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaag
                >;
                public unregisterConnectionCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): void;
                public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.common.api.Status
                >;
                public blockingConnect(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): com.google.android.gms.common.ConnectionResult;
                public registerConnectionCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): void;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public constructor();
                public connect(param0: number): void;
                public connect(): void;
                public registerConnectionFailedListener(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): void;
                public stopAutoManage(
                  param0: androidx.fragment.app.FragmentActivity
                ): void;
                public isConnected(): boolean;
                public isConnectionFailedListenerRegistered(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): boolean;
                public getConnectionResult(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.ConnectionResult;
                public reconnect(): void;
                public isConnectionCallbacksRegistered(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): boolean;
                public unregisterConnectionFailedListener(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): void;
                public hasConnectedApi(
                  param0: com.google.android.gms.common.api.Api<any>
                ): boolean;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public constructor(param0: string);
                public disconnect(): void;
                public isConnecting(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaah extends com.google.android.gms.common.api
                .internal.zabd {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaah
                >;
                public disconnect(): boolean;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                ): void;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabe
                );
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaai extends com.google.android.gms.common.api
                .internal.zabf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaai
                >;
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaaj extends com.google.android.gms.common.api
                .internal.zabf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaaj
                >;
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaak extends com.google.android.gms.common.api
                .internal.zabd {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaak
                >;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                ): void;
                public disconnect(): boolean;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabe,
                  param1: com.google.android.gms.common.internal.ClientSettings,
                  param2: java.util.Map<
                    com.google.android.gms.common.api.Api<any>,
                    java.lang.Boolean
                  >,
                  param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >,
                  param5: java.util.concurrent.locks.Lock,
                  param6: globalAndroid.content.Context
                );
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaal
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaam {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaam
                >;
                public onReportServiceBinding(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zaak,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaan extends com.google.android.gms.common.api
                .internal.zaau {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaan
                >;
                public constructor(
                  param0: java.util.Map<
                    com.google.android.gms.common.api.Api.Client,
                    com.google.android.gms.common.api.internal.zaam
                  >
                );
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaao extends com.google.android.gms.common.api
                .internal.zabf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaao
                >;
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaap extends com.google.android.gms.common.api
                .internal.zabf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaap
                >;
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaaq extends com.google.android.gms.common.api
                .internal.zaau {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaaq
                >;
                public constructor(
                  param0: java.util.ArrayList<
                    com.google.android.gms.common.api.Api.Client
                  >
                );
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaar extends com.google.android.gms.signin.internal
                .zac {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaar
                >;
                public zah(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public zag(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public zab(
                  param0: com.google.android.gms.signin.internal.zaj
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.signin.internal.zaa
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.Status,
                  param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaas extends com.google.android.gms.common.api
                .internal.zabf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaas
                >;
                public zaan(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaat
                implements
                  com.google.android.gms.common.api.GoogleApiClient
                    .ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient
                    .OnConnectionFailedListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaat
                >;
                public onConnectionFailed(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zaau {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaau
                >;
                public zaan(): void;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaav extends com.google.android.gms.common.api
                .internal.zabd {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaav
                >;
                public disconnect(): boolean;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                ): void;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabe
                );
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaaw
                extends com.google.android.gms.common.api.GoogleApiClient
                implements com.google.android.gms.common.api.internal.zabt {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaaw
                >;
                public unregisterConnectionCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): void;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: java.util.concurrent.locks.Lock,
                  param2: globalAndroid.os.Looper,
                  param3: com.google.android.gms.common.internal.ClientSettings,
                  param4: com.google.android.gms.common.GoogleApiAvailability,
                  param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >,
                  param6: java.util.Map<
                    com.google.android.gms.common.api.Api<any>,
                    java.lang.Boolean
                  >,
                  param7: java.util.List<
                    com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                  >,
                  param8: java.util.List<
                    com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                  >,
                  param9: java.util.Map<
                    com.google.android.gms.common.api.Api.AnyClientKey<any>,
                    com.google.android.gms.common.api.Api.Client
                  >,
                  param10: number,
                  param11: number,
                  param12: java.util.ArrayList<
                    com.google.android.gms.common.api.internal.zaq
                  >,
                  param13: boolean
                );
                public blockingConnect(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): com.google.android.gms.common.ConnectionResult;
                public getClient(
                  param0: com.google.android.gms.common.api.Api.AnyClientKey<
                    any
                  >
                ): com.google.android.gms.common.api.Api.Client;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(
                  param0: com.google.android.gms.common.api.internal.zacm<any>
                ): void;
                public getContext(): globalAndroid.content.Context;
                public connect(param0: number): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zacm<any>
                ): void;
                public connect(): void;
                public static zaa(
                  param0: java.lang.Iterable<
                    com.google.android.gms.common.api.Api.Client
                  >,
                  param1: boolean
                ): number;
                public isConnectionCallbacksRegistered(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): boolean;
                public unregisterConnectionFailedListener(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): void;
                public hasConnectedApi(
                  param0: com.google.android.gms.common.api.Api<any>
                ): boolean;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.common.api.Status
                >;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public registerConnectionCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
                ): void;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public constructor();
                public maybeSignOut(): void;
                public registerConnectionFailedListener(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): void;
                public zab(param0: number, param1: boolean): void;
                public stopAutoManage(
                  param0: androidx.fragment.app.FragmentActivity
                ): void;
                public maybeSignIn(
                  param0: com.google.android.gms.common.api.internal.SignInConnectionListener
                ): boolean;
                public zac(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public isConnected(): boolean;
                public isConnectionFailedListenerRegistered(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): boolean;
                public getConnectionResult(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.ConnectionResult;
                public reconnect(): void;
                public hasApi(
                  param0: com.google.android.gms.common.api.Api<any>
                ): boolean;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public disconnect(): void;
                public isConnecting(): boolean;
                public registerListener(
                  param0: any
                ): com.google.android.gms.common.api.internal.ListenerHolder<
                  any
                >;
                public getLooper(): globalAndroid.os.Looper;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaax extends com.google.android.gms.common.internal
                .GmsClientEventManager.GmsClientEventState {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaax
                >;
                public getConnectionHint(): globalAndroid.os.Bundle;
                public isConnected(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaay extends com.google.android.gms.common.api
                .GoogleApiClient.ConnectionCallbacks {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaay
                >;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaaz extends com.google.android.gms.common.api
                .GoogleApiClient.OnConnectionFailedListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaaz
                >;
                public onConnectionFailed(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zab {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zab
                >;
                public zaa(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public constructor(param0: number);
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zaab,
                  param1: boolean
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaba extends com.google.android.gms.common.api
                .ResultCallback<com.google.android.gms.common.api.Status> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaba
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabb extends com.google.android.gms.internal.base
                .zap {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabb
                >;
                public handleMessage(param0: globalAndroid.os.Message): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabc extends com.google.android.gms.common.api
                .internal.zabr {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabc
                >;
                public zas(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabd {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabd
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  begin(): void;
                  enqueue(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                      any,
                      any
                    >
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >;
                  execute(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                      any,
                      any
                    >
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >;
                  disconnect(): boolean;
                  connect(): void;
                  onConnected(param0: globalAndroid.os.Bundle): void;
                  zaa(
                    param0: com.google.android.gms.common.ConnectionResult,
                    param1: com.google.android.gms.common.api.Api<any>,
                    param2: boolean
                  ): void;
                  onConnectionSuspended(param0: number): void;
                });
                public constructor();
                public disconnect(): boolean;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                ): void;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabe
                implements
                  com.google.android.gms.common.api.internal.zabs,
                  com.google.android.gms.common.api.internal.zar {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabe
                >;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public blockingConnect(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(
                  param0: com.google.android.gms.common.api.internal.SignInConnectionListener
                ): boolean;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                ): void;
                public isConnected(): boolean;
                public getConnectionResult(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.ConnectionResult;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.internal.zaaw,
                  param2: java.util.concurrent.locks.Lock,
                  param3: globalAndroid.os.Looper,
                  param4: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param5: java.util.Map<
                    com.google.android.gms.common.api.Api.AnyClientKey<any>,
                    com.google.android.gms.common.api.Api.Client
                  >,
                  param6: com.google.android.gms.common.internal.ClientSettings,
                  param7: java.util.Map<
                    com.google.android.gms.common.api.Api<any>,
                    java.lang.Boolean
                  >,
                  param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >,
                  param9: java.util.ArrayList<
                    com.google.android.gms.common.api.internal.zaq
                  >,
                  param10: com.google.android.gms.common.api.internal.zabt
                );
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public disconnect(): void;
                public zaw(): void;
                public isConnecting(): boolean;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zabf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabf
                >;
                public zaan(): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabd
                );
                public zac(
                  param0: com.google.android.gms.common.api.internal.zabe
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabg extends com.google.android.gms.internal.base
                .zap {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabg
                >;
                public handleMessage(param0: globalAndroid.os.Message): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabh {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabh
                >;
                public static zabb(): java.util.concurrent.ExecutorService;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabi {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabi
                >;
                public onBackgroundStateChanged(param0: boolean): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabj {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabj
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabk {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabk
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabl {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabl
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabm {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabm
                >;
                public onSignOutComplete(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabn {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabn
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabo {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabo
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabp<O> extends com.google.android.gms.common.api
                .internal.zaag {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabp<any>
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApi<any>
                );
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public constructor();
                public constructor(param0: string);
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public zab(
                  param0: com.google.android.gms.common.api.internal.zacm<any>
                ): void;
                public getContext(): globalAndroid.content.Context;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zacm<any>
                ): void;
                public getLooper(): globalAndroid.os.Looper;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabq {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabq
                >;
                public onReceive(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.content.Intent
                ): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabr
                );
                public zac(param0: globalAndroid.content.Context): void;
                public unregister(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zabr {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabr
                >;
                public constructor();
                public zas(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabs {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabs
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  enqueue(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                      any,
                      any
                    >
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >;
                  execute(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                      any,
                      any
                    >
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >;
                  connect(): void;
                  blockingConnect(): com.google.android.gms.common.ConnectionResult;
                  blockingConnect(
                    param0: number,
                    param1: java.util.concurrent.TimeUnit
                  ): com.google.android.gms.common.ConnectionResult;
                  disconnect(): void;
                  getConnectionResult(
                    param0: com.google.android.gms.common.api.Api<any>
                  ): com.google.android.gms.common.ConnectionResult;
                  isConnected(): boolean;
                  isConnecting(): boolean;
                  maybeSignIn(
                    param0: com.google.android.gms.common.api.internal.SignInConnectionListener
                  ): boolean;
                  maybeSignOut(): void;
                  dump(
                    param0: string,
                    param1: java.io.FileDescriptor,
                    param2: java.io.PrintWriter,
                    param3: native.Array<string>
                  ): void;
                  zaw(): void;
                });
                public constructor();
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public blockingConnect(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(
                  param0: com.google.android.gms.common.api.internal.SignInConnectionListener
                ): boolean;
                public isConnected(): boolean;
                public getConnectionResult(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.ConnectionResult;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public disconnect(): void;
                public zaw(): void;
                public isConnecting(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabt {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabt
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zab(param0: globalAndroid.os.Bundle): void;
                  zac(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                  zab(param0: number, param1: boolean): void;
                });
                public constructor();
                public zac(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: number, param1: boolean): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabu extends com.google.android.gms.common.api
                .internal.zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabu
                >;
                public zao(): void;
                public getTask(): com.google.android.gms.tasks.Task<
                  java.lang.Void
                >;
                public onDestroy(): void;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: number
                ): void;
                public static zac(
                  param0: globalAndroid.app.Activity
                ): com.google.android.gms.common.api.internal.zabu;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabv {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabv
                >;
                public zajr: com.google.android.gms.common.api.internal.zab;
                public zajs: number;
                public zajt: com.google.android.gms.common.api.GoogleApi<any>;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zab,
                  param1: number,
                  param2: com.google.android.gms.common.api.GoogleApi<any>
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabw {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabw
                >;
                public zajx: com.google.android.gms.common.api.internal.RegisterListenerMethod<
                  com.google.android.gms.common.api.Api.AnyClient,
                  any
                >;
                public zajy: com.google.android.gms.common.api.internal.UnregisterListenerMethod<
                  com.google.android.gms.common.api.Api.AnyClient,
                  any
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<
                    com.google.android.gms.common.api.Api.AnyClient,
                    any
                  >,
                  param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<
                    com.google.android.gms.common.api.Api.AnyClient,
                    any
                  >
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabx {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabx
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaby extends com.google.android.gms.common.api
                .internal.RemoteCall<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaby
                >;
                public accept(param0: any, param1: any): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zabz extends com.google.android.gms.common.api
                .internal.RemoteCall<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zabz
                >;
                public accept(param0: any, param1: any): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zac extends com.google.android.gms.common
                .api.internal.zab {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zac
                >;
                public zac(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): boolean;
                public constructor(param0: number);
                public zab(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): native.Array<com.google.android.gms.common.Feature>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaca extends com.google.android.gms.common.api
                .internal.RegisterListenerMethod<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaca
                >;
                public registerListener(
                  param0: any,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Void
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacb extends com.google.android.gms.common.api
                .internal.UnregisterListenerMethod<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacb
                >;
                public unregisterListener(
                  param0: any,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Boolean
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacc {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacc
                >;
                public static zabb(): java.util.concurrent.ExecutorService;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacd<R> extends com.google.android.gms.common.api
                .PendingResult<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacd<any>
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.Status
                );
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>
                ): void;
                public then(
                  param0: com.google.android.gms.common.api.ResultTransform<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.TransformedResult<any>;
                public cancel(): void;
                public isCanceled(): boolean;
                public addStatusListener(
                  param0: com.google.android.gms.common.api.PendingResult.StatusListener
                ): void;
                public constructor();
                public await(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): any;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>,
                  param1: number,
                  param2: java.util.concurrent.TimeUnit
                ): void;
                public await(): any;
                public zam(): java.lang.Integer;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zace
                extends com.google.android.gms.signin.internal.zac
                implements
                  com.google.android.gms.common.api.GoogleApiClient
                    .ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient
                    .OnConnectionFailedListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zace
                >;
                public zag(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zach
                ): void;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                  param3: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >
                );
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.signin.internal.zaa
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.Status,
                  param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount
                ): void;
                public constructor();
                public zabq(): com.google.android.gms.signin.zad;
                public onConnectionFailed(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public zabs(): void;
                public zah(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public zab(
                  param0: com.google.android.gms.signin.internal.zaj
                ): void;
                public constructor(param0: string);
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.ClientSettings
                );
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacf {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacf
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacg {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacg
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zach {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zach
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zach interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zag(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                  zaa(
                    param0: com.google.android.gms.common.internal.IAccountAccessor,
                    param1: java.util.Set<
                      com.google.android.gms.common.api.Scope
                    >
                  ): void;
                });
                public constructor();
                public zag(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: java.util.Set<com.google.android.gms.common.api.Scope>
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaci {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaci
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacj extends com.google.android.gms.common.api
                .internal.RemoteCall<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacj
                >;
                public accept(param0: any, param1: any): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zack extends com.google.android.gms.common.api
                .internal.TaskApiCall<any, any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zack
                >;
                public doExecute(
                  param0: any,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<any>
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacl extends com.google.android.gms.tasks
                .Continuation<java.lang.Boolean, java.lang.Void> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacl
                >;
                public then(
                  param0: com.google.android.gms.tasks.Task<any>
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacm<R>
                extends com.google.android.gms.common.api.TransformedResult<any>
                implements
                  com.google.android.gms.common.api.ResultCallback<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacm<any>
                >;
                public constructor(
                  param0: java.lang.ref.WeakReference<
                    com.google.android.gms.common.api.GoogleApiClient
                  >
                );
                public then(
                  param0: com.google.android.gms.common.api.ResultTransform<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.TransformedResult<any>;
                public zaa(
                  param0: com.google.android.gms.common.api.PendingResult<any>
                ): void;
                public constructor();
                public onResult(param0: any): void;
                public andFinally(
                  param0: com.google.android.gms.common.api.ResultCallbacks<any>
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacn {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacn
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaco extends com.google.android.gms.internal.base
                .zap {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaco
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zacm<any>,
                  param1: globalAndroid.os.Looper
                );
                public constructor(
                  param0: globalAndroid.os.Looper,
                  param1: globalAndroid.os.Handler.Callback
                );
                public handleMessage(param0: globalAndroid.os.Message): void;
                public constructor();
                public constructor(param0: globalAndroid.os.Looper);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacp {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacp
                >;
                public static zakx: com.google.android.gms.common.api.Status;
                public constructor(
                  param0: java.util.Map<
                    com.google.android.gms.common.api.Api.AnyClientKey<any>,
                    com.google.android.gms.common.api.Api.Client
                  >
                );
                public release(): void;
                public zabx(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacq extends com.google.android.gms.common.api
                .internal.zacs {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacq
                >;
                public zac(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult<
                    any
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacr extends com.google.android.gms.common.api
                .internal.zacs {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacr
                >;
                public binderDied(): void;
                public zac(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult<
                    any
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zacs {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zacs
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zac(
                    param0: com.google.android.gms.common.api.internal.BasePendingResult<
                      any
                    >
                  ): void;
                });
                public constructor();
                public zac(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult<
                    any
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zad<T> extends com.google.android.gms.common
                .api.internal.zac {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zad<any>
                >;
                public zacn: com.google.android.gms.tasks.TaskCompletionSource<
                  any
                >;
                public constructor(
                  param0: number,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<any>
                );
                public zaa(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public constructor(param0: number);
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zaab,
                  param1: boolean
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
                public zad(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zae<A> extends com.google.android.gms.common.api
                .internal.zab {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zae<any>
                >;
                public zaa(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public constructor(param0: number);
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zaab,
                  param1: boolean
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
                public constructor(param0: number, param1: any);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaf extends com.google.android.gms.common.api
                .internal.zad<java.lang.Void> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaf
                >;
                public constructor(
                  param0: number,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<any>
                );
                public zac(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): boolean;
                public constructor(param0: number);
                public zad(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabw,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Void
                  >
                );
                public zab(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): native.Array<com.google.android.gms.common.Feature>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zag<ResultT> extends com.google.android.gms.common
                .api.internal.zac {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zag<any>
                >;
                public zaa(
                  param0: com.google.android.gms.common.api.Status
                ): void;
                public zac(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): boolean;
                public constructor(param0: number);
                public constructor(
                  param0: number,
                  param1: com.google.android.gms.common.api.internal.TaskApiCall<
                    com.google.android.gms.common.api.Api.AnyClient,
                    any
                  >,
                  param2: com.google.android.gms.tasks.TaskCompletionSource<
                    any
                  >,
                  param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
                );
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zaab,
                  param1: boolean
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
                public zab(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): native.Array<com.google.android.gms.common.Feature>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zah extends com.google.android.gms.common.api
                .internal.zad<java.lang.Boolean> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zah
                >;
                public constructor(
                  param0: number,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<any>
                );
                public zac(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): boolean;
                public constructor(param0: number);
                public constructor(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<
                    any
                  >,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<
                    java.lang.Boolean
                  >
                );
                public zad(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): void;
                public zab(
                  param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): native.Array<com.google.android.gms.common.Feature>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zai<O> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zai<any>
                >;
                public equals(param0: any): boolean;
                public zan(): string;
                public static zaa(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.Api.ApiOptions
                ): com.google.android.gms.common.api.internal.zai<any>;
                public static zaa(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.api.internal.zai<any>;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaj extends com.google.android.gms.common.api
                .internal.zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaj
                >;
                public zao(): void;
                public static zaa(
                  param0: com.google.android.gms.common.api.internal.LifecycleActivity
                ): com.google.android.gms.common.api.internal.zaj;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public zaa(
                  param0: number,
                  param1: com.google.android.gms.common.api.GoogleApiClient,
                  param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: number
                ): void;
                public zaa(param0: number): void;
                public onStop(): void;
                public onStart(): void;
              }
              export namespace zaj {
                export class zaa extends com.google.android.gms.common.api
                  .GoogleApiClient.OnConnectionFailedListener {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.api.internal.zaj.zaa
                  >;
                  public zacx: number;
                  public zacy: com.google.android.gms.common.api.GoogleApiClient;
                  public zacz: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener;
                  public constructor(
                    param0: com.google.android.gms.common.api.internal.zaj,
                    param1: number,
                    param2: com.google.android.gms.common.api.GoogleApiClient,
                    param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                  );
                  public onConnectionFailed(
                    param0: com.google.android.gms.common.ConnectionResult
                  ): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zak {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zak
                >;
                public constructor(param0: java.lang.Iterable<any>);
                public zap(): java.util.Set<
                  com.google.android.gms.common.api.internal.zai<any>
                >;
                public getTask(): com.google.android.gms.tasks.Task<
                  java.util.Map<
                    com.google.android.gms.common.api.internal.zai<any>,
                    string
                  >
                >;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zai<any>,
                  param1: com.google.android.gms.common.ConnectionResult,
                  param2: string
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export abstract class zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zal
                >;
                public mStarted: boolean;
                public zadf: java.util.concurrent.atomic.AtomicReference<
                  com.google.android.gms.common.api.internal.zam
                >;
                public zacd: com.google.android.gms.common.GoogleApiAvailability;
                public zab(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: number
                ): void;
                public zao(): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public onCancel(
                  param0: globalAndroid.content.DialogInterface
                ): void;
                public zaq(): void;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: number
                ): void;
                public onStop(): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.LifecycleFragment
                );
                public onSaveInstanceState(
                  param0: globalAndroid.os.Bundle
                ): void;
                public onStart(): void;
                public onActivityResult(
                  param0: number,
                  param1: number,
                  param2: globalAndroid.content.Intent
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zam {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zam
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zan {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zan
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zao extends com.google.android.gms.common.api
                .internal.zabr {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zao
                >;
                public zas(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zap extends java.lang.ThreadLocal<
                java.lang.Boolean
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zap
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaq
                implements
                  com.google.android.gms.common.api.GoogleApiClient
                    .ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient
                    .OnConnectionFailedListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaq
                >;
                public mApi: com.google.android.gms.common.api.Api<any>;
                public onConnectionFailed(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public constructor(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: boolean
                );
                public onConnectionSuspended(param0: number): void;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zar
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zar extends com.google.android.gms.common.api
                .GoogleApiClient.ConnectionCallbacks {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zar
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaa(
                    param0: com.google.android.gms.common.ConnectionResult,
                    param1: com.google.android.gms.common.api.Api<any>,
                    param2: boolean
                  ): void;
                  onConnected(param0: globalAndroid.os.Bundle): void;
                  onConnectionSuspended(param0: number): void;
                });
                public constructor();
                public static CAUSE_SERVICE_DISCONNECTED: number;
                public static CAUSE_NETWORK_LOST: number;
                public zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean
                ): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zas extends com.google.android.gms.common.api
                .internal.zabs {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zas
                >;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public blockingConnect(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(
                  param0: com.google.android.gms.common.api.internal.SignInConnectionListener
                ): boolean;
                public isConnected(): boolean;
                public getConnectionResult(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.ConnectionResult;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public disconnect(): void;
                public zaw(): void;
                public static zaa(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.internal.zaaw,
                  param2: java.util.concurrent.locks.Lock,
                  param3: globalAndroid.os.Looper,
                  param4: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param5: java.util.Map<
                    com.google.android.gms.common.api.Api.AnyClientKey<any>,
                    com.google.android.gms.common.api.Api.Client
                  >,
                  param6: com.google.android.gms.common.internal.ClientSettings,
                  param7: java.util.Map<
                    com.google.android.gms.common.api.Api<any>,
                    java.lang.Boolean
                  >,
                  param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >,
                  param9: java.util.ArrayList<
                    com.google.android.gms.common.api.internal.zaq
                  >
                ): com.google.android.gms.common.api.internal.zas;
                public isConnecting(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zat {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zat
                >;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zau extends com.google.android.gms.common.api
                .internal.zabt {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zau
                >;
                public zac(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: number, param1: boolean): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zav extends com.google.android.gms.common.api
                .internal.zabt {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zav
                >;
                public zac(
                  param0: com.google.android.gms.common.ConnectionResult
                ): void;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: number, param1: boolean): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaw<O> extends com.google.android.gms.common.api
                .GoogleApi<any> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaw<any>
                >;
                public constructor(
                  param0: globalAndroid.app.Activity,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.GoogleApi.Settings
                );
                public zaab(): com.google.android.gms.common.api.Api.Client;
                public zaa(
                  param0: globalAndroid.os.Looper,
                  param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<
                    any
                  >
                ): com.google.android.gms.common.api.Api.Client;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: globalAndroid.os.Looper
                );
                /** @deprecated */
                public constructor(
                  param0: globalAndroid.app.Activity,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.GoogleApi.Settings
                );
                /** @deprecated */
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
                );
                public zaa(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler
                ): com.google.android.gms.common.api.internal.zace;
                /** @deprecated */
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: globalAndroid.os.Looper,
                  param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: globalAndroid.os.Looper,
                  param3: com.google.android.gms.common.api.Api.Client,
                  param4: com.google.android.gms.common.api.internal.zaq,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zax extends com.google.android.gms.common.api
                .internal.zabs {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zax
                >;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: java.util.concurrent.locks.Lock,
                  param2: globalAndroid.os.Looper,
                  param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param4: java.util.Map<
                    com.google.android.gms.common.api.Api.AnyClientKey<any>,
                    com.google.android.gms.common.api.Api.Client
                  >,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: java.util.Map<
                    com.google.android.gms.common.api.Api<any>,
                    java.lang.Boolean
                  >,
                  param7: com.google.android.gms.common.api.Api.AbstractClientBuilder<
                    any,
                    com.google.android.gms.signin.SignInOptions
                  >,
                  param8: java.util.ArrayList<
                    com.google.android.gms.common.api.internal.zaq
                  >,
                  param9: com.google.android.gms.common.api.internal.zaaw,
                  param10: boolean
                );
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public blockingConnect(
                  param0: number,
                  param1: java.util.concurrent.TimeUnit
                ): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(
                  param0: com.google.android.gms.common.api.internal.SignInConnectionListener
                ): boolean;
                public isConnected(): boolean;
                public getConnectionResult(
                  param0: com.google.android.gms.common.api.Api<any>
                ): com.google.android.gms.common.ConnectionResult;
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                    any,
                    any
                  >
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                  any,
                  any
                >;
                public disconnect(): void;
                public zaw(): void;
                public isConnecting(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zay {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zay
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export namespace internal {
              export class zaz extends com.google.android.gms.tasks
                .OnCompleteListener<
                java.util.Map<
                  com.google.android.gms.common.api.internal.zai<any>,
                  string
                >
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.api.internal.zaz
                >;
                public onComplete(
                  param0: com.google.android.gms.tasks.Task<any>
                ): void;
                public onComplete(
                  param0: com.google.android.gms.tasks.Task<
                    java.util.Map<
                      com.google.android.gms.common.api.internal.zai<any>,
                      string
                    >
                  >
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class zaa extends com.google.android.gms.common.api
              .PendingResult.StatusListener {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.zaa
              >;
              public onComplete(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export class zab {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.zab
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace api {
            export abstract class zac {
              public static class: java.lang.Class<
                com.google.android.gms.common.api.zac
              >;
              public constructor();
              public remove(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export abstract class AbstractDataBuffer<T> extends com.google
              .android.gms.common.data.DataBuffer<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.AbstractDataBuffer<any>
              >;
              public mDataHolder: com.google.android.gms.common.data.DataHolder;
              public singleRefIterator(): java.util.Iterator<any>;
              public getMetadata(): globalAndroid.os.Bundle;
              public iterator(): java.util.Iterator<any>;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public constructor(
                param0: com.google.android.gms.common.data.DataHolder
              );
              public getCount(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class BitmapTeleporter {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.BitmapTeleporter
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.data.BitmapTeleporter
              >;
              public constructor(param0: globalAndroid.graphics.Bitmap);
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public release(): void;
              public setTempDir(param0: java.io.File): void;
              public get(): globalAndroid.graphics.Bitmap;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBuffer<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBuffer<any>
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCount(): number;
                get(param0: number): T;
                getMetadata(): globalAndroid.os.Bundle;
                close(): void;
                isClosed(): boolean;
                iterator(): java.util.Iterator<T>;
                singleRefIterator(): java.util.Iterator<T>;
                release(): void;
              });
              public constructor();
              public get(param0: number): T;
              public getMetadata(): globalAndroid.os.Bundle;
              /** @deprecated */
              public close(): void;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public singleRefIterator(): java.util.Iterator<T>;
              public getCount(): number;
              public iterator(): java.util.Iterator<T>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBufferIterator<T> extends java.util.Iterator<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBufferIterator<any>
              >;
              public zalk: com.google.android.gms.common.data.DataBuffer<any>;
              public zall: number;
              public constructor(
                param0: com.google.android.gms.common.data.DataBuffer<any>
              );
              public hasNext(): boolean;
              public remove(): void;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBufferObserver {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBufferObserver
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onDataChanged(): void;
                onDataRangeChanged(param0: number, param1: number): void;
                onDataRangeInserted(param0: number, param1: number): void;
                onDataRangeRemoved(param0: number, param1: number): void;
                onDataRangeMoved(
                  param0: number,
                  param1: number,
                  param2: number
                ): void;
              });
              public constructor();
              public onDataRangeInserted(param0: number, param1: number): void;
              public onDataChanged(): void;
              public onDataRangeChanged(param0: number, param1: number): void;
              public onDataRangeRemoved(param0: number, param1: number): void;
              public onDataRangeMoved(
                param0: number,
                param1: number,
                param2: number
              ): void;
            }
            export namespace DataBufferObserver {
              export class Observable {
                public static class: java.lang.Class<
                  com.google.android.gms.common.data.DataBufferObserver.Observable
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  addObserver(
                    param0: com.google.android.gms.common.data.DataBufferObserver
                  ): void;
                  removeObserver(
                    param0: com.google.android.gms.common.data.DataBufferObserver
                  ): void;
                });
                public constructor();
                public removeObserver(
                  param0: com.google.android.gms.common.data.DataBufferObserver
                ): void;
                public addObserver(
                  param0: com.google.android.gms.common.data.DataBufferObserver
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBufferObserverSet
              implements
                com.google.android.gms.common.data.DataBufferObserver,
                com.google.android.gms.common.data.DataBufferObserver
                  .Observable {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBufferObserverSet
              >;
              public constructor();
              public addObserver(
                param0: com.google.android.gms.common.data.DataBufferObserver
              ): void;
              public removeObserver(
                param0: com.google.android.gms.common.data.DataBufferObserver
              ): void;
              public hasObservers(): boolean;
              public onDataRangeInserted(param0: number, param1: number): void;
              public clear(): void;
              public onDataChanged(): void;
              public onDataRangeChanged(param0: number, param1: number): void;
              public onDataRangeRemoved(param0: number, param1: number): void;
              public onDataRangeMoved(
                param0: number,
                param1: number,
                param2: number
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBufferRef {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBufferRef
              >;
              public mDataHolder: com.google.android.gms.common.data.DataHolder;
              public mDataRow: number;
              public getInteger(param0: string): number;
              public hasColumn(param0: string): boolean;
              public hashCode(): number;
              public getFloat(param0: string): number;
              public parseUri(param0: string): globalAndroid.net.Uri;
              public getByteArray(param0: string): native.Array<number>;
              public copyToBuffer(
                param0: string,
                param1: globalAndroid.database.CharArrayBuffer
              ): void;
              public getDouble(param0: string): number;
              public hasNull(param0: string): boolean;
              public isDataValid(): boolean;
              public getLong(param0: string): number;
              public getString(param0: string): string;
              public zag(param0: number): void;
              public constructor(
                param0: com.google.android.gms.common.data.DataHolder,
                param1: number
              );
              public getDataRow(): number;
              public equals(param0: any): boolean;
              public getBoolean(param0: string): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBufferSafeParcelable<T> extends com.google.android
              .gms.common.data.AbstractDataBuffer<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBufferSafeParcelable<any>
              >;
              public singleRefIterator(): java.util.Iterator<any>;
              public constructor(
                param0: com.google.android.gms.common.data.DataHolder,
                param1: globalAndroid.os.Parcelable.Creator<any>
              );
              public getMetadata(): globalAndroid.os.Bundle;
              public iterator(): java.util.Iterator<any>;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public static addValue(
                param0: com.google.android.gms.common.data.DataHolder.Builder,
                param1: com.google.android.gms.common.internal.safeparcel.SafeParcelable
              ): void;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public constructor(
                param0: com.google.android.gms.common.data.DataHolder
              );
              public getCount(): number;
              public static buildDataHolder(): com.google.android.gms.common.data.DataHolder.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataBufferUtils {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataBufferUtils
              >;
              public static KEY_NEXT_PAGE_TOKEN: string;
              public static KEY_PREV_PAGE_TOKEN: string;
              public static freezeAndClose(
                param0: com.google.android.gms.common.data.DataBuffer<any>
              ): java.util.ArrayList;
              public static hasData(
                param0: com.google.android.gms.common.data.DataBuffer<any>
              ): boolean;
              public static hasPrevPage(
                param0: com.google.android.gms.common.data.DataBuffer<any>
              ): boolean;
              public static hasNextPage(
                param0: com.google.android.gms.common.data.DataBuffer<any>
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class DataHolder {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.DataHolder
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.data.DataHolder
              >;
              public getString(
                param0: string,
                param1: number,
                param2: number
              ): string;
              public close(): void;
              public static empty(
                param0: number
              ): com.google.android.gms.common.data.DataHolder;
              public hasColumn(param0: string): boolean;
              public hasNull(
                param0: string,
                param1: number,
                param2: number
              ): boolean;
              public constructor(
                param0: globalAndroid.database.Cursor,
                param1: number,
                param2: globalAndroid.os.Bundle
              );
              public finalize(): void;
              public zaca(): void;
              public getLong(
                param0: string,
                param1: number,
                param2: number
              ): number;
              public isClosed(): boolean;
              public zab(
                param0: string,
                param1: number,
                param2: number
              ): number;
              public getCount(): number;
              public zaa(
                param0: string,
                param1: number,
                param2: number,
                param3: globalAndroid.database.CharArrayBuffer
              ): void;
              public constructor(
                param0: native.Array<string>,
                param1: native.Array<globalAndroid.database.CursorWindow>,
                param2: number,
                param3: globalAndroid.os.Bundle
              );
              public getStatusCode(): number;
              public getMetadata(): globalAndroid.os.Bundle;
              public getInteger(
                param0: string,
                param1: number,
                param2: number
              ): number;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public static builder(
                param0: native.Array<string>
              ): com.google.android.gms.common.data.DataHolder.Builder;
              public zaa(
                param0: string,
                param1: number,
                param2: number
              ): number;
              public getBoolean(
                param0: string,
                param1: number,
                param2: number
              ): boolean;
              public getByteArray(
                param0: string,
                param1: number,
                param2: number
              ): native.Array<number>;
              public getWindowIndex(param0: number): number;
            }
            export namespace DataHolder {
              export class Builder {
                public static class: java.lang.Class<
                  com.google.android.gms.common.data.DataHolder.Builder
                >;
                public build(
                  param0: number,
                  param1: globalAndroid.os.Bundle
                ): com.google.android.gms.common.data.DataHolder;
                public zaa(
                  param0: java.util.HashMap<string, any>
                ): com.google.android.gms.common.data.DataHolder.Builder;
                public build(
                  param0: number
                ): com.google.android.gms.common.data.DataHolder;
                public withRow(
                  param0: globalAndroid.content.ContentValues
                ): com.google.android.gms.common.data.DataHolder.Builder;
              }
              export class zaa {
                public static class: java.lang.Class<
                  com.google.android.gms.common.data.DataHolder.zaa
                >;
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export abstract class EntityBuffer<T> extends com.google.android.gms
              .common.data.AbstractDataBuffer<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.EntityBuffer<any>
              >;
              public singleRefIterator(): java.util.Iterator<any>;
              public getMetadata(): globalAndroid.os.Bundle;
              public getChildDataMarkerColumn(): string;
              public iterator(): java.util.Iterator<any>;
              public getPrimaryDataMarkerColumn(): string;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public constructor(
                param0: com.google.android.gms.common.data.DataHolder
              );
              public getCount(): number;
              public getEntry(param0: number, param1: number): any;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class Freezable<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.Freezable<any>
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                freeze(): T;
                isDataValid(): boolean;
              });
              public constructor();
              public isDataValid(): boolean;
              public freeze(): T;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class FreezableUtils {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.FreezableUtils
              >;
              public constructor();
              public static freezeIterable(
                param0: java.lang.Iterable
              ): java.util.ArrayList;
              public static freeze(
                param0: java.util.ArrayList
              ): java.util.ArrayList;
              public static freeze(
                param0: native.Array<
                  com.google.android.gms.common.data.Freezable<any>
                >
              ): java.util.ArrayList;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class SingleRefDataBufferIterator<T> extends com.google
              .android.gms.common.data.DataBufferIterator<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.SingleRefDataBufferIterator<
                  any
                >
              >;
              public constructor(
                param0: com.google.android.gms.common.data.DataBuffer<any>
              );
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class zaa extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.data.BitmapTeleporter
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.zaa
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class zab extends com.google.android.gms.common.data
              .DataHolder.Builder {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.zab
              >;
              public withRow(
                param0: globalAndroid.content.ContentValues
              ): com.google.android.gms.common.data.DataHolder.Builder;
              public zaa(
                param0: java.util.HashMap<string, any>
              ): com.google.android.gms.common.data.DataHolder.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace data {
            export class zac extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.data.DataHolder
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.data.zac
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class ImageManager {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.ImageManager
              >;
              public loadImage(
                param0: globalAndroid.widget.ImageView,
                param1: globalAndroid.net.Uri
              ): void;
              public loadImage(
                param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener,
                param1: globalAndroid.net.Uri,
                param2: number
              ): void;
              public loadImage(
                param0: globalAndroid.widget.ImageView,
                param1: number
              ): void;
              public loadImage(
                param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener,
                param1: globalAndroid.net.Uri
              ): void;
              public loadImage(
                param0: globalAndroid.widget.ImageView,
                param1: globalAndroid.net.Uri,
                param2: number
              ): void;
              public static create(
                param0: globalAndroid.content.Context
              ): com.google.android.gms.common.images.ImageManager;
            }
            export namespace ImageManager {
              export class ImageReceiver {
                public static class: java.lang.Class<
                  com.google.android.gms.common.images.ImageManager.ImageReceiver
                >;
                public zace(): void;
                public zab(
                  param0: com.google.android.gms.common.images.zaa
                ): void;
                public zac(
                  param0: com.google.android.gms.common.images.zaa
                ): void;
                public onReceiveResult(
                  param0: number,
                  param1: globalAndroid.os.Bundle
                ): void;
              }
              export class OnImageLoadedListener {
                public static class: java.lang.Class<
                  com.google.android.gms.common.images.ImageManager.OnImageLoadedListener
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onImageLoaded(
                    param0: globalAndroid.net.Uri,
                    param1: globalAndroid.graphics.drawable.Drawable,
                    param2: boolean
                  ): void;
                });
                public constructor();
                public onImageLoaded(
                  param0: globalAndroid.net.Uri,
                  param1: globalAndroid.graphics.drawable.Drawable,
                  param2: boolean
                ): void;
              }
              export class zaa extends androidx.collection.LruCache<
                com.google.android.gms.common.images.zab,
                globalAndroid.graphics.Bitmap
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.images.ImageManager.zaa
                >;
              }
              export class zab {
                public static class: java.lang.Class<
                  com.google.android.gms.common.images.ImageManager.zab
                >;
                public constructor(
                  param0: com.google.android.gms.common.images.ImageManager,
                  param1: globalAndroid.net.Uri,
                  param2: globalAndroid.os.ParcelFileDescriptor
                );
                public run(): void;
              }
              export class zac {
                public static class: java.lang.Class<
                  com.google.android.gms.common.images.ImageManager.zac
                >;
                public constructor(
                  param0: com.google.android.gms.common.images.ImageManager,
                  param1: com.google.android.gms.common.images.zaa
                );
                public run(): void;
              }
              export class zad {
                public static class: java.lang.Class<
                  com.google.android.gms.common.images.ImageManager.zad
                >;
                public constructor(
                  param0: com.google.android.gms.common.images.ImageManager,
                  param1: globalAndroid.net.Uri,
                  param2: globalAndroid.graphics.Bitmap,
                  param3: boolean,
                  param4: java.util.concurrent.CountDownLatch
                );
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class Size {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.Size
              >;
              public getWidth(): number;
              public getHeight(): number;
              public constructor(param0: number, param1: number);
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public static parseSize(
                param0: string
              ): com.google.android.gms.common.images.Size;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class WebImage {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.WebImage
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.images.WebImage
              >;
              public getWidth(): number;
              public getHeight(): number;
              public constructor(param0: globalAndroid.net.Uri);
              public getUrl(): globalAndroid.net.Uri;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public constructor(
                param0: globalAndroid.net.Uri,
                param1: number,
                param2: number
              );
              public constructor(param0: org.json.JSONObject);
              public hashCode(): number;
              public toJson(): org.json.JSONObject;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export abstract class zaa {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.zaa
              >;
              public zamx: number;
              public constructor(param0: globalAndroid.net.Uri, param1: number);
              public zaa(
                param0: globalAndroid.graphics.drawable.Drawable,
                param1: boolean,
                param2: boolean,
                param3: boolean
              ): void;
              public zaa(param0: boolean, param1: boolean): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class zab {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.zab
              >;
              public uri: globalAndroid.net.Uri;
              public constructor(param0: globalAndroid.net.Uri);
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class zac extends com.google.android.gms.common.images.zaa {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.zac
              >;
              public constructor(
                param0: globalAndroid.widget.ImageView,
                param1: globalAndroid.net.Uri
              );
              public hashCode(): number;
              public constructor(param0: globalAndroid.net.Uri, param1: number);
              public zaa(
                param0: globalAndroid.graphics.drawable.Drawable,
                param1: boolean,
                param2: boolean,
                param3: boolean
              ): void;
              public equals(param0: any): boolean;
              public zaa(param0: boolean, param1: boolean): boolean;
              public constructor(
                param0: globalAndroid.widget.ImageView,
                param1: number
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class zad extends com.google.android.gms.common.images.zaa {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.zad
              >;
              public hashCode(): number;
              public constructor(param0: globalAndroid.net.Uri, param1: number);
              public zaa(
                param0: globalAndroid.graphics.drawable.Drawable,
                param1: boolean,
                param2: boolean,
                param3: boolean
              ): void;
              public equals(param0: any): boolean;
              public constructor(
                param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener,
                param1: globalAndroid.net.Uri
              );
              public zaa(param0: boolean, param1: boolean): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace images {
            export class zae extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.images.WebImage
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.images.zae
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ApiExceptionUtil {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ApiExceptionUtil
              >;
              public constructor();
              public static fromStatus(
                param0: com.google.android.gms.common.api.Status
              ): com.google.android.gms.common.api.ApiException;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class AuthAccountRequest {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.AuthAccountRequest
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.internal.AuthAccountRequest
              >;
              public constructor(
                param0: globalAndroid.accounts.Account,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              );
              public setPolicyAction(
                param0: java.lang.Integer
              ): com.google.android.gms.common.internal.AuthAccountRequest;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public getScopes(): java.util.Set<
                com.google.android.gms.common.api.Scope
              >;
              public getAccount(): globalAndroid.accounts.Account;
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              );
              public setOauthPolicy(
                param0: java.lang.Integer
              ): com.google.android.gms.common.internal.AuthAccountRequest;
              public getPolicyAction(): java.lang.Integer;
              public getOauthPolicy(): java.lang.Integer;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ClientIdentity {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ClientIdentity
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.internal.ClientIdentity
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: string);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ClientSettings {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ClientSettings
              >;
              public static KEY_CLIENT_SESSION_ID: string;
              public getClientSessionId(): java.lang.Integer;
              public getGravityForPopups(): number;
              public getRealClientPackageName(): string;
              public setClientSessionId(param0: java.lang.Integer): void;
              public constructor(
                param0: globalAndroid.accounts.Account,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                param2: java.util.Map<
                  com.google.android.gms.common.api.Api<any>,
                  com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings
                >,
                param3: number,
                param4: globalAndroid.view.View,
                param5: string,
                param6: string,
                param7: com.google.android.gms.signin.SignInOptions,
                param8: boolean
              );
              public static createDefault(
                param0: globalAndroid.content.Context
              ): com.google.android.gms.common.internal.ClientSettings;
              public getViewForPopups(): globalAndroid.view.View;
              public getOptionalApiSettings(): java.util.Map<
                com.google.android.gms.common.api.Api<any>,
                com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings
              >;
              public isSignInClientDisconnectFixEnabled(): boolean;
              public getRequiredScopes(): java.util.Set<
                com.google.android.gms.common.api.Scope
              >;
              public getRealClientClassName(): string;
              public getAccountOrDefault(): globalAndroid.accounts.Account;
              public getApplicableScopes(
                param0: com.google.android.gms.common.api.Api<any>
              ): java.util.Set<com.google.android.gms.common.api.Scope>;
              /** @deprecated */
              public getAccountName(): string;
              public getAccount(): globalAndroid.accounts.Account;
              public getAllRequestedScopes(): java.util.Set<
                com.google.android.gms.common.api.Scope
              >;
              public getSignInOptions(): com.google.android.gms.signin.SignInOptions;
              public constructor(
                param0: globalAndroid.accounts.Account,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                param2: java.util.Map<
                  com.google.android.gms.common.api.Api<any>,
                  com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings
                >,
                param3: number,
                param4: globalAndroid.view.View,
                param5: string,
                param6: string,
                param7: com.google.android.gms.signin.SignInOptions
              );
            }
            export namespace ClientSettings {
              export class Builder {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.ClientSettings.Builder
                >;
                public setGravityForPopups(
                  param0: number
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setRealClientClassName(
                  param0: string
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setAccount(
                  param0: globalAndroid.accounts.Account
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setSignInOptions(
                  param0: com.google.android.gms.signin.SignInOptions
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public enableSignInClientDisconnectFix(): com.google.android.gms.common.internal.ClientSettings.Builder;
                public build(): com.google.android.gms.common.internal.ClientSettings;
                public setViewForPopups(
                  param0: globalAndroid.view.View
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public addAllRequiredScopes(
                  param0: java.util.Collection<
                    com.google.android.gms.common.api.Scope
                  >
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setOptionalApiSettingsMap(
                  param0: java.util.Map<
                    com.google.android.gms.common.api.Api<any>,
                    com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings
                  >
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public addRequiredScope(
                  param0: com.google.android.gms.common.api.Scope
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public constructor();
                public setRealClientPackageName(
                  param0: string
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
              }
              export class OptionalApiSettings {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings
                >;
                public mScopes: java.util.Set<
                  com.google.android.gms.common.api.Scope
                >;
                public constructor(
                  param0: java.util.Set<com.google.android.gms.common.api.Scope>
                );
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ConnectionErrorMessages {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ConnectionErrorMessages
              >;
              public static getErrorMessage(
                param0: globalAndroid.content.Context,
                param1: number
              ): string;
              public static getAppName(
                param0: globalAndroid.content.Context
              ): string;
              public static getErrorTitle(
                param0: globalAndroid.content.Context,
                param1: number
              ): string;
              public static getDefaultNotificationChannelName(
                param0: globalAndroid.content.Context
              ): string;
              public static getErrorDialogButtonMessage(
                param0: globalAndroid.content.Context,
                param1: number
              ): string;
              public static getErrorNotificationMessage(
                param0: globalAndroid.content.Context,
                param1: number
              ): string;
              public static getErrorNotificationTitle(
                param0: globalAndroid.content.Context,
                param1: number
              ): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export abstract class DialogRedirect {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.DialogRedirect
              >;
              public constructor();
              public redirect(): void;
              public static getInstance(
                param0: globalAndroid.app.Activity,
                param1: globalAndroid.content.Intent,
                param2: number
              ): com.google.android.gms.common.internal.DialogRedirect;
              public static getInstance(
                param0: androidx.fragment.app.Fragment,
                param1: globalAndroid.content.Intent,
                param2: number
              ): com.google.android.gms.common.internal.DialogRedirect;
              public static getInstance(
                param0: com.google.android.gms.common.api.internal.LifecycleFragment,
                param1: globalAndroid.content.Intent,
                param2: number
              ): com.google.android.gms.common.internal.DialogRedirect;
              public onClick(
                param0: globalAndroid.content.DialogInterface,
                param1: number
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export abstract class FallbackServiceBroker {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.FallbackServiceBroker
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export abstract class GmsClient<T> extends com.google.android.gms
              .common.internal.BaseGmsClient<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.GmsClient<any>
              >;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public validateScopes(
                param0: java.util.Set<com.google.android.gms.common.api.Scope>
              ): java.util.Set<com.google.android.gms.common.api.Scope>;
              public getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getAccount(): globalAndroid.accounts.Account;
              public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public getScopes(): java.util.Set<
                com.google.android.gms.common.api.Scope
              >;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class GmsClientEventManager {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.GmsClientEventManager
              >;
              public isConnectionCallbacksRegistered(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): boolean;
              public isConnectionFailedListenerRegistered(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): boolean;
              public onUnintentionalDisconnection(param0: number): void;
              public registerConnectionFailedListener(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): void;
              public unregisterConnectionCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): void;
              public disableCallbacks(): void;
              public registerConnectionCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): void;
              public unregisterConnectionFailedListener(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): void;
              public onConnectionSuccess(): void;
              public onConnectionFailure(
                param0: com.google.android.gms.common.ConnectionResult
              ): void;
              public handleMessage(param0: globalAndroid.os.Message): boolean;
              public constructor(
                param0: globalAndroid.os.Looper,
                param1: com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState
              );
              public onConnectionSuccess(param0: globalAndroid.os.Bundle): void;
              public enableCallbacks(): void;
              public areCallbacksEnabled(): boolean;
            }
            export namespace GmsClientEventManager {
              export class GmsClientEventState {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.GmsClientEventManager$GmsClientEventState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  isConnected(): boolean;
                  getConnectionHint(): globalAndroid.os.Bundle;
                });
                public constructor();
                public getConnectionHint(): globalAndroid.os.Bundle;
                public isConnected(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class GoogleApiAvailabilityCache {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.GoogleApiAvailabilityCache
              >;
              public constructor();
              public getClientAvailability(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api.Client
              ): number;
              public constructor(
                param0: com.google.android.gms.common.GoogleApiAvailabilityLight
              );
              public flush(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class IResolveAccountCallbacks {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.IResolveAccountCallbacks
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IResolveAccountCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onAccountResolutionComplete(
                  param0: com.google.android.gms.common.internal.ResolveAccountResponse
                ): void;
              });
              public constructor();
              public onAccountResolutionComplete(
                param0: com.google.android.gms.common.internal.ResolveAccountResponse
              ): void;
            }
            export namespace IResolveAccountCallbacks {
              export abstract class Stub
                extends com.google.android.gms.internal.base.zab
                implements
                  com.google.android.gms.common.internal
                    .IResolveAccountCallbacks {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub
                >;
                public static asInterface(
                  param0: globalAndroid.os.IBinder
                ): com.google.android.gms.common.internal.IResolveAccountCallbacks;
                public onAccountResolutionComplete(
                  param0: com.google.android.gms.common.internal.ResolveAccountResponse
                ): void;
                public dispatchTransaction(
                  param0: number,
                  param1: globalAndroid.os.Parcel,
                  param2: globalAndroid.os.Parcel,
                  param3: number
                ): boolean;
                public constructor();
                public constructor(param0: string);
              }
              export namespace Stub {
                export class Proxy
                  extends com.google.android.gms.internal.base.zaa
                  implements
                    com.google.android.gms.common.internal
                      .IResolveAccountCallbacks {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub.Proxy
                  >;
                  public onAccountResolutionComplete(
                    param0: com.google.android.gms.common.internal.ResolveAccountResponse
                  ): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ISignInButtonCreator {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ISignInButtonCreator
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ISignInButtonCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                newSignInButton(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: number,
                  param2: number
                ): com.google.android.gms.dynamic.IObjectWrapper;
                newSignInButtonFromConfig(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: com.google.android.gms.common.internal.SignInButtonConfig
                ): com.google.android.gms.dynamic.IObjectWrapper;
              });
              public constructor();
              public newSignInButtonFromConfig(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: com.google.android.gms.common.internal.SignInButtonConfig
              ): com.google.android.gms.dynamic.IObjectWrapper;
              public newSignInButton(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: number,
                param2: number
              ): com.google.android.gms.dynamic.IObjectWrapper;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export abstract class LegacyInternalGmsClient<T> extends com.google
              .android.gms.common.internal.GmsClient<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.LegacyInternalGmsClient<
                  any
                >
              >;
              public onConnectedLocked(param0: any): void;
              public isConnectionFailedListenerRegistered(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): boolean;
              public registerConnectionFailedListener(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): void;
              public unregisterConnectionCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): void;
              public registerConnectionCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): void;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public onConnectionSuspended(param0: number): void;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public onConnectionFailed(
                param0: com.google.android.gms.common.ConnectionResult
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public isConnectionCallbacksRegistered(
                param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks
              ): boolean;
              public requiresAccount(): boolean;
              public checkAvailabilityAndConnect(): void;
              public disconnect(): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: number,
                param2: com.google.android.gms.common.internal.ClientSettings,
                param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public unregisterConnectionFailedListener(
                param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              ): void;
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              public getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class PendingResultUtil {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.PendingResultUtil
              >;
              public constructor();
              public static toVoidTask(
                param0: com.google.android.gms.common.api.PendingResult<any>
              ): com.google.android.gms.tasks.Task<any>;
              public static toTask(
                param0: com.google.android.gms.common.api.PendingResult<any>,
                param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<
                  any,
                  any
                >
              ): com.google.android.gms.tasks.Task<any>;
              public static toResponseTask(
                param0: com.google.android.gms.common.api.PendingResult<any>,
                param1: com.google.android.gms.common.api.Response
              ): com.google.android.gms.tasks.Task<any>;
            }
            export namespace PendingResultUtil {
              export class ResultConverter<R, T> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<
                    any,
                    any
                  >
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { convert(param0: R): T });
                public constructor();
                public convert(param0: R): T;
              }
              export class zaa {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.PendingResultUtil.zaa
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaf(
                    param0: com.google.android.gms.common.api.Status
                  ): com.google.android.gms.common.api.ApiException;
                });
                public constructor();
                public zaf(
                  param0: com.google.android.gms.common.api.Status
                ): com.google.android.gms.common.api.ApiException;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ResolveAccountRequest {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ResolveAccountRequest
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.internal.ResolveAccountRequest
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public getAccount(): globalAndroid.accounts.Account;
              public getSessionId(): number;
              public constructor(
                param0: globalAndroid.accounts.Account,
                param1: number,
                param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount
              );
              public getSignInAccountHint(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class ResolveAccountResponse {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.ResolveAccountResponse
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.internal.ResolveAccountResponse
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public setSaveDefaultAccount(
                param0: boolean
              ): com.google.android.gms.common.internal.ResolveAccountResponse;
              public getSaveDefaultAccount(): boolean;
              public setIsFromCrossClientAuth(
                param0: boolean
              ): com.google.android.gms.common.internal.ResolveAccountResponse;
              public getAccountAccessor(): com.google.android.gms.common.internal.IAccountAccessor;
              public setAccountAccessor(
                param0: com.google.android.gms.common.internal.IAccountAccessor
              ): com.google.android.gms.common.internal.ResolveAccountResponse;
              public isFromCrossClientAuth(): boolean;
              public equals(param0: any): boolean;
              public constructor(
                param0: com.google.android.gms.common.ConnectionResult
              );
              public constructor(param0: number);
              public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class SignInButtonConfig {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.SignInButtonConfig
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.internal.SignInButtonConfig
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public getButtonSize(): number;
              public getColorScheme(): number;
              /** @deprecated */
              public getScopes(): native.Array<
                com.google.android.gms.common.api.Scope
              >;
              public constructor(
                param0: number,
                param1: number,
                param2: native.Array<com.google.android.gms.common.api.Scope>
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class SignInButtonCreator extends com.google.android.gms
              .dynamic.RemoteCreator<
              com.google.android.gms.common.internal.ISignInButtonCreator
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.SignInButtonCreator
              >;
              public static createView(
                param0: globalAndroid.content.Context,
                param1: number,
                param2: number
              ): globalAndroid.view.View;
              public getRemoteCreator(
                param0: globalAndroid.os.IBinder
              ): com.google.android.gms.common.internal.ISignInButtonCreator;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class SignInButtonImpl {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.SignInButtonImpl
              >;
              public configure(
                param0: globalAndroid.content.res.Resources,
                param1: com.google.android.gms.common.internal.SignInButtonConfig
              ): void;
              public configure(
                param0: globalAndroid.content.res.Resources,
                param1: number,
                param2: number
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.util.AttributeSet
              );
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class SimpleClientAdapter<T> extends com.google.android.gms
              .common.internal.GmsClient<any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.SimpleClientAdapter<any>
              >;
              public getStartServiceAction(): string;
              public getClient(): com.google.android.gms.common.api.Api.SimpleClient<
                any
              >;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.Api.SimpleClient<any>
              );
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public createServiceInterface(
                param0: globalAndroid.os.IBinder
              ): any;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public onSetConnectState(param0: number, param1: any): void;
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              public getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class Common {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.Common
                >;
                public static CLIENT_KEY: com.google.android.gms.common.api.Api.ClientKey<
                  com.google.android.gms.common.internal.service.zai
                >;
                public static API: com.google.android.gms.common.api.Api<
                  com.google.android.gms.common.api.Api.ApiOptions.NoOptions
                >;
                public static zapi: com.google.android.gms.common.internal.service.zac;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zaa extends com.google.android.gms.common.internal
                .service.zak {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zaa
                >;
                public zaj(param0: number): void;
                public constructor();
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zab extends com.google.android.gms.common.api.Api
                .AbstractClientBuilder<
                com.google.android.gms.common.internal.service.zai,
                com.google.android.gms.common.api.Api.ApiOptions.NoOptions
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zab
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zac {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zac
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.service.zac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaa(
                    param0: com.google.android.gms.common.api.GoogleApiClient
                  ): com.google.android.gms.common.api.PendingResult<
                    com.google.android.gms.common.api.Status
                  >;
                });
                public constructor();
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                ): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.common.api.Status
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zad extends com.google.android.gms.common.internal
                .service.zac {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zad
                >;
                public constructor();
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                ): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.common.api.Status
                >;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zae extends com.google.android.gms.common.internal
                .service.zah {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zae
                >;
                public setResult(param0: any): void;
                public setFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zaf extends com.google.android.gms.common.internal
                .service.zaa {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zaf
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                    com.google.android.gms.common.api.Status
                  >
                );
                public zaj(param0: number): void;
                public constructor();
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export abstract class zag<R> extends com.google.android.gms.common
                .api.internal.BaseImplementation.ApiMethodImpl<
                any,
                com.google.android.gms.common.internal.service.zai
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zag<any>
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor();
                /** @deprecated */
                public constructor(
                  param0: com.google.android.gms.common.api.Api.AnyClientKey<
                    any
                  >,
                  param1: com.google.android.gms.common.api.GoogleApiClient
                );
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
                public setResult(param0: any): void;
                public setFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export abstract class zah extends com.google.android.gms.common
                .internal.service.zag<
                com.google.android.gms.common.api.Status
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zah
                >;
                public constructor(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.GoogleApiClient
                );
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                    any
                  >
                );
                public constructor();
                /** @deprecated */
                public constructor(
                  param0: com.google.android.gms.common.api.Api.AnyClientKey<
                    any
                  >,
                  param1: com.google.android.gms.common.api.GoogleApiClient
                );
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
                public setResult(param0: any): void;
                public setFailedResult(
                  param0: com.google.android.gms.common.api.Status
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zai extends com.google.android.gms.common.internal
                .GmsClient<com.google.android.gms.common.internal.service.zal> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zai
                >;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: number,
                  param3: com.google.android.gms.common.internal.ClientSettings
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                  param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                );
                public connect(
                  param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
                ): void;
                public getRequiredFeatures(): native.Array<
                  com.google.android.gms.common.Feature
                >;
                public getServiceBrokerBinder(): globalAndroid.os.IBinder;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: number,
                  param3: com.google.android.gms.common.internal.ClientSettings,
                  param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                );
                public getEndpointPackageName(): string;
                public requiresGooglePlayServices(): boolean;
                public requiresAccount(): boolean;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: number,
                  param3: com.google.android.gms.common.internal.ClientSettings
                );
                public dump(
                  param0: string,
                  param1: java.io.FileDescriptor,
                  param2: java.io.PrintWriter,
                  param3: native.Array<string>
                ): void;
                public getMinApkVersion(): number;
                public getAvailableFeatures(): native.Array<
                  com.google.android.gms.common.Feature
                >;
                public getServiceDescriptor(): string;
                public getRemoteService(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: java.util.Set<com.google.android.gms.common.api.Scope>
                ): void;
                public getConnectionHint(): globalAndroid.os.Bundle;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                  param3: com.google.android.gms.common.GoogleApiAvailability,
                  param4: number,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                );
                public requiresSignIn(): boolean;
                public onUserSignOut(
                  param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
                ): void;
                public getSignInIntent(): globalAndroid.content.Intent;
                public isConnected(): boolean;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                  param3: com.google.android.gms.common.GoogleApiAvailability,
                  param4: number,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
                );
                public getStartServiceAction(): string;
                public disconnect(): void;
                public isConnecting(): boolean;
                public providesSignIn(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zaj {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zaj
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.service.zaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaj(param0: number): void;
                });
                public constructor();
                public zaj(param0: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export abstract class zak
                extends com.google.android.gms.internal.base.zab
                implements com.google.android.gms.common.internal.service.zaj {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zak
                >;
                public dispatchTransaction(
                  param0: number,
                  param1: globalAndroid.os.Parcel,
                  param2: globalAndroid.os.Parcel,
                  param3: number
                ): boolean;
                public zaj(param0: number): void;
                public constructor();
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zal
                >;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.service.zal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaa(
                    param0: com.google.android.gms.common.internal.service.zaj
                  ): void;
                });
                public constructor();
                public zaa(
                  param0: com.google.android.gms.common.internal.service.zaj
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export namespace service {
              export class zam extends com.google.android.gms.internal.base.zaa
                implements com.google.android.gms.common.internal.service.zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.internal.service.zam
                >;
                public zaa(): globalAndroid.os.Parcel;
                public zaa(
                  param0: com.google.android.gms.common.internal.service.zaj
                ): void;
                public zaa(
                  param0: number,
                  param1: globalAndroid.os.Parcel
                ): globalAndroid.os.Parcel;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zaa extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.internal.AuthAccountRequest
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zaa
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zab extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.internal.ClientIdentity
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zab
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zac extends com.google.android.gms.common.internal
              .DialogRedirect {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zac
              >;
              public redirect(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zad extends com.google.android.gms.common.internal
              .DialogRedirect {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zad
              >;
              public redirect(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zae extends com.google.android.gms.common.internal
              .DialogRedirect {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zae
              >;
              public redirect(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zaf {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zaf
              >;
              public onConnected(param0: globalAndroid.os.Bundle): void;
              public onConnectionSuspended(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zag {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zag
              >;
              public onConnectionFailed(
                param0: com.google.android.gms.common.ConnectionResult
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zah extends com.google.android.gms.internal.base.zaa
              implements
                com.google.android.gms.common.internal.ISignInButtonCreator {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zah
              >;
              public newSignInButtonFromConfig(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: com.google.android.gms.common.internal.SignInButtonConfig
              ): com.google.android.gms.dynamic.IObjectWrapper;
              public newSignInButton(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: number,
                param2: number
              ): com.google.android.gms.dynamic.IObjectWrapper;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zai extends com.google.android.gms.common.internal
              .PendingResultUtil.zaa {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zai
              >;
              public zaf(
                param0: com.google.android.gms.common.api.Status
              ): com.google.android.gms.common.api.ApiException;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zaj extends com.google.android.gms.common.api
              .PendingResult.StatusListener {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zaj
              >;
              public onComplete(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zak extends com.google.android.gms.common.internal
              .PendingResultUtil.ResultConverter<any, any> {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zak
              >;
              public convert(param0: any): any;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zal extends com.google.android.gms.common.internal
              .PendingResultUtil.ResultConverter<any, java.lang.Void> {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zal
              >;
              public convert(param0: any): any;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zam extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.internal.ResolveAccountRequest
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zam
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zan extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.internal.ResolveAccountResponse
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zan
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace internal {
            export class zao extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.internal.SignInButtonConfig
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.internal.zao
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export class FavaDiagnosticsEntity {
              public static class: java.lang.Class<
                com.google.android.gms.common.server.FavaDiagnosticsEntity
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.FavaDiagnosticsEntity
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public constructor(
                param0: number,
                param1: string,
                param2: number
              );
              public constructor(param0: string, param1: number);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace converter {
              export class StringToIntConverter
                extends com.google.android.gms.common.internal.safeparcel
                  .AbstractSafeParcelable
                implements
                  com.google.android.gms.common.server.response.FastJsonResponse
                    .FieldConverter<string, java.lang.Integer> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.converter.StringToIntConverter
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.common.server.converter.StringToIntConverter
                >;
                public convert(param0: any): any;
                public zacj(): number;
                public zack(): number;
                public add(
                  param0: string,
                  param1: number
                ): com.google.android.gms.common.server.converter.StringToIntConverter;
                public constructor();
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
                public convertBack(param0: any): any;
              }
              export namespace StringToIntConverter {
                export class zaa {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.server.converter.StringToIntConverter.zaa
                  >;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<
                    com.google.android.gms.common.server.converter.StringToIntConverter.zaa
                  >;
                  public writeToParcel(
                    param0: globalAndroid.os.Parcel,
                    param1: number
                  ): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace converter {
              export class zaa {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.converter.zaa
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.common.server.converter.zaa
                >;
                public zaci(): com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<
                  any,
                  any
                >;
                public static zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<
                    any,
                    any
                  >
                ): com.google.android.gms.common.server.converter.zaa;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace converter {
              export class zab extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.converter.zaa
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.converter.zab
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace converter {
              export class zac extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.converter.StringToIntConverter
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.converter.zac
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace converter {
              export class zad extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.converter.StringToIntConverter.zaa
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.converter.zad
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export abstract class FastJsonResponse {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.FastJsonResponse
                >;
                public toString(): string;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.Map
                ): void;
                public setIntegerInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: number
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Integer>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.Map<string, string>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.math.BigInteger
                ): void;
                public zad(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Float>
                ): void;
                public addConcreteTypeInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: com.google.android.gms.common.server.response.FastJsonResponse
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: number
                ): void;
                public setStringsInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<string>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.math.BigDecimal
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.math.BigDecimal
                ): void;
                public zae(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public setLongInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: number
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public setDecodedBytesInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: native.Array<number>
                ): void;
                public zad(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zac(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Long>
                ): void;
                public zac(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zag(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Boolean>
                ): void;
                public zag(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: native.Array<number>
                ): void;
                public static zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: any
                ): any;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: boolean
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.math.BigInteger
                ): void;
                public zaf(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string
                ): void;
                public zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigInteger>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: number
                ): void;
                public constructor();
                public zah(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public getFieldMappings(): java.util.Map<
                  string,
                  com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >
                >;
                public zae(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Double>
                ): void;
                public isPrimitiveFieldSet(param0: string): boolean;
                public addConcreteTypeArrayInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList
                ): void;
                public isFieldSet(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >
                ): boolean;
                public getValueObject(param0: string): any;
                public zaf(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigDecimal>
                ): void;
                public setBooleanInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: boolean
                ): void;
                public getFieldValue(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >
                ): any;
                public setStringInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: string
                ): void;
              }
              export namespace FastJsonResponse {
                export class Field<I, O> extends com.google.android.gms.common
                  .internal.safeparcel.AbstractSafeParcelable {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.server.response.FastJsonResponse.Field<
                      any,
                      any
                    >
                  >;
                  public zapr: number;
                  public zaps: boolean;
                  public zapt: number;
                  public zapu: boolean;
                  public zapv: string;
                  public zapw: number;
                  public zapx: java.lang.Class<any>;
                  public static CREATOR: com.google.android.gms.common.server.response.zai;
                  public static forBase64(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    native.Array<number>,
                    native.Array<number>
                  >;
                  public zacp(): com.google.android.gms.common.server.response.FastJsonResponse;
                  public convertBack(param0: any): any;
                  public writeToParcel(
                    param0: globalAndroid.os.Parcel,
                    param1: number
                  ): void;
                  public static forConcreteTypeArray(
                    param0: string,
                    param1: number,
                    param2: java.lang.Class
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >;
                  public static forBoolean(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    java.lang.Boolean,
                    java.lang.Boolean
                  >;
                  public toString(): string;
                  public convert(param0: any): any;
                  public static forLong(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    java.lang.Long,
                    java.lang.Long
                  >;
                  public static forStrings(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    java.util.ArrayList<string>,
                    java.util.ArrayList<string>
                  >;
                  public static forFloat(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    java.lang.Float,
                    java.lang.Float
                  >;
                  public zacl(): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >;
                  public getSafeParcelableFieldId(): number;
                  public static forString(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    string,
                    string
                  >;
                  public static forDouble(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    java.lang.Double,
                    java.lang.Double
                  >;
                  public zacq(): java.util.Map<
                    string,
                    com.google.android.gms.common.server.response.FastJsonResponse.Field<
                      any,
                      any
                    >
                  >;
                  public zaa(
                    param0: com.google.android.gms.common.server.response.zak
                  ): void;
                  public static forConcreteType(
                    param0: string,
                    param1: number,
                    param2: java.lang.Class
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >;
                  public static forInteger(
                    param0: string,
                    param1: number
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    java.lang.Integer,
                    java.lang.Integer
                  >;
                  public static withConverter(
                    param0: string,
                    param1: number,
                    param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<
                      any,
                      any
                    >,
                    param3: boolean
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >;
                  public zacn(): boolean;
                }
                export class FieldConverter<I, O> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<
                      any,
                      any
                    >
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    zacj(): number;
                    zack(): number;
                    convert(param0: I): O;
                    convertBack(param0: O): I;
                  });
                  public constructor();
                  public zack(): number;
                  public convertBack(param0: O): I;
                  public zacj(): number;
                  public convert(param0: I): O;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class FastParser<T> extends java.lang.Object {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.FastParser<any>
                >;
                public constructor();
                public parse(param0: java.io.InputStream, param1: T): void;
              }
              export namespace FastParser {
                export class ParseException {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.server.response.FastParser.ParseException
                  >;
                  public constructor(param0: java.lang.Throwable);
                  public constructor(param0: string);
                  public constructor(
                    param0: string,
                    param1: java.lang.Throwable
                  );
                }
                export class zaa<O> extends java.lang.Object {
                  public static class: java.lang.Class<
                    com.google.android.gms.common.server.response.FastParser.zaa<
                      any
                    >
                  >;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.server.response.FastParser$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    zah(
                      param0: com.google.android.gms.common.server.response.FastParser<
                        any
                      >,
                      param1: java.io.BufferedReader
                    ): O;
                  });
                  public constructor();
                  public zah(
                    param0: com.google.android.gms.common.server.response.FastParser<
                      any
                    >,
                    param1: java.io.BufferedReader
                  ): O;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export abstract class FastSafeParcelableJsonResponse extends com
                .google.android.gms.common.server.response.FastJsonResponse {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse
                >;
                public describeContents(): number;
                public isPrimitiveFieldSet(param0: string): boolean;
                public equals(param0: any): boolean;
                public toByteArray(): native.Array<number>;
                public getValueObject(param0: string): any;
                public constructor();
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class SafeParcelResponse extends com.google.android.gms
                .common.server.response.FastSafeParcelableJsonResponse {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.SafeParcelResponse
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.common.server.response.SafeParcelResponse
                >;
                public toString(): string;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.Map
                ): void;
                public setIntegerInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: number
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Integer>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.Map<string, string>
                ): void;
                public static from(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse
                ): com.google.android.gms.common.server.response.SafeParcelResponse;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.math.BigInteger
                ): void;
                public zad(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Float>
                ): void;
                public addConcreteTypeInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: com.google.android.gms.common.server.response.FastJsonResponse
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: number
                ): void;
                public setStringsInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<string>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.math.BigDecimal
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.math.BigDecimal
                ): void;
                public zae(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public setLongInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: number
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public setDecodedBytesInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: native.Array<number>
                ): void;
                public zac(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Long>
                ): void;
                public zad(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zac(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zag(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Boolean>
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: native.Array<number>
                ): void;
                public zag(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public static zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: any
                ): any;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: boolean
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.math.BigInteger
                ): void;
                public zaf(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: java.util.ArrayList
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string
                ): void;
                public zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigInteger>
                ): void;
                public constructor(
                  param0: com.google.android.gms.common.server.response.zak,
                  param1: string
                );
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: number
                ): void;
                public constructor();
                public getFieldMappings(): java.util.Map<
                  string,
                  com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >
                >;
                public zae(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Double>
                ): void;
                public isPrimitiveFieldSet(param0: string): boolean;
                public addConcreteTypeArrayInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList
                ): void;
                public getValueObject(param0: string): any;
                public zaf(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigDecimal>
                ): void;
                public setBooleanInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: boolean
                ): void;
                public setStringInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >,
                  param1: string,
                  param2: string
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zaa extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.lang.Integer> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zaa
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zab extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.lang.Long> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zab
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zac extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.lang.Float> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zac
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zad extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.lang.Double> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zad
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zae extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.lang.Boolean> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zae
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zaf extends com.google.android.gms.common.server
                .response.FastParser.zaa<string> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zaf
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zag extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.math.BigInteger> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zag
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zah extends com.google.android.gms.common.server
                .response.FastParser.zaa<java.math.BigDecimal> {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zah
                >;
                public zah(
                  param0: com.google.android.gms.common.server.response.FastParser<
                    any
                  >,
                  param1: java.io.BufferedReader
                ): any;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zai extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.response.FastJsonResponse.Field<
                  any,
                  any
                >
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zai
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zaj extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.response.zam
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zaj
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zak {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zak
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.common.server.response.zak
                >;
                public zaa(param0: java.lang.Class<any>): boolean;
                public toString(): string;
                public zai(
                  param0: string
                ): java.util.Map<
                  string,
                  com.google.android.gms.common.server.response.FastJsonResponse.Field<
                    any,
                    any
                  >
                >;
                public zacs(): void;
                public zaa(
                  param0: java.lang.Class<any>,
                  param1: java.util.Map<
                    string,
                    com.google.android.gms.common.server.response.FastJsonResponse.Field<
                      any,
                      any
                    >
                  >
                ): void;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
                public zacr(): void;
                public constructor(param0: java.lang.Class<any>);
                public zact(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zal {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zal
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.common.server.response.zal
                >;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zam {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zam
                >;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.common.server.response.zam
                >;
                public writeToParcel(
                  param0: globalAndroid.os.Parcel,
                  param1: number
                ): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zan extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.response.zak
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zan
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zao extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.response.zal
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zao
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export namespace response {
              export class zap extends globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.common.server.response.SafeParcelResponse
              > {
                public static class: java.lang.Class<
                  com.google.android.gms.common.server.response.zap
                >;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export namespace server {
            export class zaa extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.common.server.FavaDiagnosticsEntity
            > {
              public static class: java.lang.Class<
                com.google.android.gms.common.server.zaa
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace common {
          export class zaa extends com.google.android.gms.tasks.Continuation<
            java.util.Map<
              com.google.android.gms.common.api.internal.zai<any>,
              string
            >,
            java.lang.Void
          > {
            public static class: java.lang.Class<
              com.google.android.gms.common.zaa
            >;
            public then(param0: com.google.android.gms.tasks.Task<any>): any;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export abstract class DeferredLifecycleHelper<T> extends java.lang
            .Object {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.DeferredLifecycleHelper<any>
            >;
            public constructor();
            public onResume(): void;
            public createDelegate(
              param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<
                T
              >
            ): void;
            public handleGooglePlayUnavailable(
              param0: globalAndroid.widget.FrameLayout
            ): void;
            public onStop(): void;
            public onLowMemory(): void;
            public onPause(): void;
            public onDestroyView(): void;
            public onDestroy(): void;
            public onInflate(
              param0: globalAndroid.app.Activity,
              param1: globalAndroid.os.Bundle,
              param2: globalAndroid.os.Bundle
            ): void;
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public onCreateView(
              param0: globalAndroid.view.LayoutInflater,
              param1: globalAndroid.view.ViewGroup,
              param2: globalAndroid.os.Bundle
            ): globalAndroid.view.View;
            public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            public static showGooglePlayUnavailableMessage(
              param0: globalAndroid.widget.FrameLayout
            ): void;
            public onStart(): void;
            public getDelegate(): T;
          }
          export namespace DeferredLifecycleHelper {
            export class zaa {
              public static class: java.lang.Class<
                com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.dynamic.DeferredLifecycleHelper$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getState(): number;
                zaa(
                  param0: com.google.android.gms.dynamic.LifecycleDelegate
                ): void;
              });
              public constructor();
              public zaa(
                param0: com.google.android.gms.dynamic.LifecycleDelegate
              ): void;
              public getState(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zaa extends com.google.android.gms.dynamic
            .OnDelegateCreatedListener<any> {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zaa
            >;
            public onDelegateCreated(param0: any): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zab extends com.google.android.gms.dynamic
            .DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zab
            >;
            public getState(): number;
            public zaa(
              param0: com.google.android.gms.dynamic.LifecycleDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zac extends com.google.android.gms.dynamic
            .DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zac
            >;
            public getState(): number;
            public zaa(
              param0: com.google.android.gms.dynamic.LifecycleDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zad extends com.google.android.gms.dynamic
            .DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zad
            >;
            public getState(): number;
            public zaa(
              param0: com.google.android.gms.dynamic.LifecycleDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zae {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zae
            >;
            public onClick(param0: globalAndroid.view.View): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zaf extends com.google.android.gms.dynamic
            .DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zaf
            >;
            public getState(): number;
            public zaa(
              param0: com.google.android.gms.dynamic.LifecycleDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace dynamic {
          export class zag extends com.google.android.gms.dynamic
            .DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<
              com.google.android.gms.dynamic.zag
            >;
            public getState(): number;
            public zaa(
              param0: com.google.android.gms.dynamic.LifecycleDelegate
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zaa {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zaa
              >;
              public constructor(
                param0: globalAndroid.os.IBinder,
                param1: string
              );
              public asBinder(): globalAndroid.os.IBinder;
              public zaa(
                param0: number,
                param1: globalAndroid.os.Parcel
              ): globalAndroid.os.Parcel;
              public zac(param0: number, param1: globalAndroid.os.Parcel): void;
              public zaa(): globalAndroid.os.Parcel;
              public zab(param0: number, param1: globalAndroid.os.Parcel): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zab
              >;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
              public dispatchTransaction(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zac {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zac
              >;
              public static writeBoolean(
                param0: globalAndroid.os.Parcel,
                param1: boolean
              ): void;
              public static zaa(
                param0: globalAndroid.os.Parcel,
                param1: globalAndroid.os.Parcelable.Creator
              ): globalAndroid.os.Parcelable;
              public static zaa(
                param0: globalAndroid.os.Parcel,
                param1: globalAndroid.os.Parcelable
              ): void;
              public static zaa(
                param0: globalAndroid.os.Parcel,
                param1: globalAndroid.os.IInterface
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zad {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zad
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.base.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zae {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zae
              >;
              public invalidateDrawable(
                param0: globalAndroid.graphics.drawable.Drawable
              ): void;
              public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
              public unscheduleDrawable(
                param0: globalAndroid.graphics.drawable.Drawable,
                param1: java.lang.Runnable
              ): void;
              public startTransition(param0: number): void;
              public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
              public draw(param0: globalAndroid.graphics.Canvas): void;
              public setColorFilter(
                param0: globalAndroid.graphics.ColorFilter
              ): void;
              public getIntrinsicHeight(): number;
              public scheduleDrawable(
                param0: globalAndroid.graphics.drawable.Drawable,
                param1: java.lang.Runnable,
                param2: number
              ): void;
              public getChangingConfigurations(): number;
              public mutate(): globalAndroid.graphics.drawable.Drawable;
              public setAlpha(param0: number): void;
              public zacf(): globalAndroid.graphics.drawable.Drawable;
              public constructor(
                param0: globalAndroid.graphics.drawable.Drawable,
                param1: globalAndroid.graphics.drawable.Drawable
              );
              public getIntrinsicWidth(): number;
              public getOpacity(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zaf {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zaf
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zag {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zag
              >;
              public setAlpha(param0: number): void;
              public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
              public draw(param0: globalAndroid.graphics.Canvas): void;
              public getOpacity(): number;
              public setColorFilter(
                param0: globalAndroid.graphics.ColorFilter
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zah {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zah
              >;
              public newDrawable(): globalAndroid.graphics.drawable.Drawable;
              public getChangingConfigurations(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zai {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zai
              >;
              public newDrawable(): globalAndroid.graphics.drawable.Drawable;
              public getChangingConfigurations(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zaj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zaj
              >;
              public onMeasure(param0: number, param1: number): void;
              public static zach(): number;
              public onDraw(param0: globalAndroid.graphics.Canvas): void;
              public static zaa(param0: globalAndroid.net.Uri): void;
              public static zai(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zak extends androidx.collection.LruCache<
              any,
              globalAndroid.graphics.drawable.Drawable
            > {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zak
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zal {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zal
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.base.zal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zaa(
                  param0: number,
                  param1: java.util.concurrent.ThreadFactory,
                  param2: number
                ): java.util.concurrent.ExecutorService;
              });
              public constructor();
              public zaa(
                param0: number,
                param1: java.util.concurrent.ThreadFactory,
                param2: number
              ): java.util.concurrent.ExecutorService;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zam {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zam
              >;
              public static zacv(): com.google.android.gms.internal.base.zal;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zan {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zan
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zao extends com.google.android.gms.internal.base.zal {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zao
              >;
              public zaa(
                param0: number,
                param1: java.util.concurrent.ThreadFactory,
                param2: number
              ): java.util.concurrent.ExecutorService;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zap {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zap
              >;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(
                param0: globalAndroid.os.Looper,
                param1: globalAndroid.os.Handler.Callback
              );
              public dispatchMessage(param0: globalAndroid.os.Message): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace base {
            export class zaq {
              public static class: java.lang.Class<
                com.google.android.gms.internal.base.zaq
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.base.zaq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zza {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zza
              >;
              public constructor(
                param0: globalAndroid.os.IBinder,
                param1: string
              );
              public asBinder(): globalAndroid.os.IBinder;
              public obtainAndWriteInterfaceToken(): globalAndroid.os.Parcel;
              public transactAndReadException(
                param0: number,
                param1: globalAndroid.os.Parcel
              ): globalAndroid.os.Parcel;
              public transactOneway(
                param0: number,
                param1: globalAndroid.os.Parcel
              ): void;
              public transactAndReadExceptionReturnVoid(
                param0: number,
                param1: globalAndroid.os.Parcel
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzaa extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzaa
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export abstract class zzab extends com.google.android.gms.location
              .LocationServices.zza<com.google.android.gms.common.api.Status> {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzab
              >;
              public constructor();
              public setResult(param0: any): void;
              public constructor(
                param0: com.google.android.gms.common.api.GoogleApiClient
              );
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.api.Api.AnyClientKey<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
              public constructor(
                param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                  any
                >
              );
              public constructor(
                param0: com.google.android.gms.common.api.Api<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzac extends com.google.android.gms.internal.location
              .zzak {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzac
              >;
              public constructor();
              public constructor(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                  com.google.android.gms.common.api.Status
                >
              );
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzad {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzad
              >;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzad>*/;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public getStatus(): com.google.android.gms.common.api.Status;
              public constructor(
                param0: com.google.android.gms.common.api.Status
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzae extends java.lang
              .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzad>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzae
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzaf extends com.google.android.gms.location
              .GeofencingApi {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzaf
              >;
              public constructor();
              public addGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.GeofencingRequest,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public removeGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: java.util.List<string>
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              /** @deprecated */
              public addGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: java.util.List<
                  com.google.android.gms.location.Geofence
                >,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public removeGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzag extends com.google.android.gms.internal.location
              .zzai {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzag
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzah extends com.google.android.gms.internal.location
              .zzai {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzah
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export abstract class zzai extends com.google.android.gms.location
              .LocationServices.zza<com.google.android.gms.common.api.Status> {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzai
              >;
              public constructor();
              public setResult(param0: any): void;
              public constructor(
                param0: com.google.android.gms.common.api.GoogleApiClient
              );
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.api.Api.AnyClientKey<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
              public constructor(
                param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                  any
                >
              );
              public constructor(
                param0: com.google.android.gms.common.api.Api<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzaj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzaj
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.location.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(
                  param0: any /* com.google.android.gms.internal.location.zzad*/
                ): void;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export abstract class zzak
              extends com.google.android.gms.internal.location.zzb
              implements com.google.android.gms.internal.location.zzaj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzak
              >;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzal
              extends com.google.android.gms.internal.location.zza
              implements com.google.android.gms.internal.location.zzaj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzal
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzam {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzam
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.location.zzam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: number, param1: native.Array<string>): void;
                zzb(param0: number, param1: native.Array<string>): void;
                zza(
                  param0: number,
                  param1: globalAndroid.app.PendingIntent
                ): void;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export abstract class zzan
              extends com.google.android.gms.internal.location.zzb
              implements com.google.android.gms.internal.location.zzam {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzan
              >;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzao {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzao
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.location.zzao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(
                  param0: com.google.android.gms.location.GeofencingRequest,
                  param1: globalAndroid.app.PendingIntent,
                  param2: any /* com.google.android.gms.internal.location.zzam*/
                ): void;
                zza(
                  param0: any /* com.google.android.gms.location.zzal*/,
                  param1: any /* com.google.android.gms.internal.location.zzam*/
                ): void;
                zza(
                  param0: number,
                  param1: boolean,
                  param2: globalAndroid.app.PendingIntent
                ): void;
                zza(
                  param0: com.google.android.gms.location.ActivityTransitionRequest,
                  param1: globalAndroid.app.PendingIntent,
                  param2: com.google.android.gms.common.api.internal.IStatusCallback
                ): void;
                zza(
                  param0: globalAndroid.app.PendingIntent,
                  param1: com.google.android.gms.common.api.internal.IStatusCallback
                ): void;
                zzb(param0: globalAndroid.app.PendingIntent): void;
                zza(
                  param0: any /* com.google.android.gms.internal.location.zzbf*/
                ): void;
                zza(param0: boolean): void;
                zza(param0: globalAndroid.location.Location): void;
                zza(param0: string): globalAndroid.location.Location;
                zza(
                  param0: any /* com.google.android.gms.internal.location.zzaj*/
                ): void;
                zzb(
                  param0: string
                ): com.google.android.gms.location.LocationAvailability;
                zza(
                  param0: com.google.android.gms.location.LocationSettingsRequest,
                  param1: any /* com.google.android.gms.internal.location.zzaq*/,
                  param2: string
                ): void;
                zza(
                  param0: any /* com.google.android.gms.internal.location.zzo*/
                ): void;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzap
              extends com.google.android.gms.internal.location.zza
              implements com.google.android.gms.internal.location.zzao {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzap
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzaq {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzaq
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.location.zzaq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(
                  param0: com.google.android.gms.location.LocationSettingsResult
                ): void;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export abstract class zzar
              extends com.google.android.gms.internal.location.zzb
              implements com.google.android.gms.internal.location.zzaq {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzar
              >;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzas {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzas
              >;
              public getLastLocation(): globalAndroid.location.Location;
              public removeAllListeners(): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: any /* com.google.android.gms.internal.location.zzbj<com.google.android.gms.internal.location.zzao>*/
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzat extends com.google.android.gms.location.zzv {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzat
              >;
              public onLocationResult(
                param0: com.google.android.gms.location.LocationResult
              ): void;
              public onLocationAvailability(
                param0: com.google.android.gms.location.LocationAvailability
              ): void;
              public release(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzau extends com.google.android.gms.common.api.internal
              .ListenerHolder.Notifier<
              com.google.android.gms.location.LocationCallback
            > {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzau
              >;
              public onNotifyListenerFailed(): void;
              public notifyListener(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzav extends com.google.android.gms.common.api.internal
              .ListenerHolder.Notifier<
              com.google.android.gms.location.LocationCallback
            > {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzav
              >;
              public onNotifyListenerFailed(): void;
              public notifyListener(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzaw extends com.google.android.gms.location.zzs {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzaw
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzax extends com.google.android.gms.location.zzy {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzax
              >;
              public release(): void;
              public onLocationChanged(
                param0: globalAndroid.location.Location
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzay extends com.google.android.gms.common.api.internal
              .ListenerHolder.Notifier<
              com.google.android.gms.location.LocationListener
            > {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzay
              >;
              public onNotifyListenerFailed(): void;
              public notifyListener(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzaz extends com.google.android.gms.internal.location
              .zzk {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzaz
              >;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                param4: string,
                param5: com.google.android.gms.common.internal.ClientSettings
              );
              public isConnecting(): boolean;
              public getLastLocation(): globalAndroid.location.Location;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                param4: string
              );
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              public getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzb {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzb
              >;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
              public dispatchTransaction(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzba extends com.google.android.gms.internal.location
              .zzan {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzba
              >;
              public constructor();
              public constructor(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                  com.google.android.gms.common.api.Status
                >
              );
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbb extends com.google.android.gms.internal.location
              .zzan {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbb
              >;
              public constructor();
              public constructor(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                  com.google.android.gms.common.api.Status
                >
              );
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbc extends com.google.android.gms.internal.location
              .zzar {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbc
              >;
              public constructor();
              public constructor(param0: string);
              public constructor(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<
                  com.google.android.gms.location.LocationSettingsResult
                >
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbd {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbd
              >;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbd>*/;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbe extends java.lang
              .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbd>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbe
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbf {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbf
              >;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbf>*/;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbg extends java.lang
              .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbf>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbg
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbh
              implements com.google.android.gms.location.Geofence {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbh
              >;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbh>*/;
              public getRequestId(): string;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public hashCode(): number;
              public toString(): string;
              public constructor(
                param0: string,
                param1: number,
                param2: number,
                param3: number,
                param4: number,
                param5: number,
                param6: number,
                param7: number,
                param8: number
              );
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbi extends java.lang
              .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzbh>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbi
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbj<T> extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbj<any>
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.location.zzbj<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getService(): T;
                checkConnected(): void;
              });
              public constructor();
              public checkConnected(): void;
              public getService(): T;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbk extends com.google.android.gms.location
              .SettingsApi {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbk
              >;
              public constructor();
              public checkLocationSettings(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationSettingsRequest
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.location.LocationSettingsResult
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbl extends com.google.android.gms.location
              .LocationServices.zza<
              com.google.android.gms.location.LocationSettingsResult
            > {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbl
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzbm {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzbm
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzc {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzc
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzd {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzd
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.location.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zze extends com.google.android.gms.location
              .ActivityRecognitionApi {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zze
              >;
              public constructor();
              public removeActivityUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public requestActivityUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: number,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzf extends com.google.android.gms.internal.location
              .zzj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzf
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzg extends com.google.android.gms.internal.location
              .zzj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzg
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzh extends com.google.android.gms.internal.location
              .zzj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzh
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzi extends com.google.android.gms.internal.location
              .zzj {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzi
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export abstract class zzj extends com.google.android.gms.location
              .ActivityRecognition.zza<
              com.google.android.gms.common.api.Status
            > {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzj
              >;
              public constructor();
              public setResult(param0: any): void;
              public constructor(
                param0: com.google.android.gms.common.api.GoogleApiClient
              );
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.api.Api.AnyClientKey<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
              public constructor(
                param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                  any
                >
              );
              public constructor(
                param0: com.google.android.gms.common.api.Api<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzk extends java.lang
              .Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.location.zzao>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzk
              >;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                param4: string,
                param5: com.google.android.gms.common.internal.ClientSettings
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              public getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzl extends java.lang
              .Object /* com.google.android.gms.internal.location.zzbj<com.google.android.gms.internal.location.zzao>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzl
              >;
              public getService(): any;
              public checkConnected(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzm {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzm
              >;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzm>*/;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzn extends java.lang
              .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzm>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzn
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzo {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzo
              >;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzo>*/;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzp extends java.lang
              .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.location.zzo>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzp
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzq extends com.google.android.gms.location
              .FusedLocationProviderApi {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzq
              >;
              public constructor();
              public getLocationAvailability(
                param0: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.location.LocationAvailability;
              public removeLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationListener
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: com.google.android.gms.location.LocationListener,
                param3: globalAndroid.os.Looper
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: com.google.android.gms.location.LocationCallback,
                param3: globalAndroid.os.Looper
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public getLastLocation(
                param0: com.google.android.gms.common.api.GoogleApiClient
              ): globalAndroid.location.Location;
              public removeLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public setMockMode(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: boolean
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public setMockLocation(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.location.Location
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public flushLocations(
                param0: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: com.google.android.gms.location.LocationListener
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              public removeLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationCallback
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzr extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzr
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzs extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzs
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzt extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzt
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzu extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzu
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzv extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzv
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzw extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzw
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzx extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzx
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzy extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzy
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace internal {
          export namespace location {
            export class zzz extends com.google.android.gms.internal.location
              .zzab {
              public static class: java.lang.Class<
                com.google.android.gms.internal.location.zzz
              >;
              public setResult(param0: any): void;
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityRecognition {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityRecognition
            >;
            public static CLIENT_NAME: string;
            public static API: com.google.android.gms.common.api.Api<
              com.google.android.gms.common.api.Api.ApiOptions.NoOptions
            >;
            public static ActivityRecognitionApi: com.google.android.gms.location.ActivityRecognitionApi;
            public static getClient(
              param0: globalAndroid.content.Context
            ): com.google.android.gms.location.ActivityRecognitionClient;
            public static getClient(
              param0: globalAndroid.app.Activity
            ): com.google.android.gms.location.ActivityRecognitionClient;
          }
          export namespace ActivityRecognition {
            export abstract class zza<R> extends java.lang
              .Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.location.zzaz>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.location.ActivityRecognition.zza<any>
              >;
              public constructor();
              public setResult(param0: any): void;
              public constructor(
                param0: com.google.android.gms.common.api.GoogleApiClient
              );
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.api.Api.AnyClientKey<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
              public constructor(
                param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                  any
                >
              );
              public constructor(
                param0: com.google.android.gms.common.api.Api<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityRecognitionApi {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityRecognitionApi
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.ActivityRecognitionApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              requestActivityUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: number,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              removeActivityUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              zza(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.ActivityTransitionRequest,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              zza(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            });
            public constructor();
            public requestActivityUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public removeActivityUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityRecognitionClient extends com.google.android.gms
            .common.api.GoogleApi<
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityRecognitionClient
            >;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public requestActivityTransitionUpdates(
              param0: com.google.android.gms.location.ActivityTransitionRequest,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(param0: globalAndroid.app.Activity);
            public constructor(param0: globalAndroid.content.Context);
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: globalAndroid.os.Looper
            );
            public requestActivityUpdates(
              param0: number,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: globalAndroid.os.Looper,
              param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public removeActivityTransitionUpdates(
              param0: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public removeActivityUpdates(
              param0: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityRecognitionResult {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityRecognitionResult
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.ActivityRecognitionResult
            >;
            public constructor(
              param0: com.google.android.gms.location.DetectedActivity,
              param1: number,
              param2: number
            );
            public static extractResult(
              param0: globalAndroid.content.Intent
            ): com.google.android.gms.location.ActivityRecognitionResult;
            public getElapsedRealtimeMillis(): number;
            public constructor(
              param0: java.util.List<
                com.google.android.gms.location.DetectedActivity
              >,
              param1: number,
              param2: number,
              param3: number,
              param4: globalAndroid.os.Bundle
            );
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getTime(): number;
            public toString(): string;
            public constructor(
              param0: java.util.List<
                com.google.android.gms.location.DetectedActivity
              >,
              param1: number,
              param2: number
            );
            public getActivityConfidence(param0: number): number;
            public static hasResult(
              param0: globalAndroid.content.Intent
            ): boolean;
            public getMostProbableActivity(): com.google.android.gms.location.DetectedActivity;
            public getProbableActivities(): java.util.List<
              com.google.android.gms.location.DetectedActivity
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityTransition {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityTransition
            >;
            public static ACTIVITY_TRANSITION_ENTER: number;
            public static ACTIVITY_TRANSITION_EXIT: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.ActivityTransition
            >;
            public getTransitionType(): number;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getActivityType(): number;
            public toString(): string;
          }
          export namespace ActivityTransition {
            export class Builder {
              public static class: java.lang.Class<
                com.google.android.gms.location.ActivityTransition.Builder
              >;
              public constructor();
              public build(): com.google.android.gms.location.ActivityTransition;
              public setActivityType(
                param0: number
              ): com.google.android.gms.location.ActivityTransition.Builder;
              public setActivityTransition(
                param0: number
              ): com.google.android.gms.location.ActivityTransition.Builder;
            }
            export class SupportedActivityTransition {
              public static class: java.lang.Class<
                com.google.android.gms.location.ActivityTransition.SupportedActivityTransition
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.location.ActivityTransition$SupportedActivityTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityTransitionEvent {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityTransitionEvent
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.ActivityTransitionEvent
            >;
            public getTransitionType(): number;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getElapsedRealTimeNanos(): number;
            public constructor(param0: number, param1: number, param2: number);
            public getActivityType(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityTransitionRequest {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityTransitionRequest
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.ActivityTransitionRequest
            >;
            public static IS_SAME_TRANSITION: java.util.Comparator<
              com.google.android.gms.location.ActivityTransition
            >;
            public serializeToIntentExtra(
              param0: globalAndroid.content.Intent
            ): void;
            public constructor(
              param0: java.util.List<
                com.google.android.gms.location.ActivityTransition
              >,
              param1: string,
              param2: java.util.List<
                com.google.android.gms.common.internal.ClientIdentity
              >
            );
            public constructor(
              param0: java.util.List<
                com.google.android.gms.location.ActivityTransition
              >
            );
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class ActivityTransitionResult {
            public static class: java.lang.Class<
              com.google.android.gms.location.ActivityTransitionResult
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.ActivityTransitionResult
            >;
            public static extractResult(
              param0: globalAndroid.content.Intent
            ): com.google.android.gms.location.ActivityTransitionResult;
            public constructor(
              param0: java.util.List<
                com.google.android.gms.location.ActivityTransitionEvent
              >
            );
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public static hasResult(
              param0: globalAndroid.content.Intent
            ): boolean;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getTransitionEvents(): java.util.List<
              com.google.android.gms.location.ActivityTransitionEvent
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class DetectedActivity {
            public static class: java.lang.Class<
              com.google.android.gms.location.DetectedActivity
            >;
            public static IN_VEHICLE: number;
            public static ON_BICYCLE: number;
            public static ON_FOOT: number;
            public static STILL: number;
            public static UNKNOWN: number;
            public static TILTING: number;
            public static WALKING: number;
            public static RUNNING: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.DetectedActivity
            >;
            public getConfidence(): number;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getType(): number;
            public constructor(param0: number, param1: number);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class FusedLocationProviderApi {
            public static class: java.lang.Class<
              com.google.android.gms.location.FusedLocationProviderApi
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.FusedLocationProviderApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getLastLocation(
                param0: com.google.android.gms.common.api.GoogleApiClient
              ): globalAndroid.location.Location;
              getLocationAvailability(
                param0: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.location.LocationAvailability;
              requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: com.google.android.gms.location.LocationListener
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: com.google.android.gms.location.LocationListener,
                param3: globalAndroid.os.Looper
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: com.google.android.gms.location.LocationCallback,
                param3: globalAndroid.os.Looper
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              requestLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationRequest,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              removeLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationListener
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              removeLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              removeLocationUpdates(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationCallback
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              setMockMode(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: boolean
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              setMockLocation(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.location.Location
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              flushLocations(
                param0: com.google.android.gms.common.api.GoogleApiClient
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            });
            public constructor();
            public static KEY_MOCK_LOCATION: string;
            public static KEY_LOCATION_CHANGED: string;
            public setMockLocation(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: globalAndroid.location.Location
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public getLastLocation(
              param0: com.google.android.gms.common.api.GoogleApiClient
            ): globalAndroid.location.Location;
            public requestLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationRequest,
              param2: com.google.android.gms.location.LocationCallback,
              param3: globalAndroid.os.Looper
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public removeLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationListener
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public flushLocations(
              param0: com.google.android.gms.common.api.GoogleApiClient
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public requestLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationRequest,
              param2: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public requestLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationRequest,
              param2: com.google.android.gms.location.LocationListener,
              param3: globalAndroid.os.Looper
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public getLocationAvailability(
              param0: com.google.android.gms.common.api.GoogleApiClient
            ): com.google.android.gms.location.LocationAvailability;
            public removeLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public removeLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationCallback
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public requestLocationUpdates(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationRequest,
              param2: com.google.android.gms.location.LocationListener
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public setMockMode(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: boolean
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class FusedLocationProviderClient extends com.google.android
            .gms.common.api.GoogleApi<
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.FusedLocationProviderClient
            >;
            public static KEY_VERTICAL_ACCURACY: string;
            public constructor(param0: globalAndroid.app.Activity);
            public constructor(param0: globalAndroid.content.Context);
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: globalAndroid.os.Looper
            );
            public flushLocations(): com.google.android.gms.tasks.Task<
              java.lang.Void
            >;
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: globalAndroid.os.Looper,
              param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public getLocationAvailability(): com.google.android.gms.tasks.Task<
              com.google.android.gms.location.LocationAvailability
            >;
            public removeLocationUpdates(
              param0: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public requestLocationUpdates(
              param0: com.google.android.gms.location.LocationRequest,
              param1: com.google.android.gms.location.LocationCallback,
              param2: globalAndroid.os.Looper
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public requestLocationUpdates(
              param0: com.google.android.gms.location.LocationRequest,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public getLastLocation(): com.google.android.gms.tasks.Task<
              globalAndroid.location.Location
            >;
            public removeLocationUpdates(
              param0: com.google.android.gms.location.LocationCallback
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public setMockLocation(
              param0: globalAndroid.location.Location
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            public setMockMode(
              param0: boolean
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
          }
          export namespace FusedLocationProviderClient {
            export class zza extends com.google.android.gms.internal.location
              .zzak {
              public static class: java.lang.Class<
                com.google.android.gms.location.FusedLocationProviderClient.zza
              >;
              public constructor();
              public constructor(param0: string);
              public constructor(
                param0: com.google.android.gms.tasks.TaskCompletionSource<
                  java.lang.Void
                >
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class Geofence {
            public static class: java.lang.Class<
              com.google.android.gms.location.Geofence
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.Geofence interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getRequestId(): string });
            public constructor();
            public static NEVER_EXPIRE: number;
            public static GEOFENCE_TRANSITION_EXIT: number;
            public static GEOFENCE_TRANSITION_ENTER: number;
            public static GEOFENCE_TRANSITION_DWELL: number;
            public getRequestId(): string;
          }
          export namespace Geofence {
            export class Builder {
              public static class: java.lang.Class<
                com.google.android.gms.location.Geofence.Builder
              >;
              public constructor();
              public setLoiteringDelay(
                param0: number
              ): com.google.android.gms.location.Geofence.Builder;
              public setExpirationDuration(
                param0: number
              ): com.google.android.gms.location.Geofence.Builder;
              public setNotificationResponsiveness(
                param0: number
              ): com.google.android.gms.location.Geofence.Builder;
              public setRequestId(
                param0: string
              ): com.google.android.gms.location.Geofence.Builder;
              public setCircularRegion(
                param0: number,
                param1: number,
                param2: number
              ): com.google.android.gms.location.Geofence.Builder;
              public setTransitionTypes(
                param0: number
              ): com.google.android.gms.location.Geofence.Builder;
              public build(): com.google.android.gms.location.Geofence;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class GeofenceStatusCodes {
            public static class: java.lang.Class<
              com.google.android.gms.location.GeofenceStatusCodes
            >;
            public static GEOFENCE_NOT_AVAILABLE: number;
            public static GEOFENCE_TOO_MANY_GEOFENCES: number;
            public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
            public static getStatusCodeString(param0: number): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class GeofencingApi {
            public static class: java.lang.Class<
              com.google.android.gms.location.GeofencingApi
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.GeofencingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              addGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: java.util.List<
                  com.google.android.gms.location.Geofence
                >,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              addGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.GeofencingRequest,
                param2: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              removeGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: globalAndroid.app.PendingIntent
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
              removeGeofences(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: java.util.List<string>
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.common.api.Status
              >;
            });
            public constructor();
            public removeGeofences(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public removeGeofences(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: java.util.List<string>
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            public addGeofences(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.GeofencingRequest,
              param2: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
            /** @deprecated */
            public addGeofences(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: java.util.List<com.google.android.gms.location.Geofence>,
              param2: globalAndroid.app.PendingIntent
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.common.api.Status
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class GeofencingClient extends com.google.android.gms.common
            .api.GoogleApi<
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.GeofencingClient
            >;
            public removeGeofences(
              param0: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public constructor(param0: globalAndroid.app.Activity);
            public constructor(param0: globalAndroid.content.Context);
            public addGeofences(
              param0: com.google.android.gms.location.GeofencingRequest,
              param1: globalAndroid.app.PendingIntent
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: globalAndroid.os.Looper
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: globalAndroid.os.Looper,
              param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public removeGeofences(
              param0: java.util.List<string>
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class GeofencingEvent {
            public static class: java.lang.Class<
              com.google.android.gms.location.GeofencingEvent
            >;
            public static fromIntent(
              param0: globalAndroid.content.Intent
            ): com.google.android.gms.location.GeofencingEvent;
            public getErrorCode(): number;
            public getTriggeringGeofences(): java.util.List<
              com.google.android.gms.location.Geofence
            >;
            public getTriggeringLocation(): globalAndroid.location.Location;
            public getGeofenceTransition(): number;
            public hasError(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class GeofencingRequest {
            public static class: java.lang.Class<
              com.google.android.gms.location.GeofencingRequest
            >;
            public static INITIAL_TRIGGER_ENTER: number;
            public static INITIAL_TRIGGER_EXIT: number;
            public static INITIAL_TRIGGER_DWELL: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.GeofencingRequest
            >;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public getGeofences(): java.util.List<
              com.google.android.gms.location.Geofence
            >;
            public getInitialTrigger(): number;
            public toString(): string;
          }
          export namespace GeofencingRequest {
            export class Builder {
              public static class: java.lang.Class<
                com.google.android.gms.location.GeofencingRequest.Builder
              >;
              public constructor();
              public build(): com.google.android.gms.location.GeofencingRequest;
              public addGeofences(
                param0: java.util.List<com.google.android.gms.location.Geofence>
              ): com.google.android.gms.location.GeofencingRequest.Builder;
              public addGeofence(
                param0: com.google.android.gms.location.Geofence
              ): com.google.android.gms.location.GeofencingRequest.Builder;
              public setInitialTrigger(
                param0: number
              ): com.google.android.gms.location.GeofencingRequest.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationAvailability {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationAvailability
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.LocationAvailability
            >;
            public isLocationAvailable(): boolean;
            public static extractLocationAvailability(
              param0: globalAndroid.content.Intent
            ): com.google.android.gms.location.LocationAvailability;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public static hasLocationAvailability(
              param0: globalAndroid.content.Intent
            ): boolean;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationCallback {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationCallback
            >;
            public onLocationResult(
              param0: com.google.android.gms.location.LocationResult
            ): void;
            public constructor();
            public onLocationAvailability(
              param0: com.google.android.gms.location.LocationAvailability
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationListener {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationListener
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.LocationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onLocationChanged(param0: globalAndroid.location.Location): void;
            });
            public constructor();
            public onLocationChanged(
              param0: globalAndroid.location.Location
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationRequest {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationRequest
            >;
            public static PRIORITY_HIGH_ACCURACY: number;
            public static PRIORITY_BALANCED_POWER_ACCURACY: number;
            public static PRIORITY_LOW_POWER: number;
            public static PRIORITY_NO_POWER: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.LocationRequest
            >;
            public constructor();
            public setExpirationTime(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public setMaxWaitTime(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public getNumUpdates(): number;
            public setExpirationDuration(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public setFastestInterval(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getInterval(): number;
            public getMaxWaitTime(): number;
            public toString(): string;
            public isFastestIntervalExplicitlySet(): boolean;
            public setNumUpdates(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public setInterval(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public setPriority(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public getPriority(): number;
            public setSmallestDisplacement(
              param0: number
            ): com.google.android.gms.location.LocationRequest;
            public static create(): com.google.android.gms.location.LocationRequest;
            public getSmallestDisplacement(): number;
            public getExpirationTime(): number;
            public getFastestInterval(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationResult {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationResult
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.LocationResult
            >;
            public static extractResult(
              param0: globalAndroid.content.Intent
            ): com.google.android.gms.location.LocationResult;
            public static create(
              param0: java.util.List<globalAndroid.location.Location>
            ): com.google.android.gms.location.LocationResult;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public static hasResult(
              param0: globalAndroid.content.Intent
            ): boolean;
            public getLocations(): java.util.List<
              globalAndroid.location.Location
            >;
            public getLastLocation(): globalAndroid.location.Location;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationServices {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationServices
            >;
            public static API: com.google.android.gms.common.api.Api<
              com.google.android.gms.common.api.Api.ApiOptions.NoOptions
            >;
            public static FusedLocationApi: com.google.android.gms.location.FusedLocationProviderApi;
            public static GeofencingApi: com.google.android.gms.location.GeofencingApi;
            public static SettingsApi: com.google.android.gms.location.SettingsApi;
            public static getFusedLocationProviderClient(
              param0: globalAndroid.content.Context
            ): com.google.android.gms.location.FusedLocationProviderClient;
            public static getFusedLocationProviderClient(
              param0: globalAndroid.app.Activity
            ): com.google.android.gms.location.FusedLocationProviderClient;
            public static getGeofencingClient(
              param0: globalAndroid.content.Context
            ): com.google.android.gms.location.GeofencingClient;
            public static getGeofencingClient(
              param0: globalAndroid.app.Activity
            ): com.google.android.gms.location.GeofencingClient;
            public static getSettingsClient(
              param0: globalAndroid.content.Context
            ): com.google.android.gms.location.SettingsClient;
            public static getSettingsClient(
              param0: globalAndroid.app.Activity
            ): com.google.android.gms.location.SettingsClient;
          }
          export namespace LocationServices {
            export abstract class zza<R> extends java.lang
              .Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.location.zzaz>*/ {
              public static class: java.lang.Class<
                com.google.android.gms.location.LocationServices.zza<any>
              >;
              public constructor();
              public setResult(param0: any): void;
              public constructor(
                param0: com.google.android.gms.common.api.GoogleApiClient
              );
              public setFailedResult(
                param0: com.google.android.gms.common.api.Status
              ): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.api.Api.AnyClientKey<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
              public constructor(
                param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<
                  any
                >
              );
              public constructor(
                param0: com.google.android.gms.common.api.Api<any>,
                param1: com.google.android.gms.common.api.GoogleApiClient
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationSettingsRequest {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationSettingsRequest
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.LocationSettingsRequest
            >;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
          }
          export namespace LocationSettingsRequest {
            export class Builder {
              public static class: java.lang.Class<
                com.google.android.gms.location.LocationSettingsRequest.Builder
              >;
              public constructor();
              public setAlwaysShow(
                param0: boolean
              ): com.google.android.gms.location.LocationSettingsRequest.Builder;
              public addAllLocationRequests(
                param0: java.util.Collection<
                  com.google.android.gms.location.LocationRequest
                >
              ): com.google.android.gms.location.LocationSettingsRequest.Builder;
              public build(): com.google.android.gms.location.LocationSettingsRequest;
              public setNeedBle(
                param0: boolean
              ): com.google.android.gms.location.LocationSettingsRequest.Builder;
              public addLocationRequest(
                param0: com.google.android.gms.location.LocationRequest
              ): com.google.android.gms.location.LocationSettingsRequest.Builder;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationSettingsResponse extends com.google.android.gms
            .common.api.Response<
            com.google.android.gms.location.LocationSettingsResult
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationSettingsResponse
            >;
            public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationSettingsResult {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationSettingsResult
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.LocationSettingsResult
            >;
            public getLocationSettingsStates(): com.google.android.gms.location.LocationSettingsStates;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public constructor(
              param0: com.google.android.gms.common.api.Status,
              param1: com.google.android.gms.location.LocationSettingsStates
            );
            public constructor(
              param0: com.google.android.gms.common.api.Status
            );
            public getStatus(): com.google.android.gms.common.api.Status;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationSettingsStates {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationSettingsStates
            >;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.location.LocationSettingsStates
            >;
            public isLocationUsable(): boolean;
            public isLocationPresent(): boolean;
            public isBlePresent(): boolean;
            public isGpsUsable(): boolean;
            public isBleUsable(): boolean;
            public constructor(
              param0: boolean,
              param1: boolean,
              param2: boolean,
              param3: boolean,
              param4: boolean,
              param5: boolean
            );
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public isNetworkLocationUsable(): boolean;
            public static fromIntent(
              param0: globalAndroid.content.Intent
            ): com.google.android.gms.location.LocationSettingsStates;
            public isNetworkLocationPresent(): boolean;
            public isGpsPresent(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationSettingsStatusCodes {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationSettingsStatusCodes
            >;
            public static SETTINGS_CHANGE_UNAVAILABLE: number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class LocationStatusCodes {
            public static class: java.lang.Class<
              com.google.android.gms.location.LocationStatusCodes
            >;
            public static SUCCESS: number;
            public static ERROR: number;
            public static GEOFENCE_NOT_AVAILABLE: number;
            public static GEOFENCE_TOO_MANY_GEOFENCES: number;
            public static GEOFENCE_TOO_MANY_PENDING_INTENTS: number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class SettingsApi {
            public static class: java.lang.Class<
              com.google.android.gms.location.SettingsApi
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.SettingsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              checkLocationSettings(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: com.google.android.gms.location.LocationSettingsRequest
              ): com.google.android.gms.common.api.PendingResult<
                com.google.android.gms.location.LocationSettingsResult
              >;
            });
            public constructor();
            public checkLocationSettings(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.location.LocationSettingsRequest
            ): com.google.android.gms.common.api.PendingResult<
              com.google.android.gms.location.LocationSettingsResult
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class SettingsClient extends com.google.android.gms.common.api
            .GoogleApi<
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.SettingsClient
            >;
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public constructor(param0: globalAndroid.app.Activity);
            public constructor(param0: globalAndroid.content.Context);
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: globalAndroid.os.Looper
            );
            public checkLocationSettings(
              param0: com.google.android.gms.location.LocationSettingsRequest
            ): com.google.android.gms.tasks.Task<
              com.google.android.gms.location.LocationSettingsResponse
            >;
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: globalAndroid.os.Looper,
              param4: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
            public constructor(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.GoogleApi.Settings
            );
            /** @deprecated */
            public constructor(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.Api<any>,
              param2: any,
              param3: com.google.android.gms.common.api.internal.StatusExceptionMapper
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zza extends com.google.android.gms.common.api.Api
            .AbstractClientBuilder<
            com.google.android.gms.internal.location.zzaz,
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zza
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzaa extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.LocationAvailability
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzaa
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzab extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.LocationRequest
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzab
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzac extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.LocationResult
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzac
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzad extends com.google.android.gms.common.api.Api
            .AbstractClientBuilder<
            com.google.android.gms.internal.location.zzaz,
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzad
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzae {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzae
            >;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzae>*/;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzaf extends java.lang
            .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzae>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzaf
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzag extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.LocationSettingsRequest
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzag
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzah extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.LocationSettingsResult
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzah
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzai extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.LocationSettingsStates
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzai
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzaj {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzaj
            >;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzak extends java.lang
            .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzaj>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzak
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzal {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzal
            >;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzal>*/;
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzam extends java.lang
            .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzal>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzam
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzb extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.ActivityRecognitionResult
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzb
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzc extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.ActivityTransition
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzc
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzd extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.ActivityTransitionEvent
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzd
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zze extends java.util.Comparator<
            com.google.android.gms.location.ActivityTransition
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zze
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzf extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.ActivityTransitionRequest
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzf
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzg extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.ActivityTransitionResult
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzg
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzh extends java.util.Comparator<
            com.google.android.gms.location.DetectedActivity
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzh
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzi extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.DetectedActivity
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzi
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzj {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzj
            >;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzj>*/;
            public constructor();
            public writeToParcel(
              param0: globalAndroid.os.Parcel,
              param1: number
            ): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzk extends java.lang
            .Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.zzj>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzk
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzl extends com.google.android.gms.common.api.internal
            .TaskApiCall<
            com.google.android.gms.internal.location.zzaz,
            globalAndroid.location.Location
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzl
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzm extends com.google.android.gms.common.api.internal
            .TaskApiCall<
            com.google.android.gms.internal.location.zzaz,
            com.google.android.gms.location.LocationAvailability
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzm
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzn extends com.google.android.gms.common.api.internal
            .RegisterListenerMethod<
            com.google.android.gms.internal.location.zzaz,
            com.google.android.gms.location.LocationCallback
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzn
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzo extends com.google.android.gms.common.api.internal
            .UnregisterListenerMethod<
            com.google.android.gms.internal.location.zzaz,
            com.google.android.gms.location.LocationCallback
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzo
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzp extends com.google.android.gms.internal.location
            .zzak {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzp
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzq extends globalAndroid.os.Parcelable.Creator<
            com.google.android.gms.location.GeofencingRequest
          > {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzq
            >;
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzr {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzr
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzs extends com.google.android.gms.internal.location.zzb
            implements com.google.android.gms.location.zzr {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzs
            >;
            public dispatchTransaction(
              param0: number,
              param1: globalAndroid.os.Parcel,
              param2: globalAndroid.os.Parcel,
              param3: number
            ): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzt extends com.google.android.gms.internal.location.zza
            implements com.google.android.gms.location.zzr {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzt
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzu {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzu
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.zzu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onLocationResult(
                param0: com.google.android.gms.location.LocationResult
              ): void;
              onLocationAvailability(
                param0: com.google.android.gms.location.LocationAvailability
              ): void;
            });
            public constructor();
            public onLocationResult(
              param0: com.google.android.gms.location.LocationResult
            ): void;
            public onLocationAvailability(
              param0: com.google.android.gms.location.LocationAvailability
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export abstract class zzv
            extends com.google.android.gms.internal.location.zzb
            implements com.google.android.gms.location.zzu {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzv
            >;
            public onLocationResult(
              param0: com.google.android.gms.location.LocationResult
            ): void;
            public constructor();
            public onLocationAvailability(
              param0: com.google.android.gms.location.LocationAvailability
            ): void;
            public dispatchTransaction(
              param0: number,
              param1: globalAndroid.os.Parcel,
              param2: globalAndroid.os.Parcel,
              param3: number
            ): boolean;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzw extends com.google.android.gms.internal.location.zza
            implements com.google.android.gms.location.zzu {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzw
            >;
            public onLocationResult(
              param0: com.google.android.gms.location.LocationResult
            ): void;
            public onLocationAvailability(
              param0: com.google.android.gms.location.LocationAvailability
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzx {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzx
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.location.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onLocationChanged(param0: globalAndroid.location.Location): void;
            });
            public constructor();
            public onLocationChanged(
              param0: globalAndroid.location.Location
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export abstract class zzy
            extends com.google.android.gms.internal.location.zzb
            implements com.google.android.gms.location.zzx {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzy
            >;
            public constructor();
            public onLocationChanged(
              param0: globalAndroid.location.Location
            ): void;
            public dispatchTransaction(
              param0: number,
              param1: globalAndroid.os.Parcel,
              param2: globalAndroid.os.Parcel,
              param3: number
            ): boolean;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace location {
          export class zzz extends com.google.android.gms.internal.location.zza
            implements com.google.android.gms.location.zzx {
            public static class: java.lang.Class<
              com.google.android.gms.location.zzz
            >;
            public onLocationChanged(
              param0: globalAndroid.location.Location
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export class SignInOptions extends com.google.android.gms.common.api
            .Api.ApiOptions.Optional {
            public static class: java.lang.Class<
              com.google.android.gms.signin.SignInOptions
            >;
            public static DEFAULT: com.google.android.gms.signin.SignInOptions;
            public isIdTokenRequested(): boolean;
            public waitForAccessTokenRefresh(): boolean;
            public getServerClientId(): string;
            public isForceCodeForRefreshToken(): boolean;
            public getHostedDomain(): string;
            public isOfflineAccessRequested(): boolean;
            public getAuthApiSignInModuleVersion(): java.lang.Long;
            public getRealClientLibraryVersion(): java.lang.Long;
          }
          export namespace SignInOptions {
            export class zaa {
              public static class: java.lang.Class<
                com.google.android.gms.signin.SignInOptions.zaa
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class SignInClientImpl
              extends com.google.android.gms.common.internal.GmsClient<
                com.google.android.gms.signin.internal.zaf
              >
              implements com.google.android.gms.signin.zad {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.SignInClientImpl
              >;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              public getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public connect(): void;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public static createBundleFromClientSettings(
                param0: com.google.android.gms.common.internal.ClientSettings
              ): globalAndroid.os.Bundle;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
              public zacw(): void;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: boolean,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.signin.SignInOptions,
                param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public zaa(
                param0: com.google.android.gms.signin.internal.zad
              ): void;
              public isConnecting(): boolean;
              public zaa(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: boolean
              ): void;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener
              );
              public onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              public getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zaa {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zaa
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.signin.internal.zaa
              >;
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zab extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.signin.internal.zaa
            > {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zab
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zac extends com.google.android.gms.signin.internal
              .zae {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zac
              >;
              public constructor();
              public constructor(param0: string);
              public zah(
                param0: com.google.android.gms.common.api.Status
              ): void;
              public zag(
                param0: com.google.android.gms.common.api.Status
              ): void;
              public zab(
                param0: com.google.android.gms.signin.internal.zaj
              ): void;
              public zaa(
                param0: com.google.android.gms.common.ConnectionResult,
                param1: com.google.android.gms.signin.internal.zaa
              ): void;
              public zaa(
                param0: com.google.android.gms.common.api.Status,
                param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zad {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zad
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.signin.internal.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zaa(
                  param0: com.google.android.gms.common.ConnectionResult,
                  param1: com.google.android.gms.signin.internal.zaa
                ): void;
                zag(param0: com.google.android.gms.common.api.Status): void;
                zah(param0: com.google.android.gms.common.api.Status): void;
                zaa(
                  param0: com.google.android.gms.common.api.Status,
                  param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount
                ): void;
                zab(param0: com.google.android.gms.signin.internal.zaj): void;
              });
              public constructor();
              public zah(
                param0: com.google.android.gms.common.api.Status
              ): void;
              public zag(
                param0: com.google.android.gms.common.api.Status
              ): void;
              public zab(
                param0: com.google.android.gms.signin.internal.zaj
              ): void;
              public zaa(
                param0: com.google.android.gms.common.ConnectionResult,
                param1: com.google.android.gms.signin.internal.zaa
              ): void;
              public zaa(
                param0: com.google.android.gms.common.api.Status,
                param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export abstract class zae
              extends com.google.android.gms.internal.base.zab
              implements com.google.android.gms.signin.internal.zad {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zae
              >;
              public constructor();
              public constructor(param0: string);
              public zah(
                param0: com.google.android.gms.common.api.Status
              ): void;
              public dispatchTransaction(
                param0: number,
                param1: globalAndroid.os.Parcel,
                param2: globalAndroid.os.Parcel,
                param3: number
              ): boolean;
              public zag(
                param0: com.google.android.gms.common.api.Status
              ): void;
              public zab(
                param0: com.google.android.gms.signin.internal.zaj
              ): void;
              public zaa(
                param0: com.google.android.gms.common.ConnectionResult,
                param1: com.google.android.gms.signin.internal.zaa
              ): void;
              public zaa(
                param0: com.google.android.gms.common.api.Status,
                param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount
              ): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zaf {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zaf
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.signin.internal.zaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zam(param0: number): void;
                zaa(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: number,
                  param2: boolean
                ): void;
                zaa(
                  param0: com.google.android.gms.signin.internal.zah,
                  param1: com.google.android.gms.signin.internal.zad
                ): void;
              });
              public constructor();
              public zaa(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: number,
                param2: boolean
              ): void;
              public zaa(
                param0: com.google.android.gms.signin.internal.zah,
                param1: com.google.android.gms.signin.internal.zad
              ): void;
              public zam(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zag extends com.google.android.gms.internal.base.zaa
              implements com.google.android.gms.signin.internal.zaf {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zag
              >;
              public zaa(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: number,
                param2: boolean
              ): void;
              public zaa(
                param0: com.google.android.gms.signin.internal.zah,
                param1: com.google.android.gms.signin.internal.zad
              ): void;
              public zaa(
                param0: number,
                param1: globalAndroid.os.Parcel
              ): globalAndroid.os.Parcel;
              public zaa(): globalAndroid.os.Parcel;
              public zam(param0: number): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zah {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zah
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.signin.internal.zah
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public constructor(
                param0: com.google.android.gms.common.internal.ResolveAccountRequest
              );
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zai extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.signin.internal.zah
            > {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zai
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zaj {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zaj
              >;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<
                com.google.android.gms.signin.internal.zaj
              >;
              public writeToParcel(
                param0: globalAndroid.os.Parcel,
                param1: number
              ): void;
              public zacx(): com.google.android.gms.common.internal.ResolveAccountResponse;
              public constructor(param0: number);
              public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export namespace internal {
            export class zak extends globalAndroid.os.Parcelable.Creator<
              com.google.android.gms.signin.internal.zaj
            > {
              public static class: java.lang.Class<
                com.google.android.gms.signin.internal.zak
              >;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export class zaa {
            public static class: java.lang.Class<
              com.google.android.gms.signin.zaa
            >;
            public static zaph: com.google.android.gms.common.api.Api.AbstractClientBuilder<
              com.google.android.gms.signin.internal.SignInClientImpl,
              com.google.android.gms.signin.SignInOptions
            >;
            public static API: com.google.android.gms.common.api.Api<
              com.google.android.gms.signin.SignInOptions
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export class zab extends com.google.android.gms.common.api.Api
            .AbstractClientBuilder<
            com.google.android.gms.signin.internal.SignInClientImpl,
            com.google.android.gms.signin.SignInOptions
          > {
            public static class: java.lang.Class<
              com.google.android.gms.signin.zab
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export class zac extends com.google.android.gms.common.api.Api
            .AbstractClientBuilder<
            com.google.android.gms.signin.internal.SignInClientImpl,
            any
          > {
            public static class: java.lang.Class<
              com.google.android.gms.signin.zac
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace signin {
          export class zad extends com.google.android.gms.common.api.Api
            .Client {
            public static class: java.lang.Class<
              com.google.android.gms.signin.zad
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.signin.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              zaa(param0: com.google.android.gms.signin.internal.zad): void;
              zaa(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: boolean
              ): void;
              zacw(): void;
              connect(): void;
              connect(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
              ): void;
              disconnect(): void;
              isConnected(): boolean;
              isConnecting(): boolean;
              getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>
              ): void;
              requiresSignIn(): boolean;
              onUserSignOut(
                param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
              ): void;
              requiresAccount(): boolean;
              requiresGooglePlayServices(): boolean;
              providesSignIn(): boolean;
              getSignInIntent(): globalAndroid.content.Intent;
              dump(
                param0: string,
                param1: java.io.FileDescriptor,
                param2: java.io.PrintWriter,
                param3: native.Array<string>
              ): void;
              getServiceBrokerBinder(): globalAndroid.os.IBinder;
              getRequiredFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
              getEndpointPackageName(): string;
              getMinApkVersion(): number;
              getAvailableFeatures(): native.Array<
                com.google.android.gms.common.Feature
              >;
            });
            public constructor();
            public requiresGooglePlayServices(): boolean;
            public requiresAccount(): boolean;
            public zaa(
              param0: com.google.android.gms.signin.internal.zad
            ): void;
            public getServiceBrokerBinder(): globalAndroid.os.IBinder;
            public providesSignIn(): boolean;
            public isConnected(): boolean;
            public getEndpointPackageName(): string;
            public zaa(
              param0: com.google.android.gms.common.internal.IAccountAccessor,
              param1: boolean
            ): void;
            public connect(
              param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks
            ): void;
            public connect(): void;
            public getMinApkVersion(): number;
            public isConnecting(): boolean;
            public getRemoteService(
              param0: com.google.android.gms.common.internal.IAccountAccessor,
              param1: java.util.Set<com.google.android.gms.common.api.Scope>
            ): void;
            public getRequiredFeatures(): native.Array<
              com.google.android.gms.common.Feature
            >;
            public disconnect(): void;
            public zacw(): void;
            public onUserSignOut(
              param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks
            ): void;
            public getSignInIntent(): globalAndroid.content.Intent;
            public getAvailableFeatures(): native.Array<
              com.google.android.gms.common.Feature
            >;
            public requiresSignIn(): boolean;
            public dump(
              param0: string,
              param1: java.io.FileDescriptor,
              param2: java.io.PrintWriter,
              param3: native.Array<string>
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export abstract class CancellationToken {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.CancellationToken
            >;
            public constructor();
            public isCancellationRequested(): boolean;
            public onCanceledRequested(
              param0: com.google.android.gms.tasks.OnTokenCanceledListener
            ): com.google.android.gms.tasks.CancellationToken;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class CancellationTokenSource {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.CancellationTokenSource
            >;
            public constructor();
            public cancel(): void;
            public getToken(): com.google.android.gms.tasks.CancellationToken;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class Continuation<TResult, TContinuationResult> extends java
            .lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.Continuation<any, any>
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              then(
                param0: com.google.android.gms.tasks.Task<TResult>
              ): TContinuationResult;
            });
            public constructor();
            public then(
              param0: com.google.android.gms.tasks.Task<TResult>
            ): TContinuationResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class OnCanceledListener {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.OnCanceledListener
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCanceled(): void });
            public constructor();
            public onCanceled(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class OnCompleteListener<TResult> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.OnCompleteListener<any>
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onComplete(
                param0: com.google.android.gms.tasks.Task<TResult>
              ): void;
            });
            public constructor();
            public onComplete(
              param0: com.google.android.gms.tasks.Task<TResult>
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class OnFailureListener {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.OnFailureListener
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onFailure(param0: java.lang.Exception): void;
            });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class OnSuccessListener<TResult> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.OnSuccessListener<any>
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSuccess(param0: TResult): void;
            });
            public constructor();
            public onSuccess(param0: TResult): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class OnTokenCanceledListener {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.OnTokenCanceledListener
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnTokenCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCanceled(): void });
            public constructor();
            public onCanceled(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class RuntimeExecutionException {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.RuntimeExecutionException
            >;
            public constructor(param0: java.lang.Throwable);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class SuccessContinuation<
            TResult,
            TContinuationResult
          > extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.SuccessContinuation<any, any>
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.SuccessContinuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              then(
                param0: TResult
              ): com.google.android.gms.tasks.Task<TContinuationResult>;
            });
            public constructor();
            public then(
              param0: TResult
            ): com.google.android.gms.tasks.Task<TContinuationResult>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export abstract class Task<TResult> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.Task<any>
            >;
            public addOnFailureListener(
              param0: com.google.android.gms.tasks.OnFailureListener
            ): com.google.android.gms.tasks.Task<TResult>;
            public continueWithTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnFailureListener
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnCompleteListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCompleteListener<TResult>
            ): com.google.android.gms.tasks.Task<TResult>;
            public continueWithTask(
              param0: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnFailureListener
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnCompleteListener(
              param0: com.google.android.gms.tasks.OnCompleteListener<TResult>
            ): com.google.android.gms.tasks.Task<TResult>;
            public continueWith(
              param0: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public continueWith(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCanceledListener
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnSuccessListener(
              param0: com.google.android.gms.tasks.OnSuccessListener<any>
            ): com.google.android.gms.tasks.Task<TResult>;
            public isSuccessful(): boolean;
            public addOnSuccessListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnSuccessListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnCanceledListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCanceledListener
            ): com.google.android.gms.tasks.Task<TResult>;
            public onSuccessTask(
              param0: com.google.android.gms.tasks.SuccessContinuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public constructor();
            public addOnCompleteListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCompleteListener<TResult>
            ): com.google.android.gms.tasks.Task<TResult>;
            public onSuccessTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.SuccessContinuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: com.google.android.gms.tasks.OnCanceledListener
            ): com.google.android.gms.tasks.Task<TResult>;
            public getResult(): TResult;
            public isComplete(): boolean;
            public isCanceled(): boolean;
            public getResult(param0: java.lang.Class): any;
            public getException(): java.lang.Exception;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class TaskCompletionSource<TResult> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.TaskCompletionSource<any>
            >;
            public trySetResult(param0: TResult): boolean;
            public getTask(): com.google.android.gms.tasks.Task<TResult>;
            public constructor();
            public constructor(
              param0: com.google.android.gms.tasks.CancellationToken
            );
            public trySetException(param0: java.lang.Exception): boolean;
            public setException(param0: java.lang.Exception): void;
            public setResult(param0: TResult): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class TaskExecutors {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.TaskExecutors
            >;
            public static MAIN_THREAD: java.util.concurrent.Executor;
          }
          export namespace TaskExecutors {
            export class zza {
              public static class: java.lang.Class<
                com.google.android.gms.tasks.TaskExecutors.zza
              >;
              public constructor();
              public execute(param0: java.lang.Runnable): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class Tasks {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.Tasks
            >;
            public static await(
              param0: com.google.android.gms.tasks.Task<any>,
              param1: number,
              param2: java.util.concurrent.TimeUnit
            ): any;
            public static forResult(
              param0: any
            ): com.google.android.gms.tasks.Task<any>;
            public static call(
              param0: java.util.concurrent.Executor,
              param1: java.util.concurrent.Callable
            ): com.google.android.gms.tasks.Task<any>;
            public static whenAllComplete(
              param0: native.Array<com.google.android.gms.tasks.Task<any>>
            ): com.google.android.gms.tasks.Task<
              java.util.List<com.google.android.gms.tasks.Task<any>>
            >;
            public static whenAllSuccess(
              param0: java.util.Collection
            ): com.google.android.gms.tasks.Task<any>;
            public static whenAll(
              param0: java.util.Collection<any>
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public static forException(
              param0: java.lang.Exception
            ): com.google.android.gms.tasks.Task<any>;
            public static await(
              param0: com.google.android.gms.tasks.Task<any>
            ): any;
            public static whenAllSuccess(
              param0: native.Array<com.google.android.gms.tasks.Task<any>>
            ): com.google.android.gms.tasks.Task<any>;
            public static whenAllComplete(
              param0: java.util.Collection<any>
            ): com.google.android.gms.tasks.Task<
              java.util.List<com.google.android.gms.tasks.Task<any>>
            >;
            public static forCanceled(): com.google.android.gms.tasks.Task<any>;
            public static call(
              param0: java.util.concurrent.Callable
            ): com.google.android.gms.tasks.Task<any>;
            public static whenAll(
              param0: native.Array<com.google.android.gms.tasks.Task<any>>
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
          }
          export namespace Tasks {
            export class zza extends com.google.android.gms.tasks.Tasks.zzb {
              public static class: java.lang.Class<
                com.google.android.gms.tasks.Tasks.zza
              >;
              public onSuccess(param0: any): void;
              public onFailure(param0: java.lang.Exception): void;
              public await(
                param0: number,
                param1: java.util.concurrent.TimeUnit
              ): boolean;
              public await(): void;
              public onCanceled(): void;
            }
            export class zzb extends java.lang.Object {
              public static class: java.lang.Class<
                com.google.android.gms.tasks.Tasks.zzb
              >;
              /**
               * Constructs a new instance of the com.google.android.gms.tasks.Tasks$zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onCanceled(): void;
                onFailure(param0: java.lang.Exception): void;
                onSuccess(param0: any): void;
              });
              public constructor();
              public onSuccess(param0: any): void;
              public onFailure(param0: java.lang.Exception): void;
              public onCanceled(): void;
            }
            export class zzc extends com.google.android.gms.tasks.Tasks.zzb {
              public static class: java.lang.Class<
                com.google.android.gms.tasks.Tasks.zzc
              >;
              public constructor(
                param0: number,
                param1: com.google.android.gms.tasks.zzu<java.lang.Void>
              );
              public onSuccess(param0: any): void;
              public onFailure(param0: java.lang.Exception): void;
              public onCanceled(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zza extends com.google.android.gms.tasks
            .CancellationToken {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zza
            >;
            public isCancellationRequested(): boolean;
            public cancel(): void;
            public onCanceledRequested(
              param0: com.google.android.gms.tasks.OnTokenCanceledListener
            ): com.google.android.gms.tasks.CancellationToken;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzb extends com.google.android.gms.tasks
            .OnSuccessListener<java.lang.Void> {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzb
            >;
            public onSuccess(param0: any): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzc<TResult, TContinuationResult> extends java.lang
            .Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzc<any, any>
            >;
            public cancel(): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<any>
            ): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>,
              param2: any /* com.google.android.gms.tasks.zzu<any>*/
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzd {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzd
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zze<TResult, TContinuationResult> extends java.lang
            .Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zze<any, any>
            >;
            public onFailure(param0: java.lang.Exception): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<TResult>
            ): void;
            public cancel(): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<
                TResult,
                com.google.android.gms.tasks.Task<TContinuationResult>
              >,
              param2: any /* com.google.android.gms.tasks.zzu<TContinuationResult>*/
            );
            public onSuccess(param0: TContinuationResult): void;
            public onCanceled(): void;
            public onSuccess(param0: TResult): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzf {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzf
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzg<TResult> extends java.lang
            .Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzg<any>
            >;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<any>
            ): void;
            public cancel(): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<any>
            ): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCanceledListener
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzh {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzh
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzi<TResult> extends java.lang
            .Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzi<any>
            >;
            public cancel(): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<any>
            ): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCompleteListener<any>
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzj {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzj
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzk<TResult> extends java.lang
            .Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzk<any>
            >;
            public cancel(): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<any>
            ): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnFailureListener
            );
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzl {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzl
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzm<TResult> extends java.lang
            .Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzm<any>
            >;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>
            );
            public cancel(): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<any>
            ): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzn {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzn
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzo<TResult, TContinuationResult> extends java.lang
            .Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzo<any, any>
            >;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.SuccessContinuation<
                TResult,
                TContinuationResult
              >,
              param2: any /* com.google.android.gms.tasks.zzu<TContinuationResult>*/
            );
            public onFailure(param0: java.lang.Exception): void;
            public onComplete(
              param0: com.google.android.gms.tasks.Task<TResult>
            ): void;
            public cancel(): void;
            public onSuccess(param0: TContinuationResult): void;
            public onCanceled(): void;
            public onSuccess(param0: TResult): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzp {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzp
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzq<TResult> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzq<any>
            >;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.zzq<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onComplete(
                param0: com.google.android.gms.tasks.Task<TResult>
              ): void;
              cancel(): void;
            });
            public constructor();
            public onComplete(
              param0: com.google.android.gms.tasks.Task<TResult>
            ): void;
            public cancel(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzr<TResult> extends java.lang.Object {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzr<any>
            >;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzs extends com.google.android.gms.tasks
            .OnTokenCanceledListener {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzs
            >;
            public onCanceled(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzt {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzt
            >;
            public execute(param0: java.lang.Runnable): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzu<TResult> extends com.google.android.gms.tasks.Task<
            any
          > {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzu<any>
            >;
            public setResult(param0: any): void;
            public addOnCompleteListener(
              param0: com.google.android.gms.tasks.OnCompleteListener<any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCanceledListener
            ): com.google.android.gms.tasks.Task<any>;
            public addOnSuccessListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>
            ): com.google.android.gms.tasks.Task<any>;
            public continueWithTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public continueWithTask(
              param0: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public continueWith(
              param0: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public continueWith(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public isSuccessful(): boolean;
            public trySetResult(param0: any): boolean;
            public setException(param0: java.lang.Exception): void;
            public addOnSuccessListener(
              param0: com.google.android.gms.tasks.OnSuccessListener<any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnFailureListener
            ): com.google.android.gms.tasks.Task<any>;
            public onSuccessTask(
              param0: com.google.android.gms.tasks.SuccessContinuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public trySetException(param0: java.lang.Exception): boolean;
            public getResult(): any;
            public onSuccessTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.SuccessContinuation<any, any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCanceledListener
            ): com.google.android.gms.tasks.Task<any>;
            public isComplete(): boolean;
            public isCanceled(): boolean;
            public getResult(param0: java.lang.Class): any;
            public addOnCompleteListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCompleteListener<any>
            ): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnFailureListener
            ): com.google.android.gms.tasks.Task<any>;
            public addOnSuccessListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>
            ): com.google.android.gms.tasks.Task<any>;
            public getException(): java.lang.Exception;
            public addOnFailureListener(
              param0: com.google.android.gms.tasks.OnFailureListener
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: com.google.android.gms.tasks.OnCanceledListener
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCompleteListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCompleteListener<any>
            ): com.google.android.gms.tasks.Task<any>;
          }
          export namespace zzu {
            export class zza {
              public static class: java.lang.Class<
                com.google.android.gms.tasks.zzu.zza
              >;
              public onStop(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzv {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzv
            >;
            public run(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzw extends com.google.android.gms.tasks.Continuation<
            java.lang.Void,
            java.util.List<any>
          > {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzw
            >;
            public then(param0: com.google.android.gms.tasks.Task<any>): any;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace android {
      export namespace gms {
        export namespace tasks {
          export class zzx extends com.google.android.gms.tasks.Continuation<
            java.lang.Void,
            com.google.android.gms.tasks.Task<
              java.util.List<com.google.android.gms.tasks.Task<any>>
            >
          > {
            public static class: java.lang.Class<
              com.google.android.gms.tasks.zzx
            >;
            public then(param0: com.google.android.gms.tasks.Task<any>): any;
          }
        }
      }
    }
  }
}

// Generics information:
// com.google.android.gms.common.api.Api:1
// com.google.android.gms.common.api.Api.AbstractClientBuilder:2
// com.google.android.gms.common.api.Api.AnyClientKey:1
// com.google.android.gms.common.api.Api.BaseClientBuilder:2
// com.google.android.gms.common.api.Api.ClientKey:1
// com.google.android.gms.common.api.Api.SimpleClient:1
// com.google.android.gms.common.api.Api.zaa:2
// com.google.android.gms.common.api.Api.zab:1
// com.google.android.gms.common.api.BatchResultToken:1
// com.google.android.gms.common.api.DataBufferResponse:2
// com.google.android.gms.common.api.GoogleApi:1
// com.google.android.gms.common.api.OptionalPendingResult:1
// com.google.android.gms.common.api.PendingResult:1
// com.google.android.gms.common.api.PendingResults.zaa:1
// com.google.android.gms.common.api.PendingResults.zab:1
// com.google.android.gms.common.api.PendingResults.zac:1
// com.google.android.gms.common.api.ResultTransform:2
// com.google.android.gms.common.api.TransformedResult:1
// com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
// com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
// com.google.android.gms.common.api.internal.BasePendingResult:1
// com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
// com.google.android.gms.common.api.internal.DataHolderNotifier:1
// com.google.android.gms.common.api.internal.GoogleApiManager.zaa:1
// com.google.android.gms.common.api.internal.ListenerHolder:1
// com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey:1
// com.google.android.gms.common.api.internal.ListenerHolder.Notifier:1
// com.google.android.gms.common.api.internal.OptionalPendingResultImpl:1
// com.google.android.gms.common.api.internal.PendingResultFacade:2
// com.google.android.gms.common.api.internal.RegisterListenerMethod:2
// com.google.android.gms.common.api.internal.RegistrationMethods:2
// com.google.android.gms.common.api.internal.RegistrationMethods.Builder:2
// com.google.android.gms.common.api.internal.RemoteCall:2
// com.google.android.gms.common.api.internal.TaskApiCall:2
// com.google.android.gms.common.api.internal.TaskApiCall.Builder:2
// com.google.android.gms.common.api.internal.UnregisterListenerMethod:2
// com.google.android.gms.common.api.internal.zabp:1
// com.google.android.gms.common.api.internal.zacd:1
// com.google.android.gms.common.api.internal.zacm:1
// com.google.android.gms.common.api.internal.zad:1
// com.google.android.gms.common.api.internal.zae:1
// com.google.android.gms.common.api.internal.zag:1
// com.google.android.gms.common.api.internal.zai:1
// com.google.android.gms.common.api.internal.zaw:1
// com.google.android.gms.common.data.AbstractDataBuffer:1
// com.google.android.gms.common.data.DataBuffer:1
// com.google.android.gms.common.data.DataBufferIterator:1
// com.google.android.gms.common.data.DataBufferSafeParcelable:1
// com.google.android.gms.common.data.EntityBuffer:1
// com.google.android.gms.common.data.Freezable:1
// com.google.android.gms.common.data.SingleRefDataBufferIterator:1
// com.google.android.gms.common.internal.GmsClient:1
// com.google.android.gms.common.internal.LegacyInternalGmsClient:1
// com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
// com.google.android.gms.common.internal.SimpleClientAdapter:1
// com.google.android.gms.common.internal.service.zag:1
// com.google.android.gms.common.server.response.FastJsonResponse.Field:2
// com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
// com.google.android.gms.common.server.response.FastParser:1
// com.google.android.gms.common.server.response.FastParser.zaa:1
// com.google.android.gms.dynamic.DeferredLifecycleHelper:1
// com.google.android.gms.internal.location.zzbj:1
// com.google.android.gms.location.ActivityRecognition.zza:1
// com.google.android.gms.location.LocationServices.zza:1
// com.google.android.gms.tasks.Continuation:2
// com.google.android.gms.tasks.OnCompleteListener:1
// com.google.android.gms.tasks.OnSuccessListener:1
// com.google.android.gms.tasks.SuccessContinuation:2
// com.google.android.gms.tasks.Task:1
// com.google.android.gms.tasks.TaskCompletionSource:1
// com.google.android.gms.tasks.zzc:2
// com.google.android.gms.tasks.zze:2
// com.google.android.gms.tasks.zzg:1
// com.google.android.gms.tasks.zzi:1
// com.google.android.gms.tasks.zzk:1
// com.google.android.gms.tasks.zzm:1
// com.google.android.gms.tasks.zzo:2
// com.google.android.gms.tasks.zzq:1
// com.google.android.gms.tasks.zzr:1
// com.google.android.gms.tasks.zzu:1
