import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { NetParams } from './types';
export declare function extractParams(weights: Float32Array): {
    params: NetParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
