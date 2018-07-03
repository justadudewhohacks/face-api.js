"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var extractFaceTensors_1 = require("./extractFaceTensors");
var FullFaceDescription_1 = require("./FullFaceDescription");
function allFacesFactory(detectionNet, landmarkNet, recognitionNet) {
    return function (input, minConfidence, useBatchProcessing) {
        if (useBatchProcessing === void 0) { useBatchProcessing = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detections, faceTensors, faceLandmarksByFace, _a, alignedFaceBoxes, alignedFaceTensors, descriptors, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, detectionNet.locateFaces(input, minConfidence)];
                    case 1:
                        detections = _c.sent();
                        return [4 /*yield*/, extractFaceTensors_1.extractFaceTensors(input, detections)];
                    case 2:
                        faceTensors = _c.sent();
                        if (!useBatchProcessing) return [3 /*break*/, 4];
                        return [4 /*yield*/, landmarkNet.detectLandmarks(faceTensors)];
                    case 3:
                        _a = _c.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, Promise.all(faceTensors.map(function (faceTensor) { return landmarkNet.detectLandmarks(faceTensor); }))];
                    case 5:
                        _a = _c.sent();
                        _c.label = 6;
                    case 6:
                        faceLandmarksByFace = _a;
                        faceTensors.forEach(function (t) { return t.dispose(); });
                        alignedFaceBoxes = faceLandmarksByFace.map(function (landmarks, i) { return landmarks.align(detections[i].getBox()); });
                        return [4 /*yield*/, extractFaceTensors_1.extractFaceTensors(input, alignedFaceBoxes)];
                    case 7:
                        alignedFaceTensors = _c.sent();
                        if (!useBatchProcessing) return [3 /*break*/, 9];
                        return [4 /*yield*/, recognitionNet.computeFaceDescriptor(alignedFaceTensors)];
                    case 8:
                        _b = _c.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, Promise.all(alignedFaceTensors.map(function (faceTensor) { return recognitionNet.computeFaceDescriptor(faceTensor); }))];
                    case 10:
                        _b = _c.sent();
                        _c.label = 11;
                    case 11:
                        descriptors = _b;
                        alignedFaceTensors.forEach(function (t) { return t.dispose(); });
                        return [2 /*return*/, detections.map(function (detection, i) {
                                return new FullFaceDescription_1.FullFaceDescription(detection, faceLandmarksByFace[i].shiftByPoint(detection.getBox()), descriptors[i]);
                            })];
                }
            });
        });
    };
}
exports.allFacesFactory = allFacesFactory;
//# sourceMappingURL=allFacesFactory.js.map