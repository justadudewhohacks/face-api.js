import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { FaceDetectionWithLandmarks } from '../classes/FaceDetectionWithLandmarks';
import { extractFaces, extractFaceTensors } from '../dom';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { nets } from './nets';
var DetectFaceLandmarksTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(DetectFaceLandmarksTaskBase, _super);
    function DetectFaceLandmarksTaskBase(detectFacesTask, input, useTinyLandmarkNet) {
        var _this = _super.call(this) || this;
        _this.detectFacesTask = detectFacesTask;
        _this.input = input;
        _this.useTinyLandmarkNet = useTinyLandmarkNet;
        return _this;
    }
    Object.defineProperty(DetectFaceLandmarksTaskBase.prototype, "landmarkNet", {
        get: function () {
            return this.useTinyLandmarkNet
                ? nets.faceLandmark68TinyNet
                : nets.faceLandmark68Net;
        },
        enumerable: true,
        configurable: true
    });
    return DetectFaceLandmarksTaskBase;
}(ComposableTask));
export { DetectFaceLandmarksTaskBase };
var DetectAllFaceLandmarksTask = /** @class */ (function (_super) {
    tslib_1.__extends(DetectAllFaceLandmarksTask, _super);
    function DetectAllFaceLandmarksTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFaceLandmarksTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var detections, faces, _a, faceLandmarksByFace;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.detectFacesTask];
                    case 1:
                        detections = _b.sent();
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, extractFaceTensors(this.input, detections)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, extractFaces(this.input, detections)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        faces = _a;
                        return [4 /*yield*/, Promise.all(faces.map(function (face) { return _this.landmarkNet.detectLandmarks(face); }))];
                    case 6:
                        faceLandmarksByFace = _b.sent();
                        faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, detections.map(function (detection, i) {
                                return new FaceDetectionWithLandmarks(detection, faceLandmarksByFace[i]);
                            })];
                }
            });
        });
    };
    DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function () {
        return new ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return DetectAllFaceLandmarksTask;
}(DetectFaceLandmarksTaskBase));
export { DetectAllFaceLandmarksTask };
var DetectSingleFaceLandmarksTask = /** @class */ (function (_super) {
    tslib_1.__extends(DetectSingleFaceLandmarksTask, _super);
    function DetectSingleFaceLandmarksTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceLandmarksTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detection, faces, _a, landmarks;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.detectFacesTask];
                    case 1:
                        detection = _b.sent();
                        if (!detection) {
                            return [2 /*return*/];
                        }
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, extractFaceTensors(this.input, [detection])];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, extractFaces(this.input, [detection])];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        faces = _a;
                        return [4 /*yield*/, this.landmarkNet.detectLandmarks(faces[0])];
                    case 6:
                        landmarks = _b.sent();
                        faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, new FaceDetectionWithLandmarks(detection, landmarks)];
                }
            });
        });
    };
    DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function () {
        return new ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return DetectSingleFaceLandmarksTask;
}(DetectFaceLandmarksTaskBase));
export { DetectSingleFaceLandmarksTask };
//# sourceMappingURL=DetectFaceLandmarksTasks.js.map