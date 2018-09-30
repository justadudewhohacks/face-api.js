import { ExtractWeightsFunction, ParamMapping } from 'tfjs-image-recognition-base';
import { FCParams } from 'tfjs-tiny-yolov2';
import { DenseBlock3Params, DenseBlock4Params } from './types';
export declare function extractorsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]): {
    extractDenseBlock3Params: (channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer?: boolean) => DenseBlock3Params;
    extractDenseBlock4Params: (channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer?: boolean) => DenseBlock4Params;
    extractFCParams: (channelsIn: number, channelsOut: number, mappedPrefix: string) => FCParams;
};
