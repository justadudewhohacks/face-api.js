import { __awaiter, __extends, __generator } from "tslib";
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { extendWithFaceDetection } from '../factories/WithFaceDetection';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { TinyFaceDetectorOptions } from '../tinyFaceDetector/TinyFaceDetectorOptions';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
import { nets } from './nets';
import { PredictAllAgeAndGenderTask, PredictSingleAgeAndGenderTask } from './PredictAgeAndGenderTask';
import { PredictAllFaceExpressionsTask, PredictSingleFaceExpressionsTask } from './PredictFaceExpressionsTask';
var DetectFacesTaskBase = /** @class */ (function (_super) {
    __extends(DetectFacesTaskBase, _super);
    function DetectFacesTaskBase(input, options) {
        if (options === void 0) { options = new SsdMobilenetv1Options(); }
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.options = options;
        return _this;
    }
    return DetectFacesTaskBase;
}(ComposableTask));
export { DetectFacesTaskBase };
var DetectAllFacesTask = /** @class */ (function (_super) {
    __extends(DetectAllFacesTask, _super);
    function DetectAllFacesTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFacesTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, input, options, faceDetectionFunction;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, input = _a.input, options = _a.options;
                        if (!(options instanceof MtcnnOptions)) return [3 /*break*/, 2];
                        return [4 /*yield*/, nets.mtcnn.forward(input, options)];
                    case 1: return [2 /*return*/, (_b.sent())
                            .map(function (result) { return result.detection; })];
                    case 2:
                        faceDetectionFunction = options instanceof TinyFaceDetectorOptions
                            ? function (input) { return nets.tinyFaceDetector.locateFaces(input, options); }
                            : (options instanceof SsdMobilenetv1Options
                                ? function (input) { return nets.ssdMobilenetv1.locateFaces(input, options); }
                                : (options instanceof TfjsImageRecognitionBase.TinyYolov2Options
                                    ? function (input) { return nets.tinyYolov2.locateFaces(input, options); }
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
        return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var detections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run()];
                    case 1:
                        detections = _a.sent();
                        return [2 /*return*/, res(detections.map(function (detection) { return extendWithFaceDetection({}, detection); }))];
                }
            });
        }); });
    };
    DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
        return new DetectAllFaceLandmarksTask(this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
    };
    DetectAllFacesTask.prototype.withFaceExpressions = function () {
        return new PredictAllFaceExpressionsTask(this.runAndExtendWithFaceDetections(), this.input);
    };
    DetectAllFacesTask.prototype.withAgeAndGender = function () {
        return new PredictAllAgeAndGenderTask(this.runAndExtendWithFaceDetections(), this.input);
    };
    return DetectAllFacesTask;
}(DetectFacesTaskBase));
export { DetectAllFacesTask };
var DetectSingleFaceTask = /** @class */ (function (_super) {
    __extends(DetectSingleFaceTask, _super);
    function DetectSingleFaceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var faceDetections, faceDetectionWithHighestScore;
            return __generator(this, function (_a) {
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
        return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var detection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run()];
                    case 1:
                        detection = _a.sent();
                        return [2 /*return*/, res(detection ? extendWithFaceDetection({}, detection) : undefined)];
                }
            });
        }); });
    };
    DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
        return new DetectSingleFaceLandmarksTask(this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
    };
    DetectSingleFaceTask.prototype.withFaceExpressions = function () {
        return new PredictSingleFaceExpressionsTask(this.runAndExtendWithFaceDetection(), this.input);
    };
    DetectSingleFaceTask.prototype.withAgeAndGender = function () {
        return new PredictSingleAgeAndGenderTask(this.runAndExtendWithFaceDetection(), this.input);
    };
    return DetectSingleFaceTask;
}(DetectFacesTaskBase));
export { DetectSingleFaceTask };
//# sourceMappingURL=DetectFacesTasks.js.map