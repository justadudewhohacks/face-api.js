import { ParamMapping } from 'tfjs-image-recognition-base';
import { TinyNetParams } from './types';
export declare function extractParamsTiny(weights: Float32Array): {
    params: TinyNetParams;
    paramMappings: ParamMapping[];
};
