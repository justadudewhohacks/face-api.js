import { Box, IDimensions, ObjectDetection, Rect } from 'tfjs-image-recognition-base';
export interface IFaceDetecion {
    score: number;
    box: Box;
}
export declare class FaceDetection extends ObjectDetection implements IFaceDetecion {
    constructor(score: number, relativeBox: Rect, imageDims: IDimensions);
}
