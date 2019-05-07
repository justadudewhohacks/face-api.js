import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { TinyXception } from '../xception/TinyXception';
import { AgeAndGenderPrediction, NetOutput, NetParams } from './types';
export declare class AgeGenderNet extends NeuralNetwork<NetParams> {
    private _faceFeatureExtractor;
    constructor(faceFeatureExtractor?: TinyXception);
    readonly faceFeatureExtractor: TinyXception;
    runNet(input: NetInput | tf.Tensor4D): NetOutput;
    forwardInput(input: NetInput | tf.Tensor4D): NetOutput;
    forward(input: TNetInput): Promise<NetOutput>;
    predictAgeAndGender(input: TNetInput): Promise<AgeAndGenderPrediction | AgeAndGenderPrediction[]>;
    protected getDefaultModelName(): string;
    dispose(throwOnRedispose?: boolean): void;
    loadClassifierParams(weights: Float32Array): void;
    extractClassifierParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: NetParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
}
