import * as tf from '@tensorflow/tfjs-core';
import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { FaceLandmarks } from './faceLandmarkNet/FaceLandmarks';
import { Dimensions, DrawBoxOptions, DrawLandmarksOptions, DrawOptions, DrawTextOptions } from './types';
export declare function isFloat(num: number): boolean;
export declare function isEven(num: number): boolean;
export declare function round(num: number): number;
export declare function getElement(arg: string | any): any;
export declare function getContext2dOrThrow(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
export declare function createCanvas({width, height}: Dimensions): HTMLCanvasElement;
export declare function createCanvasFromMedia(media: HTMLImageElement | HTMLVideoElement, dims?: Dimensions): HTMLCanvasElement;
export declare function getMediaDimensions(media: HTMLImageElement | HTMLVideoElement): {
    width: number;
    height: number;
};
export declare function bufferToImage(buf: Blob): Promise<HTMLImageElement>;
export declare function imageTensorToCanvas(imgTensor: tf.Tensor4D, canvas?: HTMLCanvasElement): Promise<HTMLCanvasElement>;
export declare function getDefaultDrawOptions(): DrawOptions;
export declare function drawBox(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, options: DrawBoxOptions): void;
export declare function drawText(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, options: DrawTextOptions): void;
export declare function drawDetection(canvasArg: string | HTMLCanvasElement, detection: FaceDetection | FaceDetection[], options?: DrawBoxOptions & DrawTextOptions & {
    withScore: boolean;
}): void;
export declare function drawLandmarks(canvasArg: string | HTMLCanvasElement, faceLandmarks: FaceLandmarks | FaceLandmarks[], options?: DrawLandmarksOptions & {
    drawLines: boolean;
}): void;
