"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var extractWeightsFactory_1 = require("../commons/extractWeightsFactory");
function extractorsFactory(extractWeights) {
    function extractDepthwiseConvParams(numChannels) {
        var filters = tf.tensor4d(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
        var batch_norm_scale = tf.tensor1d(extractWeights(numChannels));
        var batch_norm_offset = tf.tensor1d(extractWeights(numChannels));
        var batch_norm_mean = tf.tensor1d(extractWeights(numChannels));
        var batch_norm_variance = tf.tensor1d(extractWeights(numChannels));
        return {
            filters: filters,
            batch_norm_scale: batch_norm_scale,
            batch_norm_offset: batch_norm_offset,
            batch_norm_mean: batch_norm_mean,
            batch_norm_variance: batch_norm_variance
        };
    }
    function extractConvParams(channelsIn, channelsOut, filterSize) {
        var filters = tf.tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
        var bias = tf.tensor1d(extractWeights(channelsOut));
        return {
            filters: filters,
            bias: bias
        };
    }
    function extractPointwiseConvParams(channelsIn, channelsOut, filterSize) {
        var _a = extractConvParams(channelsIn, channelsOut, filterSize), filters = _a.filters, bias = _a.bias;
        return {
            filters: filters,
            batch_norm_offset: bias
        };
    }
    function extractConvPairParams(channelsIn, channelsOut) {
        var depthwise_conv_params = extractDepthwiseConvParams(channelsIn);
        var pointwise_conv_params = extractPointwiseConvParams(channelsIn, channelsOut, 1);
        return {
            depthwise_conv_params: depthwise_conv_params,
            pointwise_conv_params: pointwise_conv_params
        };
    }
    function extractMobilenetV1Params() {
        var conv_0_params = extractPointwiseConvParams(3, 32, 3);
        var channelNumPairs = [
            [32, 64],
            [64, 128],
            [128, 128],
            [128, 256],
            [256, 256],
            [256, 512],
            [512, 512],
            [512, 512],
            [512, 512],
            [512, 512],
            [512, 512],
            [512, 1024],
            [1024, 1024]
        ];
        var conv_pair_params = channelNumPairs.map(function (_a) {
            var channelsIn = _a[0], channelsOut = _a[1];
            return extractConvPairParams(channelsIn, channelsOut);
        });
        return {
            conv_0_params: conv_0_params,
            conv_pair_params: conv_pair_params
        };
    }
    function extractPredictionLayerParams() {
        var conv_0_params = extractPointwiseConvParams(1024, 256, 1);
        var conv_1_params = extractPointwiseConvParams(256, 512, 3);
        var conv_2_params = extractPointwiseConvParams(512, 128, 1);
        var conv_3_params = extractPointwiseConvParams(128, 256, 3);
        var conv_4_params = extractPointwiseConvParams(256, 128, 1);
        var conv_5_params = extractPointwiseConvParams(128, 256, 3);
        var conv_6_params = extractPointwiseConvParams(256, 64, 1);
        var conv_7_params = extractPointwiseConvParams(64, 128, 3);
        var box_encoding_0_predictor_params = extractConvParams(512, 12, 1);
        var class_predictor_0_params = extractConvParams(512, 9, 1);
        var box_encoding_1_predictor_params = extractConvParams(1024, 24, 1);
        var class_predictor_1_params = extractConvParams(1024, 18, 1);
        var box_encoding_2_predictor_params = extractConvParams(512, 24, 1);
        var class_predictor_2_params = extractConvParams(512, 18, 1);
        var box_encoding_3_predictor_params = extractConvParams(256, 24, 1);
        var class_predictor_3_params = extractConvParams(256, 18, 1);
        var box_encoding_4_predictor_params = extractConvParams(256, 24, 1);
        var class_predictor_4_params = extractConvParams(256, 18, 1);
        var box_encoding_5_predictor_params = extractConvParams(128, 24, 1);
        var class_predictor_5_params = extractConvParams(128, 18, 1);
        var box_predictor_0_params = {
            box_encoding_predictor_params: box_encoding_0_predictor_params,
            class_predictor_params: class_predictor_0_params
        };
        var box_predictor_1_params = {
            box_encoding_predictor_params: box_encoding_1_predictor_params,
            class_predictor_params: class_predictor_1_params
        };
        var box_predictor_2_params = {
            box_encoding_predictor_params: box_encoding_2_predictor_params,
            class_predictor_params: class_predictor_2_params
        };
        var box_predictor_3_params = {
            box_encoding_predictor_params: box_encoding_3_predictor_params,
            class_predictor_params: class_predictor_3_params
        };
        var box_predictor_4_params = {
            box_encoding_predictor_params: box_encoding_4_predictor_params,
            class_predictor_params: class_predictor_4_params
        };
        var box_predictor_5_params = {
            box_encoding_predictor_params: box_encoding_5_predictor_params,
            class_predictor_params: class_predictor_5_params
        };
        return {
            conv_0_params: conv_0_params,
            conv_1_params: conv_1_params,
            conv_2_params: conv_2_params,
            conv_3_params: conv_3_params,
            conv_4_params: conv_4_params,
            conv_5_params: conv_5_params,
            conv_6_params: conv_6_params,
            conv_7_params: conv_7_params,
            box_predictor_0_params: box_predictor_0_params,
            box_predictor_1_params: box_predictor_1_params,
            box_predictor_2_params: box_predictor_2_params,
            box_predictor_3_params: box_predictor_3_params,
            box_predictor_4_params: box_predictor_4_params,
            box_predictor_5_params: box_predictor_5_params
        };
    }
    return {
        extractMobilenetV1Params: extractMobilenetV1Params,
        extractPredictionLayerParams: extractPredictionLayerParams
    };
}
function extractParams(weights) {
    var _a = extractWeightsFactory_1.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory(extractWeights), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
    var mobilenetv1_params = extractMobilenetV1Params();
    var prediction_layer_params = extractPredictionLayerParams();
    var extra_dim = tf.tensor3d(extractWeights(5118 * 4), [1, 5118, 4]);
    var output_layer_params = {
        extra_dim: extra_dim
    };
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        mobilenetv1_params: mobilenetv1_params,
        prediction_layer_params: prediction_layer_params,
        output_layer_params: output_layer_params
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map