"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var convLayer_1 = require("../commons/convLayer");
var getImageTensor_1 = require("../getImageTensor");
var Point_1 = require("../Point");
var extractParams_1 = require("./extractParams");
var FaceLandmarks_1 = require("./FaceLandmarks");
var fullyConnectedLayer_1 = require("./fullyConnectedLayer");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
function conv(x, params) {
    return convLayer_1.convLayer(x, params, 'valid', true);
}
function maxPool(x, strides) {
    if (strides === void 0) { strides = [2, 2]; }
    return tf.maxPool(x, [2, 2], strides, 'valid');
}
var FaceLandmarkNet = /** @class */ (function () {
    function FaceLandmarkNet() {
    }
    FaceLandmarkNet.prototype.load = function (weightsOrUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (weightsOrUrl instanceof Float32Array) {
                            this.extractWeights(weightsOrUrl);
                            return [2 /*return*/];
                        }
                        if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
                            throw new Error('FaceLandmarkNet.load - expected model uri, or weights as Float32Array');
                        }
                        _a = this;
                        return [4 /*yield*/, loadQuantizedParams_1.loadQuantizedParams(weightsOrUrl)];
                    case 1:
                        _a._params = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaceLandmarkNet.prototype.extractWeights = function (weights) {
        this._params = extractParams_1.extractParams(weights);
    };
    FaceLandmarkNet.prototype.detectLandmarks = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imageDimensions, outTensor, faceLandmarksArray, _a, _b, xCoords, yCoords;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this._params) {
                            throw new Error('FaceLandmarkNet - load model before inference');
                        }
                        outTensor = tf.tidy(function () {
                            var params = _this._params;
                            var imgTensor = getImageTensor_1.getImageTensor(input);
                            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                            imageDimensions = { width: width, height: height };
                            // work with 128 x 128 sized face images
                            if (imgTensor.shape[1] !== 128 || imgTensor.shape[2] !== 128) {
                                imgTensor = tf.image.resizeBilinear(imgTensor, [128, 128]);
                            }
                            var out = conv(imgTensor, params.conv0_params);
                            out = maxPool(out);
                            out = conv(out, params.conv1_params);
                            out = conv(out, params.conv2_params);
                            out = maxPool(out);
                            out = conv(out, params.conv3_params);
                            out = conv(out, params.conv4_params);
                            out = maxPool(out);
                            out = conv(out, params.conv5_params);
                            out = conv(out, params.conv6_params);
                            out = maxPool(out, [1, 1]);
                            out = conv(out, params.conv7_params);
                            var fc0 = tf.relu(fullyConnectedLayer_1.fullyConnectedLayer(out.as2D(out.shape[0], -1), params.fc0_params));
                            var fc1 = fullyConnectedLayer_1.fullyConnectedLayer(fc0, params.fc1_params);
                            return fc1;
                        });
                        _b = (_a = Array).from;
                        return [4 /*yield*/, outTensor.data()];
                    case 1:
                        faceLandmarksArray = _b.apply(_a, [_c.sent()]);
                        outTensor.dispose();
                        xCoords = faceLandmarksArray.filter(function (c, i) { return (i - 1) % 2; });
                        yCoords = faceLandmarksArray.filter(function (c, i) { return i % 2; });
                        return [2 /*return*/, new FaceLandmarks_1.FaceLandmarks(Array(68).fill(0).map(function (_, i) { return new Point_1.Point(xCoords[i], yCoords[i]); }), imageDimensions)];
                }
            });
        });
    };
    return FaceLandmarkNet;
}());
exports.FaceLandmarkNet = FaceLandmarkNet;
//# sourceMappingURL=FaceLandmarkNet.js.map