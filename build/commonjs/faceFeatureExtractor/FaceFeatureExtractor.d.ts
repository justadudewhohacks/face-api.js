import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { FaceFeatureExtractorParams, IFaceFeatureExtractor } from './types';
export declare class FaceFeatureExtractor extends NeuralNetwork<FaceFeatureExtractorParams> implements IFaceFeatureExtractor<FaceFeatureExtractorParams> {
    constructor();
    forwardInput(input: NetInput): tf.Tensor4D;
    forward(input: TNetInput): Promise<tf.Tensor4D>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: FaceFeatureExtractorParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
    protected extractParams(weights: Float32Array): {
        params: FaceFeatureExtractorParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
}
