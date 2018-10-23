import * as tf from '@tensorflow/tfjs-core';
import { IDimensions, NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { FaceLandmarks68 } from '../classes/FaceLandmarks68';
export declare class FaceLandmark68NetBase<NetParams> extends NeuralNetwork<NetParams> {
    private __name;
    constructor(_name: string);
    runNet(_: NetInput): tf.Tensor2D;
    postProcess(output: tf.Tensor2D, inputSize: number, originalDimensions: IDimensions[]): tf.Tensor2D;
    forwardInput(input: NetInput): tf.Tensor2D;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    detectLandmarks(input: TNetInput): Promise<FaceLandmarks68 | FaceLandmarks68[]>;
}
