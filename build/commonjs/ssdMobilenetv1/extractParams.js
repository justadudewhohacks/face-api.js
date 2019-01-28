"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
function extractorsFactory(extractWeights, paramMappings) {
    function extractDepthwiseConvParams(numChannels, mappedPrefix) {
        var filters = tf.tensor4d(extractWeights(3 * 3 * numChannels), [3, 3, numChannels, 1]);
        var batch_norm_scale = tf.tensor1d(extractWeights(numChannels));
        var batch_norm_offset = tf.tensor1d(extractWeights(numChannels));
        var batch_norm_mean = tf.tensor1d(extractWeights(numChannels));
        var batch_norm_variance = tf.tensor1d(extractWeights(numChannels));
        paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/batch_norm_scale" }, { paramPath: mappedPrefix + "/batch_norm_offset" }, { paramPath: mappedPrefix + "/batch_norm_mean" }, { paramPath: mappedPrefix + "/batch_norm_variance" });
        return {
            filters: filters,
            batch_norm_scale: batch_norm_scale,
            batch_norm_offset: batch_norm_offset,
            batch_norm_mean: batch_norm_mean,
            batch_norm_variance: batch_norm_variance
        };
    }
    function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, isPointwiseConv) {
        var filters = tf.tensor4d(extractWeights(channelsIn * channelsOut * filterSize * filterSize), [filterSize, filterSize, channelsIn, channelsOut]);
        var bias = tf.tensor1d(extractWeights(channelsOut));
        paramMappings.push({ paramPath: mappedPrefix + "/filters" }, { paramPath: mappedPrefix + "/" + (isPointwiseConv ? 'batch_norm_offset' : 'bias') });
        return { filters: filters, bias: bias };
    }
    function extractPointwiseConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
        var _a = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true), filters = _a.filters, bias = _a.bias;
        return {
            filters: filters,
            batch_norm_offset: bias
        };
    }
    function extractConvPairParams(channelsIn, channelsOut, mappedPrefix) {
        var depthwise_conv = extractDepthwiseConvParams(channelsIn, mappedPrefix + "/depthwise_conv");
        var pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/pointwise_conv");
        return { depthwise_conv: depthwise_conv, pointwise_conv: pointwise_conv };
    }
    function extractMobilenetV1Params() {
        var conv_0 = extractPointwiseConvParams(3, 32, 3, 'mobilenetv1/conv_0');
        var conv_1 = extractConvPairParams(32, 64, 'mobilenetv1/conv_1');
        var conv_2 = extractConvPairParams(64, 128, 'mobilenetv1/conv_2');
        var conv_3 = extractConvPairParams(128, 128, 'mobilenetv1/conv_3');
        var conv_4 = extractConvPairParams(128, 256, 'mobilenetv1/conv_4');
        var conv_5 = extractConvPairParams(256, 256, 'mobilenetv1/conv_5');
        var conv_6 = extractConvPairParams(256, 512, 'mobilenetv1/conv_6');
        var conv_7 = extractConvPairParams(512, 512, 'mobilenetv1/conv_7');
        var conv_8 = extractConvPairParams(512, 512, 'mobilenetv1/conv_8');
        var conv_9 = extractConvPairParams(512, 512, 'mobilenetv1/conv_9');
        var conv_10 = extractConvPairParams(512, 512, 'mobilenetv1/conv_10');
        var conv_11 = extractConvPairParams(512, 512, 'mobilenetv1/conv_11');
        var conv_12 = extractConvPairParams(512, 1024, 'mobilenetv1/conv_12');
        var conv_13 = extractConvPairParams(1024, 1024, 'mobilenetv1/conv_13');
        return {
            conv_0: conv_0,
            conv_1: conv_1,
            conv_2: conv_2,
            conv_3: conv_3,
            conv_4: conv_4,
            conv_5: conv_5,
            conv_6: conv_6,
            conv_7: conv_7,
            conv_8: conv_8,
            conv_9: conv_9,
            conv_10: conv_10,
            conv_11: conv_11,
            conv_12: conv_12,
            conv_13: conv_13
        };
    }
    function extractPredictionLayerParams() {
        var conv_0 = extractPointwiseConvParams(1024, 256, 1, 'prediction_layer/conv_0');
        var conv_1 = extractPointwiseConvParams(256, 512, 3, 'prediction_layer/conv_1');
        var conv_2 = extractPointwiseConvParams(512, 128, 1, 'prediction_layer/conv_2');
        var conv_3 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_3');
        var conv_4 = extractPointwiseConvParams(256, 128, 1, 'prediction_layer/conv_4');
        var conv_5 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_5');
        var conv_6 = extractPointwiseConvParams(256, 64, 1, 'prediction_layer/conv_6');
        var conv_7 = extractPointwiseConvParams(64, 128, 3, 'prediction_layer/conv_7');
        var box_encoding_0_predictor = extractConvParams(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor');
        var class_predictor_0 = extractConvParams(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor');
        var box_encoding_1_predictor = extractConvParams(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor');
        var class_predictor_1 = extractConvParams(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor');
        var box_encoding_2_predictor = extractConvParams(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor');
        var class_predictor_2 = extractConvParams(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor');
        var box_encoding_3_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor');
        var class_predictor_3 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor');
        var box_encoding_4_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor');
        var class_predictor_4 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor');
        var box_encoding_5_predictor = extractConvParams(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor');
        var class_predictor_5 = extractConvParams(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor');
        var box_predictor_0 = {
            box_encoding_predictor: box_encoding_0_predictor,
            class_predictor: class_predictor_0
        };
        var box_predictor_1 = {
            box_encoding_predictor: box_encoding_1_predictor,
            class_predictor: class_predictor_1
        };
        var box_predictor_2 = {
            box_encoding_predictor: box_encoding_2_predictor,
            class_predictor: class_predictor_2
        };
        var box_predictor_3 = {
            box_encoding_predictor: box_encoding_3_predictor,
            class_predictor: class_predictor_3
        };
        var box_predictor_4 = {
            box_encoding_predictor: box_encoding_4_predictor,
            class_predictor: class_predictor_4
        };
        var box_predictor_5 = {
            box_encoding_predictor: box_encoding_5_predictor,
            class_predictor: class_predictor_5
        };
        return {
            conv_0: conv_0,
            conv_1: conv_1,
            conv_2: conv_2,
            conv_3: conv_3,
            conv_4: conv_4,
            conv_5: conv_5,
            conv_6: conv_6,
            conv_7: conv_7,
            box_predictor_0: box_predictor_0,
            box_predictor_1: box_predictor_1,
            box_predictor_2: box_predictor_2,
            box_predictor_3: box_predictor_3,
            box_predictor_4: box_predictor_4,
            box_predictor_5: box_predictor_5
        };
    }
    return {
        extractMobilenetV1Params: extractMobilenetV1Params,
        extractPredictionLayerParams: extractPredictionLayerParams
    };
}
function extractParams(weights) {
    var paramMappings = [];
    var _a = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
    var mobilenetv1 = extractMobilenetV1Params();
    var prediction_layer = extractPredictionLayerParams();
    var extra_dim = tf.tensor3d(extractWeights(5118 * 4), [1, 5118, 4]);
    var output_layer = {
        extra_dim: extra_dim
    };
    paramMappings.push({ paramPath: 'output_layer/extra_dim' });
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        params: {
            mobilenetv1: mobilenetv1,
            prediction_layer: prediction_layer,
            output_layer: output_layer
        },
        paramMappings: paramMappings
    };
}
exports.extractParams = extractParams;
//# sourceMappingURL=extractParams.js.map