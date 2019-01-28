import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { DenseBlock3Params, DenseBlock4Params } from './types';
export declare function loadParamsFactory(weightMap: any, paramMappings: TfjsImageRecognitionBase.ParamMapping[]): {
    extractDenseBlock3Params: (prefix: string, isFirstLayer?: boolean) => DenseBlock3Params;
    extractDenseBlock4Params: (prefix: string, isFirstLayer?: boolean) => DenseBlock4Params;
};
