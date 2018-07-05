import { ConvParams, ExtractWeightsFunction, ParamMapping } from './types';
export declare function extractConvParamsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]): (channelsIn: number, channelsOut: number, filterSize: number, mappedPrefix: string) => ConvParams;
