import { FaceDetection } from './FaceDetection';
import { FaceDetectionWithLandmarks, IFaceDetectionWithLandmarks } from './FaceDetectionWithLandmarks';
import { FaceLandmarks } from './FaceLandmarks';
import { FaceLandmarks68 } from './FaceLandmarks68';
export interface IFullFaceDescription<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> extends IFaceDetectionWithLandmarks<TFaceLandmarks> {
    detection: FaceDetection;
    landmarks: TFaceLandmarks;
    descriptor: Float32Array;
}
export declare class FullFaceDescription<TFaceLandmarks extends FaceLandmarks = FaceLandmarks68> extends FaceDetectionWithLandmarks<TFaceLandmarks> implements IFullFaceDescription<TFaceLandmarks> {
    private _descriptor;
    constructor(detection: FaceDetection, unshiftedLandmarks: TFaceLandmarks, descriptor: Float32Array);
    readonly descriptor: Float32Array;
    forSize(width: number, height: number): FullFaceDescription<TFaceLandmarks>;
}
