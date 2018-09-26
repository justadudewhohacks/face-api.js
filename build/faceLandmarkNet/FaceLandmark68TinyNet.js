"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var depthwiseSeparableConv_1 = require("./depthwiseSeparableConv");
var extractParamsTiny_1 = require("./extractParamsTiny");
var FaceLandmark68NetBase_1 = require("./FaceLandmark68NetBase");
var fullyConnectedLayer_1 = require("./fullyConnectedLayer");
var loadQuantizedParamsTiny_1 = require("./loadQuantizedParamsTiny");
function denseBlock(x, denseBlockParams, isFirstLayer) {
    if (isFirstLayer === void 0) { isFirstLayer = false; }
    return tf.tidy(function () {
        var out1 = tf.relu(isFirstLayer
            ? tf.add(tf.conv2d(x, denseBlockParams.conv0.filters, [2, 2], 'same'), denseBlockParams.conv0.bias)
            : depthwiseSeparableConv_1.depthwiseSeparableConv(x, denseBlockParams.conv0, [2, 2]));
        var out2 = depthwiseSeparableConv_1.depthwiseSeparableConv(out1, denseBlockParams.conv1, [1, 1]);
        var in3 = tf.relu(tf.add(out1, out2));
        var out3 = depthwiseSeparableConv_1.depthwiseSeparableConv(in3, denseBlockParams.conv2, [1, 1]);
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
            var normalized = tfjs_image_recognition_base_1.normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock(normalized, params.dense0, true);
            out = denseBlock(out, params.dense1);
            out = denseBlock(out, params.dense2);
            out = tf.avgPool(out, [14, 14], [2, 2], 'valid');
            return fullyConnectedLayer_1.fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc);
        });
    };
    FaceLandmark68TinyNet.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParamsTiny_1.loadQuantizedParamsTiny(uri);
    };
    FaceLandmark68TinyNet.prototype.extractParams = function (weights) {
        return extractParamsTiny_1.extractParamsTiny(weights);
    };
    return FaceLandmark68TinyNet;
}(FaceLandmark68NetBase_1.FaceLandmark68NetBase));
exports.FaceLandmark68TinyNet = FaceLandmark68TinyNet;
//# sourceMappingURL=FaceLandmark68TinyNet.js.map