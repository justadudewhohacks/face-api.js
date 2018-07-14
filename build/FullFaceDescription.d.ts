import { FaceDetection } from './FaceDetection';
import { FaceLandmarks68 } from './faceLandmarkNet/FaceLandmarks68';
export declare class FullFaceDescription {
    private _detection;
    private _landmarks;
    private _descriptor;
    constructor(_detection: FaceDetection, _landmarks: FaceLandmarks68, _descriptor: Float32Array);
    readonly detection: FaceDetection;
    readonly landmarks: FaceLandmarks68;
    readonly descriptor: Float32Array;
    forSize(width: number, height: number): FullFaceDescription;
}
