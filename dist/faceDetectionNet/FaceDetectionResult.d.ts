import { FaceDetectionNet } from './types';
export declare class FaceDetectionResult {
    private _score;
    private _topRelative;
    private _leftRelative;
    private _bottomRelative;
    private _rightRelative;
    constructor(score: number, topRelative: number, leftRelative: number, bottomRelative: number, rightRelative: number);
    forSize(width: number, height: number): FaceDetectionNet.Detection;
}
