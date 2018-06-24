"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var boxPredictionLayer_1 = require("./boxPredictionLayer");
var pointwiseConvLayer_1 = require("./pointwiseConvLayer");
function predictionLayer(x, conv11, params) {
    return tf.tidy(function () {
        var conv0 = pointwiseConvLayer_1.pointwiseConvLayer(x, params.conv_0_params, [1, 1]);
        var conv1 = pointwiseConvLayer_1.pointwiseConvLayer(conv0, params.conv_1_params, [2, 2]);
        var conv2 = pointwiseConvLayer_1.pointwiseConvLayer(conv1, params.conv_2_params, [1, 1]);
        var conv3 = pointwiseConvLayer_1.pointwiseConvLayer(conv2, params.conv_3_params, [2, 2]);
        var conv4 = pointwiseConvLayer_1.pointwiseConvLayer(conv3, params.conv_4_params, [1, 1]);
        var conv5 = pointwiseConvLayer_1.pointwiseConvLayer(conv4, params.conv_5_params, [2, 2]);
        var conv6 = pointwiseConvLayer_1.pointwiseConvLayer(conv5, params.conv_6_params, [1, 1]);
        var conv7 = pointwiseConvLayer_1.pointwiseConvLayer(conv6, params.conv_7_params, [2, 2]);
        var boxPrediction0 = boxPredictionLayer_1.boxPredictionLayer(conv11, params.box_predictor_0_params);
        var boxPrediction1 = boxPredictionLayer_1.boxPredictionLayer(x, params.box_predictor_1_params);
        var boxPrediction2 = boxPredictionLayer_1.boxPredictionLayer(conv1, params.box_predictor_2_params);
        var boxPrediction3 = boxPredictionLayer_1.boxPredictionLayer(conv3, params.box_predictor_3_params);
        var boxPrediction4 = boxPredictionLayer_1.boxPredictionLayer(conv5, params.box_predictor_4_params);
        var boxPrediction5 = boxPredictionLayer_1.boxPredictionLayer(conv7, params.box_predictor_5_params);
        var boxPredictions = tf.concat([
            boxPrediction0.boxPredictionEncoding,
            boxPrediction1.boxPredictionEncoding,
            boxPrediction2.boxPredictionEncoding,
            boxPrediction3.boxPredictionEncoding,
            boxPrediction4.boxPredictionEncoding,
            boxPrediction5.boxPredictionEncoding
        ], 1);
        var classPredictions = tf.concat([
            boxPrediction0.classPrediction,
            boxPrediction1.classPrediction,
            boxPrediction2.classPrediction,
            boxPrediction3.classPrediction,
            boxPrediction4.classPrediction,
            boxPrediction5.classPrediction
        ], 1);
        return {
            boxPredictions: boxPredictions,
            classPredictions: classPredictions
        };
    });
}
exports.predictionLayer = predictionLayer;
//# sourceMappingURL=predictionLayer.js.map