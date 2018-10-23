import { FaceDetection } from './FaceDetection';
import { FaceLandmarks } from './FaceLandmarks';
import { FaceLandmarks68 } from './FaceLandmarks68';
export interface IFaceDetectionWithLandmarks<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> {
    detection: FaceDetection;
    landmarks: TFaceLandmarks;
}
export declare class FaceDetectionWithLandmarks<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> implements IFaceDetectionWithLandmarks<TFaceLandmarks> {
    private _detection;
    private _unshiftedLandmarks;
    constructor(detection: FaceDetection, unshiftedLandmarks: TFaceLandmarks);
    readonly detection: FaceDetection;
    readonly unshiftedLandmarks: TFaceLandmarks;
    readonly alignedRect: FaceDetection;
    readonly landmarks: TFaceLandmarks;
    readonly faceDetection: FaceDetection;
    readonly faceLandmarks: TFaceLandmarks;
    forSize(width: number, height: number): FaceDetectionWithLandmarks<TFaceLandmarks>;
}
