import { ExtractWeightsFunction, FCParams, ParamMapping } from './types';
export declare function extractFCParamsFactory(extractWeights: ExtractWeightsFunction, paramMappings: ParamMapping[]): (channelsIn: number, channelsOut: number, mappedPrefix: string) => FCParams;
