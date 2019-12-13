import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { TinyXceptionParams } from './types';
export declare function extractParamsFromWeightMap(weightMap: tf.NamedTensorMap, numMainBlocks: number): {
    params: TinyXceptionParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
