import * as tf from '@tensorflow/tfjs-core';
import { ParamMapping } from 'tfjs-image-recognition-base';
import { TinyNetParams } from './types';
export declare function extractParamsFromWeigthMapTiny(weightMap: tf.NamedTensorMap): {
    params: TinyNetParams;
    paramMappings: ParamMapping[];
};
