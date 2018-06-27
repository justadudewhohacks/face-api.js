import { FaceDetection } from '../faceDetectionNet/FaceDetection';
import { FaceLandmarks } from '../faceLandmarkNet/FaceLandmarks';
import { DrawBoxOptions, DrawLandmarksOptions, DrawOptions, DrawTextOptions } from './types';
export declare function getDefaultDrawOptions(): DrawOptions;
export declare function drawBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, options: DrawBoxOptions): void;
export declare function drawText(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, options: DrawTextOptions): void;
export declare function drawDetection(canvasArg: string | HTMLCanvasElement, detection: FaceDetection | FaceDetection[], options?: DrawBoxOptions & DrawTextOptions & {
    withScore: boolean;
}): void;
export declare function drawLandmarks(canvasArg: string | HTMLCanvasElement, faceLandmarks: FaceLandmarks | FaceLandmarks[], options?: DrawLandmarksOptions & {
    drawLines: boolean;
}): void;
