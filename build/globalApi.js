"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allFacesFactory_1 = require("./allFacesFactory");
var FaceDetectionNet_1 = require("./faceDetectionNet/FaceDetectionNet");
var FaceLandmark68Net_1 = require("./faceLandmarkNet/FaceLandmark68Net");
var FaceLandmark68TinyNet_1 = require("./faceLandmarkNet/FaceLandmark68TinyNet");
var FaceRecognitionNet_1 = require("./faceRecognitionNet/FaceRecognitionNet");
var Mtcnn_1 = require("./mtcnn/Mtcnn");
var TinyYolov2_1 = require("./tinyYolov2/TinyYolov2");
exports.detectionNet = new FaceDetectionNet_1.FaceDetectionNet();
exports.landmarkNet = new FaceLandmark68Net_1.FaceLandmark68Net();
exports.recognitionNet = new FaceRecognitionNet_1.FaceRecognitionNet();
// nets need more specific names, to avoid ambiguity in future
// when alternative net implementations are provided
exports.nets = {
    ssdMobilenetv1: exports.detectionNet,
    faceLandmark68Net: exports.landmarkNet,
    faceLandmark68TinyNet: new FaceLandmark68TinyNet_1.FaceLandmark68TinyNet(),
    faceRecognitionNet: exports.recognitionNet,
    mtcnn: new Mtcnn_1.Mtcnn(),
    tinyYolov2: new TinyYolov2_1.TinyYolov2()
};
function loadSsdMobilenetv1Model(url) {
    return exports.nets.ssdMobilenetv1.load(url);
}
exports.loadSsdMobilenetv1Model = loadSsdMobilenetv1Model;
function loadFaceLandmarkModel(url) {
    return exports.nets.faceLandmark68Net.load(url);
}
exports.loadFaceLandmarkModel = loadFaceLandmarkModel;
function loadFaceLandmarkTinyModel(url) {
    return exports.nets.faceLandmark68TinyNet.load(url);
}
exports.loadFaceLandmarkTinyModel = loadFaceLandmarkTinyModel;
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
function loadFaceDetectionModel(url) {
    return loadSsdMobilenetv1Model(url);
}
exports.loadFaceDetectionModel = loadFaceDetectionModel;
function loadModels(url) {
    console.warn('loadModels will be deprecated in future');
    return Promise.all([
        loadSsdMobilenetv1Model(url),
        loadFaceLandmarkModel(url),
        loadFaceRecognitionModel(url),
        loadMtcnnModel(url),
        loadTinyYolov2Model(url)
    ]);
}
exports.loadModels = loadModels;
function locateFaces(input, minConfidence, maxResults) {
    return exports.nets.ssdMobilenetv1.locateFaces(input, minConfidence, maxResults);
}
exports.locateFaces = locateFaces;
exports.ssdMobilenetv1 = locateFaces;
function detectLandmarks(input) {
    return exports.nets.faceLandmark68Net.detectLandmarks(input);
}
exports.detectLandmarks = detectLandmarks;
function detectLandmarksTiny(input) {
    return exports.nets.faceLandmark68TinyNet.detectLandmarks(input);
}
exports.detectLandmarksTiny = detectLandmarksTiny;
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
exports.allFacesSsdMobilenetv1 = allFacesFactory_1.allFacesSsdMobilenetv1Factory(exports.nets.ssdMobilenetv1, exports.nets.faceLandmark68Net, exports.nets.faceRecognitionNet);
exports.allFacesTinyYolov2 = allFacesFactory_1.allFacesTinyYolov2Factory(exports.nets.tinyYolov2, exports.nets.faceLandmark68Net, exports.nets.faceRecognitionNet);
exports.allFacesMtcnn = allFacesFactory_1.allFacesMtcnnFactory(exports.nets.mtcnn, exports.nets.faceRecognitionNet);
exports.allFaces = exports.allFacesSsdMobilenetv1;
//# sourceMappingURL=globalApi.js.map