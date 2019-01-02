"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var denseBlock_1 = require("./denseBlock");
var extractParamsFromWeigthMapTiny_1 = require("./extractParamsFromWeigthMapTiny");
var extractParamsTiny_1 = require("./extractParamsTiny");
var TinyFaceFeatureExtractor = /** @class */ (function (_super) {
    tslib_1.__extends(TinyFaceFeatureExtractor, _super);
    function TinyFaceFeatureExtractor() {
        return _super.call(this, 'TinyFaceFeatureExtractor') || this;
    }
    TinyFaceFeatureExtractor.prototype.forwardInput = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('TinyFaceFeatureExtractor - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [122.782, 117.001, 104.298];
            var normalized = tfjs_image_recognition_base_1.normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock_1.denseBlock3(normalized, params.dense0, true);
            out = denseBlock_1.denseBlock3(out, params.dense1);
            out = denseBlock_1.denseBlock3(out, params.dense2);
            out = tf.avgPool(out, [14, 14], [2, 2], 'valid');
            return out;
        });
    };
    TinyFaceFeatureExtractor.prototype.forward = function (input) {
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
    TinyFaceFeatureExtractor.prototype.getDefaultModelName = function () {
        return 'face_feature_extractor_tiny_model';
    };
    TinyFaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMapTiny_1.extractParamsFromWeigthMapTiny(weightMap);
    };
    TinyFaceFeatureExtractor.prototype.extractParams = function (weights) {
        return extractParamsTiny_1.extractParamsTiny(weights);
    };
    return TinyFaceFeatureExtractor;
}(tfjs_image_recognition_base_1.NeuralNetwork));
exports.TinyFaceFeatureExtractor = TinyFaceFeatureExtractor;
//# sourceMappingURL=TinyFaceFeatureExtractor.js.map