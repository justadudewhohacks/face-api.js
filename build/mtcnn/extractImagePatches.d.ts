import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox, Dimensions } from 'tfjs-image-recognition-base';
export declare function extractImagePatches(img: HTMLCanvasElement, boxes: BoundingBox[], {width, height}: Dimensions): Promise<tf.Tensor4D[]>;
