import * as tf from '@tensorflow/tfjs-core';
function convWithBias(x, params) {
    return tf.tidy(function () {
        return tf.add(tf.conv2d(x, params.filters, [1, 1], 'same'), params.bias);
    });
}
export function boxPredictionLayer(x, params) {
    return tf.tidy(function () {
        var batchSize = x.shape[0];
        var boxPredictionEncoding = tf.reshape(convWithBias(x, params.box_encoding_predictor_params), [batchSize, -1, 1, 4]);
        var classPrediction = tf.reshape(convWithBias(x, params.class_predictor_params), [batchSize, -1, 3]);
        return {
            boxPredictionEncoding: boxPredictionEncoding,
            classPrediction: classPrediction
        };
    });
}
//# sourceMappingURL=boxPredictionLayer.js.map