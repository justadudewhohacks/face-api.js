"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var convLayer_1 = require("../commons/convLayer");
var getImageTensor_1 = require("../commons/getImageTensor");
var padToSquare_1 = require("../padToSquare");
var Point_1 = require("../Point");
var toNetInput_1 = require("../toNetInput");
var utils_1 = require("../utils");
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
    FaceLandmarkNet.prototype.forwardTensor = function (imgTensor) {
        var params = this._params;
        if (!params) {
            throw new Error('FaceLandmarkNet - load model before inference');
        }
        return tf.tidy(function () {
            var _a = imgTensor.shape.slice(), batchSize = _a[0], height = _a[1], width = _a[2];
            var x = padToSquare_1.padToSquare(imgTensor, true);
            var _b = x.shape.slice(1), heightAfterPadding = _b[0], widthAfterPadding = _b[1];
            // work with 128 x 128 sized face images
            if (heightAfterPadding !== 128 || widthAfterPadding !== 128) {
                x = tf.image.resizeBilinear(x, [128, 128]);
            }
            var out = conv(x, params.conv0_params);
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
            var createInterleavedTensor = function (fillX, fillY) {
                return tf.stack([
                    tf.fill([68], fillX),
                    tf.fill([68], fillY)
                ], 1).as2D(batchSize, 136);
            };
            /* shift coordinates back, to undo centered padding
              ((x * widthAfterPadding) - shiftX) / width
              ((y * heightAfterPadding) - shiftY) / height
            */
            var shiftX = Math.floor(Math.abs(widthAfterPadding - width) / 2);
            var shiftY = Math.floor(Math.abs(heightAfterPadding - height) / 2);
            var landmarkTensor = fc1
                .mul(createInterleavedTensor(widthAfterPadding, heightAfterPadding))
                .sub(createInterleavedTensor(shiftX, shiftY))
                .div(createInterleavedTensor(width, height));
            return landmarkTensor;
        });
    };
    FaceLandmarkNet.prototype.forward = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var netInput, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(input instanceof tf.Tensor)) return [3 /*break*/, 1];
                        _a = input;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, toNetInput_1.toNetInput(input)];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        netInput = _a;
                        return [2 /*return*/, this.forwardTensor(getImageTensor_1.getImageTensor(netInput))];
                }
            });
        });
    };
    FaceLandmarkNet.prototype.detectLandmarks = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var netInput, _a, imageDimensions, outTensor, faceLandmarksArray, _b, _c, xCoords, yCoords;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(input instanceof tf.Tensor)) return [3 /*break*/, 1];
                        _a = input;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, toNetInput_1.toNetInput(input)];
                    case 2:
                        _a = _d.sent();
                        _d.label = 3;
                    case 3:
                        netInput = _a;
                        outTensor = tf.tidy(function () {
                            var imgTensor = getImageTensor_1.getImageTensor(netInput);
                            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                            imageDimensions = { width: width, height: height };
                            return _this.forwardTensor(imgTensor);
                        });
                        _c = (_b = Array).from;
                        return [4 /*yield*/, outTensor.data()];
                    case 4:
                        faceLandmarksArray = _c.apply(_b, [_d.sent()]);
                        outTensor.dispose();
                        xCoords = faceLandmarksArray.filter(function (_, i) { return utils_1.isEven(i); });
                        yCoords = faceLandmarksArray.filter(function (_, i) { return !utils_1.isEven(i); });
                        return [2 /*return*/, new FaceLandmarks_1.FaceLandmarks(Array(68).fill(0).map(function (_, i) { return new Point_1.Point(xCoords[i], yCoords[i]); }), imageDimensions)];
                }
            });
        });
    };
    return FaceLandmarkNet;
}());
exports.FaceLandmarkNet = FaceLandmarkNet;
//# sourceMappingURL=FaceLandmarkNet.js.map