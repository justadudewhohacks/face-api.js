"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var allFacesFactory_1 = require("./allFacesFactory");
var extractFaceTensors_1 = require("./extractFaceTensors");
var FaceDetectionNet_1 = require("./faceDetectionNet/FaceDetectionNet");
var FaceLandmarkNet_1 = require("./faceLandmarkNet/FaceLandmarkNet");
var FaceRecognitionNet_1 = require("./faceRecognitionNet/FaceRecognitionNet");
var Mtcnn_1 = require("./mtcnn/Mtcnn");
exports.detectionNet = new FaceDetectionNet_1.FaceDetectionNet();
exports.landmarkNet = new FaceLandmarkNet_1.FaceLandmarkNet();
exports.recognitionNet = new FaceRecognitionNet_1.FaceRecognitionNet();
// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
exports.nets = {
    ssdMobilenet: exports.detectionNet,
    faceLandmark68Net: exports.landmarkNet,
    faceRecognitionNet: exports.recognitionNet,
    mtcnn: new Mtcnn_1.Mtcnn()
};
function loadFaceDetectionModel(url) {
    return exports.nets.ssdMobilenet.load(url);
}
exports.loadFaceDetectionModel = loadFaceDetectionModel;
function loadFaceLandmarkModel(url) {
    return exports.nets.faceLandmark68Net.load(url);
}
exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
function loadFaceRecognitionModel(url) {
    return exports.nets.faceRecognitionNet.load(url);
}
exports.loadFaceRecognitionModel = loadFaceRecognitionModel;
function loadMtcnnModel(url) {
    return exports.nets.mtcnn.load(url);
}
exports.loadMtcnnModel = loadMtcnnModel;
function loadModels(url) {
    return Promise.all([
        loadFaceDetectionModel(url),
        loadFaceLandmarkModel(url),
        loadFaceRecognitionModel(url),
        loadMtcnnModel(url)
    ]);
}
exports.loadModels = loadModels;
function locateFaces(input, minConfidence, maxResults) {
    return exports.nets.ssdMobilenet.locateFaces(input, minConfidence, maxResults);
}
exports.locateFaces = locateFaces;
function detectLandmarks(input) {
    return exports.nets.faceLandmark68Net.detectLandmarks(input);
}
exports.detectLandmarks = detectLandmarks;
function computeFaceDescriptor(input) {
    return exports.nets.faceRecognitionNet.computeFaceDescriptor(input);
}
exports.computeFaceDescriptor = computeFaceDescriptor;
function mtcnn(input, forwardParams) {
    return exports.nets.mtcnn.forward(input, forwardParams);
}
exports.mtcnn = mtcnn;
exports.allFaces = allFacesFactory_1.allFacesFactory(exports.detectionNet, exports.landmarkNet, computeDescriptorsFactory(exports.nets.faceRecognitionNet));
exports.allFacesMtcnn = allFacesFactory_1.allFacesMtcnnFactory(exports.nets.mtcnn, computeDescriptorsFactory(exports.nets.faceRecognitionNet));
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
//# sourceMappingURL=globalApi.js.map