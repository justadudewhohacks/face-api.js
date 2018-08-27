import { Point } from 'tfjs-image-recognition-base';
import { FaceLandmarks } from '../classes/FaceLandmarks';
export declare class FaceLandmarks68 extends FaceLandmarks {
    getJawOutline(): Point[];
    getLeftEyeBrow(): Point[];
    getRightEyeBrow(): Point[];
    getNose(): Point[];
    getLeftEye(): Point[];
    getRightEye(): Point[];
    getMouth(): Point[];
    protected getRefPointsForAlignment(): Point[];
}
