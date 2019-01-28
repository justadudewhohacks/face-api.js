import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { NetParams } from './types';
export declare class FaceRecognitionNet extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput): tf.Tensor2D;
    forward(input: TNetInput): Promise<tf.Tensor2D>;
    computeFaceDescriptor(input: TNetInput): Promise<Float32Array | Float32Array[]>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: NetParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: import("tfjs-image-recognition-base/build/commonjs/common").ParamMapping[];
    };
}
