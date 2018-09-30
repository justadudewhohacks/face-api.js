import * as tf from '@tensorflow/tfjs-core';
import { Box, Dimensions } from 'tfjs-image-recognition-base';
export declare function extractImagePatches(img: HTMLCanvasElement, boxes: Box[], {width, height}: Dimensions): Promise<tf.Tensor4D[]>;
