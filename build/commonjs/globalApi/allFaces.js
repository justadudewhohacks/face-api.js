"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
var MtcnnOptions_1 = require("../mtcnn/MtcnnOptions");
var ssdMobilenetv1_1 = require("../ssdMobilenetv1");
var detectFaces_1 = require("./detectFaces");
// export allFaces API for backward compatibility
function allFacesSsdMobilenetv1(input, minConfidence) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectFaces_1.detectAllFaces(input, new ssdMobilenetv1_1.SsdMobilenetv1Options(minConfidence ? { minConfidence: minConfidence } : {}))
                        .withFaceLandmarks()
                        .withFaceDescriptors()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.allFacesSsdMobilenetv1 = allFacesSsdMobilenetv1;
function allFacesTinyYolov2(input, forwardParams) {
    if (forwardParams === void 0) { forwardParams = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectFaces_1.detectAllFaces(input, new tfjs_tiny_yolov2_1.TinyYolov2Options(forwardParams))
                        .withFaceLandmarks()
                        .withFaceDescriptors()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.allFacesTinyYolov2 = allFacesTinyYolov2;
function allFacesMtcnn(input, forwardParams) {
    if (forwardParams === void 0) { forwardParams = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectFaces_1.detectAllFaces(input, new MtcnnOptions_1.MtcnnOptions(forwardParams))
                        .withFaceLandmarks()
                        .withFaceDescriptors()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.allFacesMtcnn = allFacesMtcnn;
exports.allFaces = allFacesSsdMobilenetv1;
//# sourceMappingURL=allFaces.js.map