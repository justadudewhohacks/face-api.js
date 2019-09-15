import { __awaiter, __extends, __generator } from "tslib";
import { extendWithFaceDescriptor } from '../factories/WithFaceDescriptor';
import { ComposableTask } from './ComposableTask';
import { extractAllFacesAndComputeResults, extractSingleFaceAndComputeResult } from './extractFacesAndComputeResults';
import { nets } from './nets';
import { PredictAllAgeAndGenderWithFaceAlignmentTask, PredictSingleAgeAndGenderWithFaceAlignmentTask, } from './PredictAgeAndGenderTask';
import { PredictAllFaceExpressionsWithFaceAlignmentTask, PredictSingleFaceExpressionsWithFaceAlignmentTask, } from './PredictFaceExpressionsTask';
var ComputeFaceDescriptorsTaskBase = /** @class */ (function (_super) {
    __extends(ComputeFaceDescriptorsTaskBase, _super);
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
    __extends(ComputeAllFaceDescriptorsTask, _super);
    function ComputeAllFaceDescriptorsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeAllFaceDescriptorsTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parentResults, descriptors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResults = _a.sent();
                        return [4 /*yield*/, extractAllFacesAndComputeResults(parentResults, this.input, function (faces) { return Promise.all(faces.map(function (face) {
                                return nets.faceRecognitionNet.computeFaceDescriptor(face);
                            })); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                    case 2:
                        descriptors = _a.sent();
                        return [2 /*return*/, descriptors.map(function (descriptor, i) { return extendWithFaceDescriptor(parentResults[i], descriptor); })];
                }
            });
        });
    };
    ComputeAllFaceDescriptorsTask.prototype.withFaceExpressions = function () {
        return new PredictAllFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    ComputeAllFaceDescriptorsTask.prototype.withAgeAndGender = function () {
        return new PredictAllAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    return ComputeAllFaceDescriptorsTask;
}(ComputeFaceDescriptorsTaskBase));
export { ComputeAllFaceDescriptorsTask };
var ComputeSingleFaceDescriptorTask = /** @class */ (function (_super) {
    __extends(ComputeSingleFaceDescriptorTask, _super);
    function ComputeSingleFaceDescriptorTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeSingleFaceDescriptorTask.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parentResult, descriptor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentTask];
                    case 1:
                        parentResult = _a.sent();
                        if (!parentResult) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, extractSingleFaceAndComputeResult(parentResult, this.input, function (face) { return nets.faceRecognitionNet.computeFaceDescriptor(face); }, null, function (parentResult) { return parentResult.landmarks.align(null, { useDlibAlignment: true }); })];
                    case 2:
                        descriptor = _a.sent();
                        return [2 /*return*/, extendWithFaceDescriptor(parentResult, descriptor)];
                }
            });
        });
    };
    ComputeSingleFaceDescriptorTask.prototype.withFaceExpressions = function () {
        return new PredictSingleFaceExpressionsWithFaceAlignmentTask(this, this.input);
    };
    ComputeSingleFaceDescriptorTask.prototype.withAgeAndGender = function () {
        return new PredictSingleAgeAndGenderWithFaceAlignmentTask(this, this.input);
    };
    return ComputeSingleFaceDescriptorTask;
}(ComputeFaceDescriptorsTaskBase));
export { ComputeSingleFaceDescriptorTask };
//# sourceMappingURL=ComputeFaceDescriptorsTasks.js.map