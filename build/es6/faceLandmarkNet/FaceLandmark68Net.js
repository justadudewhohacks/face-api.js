import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { normalize } from 'tfjs-image-recognition-base';
import { depthwiseSeparableConv } from './depthwiseSeparableConv';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
import { fullyConnectedLayer } from './fullyConnectedLayer';
function denseBlock(x, denseBlockParams, isFirstLayer) {
    if (isFirstLayer === void 0) { isFirstLayer = false; }
    return tf.tidy(function () {
        var out1 = tf.relu(isFirstLayer
            ? tf.add(tf.conv2d(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
            : depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
        var out2 = depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
        var in3 = tf.relu(tf.add(out1, out2));
        var out3 = depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
        var in4 = tf.relu(tf.add(out1, tf.add(out2, out3)));
        var out4 = depthwiseSeparableConv(in4, denseBlockParams.conv3, [1, 1]);
        return tf.relu(tf.add(out1, tf.add(out2, tf.add(out3, out4))));
    });
}
var FaceLandmark68Net = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmark68Net, _super);
    function FaceLandmark68Net() {
        return _super.call(this, 'FaceLandmark68Net') || this;
    }
    FaceLandmark68Net.prototype.runNet = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceLandmark68Net - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [122.782, 117.001, 104.298];
            var normalized = normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock(normalized, params.dense0, true);
            out = denseBlock(out, params.dense1);
            out = denseBlock(out, params.dense2);
            out = denseBlock(out, params.dense3);
            out = tf.avgPool(out, [7, 7], [2, 2], 'valid');
            return fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc);
        });
    };
    FaceLandmark68Net.prototype.getDefaultModelName = function () {
        return 'face_landmark_68_model';
    };
    FaceLandmark68Net.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap);
    };
    FaceLandmark68Net.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return FaceLandmark68Net;
}(FaceLandmark68NetBase));
export { FaceLandmark68Net };
//# sourceMappingURL=FaceLandmark68Net.js.map