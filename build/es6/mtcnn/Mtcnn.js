import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { NeuralNetwork, Point, Rect, toNetInput } from 'tfjs-image-recognition-base';
import { FaceDetection } from '../classes/FaceDetection';
import { FaceLandmarks5 } from '../classes/FaceLandmarks5';
import { extendWithFaceDetection, extendWithFaceLandmarks } from '../factories';
import { bgrToRgbTensor } from './bgrToRgbTensor';
import { CELL_SIZE } from './config';
import { extractParams } from './extractParams';
import { extractParamsFromWeigthMap } from './extractParamsFromWeigthMap';
import { getSizesForScale } from './getSizesForScale';
import { MtcnnOptions } from './MtcnnOptions';
import { pyramidDown } from './pyramidDown';
import { stage1 } from './stage1';
import { stage2 } from './stage2';
import { stage3 } from './stage3';
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
                            return bgrToRgbTensor(tf.expandDims(tf.browser.fromPixels(inputCanvas)).toFloat());
                        });
                        onReturn = function (results) {
                            // dispose tensors on return
                            imgTensor.dispose();
                            stats.total = Date.now() - tsTotal;
                            return results;
                        };
                        _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                        _b = new MtcnnOptions(forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
                        scales = (scaleSteps || pyramidDown(minFaceSize, scaleFactor, [height, width]))
                            .filter(function (scale) {
                            var sizes = getSizesForScale(scale, [height, width]);
                            return Math.min(sizes.width, sizes.height) > CELL_SIZE;
                        })
                            .slice(0, maxNumScales);
                        stats.scales = scales;
                        stats.pyramid = scales.map(function (scale) { return getSizesForScale(scale, [height, width]); });
                        ts = Date.now();
                        return [4 /*yield*/, stage1(imgTensor, scales, scoreThresholds[0], params.pnet, stats)];
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
                        return [4 /*yield*/, stage2(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)];
                    case 2:
                        out2 = _c.sent();
                        stats.total_stage2 = Date.now() - ts;
                        if (!out2.boxes.length) {
                            return [2 /*return*/, onReturn({ results: [], stats: stats })];
                        }
                        stats.stage3_numInputBoxes = out2.boxes.length;
                        ts = Date.now();
                        return [4 /*yield*/, stage3(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)];
                    case 3:
                        out3 = _c.sent();
                        stats.total_stage3 = Date.now() - ts;
                        results = out3.boxes.map(function (box, idx) { return extendWithFaceLandmarks(extendWithFaceDetection({}, new FaceDetection(out3.scores[idx], new Rect(box.left / width, box.top / height, box.width / width, box.height / height), {
                            height: height,
                            width: width
                        })), new FaceLandmarks5(out3.points[idx].map(function (pt) { return pt.sub(new Point(box.left, box.top)).div(new Point(box.width, box.height)); }), { width: box.width, height: box.height })); });
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
                        return [4 /*yield*/, toNetInput(input)];
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
                        return [4 /*yield*/, toNetInput(input)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent(),
                            forwardParams])];
                }
            });
        });
    };
    Mtcnn.prototype.getDefaultModelName = function () {
        return 'mtcnn_model';
    };
    Mtcnn.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return extractParamsFromWeigthMap(weightMap);
    };
    Mtcnn.prototype.extractParams = function (weights) {
        return extractParams(weights);
    };
    return Mtcnn;
}(NeuralNetwork));
export { Mtcnn };
//# sourceMappingURL=Mtcnn.js.map