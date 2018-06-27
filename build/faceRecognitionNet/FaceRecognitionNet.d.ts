import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
export declare class FaceRecognitionNet {
    private _params;
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    forward(input: tf.Tensor | NetInput | TNetInput): Promise<tf.Tensor2D>;
    computeFaceDescriptor(input: tf.Tensor | NetInput | TNetInput): Promise<Float32Array>;
}
