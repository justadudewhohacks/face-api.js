import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, normalize, toNetInput } from 'tfjs-image-recognition-base';
import { convDown } from './convLayer';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { residual, residualDown } from './residualLayer';
var FaceRecognitionNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceRecognitionNet, _super);
    function FaceRecognitionNet() {
        return _super.call(this, 'FaceRecognitionNet') || this;
    }
    FaceRecognitionNet.prototype.forwardInput = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceRecognitionNet - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(150, true).toFloat();
            var meanRgb = [122.782, 117.001, 104.298];
            var normalized = normalize(batchTensor, meanRgb).div(tf.scalar(256));
            var out = convDown(normalized, params.conv32_down);
            out = tf.maxPool(out, 3, 2, 'valid');
            out = residual(out, params.conv32_1);
            out = residual(out, params.conv32_2);
            out = residual(out, params.conv32_3);
            out = residualDown(out, params.conv64_down);
            out = residual(out, params.conv64_1);
            out = residual(out, params.conv64_2);
            out = residual(out, params.conv64_3);
            out = residualDown(out, params.conv128_down);
            out = residual(out, params.conv128_1);
            out = residual(out, params.conv128_2);
            out = residualDown(out, params.conv256_down);
            out = residual(out, params.conv256_1);
            out = residual(out, params.conv256_2);
            out = residualDown(out, params.conv256_down_out);
            var globalAvg = out.mean([1, 2]);
            var fullyConnected = tf.matMul(globalAvg, params.fc);
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
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    FaceRecognitionNet.prototype.computeFaceDescriptor = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toNetInput(input)];
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
    FaceRecognitionNet.prototype.getDefaultModelName = function () {
        return 'face_recognition_model';
    };
    FaceRecognitionNet.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap);
    };
    FaceRecognitionNet.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return FaceRecognitionNet;
}(NeuralNetwork));
export { FaceRecognitionNet };
//# sourceMappingURL=FaceRecognitionNet.js.map