import { FaceFeatureExtractorParams } from './types';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export declare function extractParams(weights: Float32Array): {
    params: FaceFeatureExtractorParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
