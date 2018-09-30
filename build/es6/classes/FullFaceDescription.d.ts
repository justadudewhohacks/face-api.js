import { FaceDetection } from './FaceDetection';
import { FaceLandmarks } from './FaceLandmarks';
export declare class FullFaceDescription {
    private _detection;
    private _landmarks;
    private _descriptor;
    constructor(_detection: FaceDetection, _landmarks: FaceLandmarks, _descriptor: Float32Array);
    readonly detection: FaceDetection;
    readonly landmarks: FaceLandmarks;
    readonly descriptor: Float32Array;
    forSize(width: number, height: number): FullFaceDescription;
}
