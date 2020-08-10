/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module tensorflow {
		export module lite {
			export class DataType {
				public static class: java.lang.Class<org.tensorflow.lite.DataType>;
				public static FLOAT32: org.tensorflow.lite.DataType;
				public static INT32: org.tensorflow.lite.DataType;
				public static UINT8: org.tensorflow.lite.DataType;
				public static INT64: org.tensorflow.lite.DataType;
				public static STRING: org.tensorflow.lite.DataType;
				public byteSize(): number;
				public static values(): native.Array<org.tensorflow.lite.DataType>;
				public static valueOf(param0: string): org.tensorflow.lite.DataType;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class Delegate {
				public static class: java.lang.Class<org.tensorflow.lite.Delegate>;
				/**
				 * Constructs a new instance of the org.tensorflow.lite.Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNativeHandle(): number;
				});
				public constructor();
				public getNativeHandle(): number;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class Interpreter {
				public static class: java.lang.Class<org.tensorflow.lite.Interpreter>;
				public constructor(param0: java.nio.ByteBuffer);
				public close(): void;
				/** @deprecated */
				public constructor(param0: java.nio.MappedByteBuffer);
				public getLastNativeInferenceDurationNanoseconds(): java.lang.Long;
				/** @deprecated */
				public setNumThreads(param0: number): void;
				public constructor(param0: java.io.File);
				/** @deprecated */
				public constructor(param0: java.nio.ByteBuffer, param1: number);
				public resizeInput(param0: number, param1: native.Array<number>): void;
				public finalize(): void;
				public constructor(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.Interpreter.Options);
				public getInputTensorCount(): number;
				public getOutputTensor(param0: number): org.tensorflow.lite.Tensor;
				public run(param0: any, param1: any): void;
				public getInputTensor(param0: number): org.tensorflow.lite.Tensor;
				public runForMultipleInputsOutputs(param0: native.Array<any>, param1: java.util.Map<java.lang.Integer,any>): void;
				public modifyGraphWithDelegate(param0: org.tensorflow.lite.Delegate): void;
				/** @deprecated */
				public setUseNNAPI(param0: boolean): void;
				/** @deprecated */
				public constructor(param0: java.io.File, param1: number);
				public getInputIndex(param0: string): number;
				public constructor(param0: java.io.File, param1: org.tensorflow.lite.Interpreter.Options);
				public getOutputIndex(param0: string): number;
				public resetVariableTensors(): void;
				public getOutputTensorCount(): number;
			}
			export module Interpreter {
				export class Options {
					public static class: java.lang.Class<org.tensorflow.lite.Interpreter.Options>;
					public setUseNNAPI(param0: boolean): org.tensorflow.lite.Interpreter.Options;
					public setAllowFp16PrecisionForFp32(param0: boolean): org.tensorflow.lite.Interpreter.Options;
					public constructor();
					public addDelegate(param0: org.tensorflow.lite.Delegate): org.tensorflow.lite.Interpreter.Options;
					public setNumThreads(param0: number): org.tensorflow.lite.Interpreter.Options;
					public setAllowBufferHandleOutput(param0: boolean): org.tensorflow.lite.Interpreter.Options;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class NativeInterpreterWrapper {
				public static class: java.lang.Class<org.tensorflow.lite.NativeInterpreterWrapper>;
				public close(): void;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class Tensor {
				public static class: java.lang.Class<org.tensorflow.lite.Tensor>;
				public name(): string;
				public numBytes(): number;
				public dataType(): org.tensorflow.lite.DataType;
				public shape(): native.Array<number>;
				public index(): number;
				public numDimensions(): number;
				public numElements(): number;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class TensorFlowLite {
				public static class: java.lang.Class<org.tensorflow.lite.TensorFlowLite>;
				/** @deprecated */
				public static version(): string;
				public static schemaVersion(): string;
				public static init(): boolean;
				public static runtimeVersion(): string;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module annotations {
				export class UsedByReflection {
					public static class: java.lang.Class<org.tensorflow.lite.annotations.UsedByReflection>;
					/**
					 * Constructs a new instance of the org.tensorflow.lite.annotations.UsedByReflection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module nnapi {
				export class NnApiDelegate extends org.tensorflow.lite.Delegate {
					public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegate>;
					public constructor();
					public getNativeHandle(): number;
					public close(): void;
				}
			}
		}
	}
}

//Generics information:

