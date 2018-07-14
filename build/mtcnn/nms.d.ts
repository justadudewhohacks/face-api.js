import { BoundingBox } from './BoundingBox';
export declare function nms(boxes: BoundingBox[], scores: number[], iouThreshold: number, isIOU?: boolean): number[];
