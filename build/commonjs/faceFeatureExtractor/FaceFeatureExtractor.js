"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var denseBlock_1 = require("./denseBlock");
var extractParams_1 = require("./extractParams");
var extractParamsFromWeigthMap_1 = require("./extractParamsFromWeigthMap");
var FaceFeatureExtractor = /** @class */ (function (_super) {
    tslib_1.__extends(FaceFeatureExtractor, _super);
    function FaceFeatureExtractor() {
        return _super.call(this, 'FaceFeatureExtractor') || this;
    }
    FaceFeatureExtractor.prototype.forwardInput = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceFeatureExtractor - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [122.782, 117.001, 104.298];
            var normalized = tfjs_image_recognition_base_1.normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock_1.denseBlock4(normalized, params.dense0, true);
            out = denseBlock_1.denseBlock4(out, params.dense1);
            out = denseBlock_1.denseBlock4(out, params.dense2);
            out = denseBlock_1.denseBlock4(out, params.dense3);
            out = tf.avgPool(out, [7, 7], [2, 2], 'valid');
            return out;
        });
    };
    FaceFeatureExtractor.prototype.forward = function (input) {
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
    FaceFeatureExtractor.prototype.getDefaultModelName = function () {
        return 'face_feature_extractor_model';
    };
    FaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap_1.extractParamsFromWeigthMap(weightMap);
    };
    FaceFeatureExtractor.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights);
    };
    return FaceFeatureExtractor;
}(tfjs_image_recognition_base_1.NeuralNetwork));
exports.FaceFeatureExtractor = FaceFeatureExtractor;
//# sourceMappingURL=FaceFeatureExtractor.js.map