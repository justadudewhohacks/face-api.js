"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var extractFaceTensors_1 = require("./extractFaceTensors");
var FullFaceDescription_1 = require("./FullFaceDescription");
function allFacesFactory(detectionNet, landmarkNet, recognitionNet) {
    return function (input, minConfidence) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var detections, faceTensors, faceLandmarksByFace, alignedFaceBoxes, alignedFaceTensors, descriptors;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, detectionNet.locateFaces(input, minConfidence)];
                    case 1:
                        detections = _a.sent();
                        return [4 /*yield*/, extractFaceTensors_1.extractFaceTensors(input, detections)];
                    case 2:
                        faceTensors = _a.sent();
                        return [4 /*yield*/, Promise.all(faceTensors.map(function (faceTensor) { return landmarkNet.detectLandmarks(faceTensor); }))];
                    case 3:
                        faceLandmarksByFace = _a.sent();
                        faceTensors.forEach(function (t) { return t.dispose(); });
                        return [4 /*yield*/, Promise.all(faceLandmarksByFace.map(function (landmarks, i) { return landmarks.align(detections[i].getBox()); }))];
                    case 4:
                        alignedFaceBoxes = _a.sent();
                        return [4 /*yield*/, extractFaceTensors_1.extractFaceTensors(input, alignedFaceBoxes)];
                    case 5:
                        alignedFaceTensors = _a.sent();
                        return [4 /*yield*/, Promise.all(alignedFaceTensors.map(function (faceTensor) { return recognitionNet.computeFaceDescriptor(faceTensor); }))];
                    case 6:
                        descriptors = _a.sent();
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