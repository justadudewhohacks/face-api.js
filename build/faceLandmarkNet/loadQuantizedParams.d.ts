import { ParamMapping } from '../commons/types';
import { NetParams } from './types';
export declare function loadQuantizedParams(uri: string | undefined): Promise<{
    params: NetParams;
    paramMappings: ParamMapping[];
}>;
