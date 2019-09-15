import { __awaiter, __extends, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { toNetInput } from 'tfjs-image-recognition-base';
import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceProcessor } from '../faceProcessor/FaceProcessor';
import { FaceExpressions } from './FaceExpressions';
var FaceExpressionNet = /** @class */ (function (_super) {
    __extends(FaceExpressionNet, _super);
    function FaceExpressionNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor(); }
        return _super.call(this, 'FaceExpressionNet', faceFeatureExtractor) || this;
    }
    FaceExpressionNet.prototype.forwardInput = function (input) {
        var _this = this;
        return tf.tidy(function () { return tf.softmax(_this.runNet(input)); });
    };
    FaceExpressionNet.prototype.forward = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    FaceExpressionNet.prototype.predictExpressions = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var netInput, out, probabilitesByBatch, predictionsByBatch;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toNetInput(input)];
                    case 1:
                        netInput = _a.sent();
                        return [4 /*yield*/, this.forwardInput(netInput)];
                    case 2:
                        out = _a.sent();
                        return [4 /*yield*/, Promise.all(tf.unstack(out).map(function (t) { return __awaiter(_this, void 0, void 0, function () {
                                var data;
                                return __generator(this, function (_a) {
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
                            .map(function (probabilites) { return new FaceExpressions(probabilites); });
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
}(FaceProcessor));
export { FaceExpressionNet };
//# sourceMappingURL=FaceExpressionNet.js.map