import * as tf from '@tensorflow/tfjs-core';
import { ParamMapping } from './types';
export declare class NeuralNetwork<TNetParams> {
    private _name;
    protected _params: TNetParams | undefined;
    protected _paramMappings: ParamMapping[];
    constructor(_name: string);
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
    dispose(throwOnRedispose?: boolean): void;
    load(weightsOrUrl: Float32Array | string | undefined): Promise<void>;
    extractWeights(weights: Float32Array): void;
    private traversePropertyPath(paramPath);
    protected loadQuantizedParams(_: any): Promise<{
        params: TNetParams;
        paramMappings: ParamMapping[];
    }>;
    protected extractParams(_: any): {
        params: TNetParams;
        paramMappings: ParamMapping[];
    };
}
