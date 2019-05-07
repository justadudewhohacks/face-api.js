import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { TinyXceptionParams } from './types';
export declare function extractParams(weights: Float32Array, numMainBlocks: number): {
    params: TinyXceptionParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
