import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork } from 'tfjs-image-recognition-base';
import { FaceFeatureExtractorParams, IFaceFeatureExtractor, TinyFaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { NetParams } from './types';
export declare abstract class FaceProcessor<TExtractorParams extends FaceFeatureExtractorParams | TinyFaceFeatureExtractorParams> extends NeuralNetwork<NetParams> {
    protected _faceFeatureExtractor: IFaceFeatureExtractor<TExtractorParams>;
    constructor(_name: string, faceFeatureExtractor: IFaceFeatureExtractor<TExtractorParams>);
    readonly faceFeatureExtractor: IFaceFeatureExtractor<TExtractorParams>;
    protected abstract getDefaultModelName(): string;
    protected abstract getClassifierChannelsIn(): number;
    protected abstract getClassifierChannelsOut(): number;
    runNet(input: NetInput | tf.Tensor4D): tf.Tensor2D;
    dispose(throwOnRedispose?: boolean): void;
    loadClassifierParams(weights: Float32Array): void;
    extractClassifierParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
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
