"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var WithFaceDescriptor_1 = require("../factories/WithFaceDescriptor");
var ComposableTask_1 = require("./ComposableTask");
var extractFacesAndComputeResults_1 = require("./extractFacesAndComputeResults");
var nets_1 = require("./nets");
var PredictAgeAndGenderTask_1 = require("./PredictAgeAndGenderTask");
var PredictFaceExpressionsTask_1 = require("./PredictFaceExpressionsTask");
var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(ComputeFaceDescriptorsTaskBase, _super);
    function ComputeFaceDescriptorsTaskBase(parentTask, input) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
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
            var parentResults, descriptors;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _a.sent();
                        return [4 /*yield*/, extractFacesAndComputeResults_1.extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return Promise.all(faces.map(function (face) {
                                return nets_1.nets.faceRecognitionNet.computeFaceDescriptor(face);
                            })); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                    case 2:
                        descriptors = _a.sent();
                        return [2 /*return*/, descriptors.map(function (descriptor, i) { return WithFaceDescriptor_1.extendWithFaceDescriptor(parentResults[i], descriptor); })];
                }
            });
        });
    };
    ComputeAllFaceDescriptorsTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    ComputeAllFaceDescriptorsTask.prototype.withAgeAndGender = function () {
        return new PredictAgeAndGenderTask_1.PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
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
            var parentResult, descriptor;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _a.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, extractFacesAndComputeResults_1.extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets_1.nets.faceRecognitionNet.computeFaceDescriptor(face); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                    case 2:
                        descriptor = _a.sent();
                        return [2 /*return*/, WithFaceDescriptor_1.extendWithFaceDescriptor(parentResult, descriptor)];
                }
            });
        });
    };
    ComputeSingleFaceDescriptorTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    ComputeSingleFaceDescriptorTask.prototype.withAgeAndGender = function () {
        return new PredictAgeAndGenderTask_1.PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    return ComputeSingleFaceDescriptorTask;
}(ComputeFaceDescriptorsTaskBase));
exports.ComputeSingleFaceDescriptorTask = ComputeSingleFaceDescriptorTask;
//# sourceMappingURL=ComputeFaceDescriptorsTasks.js.map