import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { NetParams } from './types';
export declare class FaceRecognitionNet extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput): tf.Tensor2D;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    computeFaceDescriptor(input: TNetInput): Promise<Float32Array | Float32Array[]>;
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
