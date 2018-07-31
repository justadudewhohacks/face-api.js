import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { FaceDetection } from '../FaceDetection';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { NetParams, TinyYolov2ForwardParams } from './types';
export declare class TinyYolov2 extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput, inputSize: number): tf.Tensor4D;
    forward(input: TNetInput, inputSize: number): Promise<tf.Tensor4D>;
    locateFaces(input: TNetInput, forwardParams?: TinyYolov2ForwardParams): Promise<FaceDetection[]>;
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
