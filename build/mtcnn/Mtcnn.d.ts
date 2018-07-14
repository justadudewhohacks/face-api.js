import { NeuralNetwork } from '../commons/NeuralNetwork';
import { NetInput } from '../NetInput';
import { TNetInput } from '../types';
import { MtcnnForwardParams, MtcnnResult, NetParams } from './types';
export declare class Mtcnn extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput, forwardParams: MtcnnForwardParams): Promise<{
        results: MtcnnResult[];
        stats: any;
    }>;
    forward(input: TNetInput, forwardParams: MtcnnForwardParams): Promise<MtcnnResult[]>;
    forwardWithStats(input: TNetInput, forwardParams: MtcnnForwardParams): Promise<{
        results: MtcnnResult[];
        stats: any;
    }>;
    protected loadQuantizedParams(uri: string | undefined): Promise<{
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    }>;
    protected extractParams(weights: Float32Array): {
        params: NetParams;
        paramMappings: {
            originalPath?: string | undefined;
            paramPath: string;
        }[];
    };
}
