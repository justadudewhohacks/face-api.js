import * as tf from '@tensorflow/tfjs-core';
import { Box, IDimensions } from 'tfjs-image-recognition-base';
export declare function extractImagePatches(img: HTMLCanvasElement, boxes: Box[], {width, height}: IDimensions): Promise<tf.Tensor4D[]>;
