"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var convLayer_1 = require("../commons/convLayer");
function boxPredictionLayer(x, params) {
    return tf.tidy(function () {
        var batchSize = x.shape[0];
        var boxPredictionEncoding = tf.reshape(convLayer_1.convLayer(x, params.box_encoding_predictor), [batchSize, -1, 1, 4]);
        var classPrediction = tf.reshape(convLayer_1.convLayer(x, params.class_predictor), [batchSize, -1, 3]);
        return {
            boxPredictionEncoding: boxPredictionEncoding,
            classPrediction: classPrediction
        };
    });
}
exports.boxPredictionLayer = boxPredictionLayer;
//# sourceMappingURL=boxPredictionLayer.js.map