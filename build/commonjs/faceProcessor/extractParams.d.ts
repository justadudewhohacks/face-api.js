import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { NetParams } from './types';
export declare function extractParams(weights: Float32Array, channelsIn: number, channelsOut: number): {
    params: NetParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
