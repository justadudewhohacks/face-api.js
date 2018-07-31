import { BoundingBox } from '../BoundingBox';
export declare function nonMaxSuppression(boxes: BoundingBox[], scores: number[], iouThreshold: number, isIOU?: boolean): number[];
