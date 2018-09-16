"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceDetection_1 = require("../classes/FaceDetection");
var FaceLandmarks5_1 = require("../classes/FaceLandmarks5");
var bgrToRgbTensor_1 = require("./bgrToRgbTensor");
var config_1 = require("./config");
var extractParams_1 = require("./extractParams");
var getDefaultMtcnnForwardParams_1 = require("./getDefaultMtcnnForwardParams");
var getSizesForScale_1 = require("./getSizesForScale");
var loadQuantizedParams_1 = require("./loadQuantizedParams");
var pyramidDown_1 = require("./pyramidDown");
var stage1_1 = require("./stage1");
var stage2_1 = require("./stage2");
var stage3_1 = require("./stage3");
var Mtcnn = /** @class */ (function (_super) {
    tslib_1.__extends(Mtcnn, _super);
    function Mtcnn() {
        return _super.call(this, 'Mtcnn') || this;
    }
    Mtcnn.prototype.forwardInput = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts, out1, out2, out3, results;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        params = this.params;
                        if (!params) {
                            throw new Error('Mtcnn - load model before inference');
                        }
                        inputCanvas = input.canvases[0];
                        if (!inputCanvas) {
                            throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.');
                        }
                        stats = {};
                        tsTotal = Date.now();
                        imgTensor = tf.tidy(function () {
                            return bgrToRgbTensor_1.bgrToRgbTensor(tf.expandDims(tf.fromPixels(inputCanvas)).toFloat());
                        });
                        onReturn = function (results) {
                            // dispose tensors on return
                            imgTensor.dispose();
                            stats.total = Date.now() - tsTotal;
                            return results;
                        };
                        _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                        _b = Object.assign({}, getDefaultMtcnnForwardParams_1.getDefaultMtcnnForwardParams(), forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
                        scales = (scaleSteps || pyramidDown_1.pyramidDown(minFaceSize, scaleFactor, [height, width]))
                            .filter(function (scale) {
                            var sizes = getSizesForScale_1.getSizesForScale(scale, [height, width]);
                            return Math.min(sizes.width, sizes.height) > config_1.CELL_SIZE;
                        })
                            .slice(0, maxNumScales);
                        stats.scales = scales;
                        stats.pyramid = scales.map(function (scale) { return getSizesForScale_1.getSizesForScale(scale, [height, width]); });
                        ts = Date.now();
                        return [4 /*yield*/, stage1_1.stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)];
                    case 1:
                        out1 = _c.sent();
                        stats.total_stage1 = Date.now() - ts;
                        if (!out1.boxes.length) {
                            return [2 /*return*/, onReturn({ results: [], stats: stats })];
                        }
                        stats.stage2_numInputBoxes = out1.boxes.length;
                        // using the inputCanvas to extract and resize the image patches, since it is faster
                        // than doing this on the gpu
                        ts = Date.now();
                        return [4 /*yield*/, stage2_1.stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)];
                    case 2:
                        out2 = _c.sent();
                        stats.total_stage2 = Date.now() - ts;
                        if (!out2.boxes.length) {
                            return [2 /*return*/, onReturn({ results: [], stats: stats })];
                        }
                        stats.stage3_numInputBoxes = out2.boxes.length;
                        ts = Date.now();
                        return [4 /*yield*/, stage3_1.stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)];
                    case 3:
                        out3 = _c.sent();
                        stats.total_stage3 = Date.now() - ts;
                        results = out3.boxes.map(function (box, idx) { return ({
                            faceDetection: new FaceDetection_1.FaceDetection(out3.scores[idx], new tfjs_image_recognition_base_1.Rect(box.left / width, box.top / height, box.width / width, box.height / height), {
                                height: height,
                                width: width
                            }),
                            faceLandmarks: new FaceLandmarks5_1.FaceLandmarks5(out3.points[idx].map(function (pt) { return pt.div(new tfjs_image_recognition_base_1.Point(width, height)); }), { width: width, height: height })
                        }); });
                        return [2 /*return*/, onReturn({ results: results, stats: stats })];
                }
            });
        });
    };
    Mtcnn.prototype.forward = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(),
                            forwardParams])];
                    case 2: return [2 /*return*/, (_b.sent()).results];
                }
            });
        });
    };
    Mtcnn.prototype.forwardWithStats = function (input, forwardParams) {
        if (forwardParams === void 0) { forwardParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.forwardInput;
                        return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(),
                            forwardParams])];
                }
            });
        });
    };
    // none of the param tensors are quantized yet
    Mtcnn.prototype.loadQuantizedParams = function (uri) {
        return loadQuantizedParams_1.loadQuantizedParams(uri);
    };
    Mtcnn.prototype.extractParams = function (weights) {
        return extractParams_1.extractParams(weights);
    };
    return Mtcnn;
}(tfjs_image_recognition_base_1.NeuralNetwork));
exports.Mtcnn = Mtcnn;
//# sourceMappingURL=Mtcnn.js.map