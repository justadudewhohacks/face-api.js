"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
function boxPredictionLayer(x, params) {
    return tf.tidy(function () {
        var batchSize = x.shape[0];
        var boxPredictionEncoding = tf.reshape(tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
        var classPrediction = tf.reshape(tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(x, params.class_predictor), [batchSize, -1, 3]);
        return {
            boxPredictionEncoding: boxPredictionEncoding,
            classPrediction: classPrediction
        };
    });
}
exports.boxPredictionLayer = boxPredictionLayer;
//# sourceMappingURL=boxPredictionLayer.js.map