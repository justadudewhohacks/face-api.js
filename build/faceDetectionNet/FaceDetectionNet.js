"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var getImageTensor_1 = require("../getImageTensor");
var padToSquare_1 = require("../padToSquare");
var Rect_1 = require("../Rect");
var extractParams_1 = require("./extractParams");
var FaceDetection_1 = require("./FaceDetection");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
var mobileNetV1_1 = require("./mobileNetV1");
var nonMaxSuppression_1 = require("./nonMaxSuppression");
var outputLayer_1 = require("./outputLayer");
var predictionLayer_1 = require("./predictionLayer");
var resizeLayer_1 = require("./resizeLayer");
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
                        return [4 /*yield*/, loadQuantizedParams_1.loadQuantizedParams(weightsOrUrl)];
                    case 1:
                        _a._params = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaceDetectionNet.prototype.extractWeights = function (weights) {
        this._params = extractParams_1.extractParams(weights);
    };
    FaceDetectionNet.prototype.forwardTensor = function (imgTensor) {
        var _this = this;
        if (!this._params) {
            throw new Error('FaceDetectionNet - load model before inference');
        }
        return tf.tidy(function () {
            var resized = resizeLayer_1.resizeLayer(imgTensor);
            var features = mobileNetV1_1.mobileNetV1(resized, _this._params.mobilenetv1_params);
            var _a = predictionLayer_1.predictionLayer(features.out, features.conv11, _this._params.prediction_layer_params), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
            return outputLayer_1.outputLayer(boxPredictions, classPredictions, _this._params.output_layer_params);
        });
    };
    FaceDetectionNet.prototype.forward = function (input) {
        var _this = this;
        return tf.tidy(function () { return _this.forwardTensor(padToSquare_1.padToSquare(getImageTensor_1.getImageTensor(input))); });
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
                            var imgTensor = getImageTensor_1.getImageTensor(input);
                            var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                            imageDimensions = { width: width, height: height };
                            imgTensor = padToSquare_1.padToSquare(imgTensor);
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
                        indices = nonMaxSuppression_1.nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
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
                            return new FaceDetection_1.FaceDetection(scoresData[idx], new Rect_1.Rect(left, top, right - left, bottom - top), imageDimensions);
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
exports.FaceDetectionNet = FaceDetectionNet;
//# sourceMappingURL=FaceDetectionNet.js.map