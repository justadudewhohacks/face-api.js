import { Dimensions, ObjectDetection, Rect } from 'tfjs-image-recognition-base';
export declare class FaceDetection extends ObjectDetection {
    constructor(score: number, relativeBox: Rect, imageDims: Dimensions);
}
