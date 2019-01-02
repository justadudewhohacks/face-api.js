import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { extractFaces, extractFaceTensors } from '../dom';
import { extendWithFaceDescriptor } from '../factories/WithFaceDescriptor';
import { ComposableTask } from './ComposableTask';
import { nets } from './nets';
var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeFaceDescriptorsTaskBase, _super);
    function ComputeFaceDescriptorsTaskBase(parentTask, input) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        return _this;
    }
    return ComputeFaceDescriptorsTaskBase;
}(ComposableTask));
export { ComputeFaceDescriptorsTaskBase };
var ComputeAllFaceDescriptorsTask = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeAllFaceDescriptorsTask, _super);
    function ComputeAllFaceDescriptorsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeAllFaceDescriptorsTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var parentResults, alignedRects, alignedFaces, _a, results;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _b.sent();
                        alignedRects = parentResults.map(function (_a) {
                            var alignedRect = _a.alignedRect;
                            return alignedRect;
                        });
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, extractFaceTensors(this.input, alignedRects)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, extractFaces(this.input, alignedRects)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        alignedFaces = _a;
                        return [4 /*yield*/, Promise.all(parentResults.map(function (parentResult, i) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var descriptor;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[i])];
                                        case 1:
                                            descriptor = _a.sent();
                                            return [2 /*return*/, extendWithFaceDescriptor(parentResult, descriptor)];
                                    }
                                });
                            }); }))];
                    case 6:
                        results = _b.sent();
                        alignedFaces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, results];
                }
            });
        });
    };
    return ComputeAllFaceDescriptorsTask;
}(ComputeFaceDescriptorsTaskBase));
export { ComputeAllFaceDescriptorsTask };
var ComputeSingleFaceDescriptorTask = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeSingleFaceDescriptorTask, _super);
    function ComputeSingleFaceDescriptorTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeSingleFaceDescriptorTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResult, alignedRect, alignedFaces, _a, descriptor;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        alignedRect = parentResult.alignedRect;
                        if (!(this.input instanceof tf.Tensor)) return [3 /*break*/, 3];
                        return [4 /*yield*/, extractFaceTensors(this.input, [alignedRect])];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, extractFaces(this.input, [alignedRect])];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        alignedFaces = _a;
                        return [4 /*yield*/, nets.faceRecognitionNet.computeFaceDescriptor(alignedFaces[0])];
                    case 6:
                        descriptor = _b.sent();
                        alignedFaces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                        return [2 /*return*/, extendWithFaceDescriptor(parentResult, descriptor)];
                }
            });
        });
    };
    return ComputeSingleFaceDescriptorTask;
}(ComputeFaceDescriptorsTaskBase));
export { ComputeSingleFaceDescriptorTask };
//# sourceMappingURL=ComputeFaceDescriptorsTasks.js.map