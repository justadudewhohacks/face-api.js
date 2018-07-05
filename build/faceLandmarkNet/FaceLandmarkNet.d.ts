import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { FaceLandmarks } from './FaceLandmarks';
import { NetParams } from './types';
export declare class FaceLandmarkNet extends NeuralNetwork<NetParams> {
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    forwardInput(input: NetInput): tf.Tensor2D;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    detectLandmarks(input: TNetInput): Promise<FaceLandmarks | FaceLandmarks[]>;
}
