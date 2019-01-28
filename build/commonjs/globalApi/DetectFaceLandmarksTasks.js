"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var dom_1 = require("../dom");
var WithFaceLandmarks_1 = require("../factories/WithFaceLandmarks");
var ComposableTask_1 = require("./ComposableTask");
var ComputeFaceDescriptorsTasks_1 = require("./ComputeFaceDescriptorsTasks");
var nets_1 = require("./nets");
var DetectFaceLandmarksTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(DetectFaceLandmarksTaskBase, _super);
    function DetectFaceLandmarksTaskBase(parentTask, input, useTinyLandmarkNet) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.useTinyLandmarkNet = useTinyLandmarkNet;
        return _this;
    }
    Object.defineProperty(DetectFaceLandmarksTaskBase.prototype, "landmarkNet", {
        get: function () {
            return this.useTinyLandmarkNet
                ? nets_1.nets.faceLandmark68TinyNet
                : nets_1.nets.faceLandmark68Net;
        },
        enumerable: true,
        configurable: true
    });
    return DetectFaceLandmarksTaskBase;
}(ComposableTask_1.ComposableTask));
exports.DetectFaceLandmarksTaskBase = DetectFaceLandmarksTaskBase;
var DetectAllFaceLandmarksTask = /** @class */ (function (_super) {
    tslib_1.__extends(DetectAllFaceLandmarksTask, _super);
    function DetectAllFaceLandmarksTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFaceLandmarksTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResults, detections, faces, _a, faceLandmarksByFace;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _b.sent();
                        detections = parentResults.map(function (res) { return res.detection; });
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, dom_1.extractFaceTensors(this.input, detections)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, dom_1.extractFaces(this.input, detections)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        faces = _a;
                        return [4 /*yield*/, Promise.all(faces.map(function (face) { return _this.landmarkNet.detectLandmarks(face); }))];
                    case 6:
                        faceLandmarksByFace = _b.sent();
                        faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                return WithFaceLandmarks_1.extendWithFaceLandmarks(parentResult, faceLandmarksByFace[i]);
                            })];
                }
            });
        });
    };
    DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function () {
        return new ComputeFaceDescriptorsTasks_1.ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return DetectAllFaceLandmarksTask;
}(DetectFaceLandmarksTaskBase));
exports.DetectAllFaceLandmarksTask = DetectAllFaceLandmarksTask;
var DetectSingleFaceLandmarksTask = /** @class */ (function (_super) {
    tslib_1.__extends(DetectSingleFaceLandmarksTask, _super);
    function DetectSingleFaceLandmarksTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceLandmarksTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResult, detection, faces, _a, landmarks;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        detection = parentResult.detection;
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, dom_1.extractFaceTensors(this.input, [detection])];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, dom_1.extractFaces(this.input, [detection])];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        faces = _a;
                        return [4 /*yield*/, this.landmarkNet.detectLandmarks(faces[0])];
                    case 6:
                        landmarks = _b.sent();
                        faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, WithFaceLandmarks_1.extendWithFaceLandmarks(parentResult, landmarks)];
                }
            });
        });
    };
    DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function () {
        return new ComputeFaceDescriptorsTasks_1.ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return DetectSingleFaceLandmarksTask;
}(DetectFaceLandmarksTaskBase));
exports.DetectSingleFaceLandmarksTask = DetectSingleFaceLandmarksTask;
//# sourceMappingURL=DetectFaceLandmarksTasks.js.map