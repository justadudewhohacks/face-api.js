import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from 'tfjs-image-recognition-base';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { NetParams } from './types';
export declare class FaceLandmark68Net extends FaceLandmark68NetBase<NetParams> {
    constructor();
    runNet(input: NetInput): tf.Tensor2D;
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
