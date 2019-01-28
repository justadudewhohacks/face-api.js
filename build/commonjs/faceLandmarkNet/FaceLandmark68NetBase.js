"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceLandmarks68_1 = require("../classes/FaceLandmarks68");
var FaceProcessor_1 = require("../faceProcessor/FaceProcessor");
var FaceLandmark68NetBase = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmark68NetBase, _super);
    function FaceLandmark68NetBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmark68NetBase.prototype.postProcess = function (output, inputSize, originalDimensions) {
        var inputDimensions = originalDimensions.map(function (_a) {
            var width = _a.width, height = _a.height;
            var scale = inputSize / Math.max(height, width);
            return {
                width: width * scale,
                height: height * scale
            };
        });
        var batchSize = inputDimensions.length;
        return tf.tidy(function () {
            var createInterleavedTensor = function (fillX, fillY) {
                return tf.stack([
                    tf.fill([68], fillX),
                    tf.fill([68], fillY)
                ], 1).as2D(1, 136).as1D();
            };
            var getPadding = function (batchIdx, cond) {
                var _a = inputDimensions[batchIdx], width = _a.width, height = _a.height;
                return cond(width, height) ? Math.abs(width - height) / 2 : 0;
            };
            var getPaddingX = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return w < h; }); };
            var getPaddingY = function (batchIdx) { return getPadding(batchIdx, function (w, h) { return h < w; }); };
            var landmarkTensors = output
                .mul(tf.fill([batchSize, 136], inputSize))
                .sub(tf.stack(Array.from(Array(batchSize), function (_, batchIdx) {
                return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
            })))
                .div(tf.stack(Array.from(Array(batchSize), function (_, batchIdx) {
                return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
            })));
            return landmarkTensors;
        });
    };
    FaceLandmark68NetBase.prototype.forwardInput = function (input) {
        var _this = this;
        return tf.tidy(function () {
            var out = _this.runNet(input);
            return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function (_a) {
                var height = _a[0], width = _a[1];
                return ({ height: height, width: width });
            }));
        });
    };
    FaceLandmark68NetBase.prototype.forward = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    FaceLandmark68NetBase.prototype.detectLandmarks = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var netInput, landmarkTensors, landmarksForBatch;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input)];
                    case 1:
                        netInput = _a.sent();
                        landmarkTensors = tf.tidy(function () { return tf.unstack(_this.forwardInput(netInput)); });
                        return [4 /*yield*/, Promise.all(landmarkTensors.map(function (landmarkTensor, batchIdx) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var landmarksArray, _a, _b, xCoords, yCoords;
                                return tslib_1.__generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = Array).from;
                                            return [4 /*yield*/, landmarkTensor.data()];
                                        case 1:
                                            landmarksArray = _b.apply(_a, [_c.sent()]);
                                            xCoords = landmarksArray.filter(function (_, i) { return tfjs_image_recognition_base_1.isEven(i); });
                                            yCoords = landmarksArray.filter(function (_, i) { return !tfjs_image_recognition_base_1.isEven(i); });
                                            return [2 /*return*/, new FaceLandmarks68_1.FaceLandmarks68(Array(68).fill(0).map(function (_, i) { return new tfjs_image_recognition_base_1.Point(xCoords[i], yCoords[i]); }), {
                                                    height: netInput.getInputHeight(batchIdx),
                                                    width: netInput.getInputWidth(batchIdx),
                                                })];
                                    }
                                });
                            }); }))];
                    case 2:
                        landmarksForBatch = _a.sent();
                        landmarkTensors.forEach(function (t) { return t.dispose(); });
                        return [2 /*return*/, netInput.isBatchInput
                                ? landmarksForBatch
                                : landmarksForBatch[0]];
                }
            });
        });
    };
    FaceLandmark68NetBase.prototype.getClassifierChannelsOut = function () {
        return 136;
    };
    return FaceLandmark68NetBase;
}(FaceProcessor_1.FaceProcessor));
exports.FaceLandmark68NetBase = FaceLandmark68NetBase;
//# sourceMappingURL=FaceLandmark68NetBase.js.map