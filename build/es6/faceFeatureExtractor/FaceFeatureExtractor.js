import { __awaiter, __extends, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, normalize, toNetInput } from 'tfjs-image-recognition-base';
import { denseBlock4 } from './denseBlock';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
var FaceFeatureExtractor = /** @class */ (function (_super) {
    __extends(FaceFeatureExtractor, _super);
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
            var normalized = normalize(batchTensor, meanRgb).div(tf.scalar(255));
            var out = denseBlock4(normalized, params.dense0, true);
            out = denseBlock4(out, params.dense1);
            out = denseBlock4(out, params.dense2);
            out = denseBlock4(out, params.dense3);
            out = tf.avgPool(out, [7, 7], [2, 2], 'valid');
            return out;
        });
    };
    FaceFeatureExtractor.prototype.forward = function (input) {
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
    FaceFeatureExtractor.prototype.getDefaultModelName = function () {
        return 'face_feature_extractor_model';
    };
    FaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap);
    };
    FaceFeatureExtractor.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return FaceFeatureExtractor;
}(NeuralNetwork));
export { FaceFeatureExtractor };
//# sourceMappingURL=FaceFeatureExtractor.js.map