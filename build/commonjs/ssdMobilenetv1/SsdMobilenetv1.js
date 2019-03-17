"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceDetection_1 = require("../classes/FaceDetection");
var extractParams_1 = require("./extractParams");
var extractParamsFromWeigthMap_1 = require("./extractParamsFromWeigthMap");
var mobileNetV1_1 = require("./mobileNetV1");
var nonMaxSuppression_1 = require("./nonMaxSuppression");
var outputLayer_1 = require("./outputLayer");
var predictionLayer_1 = require("./predictionLayer");
var SsdMobilenetv1Options_1 = require("./SsdMobilenetv1Options");
var SsdMobilenetv1 = /** @class */ (function (_super) {
    tslib_1.__extends(SsdMobilenetv1, _super);
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
            var features = mobileNetV1_1.mobileNetV1(x, params.mobilenetv1);
            var _a = predictionLayer_1.predictionLayer(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
            return outputLayer_1.outputLayer(boxPredictions, classPredictions, params.output_layer);
        });
    };
    SsdMobilenetv1.prototype.forward = function (input) {
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
    SsdMobilenetv1.prototype.locateFaces = function (input, options) {
        if (options === void 0) { options = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, results;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = new SsdMobilenetv1Options_1.SsdMobilenetv1Options(options), maxResults = _a.maxResults, minConfidence = _a.minConfidence;
                        return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input)];
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
                        indices = nonMaxSuppression_1.nonMaxSuppression(boxes, scoresData, maxResults, iouThreshold, minConfidence);
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
                            return new FaceDetection_1.FaceDetection(scoresData[idx], new tfjs_image_recognition_base_1.Rect(left, top, right - left, bottom - top), {
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
        return extractParamsFromWeigthMap_1.extractParamsFromWeigthMap(weightMap);
    };
    SsdMobilenetv1.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights);
    };
    return SsdMobilenetv1;
}(tfjs_image_recognition_base_1.NeuralNetwork));
exports.SsdMobilenetv1 = SsdMobilenetv1;
//# sourceMappingURL=SsdMobilenetv1.js.map