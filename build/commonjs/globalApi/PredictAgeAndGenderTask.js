"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var WithAge_1 = require("../factories/WithAge");
var WithGender_1 = require("../factories/WithGender");
var ComposableTask_1 = require("./ComposableTask");
var ComputeFaceDescriptorsTasks_1 = require("./ComputeFaceDescriptorsTasks");
var extractFacesAndComputeResults_1 = require("./extractFacesAndComputeResults");
var nets_1 = require("./nets");
var PredictFaceExpressionsTask_1 = require("./PredictFaceExpressionsTask");
var PredictAgeAndGenderTaskBase = /** @class */ (function (_super) {
    tslib_1.__extends(PredictAgeAndGenderTaskBase, _super);
    function PredictAgeAndGenderTaskBase(parentTask, input, extractedFaces) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.extractedFaces = extractedFaces;
        return _this;
    }
    return PredictAgeAndGenderTaskBase;
}(ComposableTask_1.ComposableTask));
exports.PredictAgeAndGenderTaskBase = PredictAgeAndGenderTaskBase;
var PredictAllAgeAndGenderTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictAllAgeAndGenderTask, _super);
    function PredictAllAgeAndGenderTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResults, ageAndGenderByFace;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _a.sent();
                        return [4 /*yield*/, extractFacesAndComputeResults_1.extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets_1.nets.ageGenderNet.predictAgeAndGender(face); }))];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, this.extractedFaces)];
                    case 2:
                        ageAndGenderByFace = _a.sent();
                        return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                var _a = ageAndGenderByFace[i], age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                                return WithAge_1.extendWithAge(WithGender_1.extendWithGender(parentResult, gender, genderProbability), age);
                            })];
                }
            });
        });
    };
    PredictAllAgeAndGenderTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictAllFaceExpressionsTask(this, this.input);
    };
    return PredictAllAgeAndGenderTask;
}(PredictAgeAndGenderTaskBase));
exports.PredictAllAgeAndGenderTask = PredictAllAgeAndGenderTask;
var PredictSingleAgeAndGenderTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictSingleAgeAndGenderTask, _super);
    function PredictSingleAgeAndGenderTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderTask.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parentResult, _a, age, gender, genderProbability;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, extractFacesAndComputeResults_1.extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets_1.nets.ageGenderNet.predictAgeAndGender(face); }, this.extractedFaces)];
                    case 2:
                        _a = _b.sent(), age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                        return [2 /*return*/, WithAge_1.extendWithAge(WithGender_1.extendWithGender(parentResult, gender, genderProbability), age)];
                }
            });
        });
    };
    PredictSingleAgeAndGenderTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictSingleFaceExpressionsTask(this, this.input);
    };
    return PredictSingleAgeAndGenderTask;
}(PredictAgeAndGenderTaskBase));
exports.PredictSingleAgeAndGenderTask = PredictSingleAgeAndGenderTask;
var PredictAllAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictAllAgeAndGenderWithFaceAlignmentTask, _super);
    function PredictAllAgeAndGenderWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
        return new ComputeFaceDescriptorsTasks_1.ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return PredictAllAgeAndGenderWithFaceAlignmentTask;
}(PredictAllAgeAndGenderTask));
exports.PredictAllAgeAndGenderWithFaceAlignmentTask = PredictAllAgeAndGenderWithFaceAlignmentTask;
var PredictSingleAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
    tslib_1.__extends(PredictSingleAgeAndGenderWithFaceAlignmentTask, _super);
    function PredictSingleAgeAndGenderWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
        return new PredictFaceExpressionsTask_1.PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
        return new ComputeFaceDescriptorsTasks_1.ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return PredictSingleAgeAndGenderWithFaceAlignmentTask;
}(PredictSingleAgeAndGenderTask));
exports.PredictSingleAgeAndGenderWithFaceAlignmentTask = PredictSingleAgeAndGenderWithFaceAlignmentTask;
//# sourceMappingURL=PredictAgeAndGenderTask.js.map