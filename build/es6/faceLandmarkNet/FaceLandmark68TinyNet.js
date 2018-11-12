import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { normalize } from 'tfjs-image-recognition-base';
import { depthwiseSeparableConv } from './depthwiseSeparableConv';
import { extractParamsTiny } from './extractParamsTiny';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { fullyConnectedLayer } from './fullyConnectedLayer';
import { extractParamsFromWeigthMapTiny } from './extractParamsFromWeigthMapTiny';
function denseBlock(x, denseBlockParams, isFirstLayer) {
    if (isFirstLayer === void 0) { isFirstLayer = false; }
    return tf.tidy(function () {
        var out1 = tf.relu(isFirstLayer
            ? tf.add(tf.conv2d(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
            : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
        var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
        var in3 = tf.relu(tf.add(out1, out2));
        var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
        return tf.relu(tf.add(out1, tf.add(out2, out3)));
    });
}
var FaceLandmark68TinyNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmark68TinyNet, _super);
    function FaceLandmark68TinyNet() {
        return _super.call(this, 'FaceLandmark68TinyNet') || this;
    }
    FaceLandmark68TinyNet.prototype.runNet = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceLandmark68TinyNet - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [122.782, 117.001, 104.298];
            var normalized = normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock(normalized, params.dense0, true);
            out = denseBlock(out, params.dense1);
            out = denseBlock(out, params.dense2);
            out = tf.avgPool(out, [14, 14], [2, 2], 'valid');
            return fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc);
        });
    };
    FaceLandmark68TinyNet.prototype.getDefaultModelName = function () {
        return 'face_landmark_68_tiny_model';
    };
    FaceLandmark68TinyNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMapTiny(weightMap);
    };
    FaceLandmark68TinyNet.prototype.extractParams = function (weights) {
        return extractParamsTiny(weights);
    };
    return FaceLandmark68TinyNet;
}(FaceLandmark68NetBase));
export { FaceLandmark68TinyNet };
//# sourceMappingURL=FaceLandmark68TinyNet.js.map