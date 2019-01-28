import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { TinyFaceFeatureExtractorParams } from './types';
export declare function extractParamsTiny(weights: Float32Array): {
    params: TinyFaceFeatureExtractorParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
