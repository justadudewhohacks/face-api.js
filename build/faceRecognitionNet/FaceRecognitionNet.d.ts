import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
export declare class FaceRecognitionNet {
    private _params;
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    forwardInput(input: NetInput): Promise<tf.Tensor2D>;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    computeFaceDescriptor(input: TNetInput): Promise<Float32Array>;
}
