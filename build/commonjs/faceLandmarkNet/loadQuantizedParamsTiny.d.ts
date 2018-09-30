import { ParamMapping } from 'tfjs-image-recognition-base';
import { TinyNetParams } from './types';
export declare function loadQuantizedParamsTiny(uri: string | undefined): Promise<{
    params: TinyNetParams;
    paramMappings: ParamMapping[];
}>;
