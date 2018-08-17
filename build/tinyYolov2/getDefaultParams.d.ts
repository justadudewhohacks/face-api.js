import { SizeType, TinyYolov2ForwardParams } from './types';
export declare function getDefaultParams(params: TinyYolov2ForwardParams): {
    inputSize: SizeType;
    scoreThreshold: number;
} & TinyYolov2ForwardParams;
