import { Point } from './Point';
import { Dimensions } from './types';
export declare class FaceLandmarks {
    protected _imageWidth: number;
    protected _imageHeight: number;
    protected _shift: Point;
    protected _faceLandmarks: Point[];
    constructor(relativeFaceLandmarkPositions: Point[], imageDims: Dimensions, shift?: Point);
    getShift(): Point;
    getImageWidth(): number;
    getImageHeight(): number;
    getPositions(): Point[];
    getRelativePositions(): Point[];
}
