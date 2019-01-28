"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var WithFaceDetection_1 = require("../factories/WithFaceDetection");
var MtcnnOptions_1 = require("../mtcnn/MtcnnOptions");
var SsdMobilenetv1Options_1 = require("../ssdMobilenetv1/SsdMobilenetv1Options");
var TinyFaceDetectorOptions_1 = require("../tinyFaceDetector/TinyFaceDetectorOptions");
var ComposableTask_1 = require("./ComposableTask");
var DetectFaceLandmarksTasks_1 = require("./DetectFaceLandmarksTasks");
var nets_1 = require("./nets");
var PredictFaceExpressionsTask_1 = require("./PredictFaceExpressionsTask");
var DetectFacesTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(DetectFacesTaskBase, _super);
    function DetectFacesTaskBase(input, options) {
        if (options === void 0) { options = new SsdMobilenetv1Options_1.SsdMobilenetv1Options(); }
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.options = options;
        return _this;
    }
    return DetectFacesTaskBase;
}(ComposableTask_1.ComposableTask));
exports.DetectFacesTaskBase = DetectFacesTaskBase;
var DetectAllFacesTask = /** @class */ (function (_super) {
    tslib_1.__extends(DetectAllFacesTask, _super);
    function DetectAllFacesTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFacesTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, input, options, faceDetectionFunction;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, input = _a.input, options = _a.options;
                        if (!(options instanceof MtcnnOptions_1.MtcnnOptions)) return [3 /*break*/, 2];
                        return [4 /*yield*/, nets_1.nets.mtcnn.forward(input, options)];
                    case 1: return [2 /*return*/, (_b.sent())
                            .map(function (result) { return result.detection; })];
                    case 2:
                        faceDetectionFunction = options instanceof TinyFaceDetectorOptions_1.TinyFaceDetectorOptions
                            ? function (input) { return nets_1.nets.tinyFaceDetector.locateFaces(input, options); }
                            : (options instanceof SsdMobilenetv1Options_1.SsdMobilenetv1Options
                                ? function (input) { return nets_1.nets.ssdMobilenetv1.locateFaces(input, options); }
                                : (options instanceof tfjs_image_recognition_base_1.TfjsImageRecognitionBase.TinyYolov2Options
                                    ? function (input) { return nets_1.nets.tinyYolov2.locateFaces(input, options); }
                                    : null));
                        if (!faceDetectionFunction) {
                            throw new Error('detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options');
                        }
                        return [2 /*return*/, faceDetectionFunction(input)];
                }
            });
        });
    };
    DetectAllFacesTask.prototype.runAndExtendWithFaceDetections = function () {
        var _this = this;
        return new Promise(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var detections;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run()];
                    case 1:
                        detections = _a.sent();
                        return [2 /*return*/, res(detections.map(function (detection) { return WithFaceDetection_1.extendWithFaceDetection({}, detection); }))];
                }
            });
        }); });
    };
    DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
        return new DetectFaceLandmarksTasks_1.DetectAllFaceLandmarksTask(this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
    };
    DetectAllFacesTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictAllFaceExpressionsTask(this.runAndExtendWithFaceDetections(), this.input);
    };
    return DetectAllFacesTask;
}(DetectFacesTaskBase));
exports.DetectAllFacesTask = DetectAllFacesTask;
var DetectSingleFaceTask = /** @class */ (function (_super) {
    tslib_1.__extends(DetectSingleFaceTask, _super);
    function DetectSingleFaceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var faceDetections, faceDetectionWithHighestScore;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new DetectAllFacesTask(this.input, this.options)];
                    case 1:
                        faceDetections = _a.sent();
                        faceDetectionWithHighestScore = faceDetections[0];
                        faceDetections.forEach(function (faceDetection) {
                            if (faceDetection.score > faceDetectionWithHighestScore.score) {
                                faceDetectionWithHighestScore = faceDetection;
                            }
                        });
                        return [2 /*return*/, faceDetectionWithHighestScore];
                }
            });
        });
    };
    DetectSingleFaceTask.prototype.runAndExtendWithFaceDetection = function () {
        var _this = this;
        return new Promise(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var detection;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run()];
                    case 1:
                        detection = _a.sent();
                        return [2 /*return*/, res(detection ? WithFaceDetection_1.extendWithFaceDetection({}, detection) : undefined)];
                }
            });
        }); });
    };
    DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
        return new DetectFaceLandmarksTasks_1.DetectSingleFaceLandmarksTask(this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
    };
    DetectSingleFaceTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictSingleFaceExpressionTask(this.runAndExtendWithFaceDetection(), this.input);
    };
    return DetectSingleFaceTask;
}(DetectFacesTaskBase));
exports.DetectSingleFaceTask = DetectSingleFaceTask;
//# sourceMappingURL=DetectFacesTasks.js.map