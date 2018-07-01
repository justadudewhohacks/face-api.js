import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { FaceLandmarks } from './FaceLandmarks';
export declare class FaceLandmarkNet {
    private _params;
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    forwardTensor(imgTensor: tf.Tensor4D): tf.Tensor2D;
    forward(input: tf.Tensor | NetInput | TNetInput): Promise<tf.Tensor2D>;
    detectLandmarks(input: tf.Tensor | NetInput | TNetInput): Promise<FaceLandmarks>;
}
