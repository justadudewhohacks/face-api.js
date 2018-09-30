import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, Rect, toNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { extractParams } from './extractParams';
import { loadQuantizedParams } from './loadQuantizedParams';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
var FaceDetectionNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceDetectionNet, _super);
    function FaceDetectionNet() {
        return _super.call(this, 'FaceDetectionNet') || this;
    }
    FaceDetectionNet.prototype.forwardInput = function (input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceDetectionNet - load model before inference');
        }
        return tf.tidy(function () {
            var batchTensor = input.toBatchTensor(512, false).toFloat();
            var x = tf.sub(tf.mul(batchTensor, tf.scalar(0.007843137718737125)), tf.scalar(1));
            var features = mobileNetV1(x, params.mobilenetv1);
            var _a = predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
            return outputLayer(boxPredictions, classPredictions, params.output_layer);
        });
    };
    FaceDetectionNet.prototype.forward = function (input) {
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
    FaceDetectionNet.prototype.locateFaces = function (input, minConfidence, maxResults) {
        if (minConfidence === void 0) { minConfidence = 0.8; }
        if (maxResults === void 0) { maxResults = 100; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var netInput, _a, _boxes, _scores, boxes, scores, i, scoresData, _b, _c, iouThreshold, indices, reshapedDims, inputSize, padX, padY, results;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, toNetInput(input)];
                    case 1:
                        netInput = _d.sent();
                        _a = this.forwardInput(netInput), _boxes = _a.boxes, _scores = _a.scores;
                        boxes = _boxes[0];
                        scores = _scores[0];
                        for (i = 1; i < _boxes.length; i++) {
                            _boxes[i].dispose();
                            _scores[i].dispose();
                        }
                        _c = (_b = Array).from;
                        return [4 /*yield*/, scores.data()];
                    case 2:
                        scoresData = _c.apply(_b, [_d.sent()]);
                        iouThreshold = 0.5;
                        indices = nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                        reshapedDims = netInput.getReshapedInputDimensions(0);
                        inputSize = netInput.inputSize;
                        padX = inputSize / reshapedDims.width;
                        padY = inputSize / reshapedDims.height;
                        results = indices
                            .map(function (idx) {
                            var _a = [
                                Math.max(0, boxes.get(idx, 0)),
                                Math.min(1.0, boxes.get(idx, 2))
                            ].map(function (val) { return val * padY; }), top = _a[0], bottom = _a[1];
                            var _b = [
                                Math.max(0, boxes.get(idx, 1)),
                                Math.min(1.0, boxes.get(idx, 3))
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
    FaceDetectionNet.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParams(uri);
    };
    FaceDetectionNet.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return FaceDetectionNet;
}(NeuralNetwork));
export { FaceDetectionNet };
//# sourceMappingURL=FaceDetectionNet.js.map