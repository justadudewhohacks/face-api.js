"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var getImageTensor_1 = require("../commons/getImageTensor");
var padToSquare_1 = require("../padToSquare");
var toNetInput_1 = require("../toNetInput");
var convLayer_1 = require("./convLayer");
var extractParams_1 = require("./extractParams");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
var normalize_1 = require("./normalize");
var residualLayer_1 = require("./residualLayer");
var FaceRecognitionNet = /** @class */ (function () {
    function FaceRecognitionNet() {
    }
    FaceRecognitionNet.prototype.load = function (weightsOrUrl) {
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
    FaceRecognitionNet.prototype.extractWeights = function (weights) {
        this._params = extractParams_1.extractParams(weights);
    };
    FaceRecognitionNet.prototype.forward = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var netInput, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._params) {
                            throw new Error('FaceRecognitionNet - load model before inference');
                        }
                        if (!(input instanceof tf.Tensor)) return [3 /*break*/, 1];
                        _a = input;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, toNetInput_1.toNetInput(input)];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        netInput = _a;
                        return [2 /*return*/, tf.tidy(function () {
                                var x = padToSquare_1.padToSquare(getImageTensor_1.getImageTensor(netInput), true);
                                // work with 150 x 150 sized face images
                                if (x.shape[1] !== 150 || x.shape[2] !== 150) {
                                    x = tf.image.resizeBilinear(x, [150, 150]);
                                }
                                x = normalize_1.normalize(x);
                                var out = convLayer_1.convDown(x, _this._params.conv32_down);
                                out = tf.maxPool(out, 3, 2, 'valid');
                                out = residualLayer_1.residual(out, _this._params.conv32_1);
                                out = residualLayer_1.residual(out, _this._params.conv32_2);
                                out = residualLayer_1.residual(out, _this._params.conv32_3);
                                out = residualLayer_1.residualDown(out, _this._params.conv64_down);
                                out = residualLayer_1.residual(out, _this._params.conv64_1);
                                out = residualLayer_1.residual(out, _this._params.conv64_2);
                                out = residualLayer_1.residual(out, _this._params.conv64_3);
                                out = residualLayer_1.residualDown(out, _this._params.conv128_down);
                                out = residualLayer_1.residual(out, _this._params.conv128_1);
                                out = residualLayer_1.residual(out, _this._params.conv128_2);
                                out = residualLayer_1.residualDown(out, _this._params.conv256_down);
                                out = residualLayer_1.residual(out, _this._params.conv256_1);
                                out = residualLayer_1.residual(out, _this._params.conv256_2);
                                out = residualLayer_1.residualDown(out, _this._params.conv256_down_out);
                                var globalAvg = out.mean([1, 2]);
                                var fullyConnected = tf.matMul(globalAvg, _this._params.fc);
                                return fullyConnected;
                            })];
                }
            });
        });
    };
    FaceRecognitionNet.prototype.computeFaceDescriptor = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var netInput, _a, result, data;
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
                        return [4 /*yield*/, this.forward(netInput)];
                    case 4:
                        result = _b.sent();
                        return [4 /*yield*/, result.data()];
                    case 5:
                        data = _b.sent();
                        result.dispose();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return FaceRecognitionNet;
}());
exports.FaceRecognitionNet = FaceRecognitionNet;
//# sourceMappingURL=FaceRecognitionNet.js.map