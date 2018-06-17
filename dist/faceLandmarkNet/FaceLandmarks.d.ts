import { Point } from '../Point';
import { Dimensions } from '../types';
export declare class FaceLandmarks {
    private _faceLandmarks;
    private _imageWidth;
    private _imageHeight;
    private _shift;
    constructor(relativeFaceLandmarkPositions: Point[], imageDims: Dimensions, shift?: Point);
    getPositions(): Point[];
    getRelativePositions(): Point[];
    getJawOutline(): Point[];
    getLeftEyeBrow(): Point[];
    getRightEyeBrow(): Point[];
    getNose(): Point[];
    getLeftEye(): Point[];
    getRightEye(): Point[];
    getMouth(): Point[];
    forSize(width: number, height: number): FaceLandmarks;
    shift(x: number, y: number): FaceLandmarks;
}
