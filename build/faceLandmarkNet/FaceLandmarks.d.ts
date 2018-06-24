import { Point } from '../Point';
import { Rect } from '../Rect';
import { Dimensions } from '../types';
export declare class FaceLandmarks {
    private _imageWidth;
    private _imageHeight;
    private _shift;
    private _faceLandmarks;
    constructor(relativeFaceLandmarkPositions: Point[], imageDims: Dimensions, shift?: Point);
    getShift(): Point;
    getImageWidth(): number;
    getImageHeight(): number;
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
    /**
     * Aligns the face landmarks after face detection from the relative positions of the faces
     * bounding box, or it's current shift. This function should be used to align the face images
     * after face detection has been performed, before they are passed to the face recognition net.
     * This will make the computed face descriptor more accurate.
     *
     * @param detection (optional) The bounding box of the face or the face detection result. If
     * no argument was passed the position of the face landmarks are assumed to be relative to
     * it's current shift.
     * @returns The bounding box of the aligned face.
     */
    align(detection?: Rect): Rect;
}
