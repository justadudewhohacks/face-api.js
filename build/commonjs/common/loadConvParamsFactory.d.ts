import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export declare function loadConvParamsFactory(extractWeightEntry: <T>(originalPath: string, paramRank: number) => T): (prefix: string) => TfjsImageRecognitionBase.ConvParams;
