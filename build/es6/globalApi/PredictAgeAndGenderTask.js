import { __awaiter, __extends, __generator } from "tslib";
import { extendWithAge } from '../factories/WithAge';
import { extendWithGender } from '../factories/WithGender';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { extractAllFacesAndComputeResults, extractSingleFaceAndComputeResult } from './extractFacesAndComputeResults';
import { nets } from './nets';
import { PredictAllFaceExpressionsTask, PredictAllFaceExpressionsWithFaceAlignmentTask, PredictSingleFaceExpressionsTask, PredictSingleFaceExpressionsWithFaceAlignmentTask, } from './PredictFaceExpressionsTask';
var PredictAgeAndGenderTaskBase = /** @class */ (function (_super) {
    __extends(PredictAgeAndGenderTaskBase, _super);
    function PredictAgeAndGenderTaskBase(parentTask, input, extractedFaces) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.extractedFaces = extractedFaces;
        return _this;
    }
    return PredictAgeAndGenderTaskBase;
}(ComposableTask));
export { PredictAgeAndGenderTaskBase };
var PredictAllAgeAndGenderTask = /** @class */ (function (_super) {
    __extends(PredictAllAgeAndGenderTask, _super);
    function PredictAllAgeAndGenderTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parentResults, ageAndGenderByFace;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _a.sent();
                        return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.ageGenderNet.predictAgeAndGender(face); }))];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, this.extractedFaces)];
                    case 2:
                        ageAndGenderByFace = _a.sent();
                        return [2 /*return*/, parentResults.map(function (parentResult, i) {
                                var _a = ageAndGenderByFace[i], age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                                return extendWithAge(extendWithGender(parentResult, gender, genderProbability), age);
                            })];
                }
            });
        });
    };
    PredictAllAgeAndGenderTask.prototype.withFaceExpressions = function () {
        return new PredictAllFaceExpressionsTask(this, this.input);
    };
    return PredictAllAgeAndGenderTask;
}(PredictAgeAndGenderTaskBase));
export { PredictAllAgeAndGenderTask };
var PredictSingleAgeAndGenderTask = /** @class */ (function (_super) {
    __extends(PredictSingleAgeAndGenderTask, _super);
    function PredictSingleAgeAndGenderTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parentResult, _a, age, gender, genderProbability;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.ageGenderNet.predictAgeAndGender(face); }, this.extractedFaces)];
                    case 2:
                        _a = _b.sent(), age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                        return [2 /*return*/, extendWithAge(extendWithGender(parentResult, gender, genderProbability), age)];
                }
            });
        });
    };
    PredictSingleAgeAndGenderTask.prototype.withFaceExpressions = function () {
        return new PredictSingleFaceExpressionsTask(this, this.input);
    };
    return PredictSingleAgeAndGenderTask;
}(PredictAgeAndGenderTaskBase));
export { PredictSingleAgeAndGenderTask };
var PredictAllAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
    __extends(PredictAllAgeAndGenderWithFaceAlignmentTask, _super);
    function PredictAllAgeAndGenderWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
        return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
        return new ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return PredictAllAgeAndGenderWithFaceAlignmentTask;
}(PredictAllAgeAndGenderTask));
export { PredictAllAgeAndGenderWithFaceAlignmentTask };
var PredictSingleAgeAndGenderWithFaceAlignmentTask = /** @class */ (function (_super) {
    __extends(PredictSingleAgeAndGenderWithFaceAlignmentTask, _super);
    function PredictSingleAgeAndGenderWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function () {
        return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
        return new ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return PredictSingleAgeAndGenderWithFaceAlignmentTask;
}(PredictSingleAgeAndGenderTask));
export { PredictSingleAgeAndGenderWithFaceAlignmentTask };
//# sourceMappingURL=PredictAgeAndGenderTask.js.map