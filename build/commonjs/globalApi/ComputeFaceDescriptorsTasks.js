"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var FullFaceDescription_1 = require("../classes/FullFaceDescription");
var dom_1 = require("../dom");
var ComposableTask_1 = require("./ComposableTask");
var nets_1 = require("./nets");
var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeFaceDescriptorsTaskBase, _super);
    function ComputeFaceDescriptorsTaskBase(detectFaceLandmarksTask, input) {
        var _this = _super.call(this) || this;
        _this.detectFaceLandmarksTask = detectFaceLandmarksTask;
        _this.input = input;
        return _this;
    }
    return ComputeFaceDescriptorsTaskBase;
}(ComposableTask_1.ComposableTask));
exports.ComputeFaceDescriptorsTaskBase = ComputeFaceDescriptorsTaskBase;
var ComputeAllFaceDescriptorsTask = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeAllFaceDescriptorsTask, _super);
    function ComputeAllFaceDescriptorsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeAllFaceDescriptorsTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var facesWithLandmarks, alignedRects, alignedFaces, _a, fullFaceDescriptions;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.detectFaceLandmarksTask];
                    case 1:
                        facesWithLandmarks = _b.sent();
                        alignedRects = facesWithLandmarks.map(function (_a) {
                            var alignedRect = _a.alignedRect;
                            return alignedRect;
                        });
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, dom_1.extractFaceTensors(this.input, alignedRects)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, dom_1.extractFaces(this.input, alignedRects)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        alignedFaces = _a;
                        return [4 /*yield*/, Promise.all(facesWithLandmarks.map(function (_a, i) {
                                var detection = _a.detection, landmarks = _a.landmarks;
                                return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    var descriptor;
                                    return tslib_1.__generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0: return [4 /*yield*/, nets_1.nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[i])];
                                            case 1:
                                                descriptor = _b.sent();
                                                return [2 /*return*/, new FullFaceDescription_1.FullFaceDescription(detection, landmarks, descriptor)];
                                        }
                                    });
                                });
                            }))];
                    case 6:
                        fullFaceDescriptions = _b.sent();
                        alignedFaces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, fullFaceDescriptions];
                }
            });
        });
    };
    return ComputeAllFaceDescriptorsTask;
}(ComputeFaceDescriptorsTaskBase));
exports.ComputeAllFaceDescriptorsTask = ComputeAllFaceDescriptorsTask;
var ComputeSingleFaceDescriptorTask = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeSingleFaceDescriptorTask, _super);
    function ComputeSingleFaceDescriptorTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeSingleFaceDescriptorTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detectionWithLandmarks, detection, landmarks, alignedRect, alignedFaces, _a, descriptor;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.detectFaceLandmarksTask];
                    case 1:
                        detectionWithLandmarks = _b.sent();
                        if (!detectionWithLandmarks) {
                            return [2 /*return*/];
                        }
                        detection = detectionWithLandmarks.detection, landmarks = detectionWithLandmarks.landmarks, alignedRect = detectionWithLandmarks.alignedRect;
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, dom_1.extractFaceTensors(this.input, [alignedRect])];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, dom_1.extractFaces(this.input, [alignedRect])];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        alignedFaces = _a;
                        return [4 /*yield*/, nets_1.nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[0])];
                    case 6:
                        descriptor = _b.sent();
                        alignedFaces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, new FullFaceDescription_1.FullFaceDescription(detection, landmarks, descriptor)];
                }
            });
        });
    };
    return ComputeSingleFaceDescriptorTask;
}(ComputeFaceDescriptorsTaskBase));
exports.ComputeSingleFaceDescriptorTask = ComputeSingleFaceDescriptorTask;
//# sourceMappingURL=ComputeFaceDescriptorsTasks.js.map