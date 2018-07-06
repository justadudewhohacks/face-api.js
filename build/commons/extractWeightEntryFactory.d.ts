import { ParamMapping } from './types';
export declare function extractWeightEntryFactory(weightMap: any, paramMappings: ParamMapping[]): <T>(originalPath: string, paramRank: number, mappedPath?: string | undefined) => T;
