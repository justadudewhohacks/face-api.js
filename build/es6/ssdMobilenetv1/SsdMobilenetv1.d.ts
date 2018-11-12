import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { ISsdMobilenetv1Options } from './SsdMobilenetv1Options';
import { NetParams } from './types';
export declare class SsdMobilenetv1 extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput): {
        boxes: tf.Tensor<tf.Rank.R2>[];
        scores: tf.Tensor<tf.Rank.R1>[];
    };
    forward(input: TNetInput): Promise<{
        boxes: tf.Tensor<tf.Rank.R2>[];
        scores: tf.Tensor<tf.Rank.R1>[];
    }>;
    locateFaces(input: TNetInput, options?: ISsdMobilenetv1Options): Promise<FaceDetection[]>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
}
