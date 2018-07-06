import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { FaceDetection } from './FaceDetection';
import { NetParams } from './types';
export declare class FaceDetectionNet extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput): {
        boxes: tf.Tensor<tf.Rank.R2>[];
        scores: tf.Tensor<tf.Rank.R1>[];
    };
    forward(input: TNetInput): Promise<{
        boxes: tf.Tensor<tf.Rank.R2>[];
        scores: tf.Tensor<tf.Rank.R1>[];
    }>;
    locateFaces(input: TNetInput, minConfidence?: number, maxResults?: number): Promise<FaceDetection[]>;
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
