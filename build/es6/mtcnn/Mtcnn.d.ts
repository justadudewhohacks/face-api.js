import { NetInput, NeuralNetwork, TNetInput } from 'tfjs-image-recognition-base';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { IMtcnnOptions } from './MtcnnOptions';
import { NetParams } from './types';
export declare class Mtcnn extends NeuralNetwork<NetParams> {
    constructor();
    forwardInput(input: NetInput, forwardParams?: IMtcnnOptions): Promise<{
        results: FaceDetectionWithLandmarks<FaceLandmarks5>[];
        stats: any;
    }>;
    forward(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<FaceDetectionWithLandmarks<FaceLandmarks5>[]>;
    forwardWithStats(input: TNetInput, forwardParams?: IMtcnnOptions): Promise<{
        results: FaceDetectionWithLandmarks<FaceLandmarks5>[];
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
