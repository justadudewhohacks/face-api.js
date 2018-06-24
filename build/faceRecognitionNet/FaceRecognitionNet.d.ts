import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
export declare class FaceRecognitionNet {
    private _params;
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    forward(input: tf.Tensor | NetInput | TNetInput): tf.Tensor<tf.Rank.R2>;
    computeFaceDescriptor(input: tf.Tensor | NetInput | TNetInput): Promise<Int32Array | Uint8Array | Float32Array>;
    computeFaceDescriptorSync(input: tf.Tensor | NetInput | TNetInput): Promise<Int32Array | Uint8Array | Float32Array>;
}
