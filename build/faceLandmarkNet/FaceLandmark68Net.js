"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
var extractParams_1 = require("./extractParams");
var FaceLandmark68NetBase_1 = require("./FaceLandmark68NetBase");
var fullyConnectedLayer_1 = require("./fullyConnectedLayer");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
function conv(x, params) {
    return tfjs_tiny_yolov2_1.convLayer(x, params, 'valid', true);
}
function maxPool(x, strides) {
    if (strides === void 0) { strides = [2, 2]; }
    return tf.maxPool(x, [2, 2], strides, 'valid');
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
            var batchTensor = input.toBatchTensor(128, true).toFloat();
            var out = conv(batchTensor, params.conv0);
            out = maxPool(out);
            out = conv(out, params.conv1);
            out = conv(out, params.conv2);
            out = maxPool(out);
            out = conv(out, params.conv3);
            out = conv(out, params.conv4);
            out = maxPool(out);
            out = conv(out, params.conv5);
            out = conv(out, params.conv6);
            out = maxPool(out, [1, 1]);
            out = conv(out, params.conv7);
            var fc0 = tf.relu(fullyConnectedLayer_1.fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0));
            return fullyConnectedLayer_1.fullyConnectedLayer(fc0, params.fc1);
        });
    };
    FaceLandmark68Net.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParams_1.loadQuantizedParams(uri);
    };
    FaceLandmark68Net.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights);
    };
    return FaceLandmark68Net;
}(FaceLandmark68NetBase_1.FaceLandmark68NetBase));
exports.FaceLandmark68Net = FaceLandmark68Net;
//# sourceMappingURL=FaceLandmark68Net.js.map