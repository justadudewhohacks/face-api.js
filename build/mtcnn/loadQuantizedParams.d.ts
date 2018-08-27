import { ParamMapping } from 'tfjs-image-recognition-base';
import { NetParams } from './types';
export declare function loadQuantizedParams(uri: string | undefined): Promise<{
    params: NetParams;
    paramMappings: ParamMapping[];
}>;
