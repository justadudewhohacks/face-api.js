import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { TinyFaceFeatureExtractorParams } from './types';
export declare function extractParamsFromWeightMapTiny(weightMap: tf.NamedTensorMap): {
    params: TinyFaceFeatureExtractorParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
