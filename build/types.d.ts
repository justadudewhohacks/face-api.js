import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from './NetInput';
export declare type TMediaElement = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
export declare type TResolvedNetInput = TMediaElement | tf.Tensor3D | tf.Tensor4D;
export declare type TNetInputArg = string | TResolvedNetInput;
export declare type TNetInput = TNetInputArg | Array<TNetInputArg> | NetInput | tf.Tensor4D;
export declare type Dimensions = {
    width: number;
    height: number;
};
