import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
import { NetParams } from './types';
export declare class FaceLandmarkNet extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput): tf.Tensor2D;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    detectLandmarks(input: TNetInput): Promise<FaceLandmarks68 | FaceLandmarks68[]>;
    protected loadQuantizedParams(uri: string | undefined): Promise<{
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    }>;
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
}
