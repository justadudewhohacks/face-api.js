import * as tf from '@tensorflow/tfjs-core';
import { ParamMapping } from './types';
export declare class NeuralNetwork<TNetParams> {
    protected _params: TNetParams | undefined;
    protected _paramMappings: ParamMapping[];
    readonly params: TNetParams | undefined;
    readonly paramMappings: ParamMapping[];
    getParamFromPath(paramPath: string): tf.Tensor;
    reassignParamFromPath(paramPath: string, tensor: tf.Tensor): void;
    getParamList(): {
        path: string;
        tensor: tf.Tensor<tf.Rank>;
    }[];
    getTrainableParams(): {
        path: string;
        tensor: tf.Tensor<tf.Rank>;
    }[];
    getFrozenParams(): {
        path: string;
        tensor: tf.Tensor<tf.Rank>;
    }[];
    variable(): void;
    freeze(): void;
    dispose(): void;
    private traversePropertyPath(paramPath);
}
