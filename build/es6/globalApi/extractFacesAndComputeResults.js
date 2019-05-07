import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { extractFaces, extractFaceTensors } from '../dom';
import { isWithFaceLandmarks } from '../factories/WithFaceLandmarks';
export function extractAllFacesAndComputeResults(parentResults, input, computeResults, extractedFaces, getRectForAlignment) {
    if (getRectForAlignment === void 0) { getRectForAlignment = function (_a) {
        var alignedRect = _a.alignedRect;
        return alignedRect;
    }; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var faceBoxes, faces, _a, _b, results;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    faceBoxes = parentResults.map(function (parentResult) {
                        return isWithFaceLandmarks(parentResult)
                            ? getRectForAlignment(parentResult)
                            : parentResult.detection;
                    });
                    _a = extractedFaces;
                    if (_a) return [3 /*break*/, 5];
                    if (!(input instanceof tf.Tensor)) return [3 /*break*/, 2];
                    return [4 /*yield*/, extractFaceTensors(input, faceBoxes)];
                case 1:
                    _b = _c.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, extractFaces(input, faceBoxes)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4:
                    _a = (_b);
                    _c.label = 5;
                case 5:
                    faces = _a;
                    return [4 /*yield*/, computeResults(faces)];
                case 6:
                    results = _c.sent();
                    faces.forEach(function (f) { return f instanceof tf.Tensor && f.dispose(); });
                    return [2 /*return*/, results];
            }
        });
    });
}
export function extractSingleFaceAndComputeResult(parentResult, input, computeResult, extractedFaces, getRectForAlignment) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, extractAllFacesAndComputeResults([parentResult], input, function (faces) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, computeResult(faces[0])];
                }); }); }, extractedFaces, getRectForAlignment)];
        });
    });
}
//# sourceMappingURL=extractFacesAndComputeResults.js.map