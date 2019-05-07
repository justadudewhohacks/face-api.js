"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var WithFaceExpressions_1 = require("../factories/WithFaceExpressions");
var ComposableTask_1 = require("./ComposableTask");
var ComputeFaceDescriptorsTasks_1 = require("./ComputeFaceDescriptorsTasks");
var extractFacesAndComputeResults_1 = require("./extractFacesAndComputeResults");
var nets_1 = require("./nets");
var PredictAgeAndGenderTask_1 = require("./PredictAgeAndGenderTask");
var PredictFaceExpressionsTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(PredictFaceExpressionsTaskBase, _super);
    function PredictFaceExpressionsTaskBase(parentTask, input, extractedFaces) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.extractedFaces = extractedFaces;
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
            var parentResults, faceExpressionsByFace;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _a.sent();
                        return [4 /*yield*/, extractFacesAndComputeResults_1.extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets_1.nets.faceExpressionNet.predictExpressions(face); }))];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, this.extractedFaces)];
                    case 2:
                        faceExpressionsByFace = _a.sent();
                        return [2 /*return*/, parentResults.map(function (parentResult, i) { return WithFaceExpressions_1.extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]); })];
                }
            });
        });
    };
    PredictAllFaceExpressionsTask.prototype.withAgeAndGender = function () {
        return new PredictAgeAndGenderTask_1.PredictAllAgeAndGenderTask(this, this.input);
    };
    return PredictAllFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase));
exports.PredictAllFaceExpressionsTask = PredictAllFaceExpressionsTask;
var PredictSingleFaceExpressionsTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictSingleFaceExpressionsTask, _super);
    function PredictSingleFaceExpressionsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResult, faceExpressions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _a.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, extractFacesAndComputeResults_1.extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets_1.nets.faceExpressionNet.predictExpressions(face); }, this.extractedFaces)];
                    case 2:
                        faceExpressions = _a.sent();
                        return [2 /*return*/, WithFaceExpressions_1.extendWithFaceExpressions(parentResult, faceExpressions)];
                }
            });
        });
    };
    PredictSingleFaceExpressionsTask.prototype.withAgeAndGender = function () {
        return new PredictAgeAndGenderTask_1.PredictSingleAgeAndGenderTask(this, this.input);
    };
    return PredictSingleFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase));
exports.PredictSingleFaceExpressionsTask = PredictSingleFaceExpressionsTask;
var PredictAllFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictAllFaceExpressionsWithFaceAlignmentTask, _super);
    function PredictAllFaceExpressionsWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
        return new PredictAgeAndGenderTask_1.PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
        return new ComputeFaceDescriptorsTasks_1.ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return PredictAllFaceExpressionsWithFaceAlignmentTask;
}(PredictAllFaceExpressionsTask));
exports.PredictAllFaceExpressionsWithFaceAlignmentTask = PredictAllFaceExpressionsWithFaceAlignmentTask;
var PredictSingleFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictSingleFaceExpressionsWithFaceAlignmentTask, _super);
    function PredictSingleFaceExpressionsWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
        return new PredictAgeAndGenderTask_1.PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
        return new ComputeFaceDescriptorsTasks_1.ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return PredictSingleFaceExpressionsWithFaceAlignmentTask;
}(PredictSingleFaceExpressionsTask));
exports.PredictSingleFaceExpressionsWithFaceAlignmentTask = PredictSingleFaceExpressionsWithFaceAlignmentTask;
//# sourceMappingURL=PredictFaceExpressionsTask.js.map