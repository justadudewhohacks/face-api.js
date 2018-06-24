import { ConvParams, ExtractWeightsFunction } from './types';
export declare function extractConvParamsFactory(extractWeights: ExtractWeightsFunction): (channelsIn: number, channelsOut: number, filterSize: number) => ConvParams;
