import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from 'tfjs-image-recognition-base';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { TinyNetParams } from './types';
export declare class FaceLandmark68TinyNet extends FaceLandmark68NetBase<TinyNetParams> {
    constructor();
    runNet(input: NetInput): tf.Tensor2D;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: TinyNetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
    protected extractParams(weights: Float32Array): {
        params: TinyNetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
}
