import * as tslib_1 from "tslib";
import { Point } from 'tfjs-image-recognition-base';
import { FullFaceDescription } from './classes/FullFaceDescription';
import { extractFaces } from './dom';
function computeDescriptorsFactory(recognitionNet) {
    return function (input, alignedFaceBoxes, useBatchProcessing) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alignedFaceCanvases, descriptors, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, extractFaces(input, alignedFaceBoxes)];
                    case 1:
                        alignedFaceCanvases = _b.sent();
                        if (!useBatchProcessing) return [3 /*break*/, 3];
                        return [4 /*yield*/, recognitionNet.computeFaceDescriptor(alignedFaceCanvases)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, Promise.all(alignedFaceCanvases.map(function (canvas) { return recognitionNet.computeFaceDescriptor(canvas); }))];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        descriptors = _a;
                        return [2 /*return*/, descriptors];
                }
            });
        });
    };
}
function allFacesFactory(detectFaces, landmarkNet, recognitionNet) {
    var computeDescriptors = computeDescriptorsFactory(recognitionNet);
    return function (input, useBatchProcessing) {
        if (useBatchProcessing === void 0) { useBatchProcessing = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detections, faceCanvases, faceLandmarksByFace, _a, alignedFaceBoxes, descriptors;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, detectFaces(input)];
                    case 1:
                        detections = _b.sent();
                        return [4 /*yield*/, extractFaces(input, detections)];
                    case 2:
                        faceCanvases = _b.sent();
                        if (!useBatchProcessing) return [3 /*break*/, 4];
                        return [4 /*yield*/, landmarkNet.detectLandmarks(faceCanvases)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, Promise.all(faceCanvases.map(function (canvas) { return landmarkNet.detectLandmarks(canvas); }))];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        faceLandmarksByFace = _a;
                        alignedFaceBoxes = faceLandmarksByFace.map(function (landmarks, i) { return landmarks.align(detections[i].getBox()); });
                        return [4 /*yield*/, computeDescriptors(input, alignedFaceBoxes, useBatchProcessing)];
                    case 7:
                        descriptors = _b.sent();
                        return [2 /*return*/, detections.map(function (detection, i) {
                                return new FullFaceDescription(detection, faceLandmarksByFace[i].shiftByPoint(new Point(detection.box.x, detection.box.y)), descriptors[i]);
                            })];
                }
            });
        });
    };
}
export function allFacesSsdMobilenetv1Factory(ssdMobilenetv1, landmarkNet, recognitionNet) {
    return function (input, minConfidence, useBatchProcessing) {
        if (minConfidence === void 0) { minConfidence = 0.8; }
        if (useBatchProcessing === void 0) { useBatchProcessing = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detectFaces, allFaces;
            return tslib_1.__generator(this, function (_a) {
                detectFaces = function (input) { return ssdMobilenetv1.locateFaces(input, minConfidence); };
                allFaces = allFacesFactory(detectFaces, landmarkNet, recognitionNet);
                return [2 /*return*/, allFaces(input, useBatchProcessing)];
            });
        });
    };
}
export function allFacesTinyYolov2Factory(tinyYolov2, landmarkNet, recognitionNet) {
    return function (input, forwardParams, useBatchProcessing) {
        if (forwardParams === void 0) { forwardParams = {}; }
        if (useBatchProcessing === void 0) { useBatchProcessing = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detectFaces, allFaces;
            return tslib_1.__generator(this, function (_a) {
                detectFaces = function (input) { return tinyYolov2.locateFaces(input, forwardParams); };
                allFaces = allFacesFactory(detectFaces, landmarkNet, recognitionNet);
                return [2 /*return*/, allFaces(input, useBatchProcessing)];
            });
        });
    };
}
export function allFacesMtcnnFactory(mtcnn, recognitionNet) {
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
                                return new FullFaceDescription(faceDetection, faceLandmarks, descriptors[i]);
                            })];
                }
            });
        });
    };
}
//# sourceMappingURL=allFacesFactory.js.map