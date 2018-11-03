import * as tslib_1 from "tslib";
import { TinyYolov2Options } from 'tfjs-tiny-yolov2';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1';
import { detectAllFaces } from './detectFaces';
// export allFaces API for backward compatibility
export function allFacesSsdMobilenetv1(input, minConfidence) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectAllFaces(input, new SsdMobilenetv1Options(minConfidence ? { minConfidence: minConfidence } : {}))
                        .withFaceLandmarks()
                        .withFaceDescriptors()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function allFacesTinyYolov2(input, forwardParams) {
    if (forwardParams === void 0) { forwardParams = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectAllFaces(input, new TinyYolov2Options(forwardParams))
                        .withFaceLandmarks()
                        .withFaceDescriptors()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function allFacesMtcnn(input, forwardParams) {
    if (forwardParams === void 0) { forwardParams = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectAllFaces(input, new MtcnnOptions(forwardParams))
                        .withFaceLandmarks()
                        .withFaceDescriptors()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export var allFaces = allFacesSsdMobilenetv1;
//# sourceMappingURL=allFaces.js.map