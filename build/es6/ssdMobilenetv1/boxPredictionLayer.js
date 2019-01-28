import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
export function boxPredictionLayer(x, params) {
    return tf.tidy(function () {
        var batchSize = x.shape[0];
        var boxPredictionEncoding = tf.reshape(TfjsImageRecognitionBase.convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
        var classPrediction = tf.reshape(TfjsImageRecognitionBase.convLayer(x, params.class_predictor), [batchSize, -1, 3]);
        return {
            boxPredictionEncoding: boxPredictionEncoding,
            classPrediction: classPrediction
        };
    });
}
//# sourceMappingURL=boxPredictionLayer.js.map