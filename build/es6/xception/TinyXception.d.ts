import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TfjsImageRecognitionBase, TNetInput } from 'tfjs-image-recognition-base';
import { TinyXceptionParams } from './types';
export declare class TinyXception extends NeuralNetwork<TinyXceptionParams> {
    private _numMainBlocks;
    constructor(numMainBlocks: number);
    forwardInput(input: NetInput): tf.Tensor4D;
    forward(input: TNetInput): Promise<tf.Tensor4D>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: TinyXceptionParams;
        paramMappings: TfjsImageRecognitionBase.ParamMapping[];
    };
    protected extractParams(weights: Float32Array): {
        params: TinyXceptionParams;
        paramMappings: TfjsImageRecognitionBase.ParamMapping[];
    };
}
