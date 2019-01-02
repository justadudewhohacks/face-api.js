import * as tf from '@tensorflow/tfjs-core';
export declare function seperateWeightMaps(weightMap: tf.NamedTensorMap): {
    featureExtractorMap: tf.NamedTensorMap;
    classifierMap: tf.NamedTensorMap;
};
