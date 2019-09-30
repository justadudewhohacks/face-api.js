import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { NetParams } from './types';
export declare function extractParamsFromWeightMap(weightMap: tf.NamedTensorMap): {
    params: NetParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
