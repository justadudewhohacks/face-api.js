import * as tf from '@tensorflow/tfjs-core';
import { Dimensions } from './types';
export declare function isFloat(num: number): boolean;
export declare function isEven(num: number): boolean;
export declare function round(num: number): number;
export declare function resolveInput(arg: string | any): any;
export declare function isLoaded(media: HTMLImageElement | HTMLVideoElement): boolean;
export declare function awaitMediaLoaded(media: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): Promise<{}>;
export declare function getContext2dOrThrow(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
export declare function createCanvas({width, height}: Dimensions): HTMLCanvasElement;
export declare function createCanvasFromMedia(media: HTMLImageElement | HTMLVideoElement, dims?: Dimensions): HTMLCanvasElement;
export declare function getMediaDimensions(media: HTMLImageElement | HTMLVideoElement): {
    width: number;
    height: number;
};
export declare function bufferToImage(buf: Blob): Promise<HTMLImageElement>;
export declare function imageTensorToCanvas(imgTensor: tf.Tensor, canvas?: HTMLCanvasElement): Promise<HTMLCanvasElement>;
