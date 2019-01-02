"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
var dom_1 = require("../dom");
var WithFaceExpressions_1 = require("../factories/WithFaceExpressions");
var ComposableTask_1 = require("./ComposableTask");
var DetectFaceLandmarksTasks_1 = require("./DetectFaceLandmarksTasks");
var nets_1 = require("./nets");
var PredictFaceExpressionsTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(PredictFaceExpressionsTaskBase, _super);
    function PredictFaceExpressionsTaskBase(parentTask, input) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        return _this;
    }
    return PredictFaceExpressionsTaskBase;
}(ComposableTask_1.ComposableTask));
exports.PredictFaceExpressionsTaskBase = PredictFaceExpressionsTaskBase;
var PredictAllFaceExpressionsTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictAllFaceExpressionsTask, _super);
    function PredictAllFaceExpressionsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResults, detections, faces, _a, faceExpressionsByFace;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _b.sent();
                        detections = parentResults.map(function (parentResult) { return parentResult.detection; });
                        if (!(this.input instanceof tfjs_tiny_yolov2_1.tf.Tensor)) return [3 /*break*/, 3];
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
                        return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets_1.nets.faceExpressionNet.predictExpressions(face); }))];
                    case 6:
                        faceExpressionsByFace = _b.sent();
                        faces.forEach(function (f) { return f instanceof tfjs_tiny_yolov2_1.tf.Tensor && f.dispose(); });
                        return [2 /*return*/, parentResults.map(function (parentResult, i) { return WithFaceExpressions_1.extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]); })];
                }
            });
        });
    };
    PredictAllFaceExpressionsTask.prototype.withFaceLandmarks = function () {
        return new DetectFaceLandmarksTasks_1.DetectAllFaceLandmarksTask(this, this.input, false);
    };
    return PredictAllFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase));
exports.PredictAllFaceExpressionsTask = PredictAllFaceExpressionsTask;
var PredictSingleFaceExpressionTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictSingleFaceExpressionTask, _super);
    function PredictSingleFaceExpressionTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResult, detection, faces, _a, faceExpressions;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        detection = parentResult.detection;
                        if (!(this.input instanceof tfjs_tiny_yolov2_1.tf.Tensor)) return [3 /*break*/, 3];
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
                        return [4 /*yield*/, nets_1.nets.faceExpressionNet.predictExpressions(faces[0])];
                    case 6:
                        faceExpressions = _b.sent();
                        faces.forEach(function (f) { return f instanceof tfjs_tiny_yolov2_1.tf.Tensor && f.dispose(); });
                        return [2 /*return*/, WithFaceExpressions_1.extendWithFaceExpressions(parentResult, faceExpressions)];
                }
            });
        });
    };
    PredictSingleFaceExpressionTask.prototype.withFaceLandmarks = function () {
        return new DetectFaceLandmarksTasks_1.DetectSingleFaceLandmarksTask(this, this.input, false);
    };
    return PredictSingleFaceExpressionTask;
}(PredictFaceExpressionsTaskBase));
exports.PredictSingleFaceExpressionTask = PredictSingleFaceExpressionTask;
//# sourceMappingURL=PredictFaceExpressionsTask.js.map