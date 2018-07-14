import { FaceLandmarks } from '../FaceLandmarks';
import { IPoint } from '../Point';
export declare class FaceLandmarks5 extends FaceLandmarks {
    forSize(width: number, height: number): FaceLandmarks5;
    shift(x: number, y: number): FaceLandmarks5;
    shiftByPoint(pt: IPoint): FaceLandmarks5;
}
