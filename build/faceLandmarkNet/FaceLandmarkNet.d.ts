import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { FaceLandmarks } from './FaceLandmarks';
export declare class FaceLandmarkNet {
    private _params;
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    detectLandmarks(input: tf.Tensor | NetInput | TNetInput): Promise<FaceLandmarks>;
}
