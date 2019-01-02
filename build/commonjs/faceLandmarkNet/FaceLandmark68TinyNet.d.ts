import { TinyFaceFeatureExtractorParams } from 'src/faceFeatureExtractor/types';
import { TinyFaceFeatureExtractor } from '../faceFeatureExtractor/TinyFaceFeatureExtractor';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
export declare class FaceLandmark68TinyNet extends FaceLandmark68NetBase<TinyFaceFeatureExtractorParams> {
    constructor(faceFeatureExtractor?: TinyFaceFeatureExtractor);
    protected getDefaultModelName(): string;
    protected getClassifierChannelsIn(): number;
}
