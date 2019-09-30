import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { FaceFeatureExtractorParams } from './types';
export declare function extractParamsFromWeightMap(weightMap: tf.NamedTensorMap): {
    params: FaceFeatureExtractorParams;
    paramMappings: TfjsImageRecognitionBase.ParamMapping[];
};
