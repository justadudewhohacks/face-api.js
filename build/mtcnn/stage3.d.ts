import { BoundingBox, Box, Point } from 'tfjs-image-recognition-base';
import { ONetParams } from './types';
export declare function stage3(img: HTMLCanvasElement, inputBoxes: BoundingBox[], scoreThreshold: number, params: ONetParams, stats: any): Promise<{
    boxes: Box<any>[];
    scores: number[];
    points: Point[][];
}>;
