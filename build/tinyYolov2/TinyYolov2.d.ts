import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox } from '../BoundingBox';
import { NeuralNetwork } from '../commons/NeuralNetwork';
import { FaceDetection } from '../FaceDetection';
import { NetInput } from '../NetInput';
import { Point } from '../Point';
import { TNetInput } from '../types';
import { NetParams, PostProcessingParams, TinyYolov2ForwardParams } from './types';
export declare class TinyYolov2 extends NeuralNetwork<NetParams> {
    private _withSeparableConvs;
    private _anchors;
    constructor(withSeparableConvs?: boolean);
    readonly withSeparableConvs: boolean;
    readonly anchors: Point[];
    forwardInput(input: NetInput, inputSize: number): tf.Tensor4D;
    forward(input: TNetInput, inputSize: number): Promise<tf.Tensor4D>;
    locateFaces(input: TNetInput, forwardParams?: TinyYolov2ForwardParams): Promise<FaceDetection[]>;
    postProcess(outputTensor: tf.Tensor4D, {scoreThreshold, paddings}: PostProcessingParams): {
        box: BoundingBox;
        score: number;
        row: number;
        col: number;
        anchor: number;
    }[];
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
