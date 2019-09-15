import { __awaiter, __extends, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, normalize, toNetInput } from 'tfjs-image-recognition-base';
import { denseBlock3 } from './denseBlock';
import { extractParamsFromWeigthMapTiny } from './extractParamsFromWeigthMapTiny';
import { extractParamsTiny } from './extractParamsTiny';
var TinyFaceFeatureExtractor = /** @class */ (function (_super) {
    __extends(TinyFaceFeatureExtractor, _super);
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
            var normalized = normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock3(normalized, params.dense0, true);
            out = denseBlock3(out, params.dense1);
            out = denseBlock3(out, params.dense2);
            out = tf.avgPool(out, [14, 14], [2, 2], 'valid');
            return out;
        });
    };
    TinyFaceFeatureExtractor.prototype.forward = function (input) {
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
    TinyFaceFeatureExtractor.prototype.getDefaultModelName = function () {
        return 'face_feature_extractor_tiny_model';
    };
    TinyFaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMapTiny(weightMap);
    };
    TinyFaceFeatureExtractor.prototype.extractParams = function (weights) {
        return extractParamsTiny(weights);
    };
    return TinyFaceFeatureExtractor;
}(NeuralNetwork));
export { TinyFaceFeatureExtractor };
//# sourceMappingURL=TinyFaceFeatureExtractor.js.map