import * as tslib_1 from "tslib";
import { TinyYolov2Options } from 'tfjs-tiny-yolov2';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { TinyFaceDetectorOptions } from '../tinyFaceDetector/TinyFaceDetectorOptions';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
import { nets } from './nets';
var DetectFacesTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(DetectFacesTaskBase, _super);
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
                        if (!(options instanceof MtcnnOptions)) return [3 /*break*/, 2];
                        return [4 /*yield*/, nets.mtcnn.forward(input, options)];
                    case 1: return [2 /*return*/, (_b.sent())
                            .map(function (result) { return result.faceDetection; })];
                    case 2:
                        faceDetectionFunction = options instanceof TinyFaceDetectorOptions
                            ? function (input) { return nets.tinyFaceDetector.locateFaces(input, options); }
                            : (options instanceof SsdMobilenetv1Options
                                ? function (input) { return nets.ssdMobilenetv1.locateFaces(input, options); }
                                : (options instanceof TinyYolov2Options
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
    DetectAllFacesTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
        return new DetectAllFaceLandmarksTask(this, this.input, useTinyLandmarkNet);
    };
    return DetectAllFacesTask;
}(DetectFacesTaskBase));
export { DetectAllFacesTask };
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
    DetectSingleFaceTask.prototype.withFaceLandmarks = function (useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) { useTinyLandmarkNet = false; }
        return new DetectSingleFaceLandmarksTask(this, this.input, useTinyLandmarkNet);
    };
    return DetectSingleFaceTask;
}(DetectFacesTaskBase));
export { DetectSingleFaceTask };
//# sourceMappingURL=DetectFacesTasks.js.map