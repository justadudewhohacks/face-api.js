"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allFacesFactory_1 = require("./allFacesFactory");
var FaceDetectionNet_1 = require("./faceDetectionNet/FaceDetectionNet");
var FaceLandmarkNet_1 = require("./faceLandmarkNet/FaceLandmarkNet");
var FaceRecognitionNet_1 = require("./faceRecognitionNet/FaceRecognitionNet");
var Mtcnn_1 = require("./mtcnn/Mtcnn");
var TinyYolov2_1 = require("./tinyYolov2/TinyYolov2");
exports.detectionNet = new FaceDetectionNet_1.FaceDetectionNet();
exports.landmarkNet = new FaceLandmarkNet_1.FaceLandmarkNet();
exports.recognitionNet = new FaceRecognitionNet_1.FaceRecognitionNet();
// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
exports.nets = {
    ssdMobilenet: exports.detectionNet,
    faceLandmark68Net: exports.landmarkNet,
    faceRecognitionNet: exports.recognitionNet,
    mtcnn: new Mtcnn_1.Mtcnn(),
    tinyYolov2: new TinyYolov2_1.TinyYolov2()
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
function loadTinyYolov2Model(url) {
    return exports.nets.tinyYolov2.load(url);
}
exports.loadTinyYolov2Model = loadTinyYolov2Model;
function loadModels(url) {
    return Promise.all([
        loadFaceDetectionModel(url),
        loadFaceLandmarkModel(url),
        loadFaceRecognitionModel(url),
        loadMtcnnModel(url),
        loadTinyYolov2Model(url)
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
function tinyYolov2(input, forwardParams) {
    return exports.nets.tinyYolov2.locateFaces(input, forwardParams);
}
exports.tinyYolov2 = tinyYolov2;
exports.allFaces = allFacesFactory_1.allFacesFactory(exports.nets.ssdMobilenet, exports.nets.faceLandmark68Net, exports.nets.faceRecognitionNet);
exports.allFacesMtcnn = allFacesFactory_1.allFacesMtcnnFactory(exports.nets.mtcnn, exports.nets.faceRecognitionNet);
//# sourceMappingURL=globalApi.js.map