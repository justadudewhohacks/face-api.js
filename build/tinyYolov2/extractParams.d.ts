import { ParamMapping } from '../commons/types';
import { NetParams } from './types';
export declare function extractParams(weights: Float32Array, withSeparableConvs: boolean): {
    params: NetParams;
    paramMappings: ParamMapping[];
};
