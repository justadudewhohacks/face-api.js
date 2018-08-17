"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var BoundingBox_1 = require("../BoundingBox");
var convLayer_1 = require("../commons/convLayer");
var NeuralNetwork_1 = require("../commons/NeuralNetwork");
var nonMaxSuppression_1 = require("../commons/nonMaxSuppression");
var normalize_1 = require("../commons/normalize");
var FaceDetection_1 = require("../FaceDetection");
var toNetInput_1 = require("../toNetInput");
var utils_1 = require("../utils");
var config_1 = require("./config");
var convWithBatchNorm_1 = require("./convWithBatchNorm");
var extractParams_1 = require("./extractParams");
var getDefaultParams_1 = require("./getDefaultParams");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
var TinyYolov2 = /** @class */ (function (_super) {
    tslib_1.__extends(TinyYolov2, _super);
    function TinyYolov2(withSeparableConvs) {
        if (withSeparableConvs === void 0) { withSeparableConvs = true; }
        var _this = _super.call(this, 'TinyYolov2') || this;
        _this._withSeparableConvs = withSeparableConvs;
        _this._anchors = withSeparableConvs ? config_1.BOX_ANCHORS_SEPARABLE : config_1.BOX_ANCHORS;
        return _this;
    }
    Object.defineProperty(TinyYolov2.prototype, "withSeparableConvs", {
        get: function () {
            return this._withSeparableConvs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyYolov2.prototype, "anchors", {
        get: function () {
            return this._anchors;
        },
        enumerable: true,
        configurable: true
    });
    TinyYolov2.prototype.forwardInput = function (input, inputSize) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error('TinyYolov2 - load model before inference');
        }
        var out = tf.tidy(function () {
            var batchTensor = input.toBatchTensor(inputSize, false);
            batchTensor = _this.withSeparableConvs
                ? normalize_1.normalize(batchTensor, config_1.MEAN_RGB)
                : batchTensor;
            batchTensor = batchTensor.div(tf.scalar(256));
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
            var _a, _inputSize, scoreThreshold, inputSize, netInput, out, out0, inputDimensions, paddings, results, boxes, scores, indices, detections;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = getDefaultParams_1.getDefaultParams(forwardParams), _inputSize = _a.inputSize, scoreThreshold = _a.scoreThreshold;
                        inputSize = typeof _inputSize === 'string'
                            ? config_1.INPUT_SIZES[_inputSize]
                            : _inputSize;
                        if (typeof inputSize !== 'number') {
                            throw new Error("TinyYolov2 - unknown inputSize: " + inputSize + ", expected number or one of xs | sm | md | lg");
                        }
                        return [4 /*yield*/, toNetInput_1.toNetInput(input, true)];
                    case 1:
                        netInput = _b.sent();
                        return [4 /*yield*/, this.forwardInput(netInput, inputSize)];
                    case 2:
                        out = _b.sent();
                        out0 = tf.tidy(function () { return tf.unstack(out)[0].expandDims(); });
                        inputDimensions = {
                            width: netInput.getInputWidth(0),
                            height: netInput.getInputHeight(0)
                        };
                        paddings = netInput.getRelativePaddings(0);
                        results = this.postProcess(out0, { scoreThreshold: scoreThreshold, paddings: paddings });
                        boxes = results.map(function (res) { return res.box; });
                        scores = results.map(function (res) { return res.score; });
                        out.dispose();
                        out0.dispose();
                        indices = nonMaxSuppression_1.nonMaxSuppression(boxes.map(function (box) { return box.rescale(inputSize); }), scores, config_1.IOU_THRESHOLD, true);
                        detections = indices.map(function (idx) {
                            return new FaceDetection_1.FaceDetection(scores[idx], boxes[idx].toRect(), inputDimensions);
                        });
                        return [2 /*return*/, detections];
                }
            });
        });
    };
    TinyYolov2.prototype.postProcess = function (outputTensor, _a) {
        var _this = this;
        var scoreThreshold = _a.scoreThreshold, paddings = _a.paddings;
        var numCells = outputTensor.shape[1];
        var _b = tf.tidy(function () {
            var reshaped = outputTensor.reshape([numCells, numCells, config_1.NUM_BOXES, _this.withSeparableConvs ? 5 : 6]);
            var boxes = reshaped.slice([0, 0, 0, 0], [numCells, numCells, config_1.NUM_BOXES, 4]);
            var scores = reshaped.slice([0, 0, 0, 4], [numCells, numCells, config_1.NUM_BOXES, 1]);
            return [boxes, scores];
        }), boxesTensor = _b[0], scoresTensor = _b[1];
        var results = [];
        for (var row = 0; row < numCells; row++) {
            for (var col = 0; col < numCells; col++) {
                for (var anchor = 0; anchor < config_1.NUM_BOXES; anchor++) {
                    var score = utils_1.sigmoid(scoresTensor.get(row, col, anchor, 0));
                    if (!scoreThreshold || score > scoreThreshold) {
                        var ctX = ((col + utils_1.sigmoid(boxesTensor.get(row, col, anchor, 0))) / numCells) * paddings.x;
                        var ctY = ((row + utils_1.sigmoid(boxesTensor.get(row, col, anchor, 1))) / numCells) * paddings.y;
                        var width = ((Math.exp(boxesTensor.get(row, col, anchor, 2)) * this.anchors[anchor].x) / numCells) * paddings.x;
                        var height = ((Math.exp(boxesTensor.get(row, col, anchor, 3)) * this.anchors[anchor].y) / numCells) * paddings.y;
                        var x = (ctX - (width / 2));
                        var y = (ctY - (height / 2));
                        results.push({
                            box: new BoundingBox_1.BoundingBox(x, y, x + width, y + height),
                            score: score,
                            row: row,
                            col: col,
                            anchor: anchor
                        });
                    }
                }
            }
        }
        boxesTensor.dispose();
        scoresTensor.dispose();
        return results;
    };
    TinyYolov2.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParams_1.loadQuantizedParams(uri, this.withSeparableConvs);
    };
    TinyYolov2.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights, this.withSeparableConvs);
    };
    return TinyYolov2;
}(NeuralNetwork_1.NeuralNetwork));
exports.TinyYolov2 = TinyYolov2;
//# sourceMappingURL=TinyYolov2.js.map