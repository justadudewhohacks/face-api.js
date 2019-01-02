import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceFeatureExtractorParams } from '../faceFeatureExtractor/types';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
export declare class FaceLandmark68Net extends FaceLandmark68NetBase<FaceFeatureExtractorParams> {
    constructor(faceFeatureExtractor?: FaceFeatureExtractor);
    protected getDefaultModelName(): string;
    protected getClassifierChannelsIn(): number;
}
