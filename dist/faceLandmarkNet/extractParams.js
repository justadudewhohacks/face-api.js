import * as tf from '@tensorflow/tfjs-core';
import { extractConvParamsFactory } from '../commons/extractConvParamsFactory';
import { extractWeightsFactory } from '../commons/extractWeightsFactory';
export function extractParams(weights) {
    var _a = extractWeightsFactory(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractConvParams = extractConvParamsFactory(extractWeights);
    function extractFcParams(channelsIn, channelsOut) {
        var fc_weights = tf.tensor2d(extractWeights(channelsIn * channelsOut), [channelsIn, channelsOut]);
        var fc_bias = tf.tensor1d(extractWeights(channelsOut));
        return {
            weights: fc_weights,
            bias: fc_bias
        };
    }
    var conv0_params = extractConvParams(3, 32, 3);
    var conv1_params = extractConvParams(32, 64, 3);
    var conv2_params = extractConvParams(64, 64, 3);
    var conv3_params = extractConvParams(64, 64, 3);
    var conv4_params = extractConvParams(64, 64, 3);
    var conv5_params = extractConvParams(64, 128, 3);
    var conv6_params = extractConvParams(128, 128, 3);
    var conv7_params = extractConvParams(128, 256, 3);
    var fc0_params = extractFcParams(6400, 1024);
    var fc1_params = extractFcParams(1024, 136);
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        conv0_params: conv0_params,
        conv1_params: conv1_params,
        conv2_params: conv2_params,
        conv3_params: conv3_params,
        conv4_params: conv4_params,
        conv5_params: conv5_params,
        conv6_params: conv6_params,
        conv7_params: conv7_params,
        fc0_params: fc0_params,
        fc1_params: fc1_params
    };
}
//# sourceMappingURL=extractParams.js.map