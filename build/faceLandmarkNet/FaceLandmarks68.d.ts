import { FaceDetection } from '../FaceDetection';
import { FaceLandmarks } from '../FaceLandmarks';
import { IPoint, Point } from '../Point';
import { Rect } from '../Rect';
export declare class FaceLandmarks68 extends FaceLandmarks {
    getJawOutline(): Point[];
    getLeftEyeBrow(): Point[];
    getRightEyeBrow(): Point[];
    getNose(): Point[];
    getLeftEye(): Point[];
    getRightEye(): Point[];
    getMouth(): Point[];
    forSize(width: number, height: number): FaceLandmarks68;
    shift(x: number, y: number): FaceLandmarks68;
    shiftByPoint(pt: IPoint): FaceLandmarks68;
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
    align(detection?: FaceDetection | Rect): Rect;
}
