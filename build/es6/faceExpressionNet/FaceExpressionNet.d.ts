import * as tf from '@tensorflow/tfjs-core';
import { NetInput, TNetInput } from 'tfjs-image-recognition-base';
import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { FaceProcessor } from '../faceProcessor/FaceProcessor';
import { FaceExpressions } from './FaceExpressions';
export declare class FaceExpressionNet extends FaceProcessor<FaceFeatureExtractorParams> {
    constructor(faceFeatureExtractor?: FaceFeatureExtractor);
    forwardInput(input: NetInput | tf.Tensor4D): tf.Tensor2D;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    predictExpressions(input: TNetInput): Promise<FaceExpressions | FaceExpressions[]>;
    protected getDefaultModelName(): string;
    protected getClassifierChannelsIn(): number;
    protected getClassifierChannelsOut(): number;
}
