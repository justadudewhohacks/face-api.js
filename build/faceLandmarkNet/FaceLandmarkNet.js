"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var convLayer_1 = require("../commons/convLayer");
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
    FaceLandmarkNet.prototype.forwardInput = function (input) {
        var params = this._params;
        if (!params) {
            throw new Error('FaceLandmarkNet - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(128, true);
            var out = conv(batchTensor, params.conv0_params);
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
                ], 1).as2D(1, 136).as1D();
            };
            /* shift coordinates back, to undo centered padding
              x = ((x * widthAfterPadding) - shiftX) / width
              y = ((y * heightAfterPadding) - shiftY) / height
            */
            var landmarkTensors = fc1
                .mul(tf.stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                return createInterleavedTensor(input.getPaddings(batchIdx).x + input.getInputWidth(batchIdx), input.getPaddings(batchIdx).y + input.getInputHeight(batchIdx));
            })))
                .sub(tf.stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                return createInterleavedTensor(Math.floor(input.getPaddings(batchIdx).x / 2), Math.floor(input.getPaddings(batchIdx).y / 2));
            })))
                .div(tf.stack(Array.from(Array(input.batchSize), function (_, batchIdx) {
                return createInterleavedTensor(input.getInputWidth(batchIdx), input.getInputHeight(batchIdx));
            })));
            return landmarkTensors;
        });
    };
    FaceLandmarkNet.prototype.forward = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput_1.toNetInput(input, true)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    FaceLandmarkNet.prototype.detectLandmarks = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var netInput, landmarkTensors, landmarksForBatch;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toNetInput_1.toNetInput(input, true)];
                    case 1:
                        netInput = _a.sent();
                        landmarkTensors = tf.unstack(this.forwardInput(netInput));
                        return [4 /*yield*/, Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var landmarksArray, _a, _b, xCoords, yCoords;
                                return tslib_1.__generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = Array).from;
                                            return [4 /*yield*/, landmarkTensor.data()];
                                        case 1:
                                            landmarksArray = _b.apply(_a, [_c.sent()]);
                                            xCoords = landmarksArray.filter(function (_, i) { return utils_1.isEven(i); });
                                            yCoords = landmarksArray.filter(function (_, i) { return !utils_1.isEven(i); });
                                            return [2 /*return*/, new FaceLandmarks_1.FaceLandmarks(Array(68).fill(0).map(function (_, i) { return new Point_1.Point(xCoords[i], yCoords[i]); }), {
                                                    height: netInput.getInputHeight(batchIdx),
                                                    width: netInput.getInputWidth(batchIdx),
                                                })];
                                    }
                                });
                            }); }))];
                    case 2:
                        landmarksForBatch = _a.sent();
                        landmarkTensors.forEach(function (t) { return t.dispose(); });
                        return [2 /*return*/, landmarksForBatch.length === 1 ? landmarksForBatch[0] : landmarksForBatch];
                }
            });
        });
    };
    return FaceLandmarkNet;
}());
exports.FaceLandmarkNet = FaceLandmarkNet;
//# sourceMappingURL=FaceLandmarkNet.js.map