import { FaceLandmarks } from '../classes/FaceLandmarks';
import { WithFaceDetection } from '../factories/WithFaceDetection';
import { WithFaceLandmarks } from '../factories/WithFaceLandmarks';
export interface IDrawFaceLandmarksOptions {
    drawLines?: boolean;
    drawPoints?: boolean;
    lineWidth?: number;
    pointSize?: number;
    lineColor?: string;
    pointColor?: string;
}
export declare class DrawFaceLandmarksOptions {
    drawLines: boolean;
    drawPoints: boolean;
    lineWidth: number;
    pointSize: number;
    lineColor: string;
    pointColor: string;
    constructor(options?: IDrawFaceLandmarksOptions);
}
export declare class DrawFaceLandmarks {
    faceLandmarks: FaceLandmarks;
    options: DrawFaceLandmarksOptions;
    constructor(faceLandmarks: FaceLandmarks, options?: IDrawFaceLandmarksOptions);
    draw(canvasArg: string | HTMLCanvasElement | CanvasRenderingContext2D): void;
}
export declare type DrawFaceLandmarksInput = FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>>;
export declare function drawFaceLandmarks(canvasArg: string | HTMLCanvasElement, faceLandmarks: DrawFaceLandmarksInput | Array<DrawFaceLandmarksInput>): void;
