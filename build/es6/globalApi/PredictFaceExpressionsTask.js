import { __awaiter, __extends, __generator } from "tslib";
import { extendWithFaceExpressions } from '../factories/WithFaceExpressions';
import { ComposableTask } from './ComposableTask';
import { ComputeAllFaceDescriptorsTask, ComputeSingleFaceDescriptorTask } from './ComputeFaceDescriptorsTasks';
import { extractAllFacesAndComputeResults, extractSingleFaceAndComputeResult } from './extractFacesAndComputeResults';
import { nets } from './nets';
import { PredictAllAgeAndGenderTask, PredictAllAgeAndGenderWithFaceAlignmentTask, PredictSingleAgeAndGenderTask, PredictSingleAgeAndGenderWithFaceAlignmentTask, } from './PredictAgeAndGenderTask';
var PredictFaceExpressionsTaskBase = /** @class */ (function (_super) {
    __extends(PredictFaceExpressionsTaskBase, _super);
    function PredictFaceExpressionsTaskBase(parentTask, input, extractedFaces) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.extractedFaces = extractedFaces;
        return _this;
    }
    return PredictFaceExpressionsTaskBase;
}(ComposableTask));
export { PredictFaceExpressionsTaskBase };
var PredictAllFaceExpressionsTask = /** @class */ (function (_super) {
    __extends(PredictAllFaceExpressionsTask, _super);
    function PredictAllFaceExpressionsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parentResults, faceExpressionsByFace;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _a.sent();
                        return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Promise.all(faces.map(function (face) { return nets.faceExpressionNet.predictExpressions(face); }))];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, this.extractedFaces)];
                    case 2:
                        faceExpressionsByFace = _a.sent();
                        return [2 /*return*/, parentResults.map(function (parentResult, i) { return extendWithFaceExpressions(parentResult, faceExpressionsByFace[i]); })];
                }
            });
        });
    };
    PredictAllFaceExpressionsTask.prototype.withAgeAndGender = function () {
        return new PredictAllAgeAndGenderTask(this, this.input);
    };
    return PredictAllFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase));
export { PredictAllFaceExpressionsTask };
var PredictSingleFaceExpressionsTask = /** @class */ (function (_super) {
    __extends(PredictSingleFaceExpressionsTask, _super);
    function PredictSingleFaceExpressionsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parentResult, faceExpressions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _a.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.faceExpressionNet.predictExpressions(face); }, this.extractedFaces)];
                    case 2:
                        faceExpressions = _a.sent();
                        return [2 /*return*/, extendWithFaceExpressions(parentResult, faceExpressions)];
                }
            });
        });
    };
    PredictSingleFaceExpressionsTask.prototype.withAgeAndGender = function () {
        return new PredictSingleAgeAndGenderTask(this, this.input);
    };
    return PredictSingleFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase));
export { PredictSingleFaceExpressionsTask };
var PredictAllFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
    __extends(PredictAllFaceExpressionsWithFaceAlignmentTask, _super);
    function PredictAllFaceExpressionsWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
        return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptors = function () {
        return new ComputeAllFaceDescriptorsTask(this, this.input);
    };
    return PredictAllFaceExpressionsWithFaceAlignmentTask;
}(PredictAllFaceExpressionsTask));
export { PredictAllFaceExpressionsWithFaceAlignmentTask };
var PredictSingleFaceExpressionsWithFaceAlignmentTask = /** @class */ (function (_super) {
    __extends(PredictSingleFaceExpressionsWithFaceAlignmentTask, _super);
    function PredictSingleFaceExpressionsWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function () {
        return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptor = function () {
        return new ComputeSingleFaceDescriptorTask(this, this.input);
    };
    return PredictSingleFaceExpressionsWithFaceAlignmentTask;
}(PredictSingleFaceExpressionsTask));
export { PredictSingleFaceExpressionsWithFaceAlignmentTask };
//# sourceMappingURL=PredictFaceExpressionsTask.js.map