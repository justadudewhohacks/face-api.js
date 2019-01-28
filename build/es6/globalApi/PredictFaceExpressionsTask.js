import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { extractFaces, extractFaceTensors } from '../dom';
import { extendWithFaceExpressions } from '../factories/WithFaceExpressions';
import { ComposableTask } from './ComposableTask';
import { DetectAllFaceLandmarksTask, DetectSingleFaceLandmarksTask } from './DetectFaceLandmarksTasks';
import { nets } from './nets';
var PredictFaceExpressionsTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(PredictFaceExpressionsTaskBase, _super);
    function PredictFaceExpressionsTaskBase(parentTask, input) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        return _this;
    }
    return PredictFaceExpressionsTaskBase;
}(ComposableTask));
export { PredictFaceExpressionsTaskBase };
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
                        return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.faceExpressionNet.predictExpressions(face); }))];
                    case 6:
                        faceExpressionsByFace = _b.sent();
                        faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, parentResults.map(function (parentResult, i) { return extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]); })];
                }
            });
        });
    };
    PredictAllFaceExpressionsTask.prototype.withFaceLandmarks = function () {
        return new DetectAllFaceLandmarksTask(this, this.input, false);
    };
    return PredictAllFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase));
export { PredictAllFaceExpressionsTask };
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
                        return [4 /*yield*/, nets.faceExpressionNet.predictExpressions(faces[0])];
                    case 6:
                        faceExpressions = _b.sent();
                        faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, extendWithFaceExpressions(parentResult, faceExpressions)];
                }
            });
        });
    };
    PredictSingleFaceExpressionTask.prototype.withFaceLandmarks = function () {
        return new DetectSingleFaceLandmarksTask(this, this.input, false);
    };
    return PredictSingleFaceExpressionTask;
}(PredictFaceExpressionsTaskBase));
export { PredictSingleFaceExpressionTask };
//# sourceMappingURL=PredictFaceExpressionsTask.js.map