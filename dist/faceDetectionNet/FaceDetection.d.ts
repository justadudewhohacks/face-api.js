import { Rect } from '../Rect';
import { Dimensions } from '../types';
export declare class FaceDetection {
    private _score;
    private _box;
    private _imageWidth;
    private _imageHeight;
    constructor(score: number, relativeBox: Rect, imageDims: Dimensions);
    getScore(): number;
    getBox(): Rect;
    getImageWidth(): number;
    getImageHeight(): number;
    getRelativeBox(): Rect;
    forSize(width: number, height: number): FaceDetection;
}
