import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox } from '../BoundingBox';
import { Dimensions } from '../types';
export declare function extractImagePatches(img: HTMLCanvasElement, boxes: BoundingBox[], {width, height}: Dimensions): Promise<tf.Tensor4D[]>;
