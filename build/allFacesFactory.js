"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var extractFaceTensors_1 = require("./extractFaceTensors");
var FullFaceDescription_1 = require("./FullFaceDescription");
function computeDescriptorsFactory(recognitionNet) {
    return function (input, alignedFaceBoxes, useBatchProcessing) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alignedFaceTensors, descriptors, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, extractFaceTensors_1.extractFaceTensors(input, alignedFaceBoxes)];
                    case 1:
                        alignedFaceTensors = _b.sent();
                        if (!useBatchProcessing) return [3 /*break*/, 3];
                        return [4 /*yield*/, recognitionNet.computeFaceDescriptor(alignedFaceTensors)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, Promise.all(alignedFaceTensors.map(function (faceTensor) { return recognitionNet.computeFaceDescriptor(faceTensor); }))];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        descriptors = _a;
                        alignedFaceTensors.forEach(function (t) { return t.dispose(); });
                        return [2 /*return*/, descriptors];
                }
            });
        });
    };
}
function allFacesFactory(detectionNet, landmarkNet, recognitionNet) {
    var computeDescriptors = computeDescriptorsFactory(recognitionNet);
    return function (input, minConfidence, useBatchProcessing) {
        if (minConfidence === void 0) { minConfidence = 0.8; }
        if (useBatchProcessing === void 0) { useBatchProcessing = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detections, faceTensors, faceLandmarksByFace, _a, alignedFaceBoxes, descriptors;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, detectionNet.locateFaces(input, minConfidence)];
                    case 1:
                        detections = _b.sent();
                        return [4 /*yield*/, extractFaceTensors_1.extractFaceTensors(input, detections)];
                    case 2:
                        faceTensors = _b.sent();
                        if (!useBatchProcessing) return [3 /*break*/, 4];
                        return [4 /*yield*/, landmarkNet.detectLandmarks(faceTensors)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, Promise.all(faceTensors.map(function (faceTensor) { return landmarkNet.detectLandmarks(faceTensor); }))];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        faceLandmarksByFace = _a;
                        faceTensors.forEach(function (t) { return t.dispose(); });
                        alignedFaceBoxes = faceLandmarksByFace.map(function (landmarks, i) { return landmarks.align(detections[i].getBox()); });
                        return [4 /*yield*/, computeDescriptors(input, alignedFaceBoxes, useBatchProcessing)];
                    case 7:
                        descriptors = _b.sent();
                        return [2 /*return*/, detections.map(function (detection, i) {
                                return new FullFaceDescription_1.FullFaceDescription(detection, faceLandmarksByFace[i].shiftByPoint(detection.getBox()), descriptors[i]);
                            })];
                }
            });
        });
    };
}
exports.allFacesFactory = allFacesFactory;
function allFacesMtcnnFactory(mtcnn, recognitionNet) {
    var computeDescriptors = computeDescriptorsFactory(recognitionNet);
    return function (input, mtcnnForwardParams, useBatchProcessing) {
        if (mtcnnForwardParams === void 0) { mtcnnForwardParams = {}; }
        if (useBatchProcessing === void 0) { useBatchProcessing = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var results, alignedFaceBoxes, descriptors;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mtcnn.forward(input, mtcnnForwardParams)];
                    case 1:
                        results = _a.sent();
                        alignedFaceBoxes = results.map(function (_a) {
                            var faceLandmarks = _a.faceLandmarks;
                            return faceLandmarks.align();
                        });
                        return [4 /*yield*/, computeDescriptors(input, alignedFaceBoxes, useBatchProcessing)];
                    case 2:
                        descriptors = _a.sent();
                        return [2 /*return*/, results.map(function (_a, i) {
                                var faceDetection = _a.faceDetection, faceLandmarks = _a.faceLandmarks;
                                return new FullFaceDescription_1.FullFaceDescription(faceDetection, faceLandmarks, descriptors[i]);
                            })];
                }
            });
        });
    };
}
exports.allFacesMtcnnFactory = allFacesMtcnnFactory;
//# sourceMappingURL=allFacesFactory.js.map