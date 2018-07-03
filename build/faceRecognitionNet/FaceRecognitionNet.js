"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
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
    FaceRecognitionNet.prototype.forwardInput = function (input) {
        var _this = this;
        if (!this._params) {
            throw new Error('FaceRecognitionNet - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(150, true);
            var normalized = normalize_1.normalize(batchTensor);
            var out = convLayer_1.convDown(normalized, _this._params.conv32_down);
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
        });
    };
    FaceRecognitionNet.prototype.forward = function (input) {
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
    FaceRecognitionNet.prototype.computeFaceDescriptor = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toNetInput_1.toNetInput(input, true)];
                    case 1:
                        netInput = _a.sent();
                        faceDescriptorTensors = tf.tidy(function () { return tf.unstack(_this.forwardInput(netInput)); });
                        return [4 /*yield*/, Promise.all(faceDescriptorTensors.map(function (t) { return t.data(); }))];
                    case 2:
                        faceDescriptorsForBatch = _a.sent();
                        faceDescriptorTensors.forEach(function (t) { return t.dispose(); });
                        return [2 /*return*/, netInput.isBatchInput
                                ? faceDescriptorsForBatch
                                : faceDescriptorsForBatch[0]];
                }
            });
        });
    };
    return FaceRecognitionNet;
}());
exports.FaceRecognitionNet = FaceRecognitionNet;
//# sourceMappingURL=FaceRecognitionNet.js.map