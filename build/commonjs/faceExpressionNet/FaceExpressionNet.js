"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceFeatureExtractor_1 = require("../faceFeatureExtractor/FaceFeatureExtractor");
var FaceProcessor_1 = require("../faceProcessor/FaceProcessor");
var types_1 = require("./types");
var FaceExpressionNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceExpressionNet, _super);
    function FaceExpressionNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor_1.FaceFeatureExtractor(); }
        return _super.call(this, 'FaceExpressionNet', faceFeatureExtractor) || this;
    }
    FaceExpressionNet.getFaceExpressionLabel = function (faceExpression) {
        var label = types_1.faceExpressionLabels[faceExpression];
        if (typeof label !== 'number') {
            throw new Error("getFaceExpressionLabel - no label for faceExpression: " + faceExpression);
        }
        return label;
    };
    FaceExpressionNet.decodeProbabilites = function (probabilities) {
        if (probabilities.length !== 7) {
            throw new Error("decodeProbabilites - expected probabilities.length to be 7, have: " + probabilities.length);
        }
        return Object.keys(types_1.faceExpressionLabels)
            .map(function (expression) { return ({ expression: expression, probability: probabilities[types_1.faceExpressionLabels[expression]] }); });
    };
    FaceExpressionNet.prototype.forwardInput = function (input) {
        var _this = this;
        return tf.tidy(function () { return tf.softmax(_this.runNet(input)); });
    };
    FaceExpressionNet.prototype.forward = function (input) {
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
    FaceExpressionNet.prototype.predictExpressions = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var netInput, out, probabilitesByBatch, predictionsByBatch;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input)];
                    case 1:
                        netInput = _a.sent();
                        return [4 /*yield*/, this.forwardInput(netInput)];
                    case 2:
                        out = _a.sent();
                        return [4 /*yield*/, Promise.all(tf.unstack(out).map(function (t) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var data;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, t.data()];
                                        case 1:
                                            data = _a.sent();
                                            t.dispose();
                                            return [2 /*return*/, data];
                                    }
                                });
                            }); }))];
                    case 3:
                        probabilitesByBatch = _a.sent();
                        out.dispose();
                        predictionsByBatch = probabilitesByBatch
                            .map(function (propablities) { return FaceExpressionNet.decodeProbabilites(propablities); });
                        return [2 /*return*/, netInput.isBatchInput
                                ? predictionsByBatch
                                : predictionsByBatch[0]];
                }
            });
        });
    };
    FaceExpressionNet.prototype.getDefaultModelName = function () {
        return 'face_expression_model';
    };
    FaceExpressionNet.prototype.getClassifierChannelsIn = function () {
        return 256;
    };
    FaceExpressionNet.prototype.getClassifierChannelsOut = function () {
        return 7;
    };
    return FaceExpressionNet;
}(FaceProcessor_1.FaceProcessor));
exports.FaceExpressionNet = FaceExpressionNet;
//# sourceMappingURL=FaceExpressionNet.js.map