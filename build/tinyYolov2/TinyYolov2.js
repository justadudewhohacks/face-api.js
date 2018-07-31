"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var BoundingBox_1 = require("../BoundingBox");
var convLayer_1 = require("../commons/convLayer");
var NeuralNetwork_1 = require("../commons/NeuralNetwork");
var nonMaxSuppression_1 = require("../commons/nonMaxSuppression");
var FaceDetection_1 = require("../FaceDetection");
var toNetInput_1 = require("../toNetInput");
var config_1 = require("./config");
var convWithBatchNorm_1 = require("./convWithBatchNorm");
var extractParams_1 = require("./extractParams");
var getDefaultParams_1 = require("./getDefaultParams");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
var TinyYolov2 = /** @class */ (function (_super) {
    tslib_1.__extends(TinyYolov2, _super);
    function TinyYolov2() {
        return _super.call(this, 'TinyYolov2') || this;
    }
    TinyYolov2.prototype.forwardInput = function (input, inputSize) {
        var params = this.params;
        if (!params) {
            throw new Error('TinyYolov2 - load model before inference');
        }
        var out = tf.tidy(function () {
            var batchTensor = input.toBatchTensor(inputSize, false).div(tf.scalar(255)).toFloat();
            var out = convWithBatchNorm_1.convWithBatchNorm(batchTensor, params.conv0);
            out = tf.maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv1);
            out = tf.maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv2);
            out = tf.maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv3);
            out = tf.maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv4);
            out = tf.maxPool(out, [2, 2], [2, 2], 'same');
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv5);
            out = tf.maxPool(out, [2, 2], [1, 1], 'same');
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv6);
            out = convWithBatchNorm_1.convWithBatchNorm(out, params.conv7);
            out = convLayer_1.convLayer(out, params.conv8, 'valid', false);
            return out;
        });
        return out;
    };
    TinyYolov2.prototype.forward = function (input, inputSize) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, toNetInput_1.toNetInput(input, true, true)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(), inputSize])];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    TinyYolov2.prototype.locateFaces = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _inputSize, scoreThreshold, inputSize, netInput, out, numCells, _b, boxesTensor, scoresTensor, expit, paddedHeightRelative, paddedWidthRelative, boxes, scores, row, col, box, score, ctX, ctY, width, height, x, y, indices, detections;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = getDefaultParams_1.getDefaultParams(forwardParams), _inputSize = _a.inputSize, scoreThreshold = _a.scoreThreshold;
                        inputSize = typeof _inputSize === 'string'
                            ? config_1.INPUT_SIZES[_inputSize]
                            : _inputSize;
                        if (typeof inputSize !== 'number') {
                            throw new Error("TinyYolov2 - unkown inputSize: " + inputSize + ", expected number or one of xs | sm | md | lg");
                        }
                        return [4 /*yield*/, toNetInput_1.toNetInput(input, true)];
                    case 1:
                        netInput = _c.sent();
                        return [4 /*yield*/, this.forwardInput(netInput, inputSize)];
                    case 2:
                        out = _c.sent();
                        numCells = out.shape[1];
                        _b = tf.tidy(function () {
                            var reshaped = out.reshape([numCells, numCells, config_1.NUM_BOXES, 6]);
                            out.dispose();
                            var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, config_1.NUM_BOXES, 4]);
                            var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, config_1.NUM_BOXES, 1]);
                            return [boxes, scores];
                        }), boxesTensor = _b[0], scoresTensor = _b[1];
                        expit = function (x) { return 1 / (1 + Math.exp(-x)); };
                        paddedHeightRelative = (netInput.getPaddings(0).y + netInput.getInputHeight(0)) / netInput.getInputHeight(0);
                        paddedWidthRelative = (netInput.getPaddings(0).x + netInput.getInputWidth(0)) / netInput.getInputWidth(0);
                        boxes = [];
                        scores = [];
                        for (row = 0; row < numCells; row++) {
                            for (col = 0; col < numCells; col++) {
                                for (box = 0; box < config_1.NUM_BOXES; box++) {
                                    score = expit(scoresTensor.get(row, col, box, 0));
                                    if (score > scoreThreshold) {
                                        ctX = ((col + expit(boxesTensor.get(row, col, box, 0))) / numCells) * paddedWidthRelative;
                                        ctY = ((row + expit(boxesTensor.get(row, col, box, 1))) / numCells) * paddedHeightRelative;
                                        width = ((Math.exp(boxesTensor.get(row, col, box, 2)) * config_1.BOX_ANCHORS[box].x) / numCells) * paddedWidthRelative;
                                        height = ((Math.exp(boxesTensor.get(row, col, box, 3)) * config_1.BOX_ANCHORS[box].y) / numCells) * paddedHeightRelative;
                                        x = (ctX - (width / 2));
                                        y = (ctY - (height / 2));
                                        boxes.push(new BoundingBox_1.BoundingBox(x, y, x + width, y + height));
                                        scores.push(score);
                                    }
                                }
                            }
                        }
                        boxesTensor.dispose();
                        scoresTensor.dispose();
                        indices = nonMaxSuppression_1.nonMaxSuppression(boxes.map(function (box) { return new BoundingBox_1.BoundingBox(box.left * inputSize, box.top * inputSize, box.right * inputSize, box.bottom * inputSize); }), scores, config_1.IOU_THRESHOLD, true);
                        detections = indices.map(function (idx) {
                            return new FaceDetection_1.FaceDetection(scores[idx], boxes[idx].toRect(), { width: netInput.getInputWidth(0), height: netInput.getInputHeight(0) });
                        });
                        return [2 /*return*/, detections];
                }
            });
        });
    };
    TinyYolov2.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParams_1.loadQuantizedParams(uri);
    };
    TinyYolov2.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights);
    };
    return TinyYolov2;
}(NeuralNetwork_1.NeuralNetwork));
exports.TinyYolov2 = TinyYolov2;
//# sourceMappingURL=TinyYolov2.js.map