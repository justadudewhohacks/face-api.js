"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allFacesFactory_1 = require("./allFacesFactory");
var FaceDetectionNet_1 = require("./faceDetectionNet/FaceDetectionNet");
var FaceLandmarkNet_1 = require("./faceLandmarkNet/FaceLandmarkNet");
var FaceRecognitionNet_1 = require("./faceRecognitionNet/FaceRecognitionNet");
exports.detectionNet = new FaceDetectionNet_1.FaceDetectionNet();
exports.landmarkNet = new FaceLandmarkNet_1.FaceLandmarkNet();
exports.recognitionNet = new FaceRecognitionNet_1.FaceRecognitionNet();
function loadFaceDetectionModel(url) {
    return exports.detectionNet.load(url);
}
exports.loadFaceDetectionModel = loadFaceDetectionModel;
function loadFaceLandmarkModel(url) {
    return exports.landmarkNet.load(url);
}
exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
function loadFaceRecognitionModel(url) {
    return exports.recognitionNet.load(url);
}
exports.loadFaceRecognitionModel = loadFaceRecognitionModel;
function loadModels(url) {
    return Promise.all([
        loadFaceDetectionModel(url),
        loadFaceLandmarkModel(url),
        loadFaceRecognitionModel(url)
    ]);
}
exports.loadModels = loadModels;
function locateFaces(input, minConfidence, maxResults) {
    return exports.detectionNet.locateFaces(input, minConfidence, maxResults);
}
exports.locateFaces = locateFaces;
function detectLandmarks(input) {
    return exports.landmarkNet.detectLandmarks(input);
}
exports.detectLandmarks = detectLandmarks;
function computeFaceDescriptor(input) {
    return exports.recognitionNet.computeFaceDescriptor(input);
}
exports.computeFaceDescriptor = computeFaceDescriptor;
exports.allFaces = allFacesFactory_1.allFacesFactory(exports.detectionNet, exports.landmarkNet, exports.recognitionNet);
//# sourceMappingURL=globalApi.js.map