import { isTensor3D, TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = TfjsImageRecognitionBase.extractWeightEntryFactory(weightMap, paramMappings);
    function extractPointwiseConvParams(prefix, idx, mappedPrefix) {
        var filters = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/weights", 4, mappedPrefix + "/filters");
        var batch_norm_offset = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/convolution_bn_offset", 1, mappedPrefix + "/batch_norm_offset");
        return { filters: filters, batch_norm_offset: batch_norm_offset };
    }
    function extractConvPairParams(idx) {
        var mappedPrefix = "mobilenetv1/conv_" + idx;
        var prefixDepthwiseConv = "MobilenetV1/Conv2d_" + idx + "_depthwise";
        var mappedPrefixDepthwiseConv = mappedPrefix + "/depthwise_conv";
        var mappedPrefixPointwiseConv = mappedPrefix + "/pointwise_conv";
        var filters = extractWeightEntry(prefixDepthwiseConv + "/depthwise_weights", 4, mappedPrefixDepthwiseConv + "/filters");
        var batch_norm_scale = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/gamma", 1, mappedPrefixDepthwiseConv + "/batch_norm_scale");
        var batch_norm_offset = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/beta", 1, mappedPrefixDepthwiseConv + "/batch_norm_offset");
        var batch_norm_mean = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_mean", 1, mappedPrefixDepthwiseConv + "/batch_norm_mean");
        var batch_norm_variance = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_variance", 1, mappedPrefixDepthwiseConv + "/batch_norm_variance");
        return {
            depthwise_conv: {
                filters: filters,
                batch_norm_scale: batch_norm_scale,
                batch_norm_offset: batch_norm_offset,
                batch_norm_mean: batch_norm_mean,
                batch_norm_variance: batch_norm_variance
            },
            pointwise_conv: extractPointwiseConvParams('MobilenetV1', idx, mappedPrefixPointwiseConv)
        };
    }
    function extractMobilenetV1Params() {
        return {
            conv_0: extractPointwiseConvParams('MobilenetV1', 0, 'mobilenetv1/conv_0'),
            conv_1: extractConvPairParams(1),
            conv_2: extractConvPairParams(2),
            conv_3: extractConvPairParams(3),
            conv_4: extractConvPairParams(4),
            conv_5: extractConvPairParams(5),
            conv_6: extractConvPairParams(6),
            conv_7: extractConvPairParams(7),
            conv_8: extractConvPairParams(8),
            conv_9: extractConvPairParams(9),
            conv_10: extractConvPairParams(10),
            conv_11: extractConvPairParams(11),
            conv_12: extractConvPairParams(12),
            conv_13: extractConvPairParams(13)
        };
    }
    function extractConvParams(prefix, mappedPrefix) {
        var filters = extractWeightEntry(prefix + "/weights", 4, mappedPrefix + "/filters");
        var bias = extractWeightEntry(prefix + "/biases", 1, mappedPrefix + "/bias");
        return { filters: filters, bias: bias };
    }
    function extractBoxPredictorParams(idx) {
        var box_encoding_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + idx + "/box_encoding_predictor");
        var class_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/ClassPredictor", "prediction_layer/box_predictor_" + idx + "/class_predictor");
        return { box_encoding_predictor: box_encoding_predictor, class_predictor: class_predictor };
    }
    function extractPredictionLayerParams() {
        return {
            conv_0: extractPointwiseConvParams('Prediction', 0, 'prediction_layer/conv_0'),
            conv_1: extractPointwiseConvParams('Prediction', 1, 'prediction_layer/conv_1'),
            conv_2: extractPointwiseConvParams('Prediction', 2, 'prediction_layer/conv_2'),
            conv_3: extractPointwiseConvParams('Prediction', 3, 'prediction_layer/conv_3'),
            conv_4: extractPointwiseConvParams('Prediction', 4, 'prediction_layer/conv_4'),
            conv_5: extractPointwiseConvParams('Prediction', 5, 'prediction_layer/conv_5'),
            conv_6: extractPointwiseConvParams('Prediction', 6, 'prediction_layer/conv_6'),
            conv_7: extractPointwiseConvParams('Prediction', 7, 'prediction_layer/conv_7'),
            box_predictor_0: extractBoxPredictorParams(0),
            box_predictor_1: extractBoxPredictorParams(1),
            box_predictor_2: extractBoxPredictorParams(2),
            box_predictor_3: extractBoxPredictorParams(3),
            box_predictor_4: extractBoxPredictorParams(4),
            box_predictor_5: extractBoxPredictorParams(5)
        };
    }
    return {
        extractMobilenetV1Params: extractMobilenetV1Params,
        extractPredictionLayerParams: extractPredictionLayerParams
    };
}
export function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
    var extra_dim = weightMap['Output/extra_dim'];
    paramMappings.push({ originalPath: 'Output/extra_dim', paramPath: 'output_layer/extra_dim' });
    if (!isTensor3D(extra_dim)) {
        throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
    }
    var params = {
        mobilenetv1: extractMobilenetV1Params(),
        prediction_layer: extractPredictionLayerParams(),
        output_layer: {
            extra_dim: extra_dim
        }
    };
    TfjsImageRecognitionBase.disposeUnusedWeightTensors(weightMap, paramMappings);
    return { params: params, paramMappings: paramMappings };
}
//# sourceMappingURL=extractParamsFromWeigthMap.js.map