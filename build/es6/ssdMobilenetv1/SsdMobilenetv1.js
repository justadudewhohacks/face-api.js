import { __awaiter, __extends, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, Rect, toNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
import { SsdMobilenetv1Options } from './SsdMobilenetv1Options';
var SsdMobilenetv1 = /** @class */ (function (_super) {
    __extends(SsdMobilenetv1, _super);
    function SsdMobilenetv1() {
        return _super.call(this, 'SsdMobilenetv1') || this;
    }
    SsdMobilenetv1.prototype.forwardInput = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('SsdMobilenetv1 - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(512, false).toFloat();
            var x = tf.sub(tf.mul(batchTensor, tf.scalar(0.007843137718737125)), tf.scalar(1));
            var features = mobileNetV1(x, params.mobilenetv1);
            var _a = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
            return outputLayer(boxPredictions, classPredictions, params.output_layer);
        });
    };
    SsdMobilenetv1.prototype.forward = function (input) {
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
    SsdMobilenetv1.prototype.locateFaces = function (input, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, boxesData, results;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = new SsdMobilenetv1Options(options), maxResults = _a.maxResults, minConfidence = _a.minConfidence;
                        return [4 /*yield*/, toNetInput(input)];
                    case 1:
                        netInput = _e.sent();
                        _b = this.forwardInput(netInput), _boxes = _b.boxes, _scores = _b.scores;
                        boxes = _boxes[0];
                        scores = _scores[0];
                        for (i = 1; i < _boxes.length; i++) {
                            _boxes[i].dispose();
                            _scores[i].dispose();
                        }
                        _d = (_c = Array).from;
                        return [4 /*yield*/, scores.data()];
                    case 2:
                        scoresData = _d.apply(_c, [_e.sent()]);
                        iouThreshold = 0.5;
                        indices = nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                        reshapedDims = netInput.getReshapedInputDimensions(0);
                        inputSize = netInput.inputSize;
                        padX = inputSize / reshapedDims.width;
                        padY = inputSize / reshapedDims.height;
                        boxesData = boxes.arraySync();
                        results = indices
                            .map(function (idx) {
                            var _a = [
                                Math.max(0, boxesData[idx][0]),
                                Math.min(1.0, boxesData[idx][2])
                            ].map(function (val) { return val * padY; }), top = _a[0], bottom = _a[1];
                            var _b = [
                                Math.max(0, boxesData[idx][1]),
                                Math.min(1.0, boxesData[idx][3])
                            ].map(function (val) { return val * padX; }), left = _b[0], right = _b[1];
                            return new FaceDetection(scoresData[idx], new Rect(left, top, right - left, bottom - top), {
                                height: netInput.getInputHeight(0),
                                width: netInput.getInputWidth(0)
                            });
                        });
                        boxes.dispose();
                        scores.dispose();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    SsdMobilenetv1.prototype.getDefaultModelName = function () {
        return 'ssd_mobilenetv1_model';
    };
    SsdMobilenetv1.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap);
    };
    SsdMobilenetv1.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return SsdMobilenetv1;
}(NeuralNetwork));
export { SsdMobilenetv1 };
//# sourceMappingURL=SsdMobilenetv1.js.map