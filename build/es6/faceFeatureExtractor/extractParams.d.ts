import { ParamMapping } from 'tfjs-image-recognition-base';
import { FaceFeatureExtractorParams } from './types';
export declare function extractParams(weights: Float32Array): {
    params: FaceFeatureExtractorParams;
    paramMappings: ParamMapping[];
};
