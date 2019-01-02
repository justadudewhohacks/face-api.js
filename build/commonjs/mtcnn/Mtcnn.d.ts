import * as tf from '@tensorflow/tfjs-core';
import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { IMtcnnOptions } from './MtcnnOptions';
import { MtcnnResult, NetParams } from './types';
export declare class Mtcnn extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput, forwardParams?: IMtcnnOptions): Promise<{
        results: MtcnnResult[];
        stats: any;
    }>;
    forward(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<MtcnnResult[]>;
    forwardWithStats(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<{
        results: MtcnnResult[];
        stats: any;
    }>;
    protected getDefaultModelName(): string;
    protected extractParamsFromWeigthMap(weightMap: tf.NamedTensorMap): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
}
