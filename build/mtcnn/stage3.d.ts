import { Point } from '../Point';
import { BoundingBox } from './BoundingBox';
import { ONetParams } from './types';
export declare function stage3(img: HTMLCanvasElement, inputBoxes: BoundingBox[], scoreThreshold: number, params: ONetParams, stats: any): Promise<{
    boxes: BoundingBox[];
    scores: number[];
    points: Point[][];
}>;
