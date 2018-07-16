import { FaceLandmarks } from '../FaceLandmarks';
import { Point } from '../Point';
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
