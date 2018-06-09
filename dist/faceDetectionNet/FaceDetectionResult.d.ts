import { FaceDetectionNet } from './types';
export declare class FaceDetectionResult {
    private score;
    private top;
    private left;
    private bottom;
    private right;
    constructor(score: number, top: number, left: number, bottom: number, right: number);
    forSize(width: number, height: number): FaceDetectionNet.Detection;
}
