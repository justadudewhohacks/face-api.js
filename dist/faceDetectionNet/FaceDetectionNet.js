import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { getImageTensor } from '../getImageTensor';
import { padToSquare } from '../padToSquare';
import { Rect } from '../Rect';
import { extractParams } from './extractParams';
import { FaceDetection } from './FaceDetection';
import { loadQuantizedParams } from './loadQuantizedParams';
import { mobileNetV1 } from './mobileNetV1';
import { nonMaxSuppression } from './nonMaxSuppression';
import { outputLayer } from './outputLayer';
import { predictionLayer } from './predictionLayer';
import { resizeLayer } from './resizeLayer';
var FaceDetectionNet = /** @class */ (function () {
    function FaceDetectionNet() {
    }
    FaceDetectionNet.prototype.load = function (weightsOrUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (weightsOrUrl instanceof Float32Array) {
                            this.extractWeights(weightsOrUrl);
                            return [2 /*return*/];
                        }
                        if (weightsOrUrl && typeof weightsOrUrl !== 'string') {
                            throw new Error('FaceDetectionNet.load - expected model uri, or weights as Float32Array');
                        }
                        _a = this;
                        return [4 /*yield*/, loadQuantizedParams(weightsOrUrl)];
                    case 1:
                        _a._params = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaceDetectionNet.prototype.extractWeights = function (weights) {
        this._params = extractParams(weights);
    };
    FaceDetectionNet.prototype.forwardTensor = function (imgTensor) {
        var _this = this;
        return tf.tidy(function () {
            var resized = resizeLayer(imgTensor);
            var features = mobileNetV1(resized, _this._params.mobilenetv1_params);
            var _a = predictionLayer(features.out, features.conv11, _this._params.prediction_layer_params), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
            return outputLayer(boxPredictions, classPredictions, _this._params.output_layer_params);
        });
    };
    FaceDetectionNet.prototype.forward = function (input) {
        var _this = this;
        return tf.tidy(function () { return _this.forwardTensor(padToSquare(getImageTensor(input))); });
    };
    FaceDetectionNet.prototype.locateFaces = function (input, minConfidence, maxResults) {
        if (minConfidence === void 0) { minConfidence = 0.8; }
        if (maxResults === void 0) { maxResults = 100; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var paddedHeightRelative, paddedWidthRelative, imageDimensions, _a, _boxes, _scores, boxes, scores, i, scoresData, _b, _c, iouThreshold, indices, results;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        paddedHeightRelative = 1, paddedWidthRelative = 1;
                        _a = tf.tidy(function () {
                            var imgTensor = getImageTensor(input);
                            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                            imageDimensions = { width: width, height: height };
                            imgTensor = padToSquare(imgTensor);
                            paddedHeightRelative = imgTensor.shape[1] / height;
                            paddedWidthRelative = imgTensor.shape[2] / width;
                            return _this.forwardTensor(imgTensor);
                        }), _boxes = _a.boxes, _scores = _a.scores;
                        boxes = _boxes[0];
                        scores = _scores[0];
                        for (i = 1; i < _boxes.length; i++) {
                            _boxes[i].dispose();
                            _scores[i].dispose();
                        }
                        _c = (_b = Array).from;
                        return [4 /*yield*/, scores.data()];
                    case 1:
                        scoresData = _c.apply(_b, [_d.sent()]);
                        iouThreshold = 0.5;
                        indices = nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                        results = indices
                            .map(function (idx) {
                            var _a = [
                                Math.max(0, boxes.get(idx, 0)),
                                Math.min(1.0, boxes.get(idx, 2))
                            ].map(function (val) { return val * paddedHeightRelative; }), top = _a[0], bottom = _a[1];
                            var _b = [
                                Math.max(0, boxes.get(idx, 1)),
                                Math.min(1.0, boxes.get(idx, 3))
                            ].map(function (val) { return val * paddedWidthRelative; }), left = _b[0], right = _b[1];
                            return new FaceDetection(scoresData[idx], new Rect(left, top, right - left, bottom - top), imageDimensions);
                        });
                        boxes.dispose();
                        scores.dispose();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    return FaceDetectionNet;
}());
export { FaceDetectionNet };
//# sourceMappingURL=FaceDetectionNet.js.map