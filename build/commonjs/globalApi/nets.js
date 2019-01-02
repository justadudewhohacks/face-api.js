"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaceExpressionNet_1 = require("../faceExpressionNet/FaceExpressionNet");
var FaceLandmark68Net_1 = require("../faceLandmarkNet/FaceLandmark68Net");
var FaceLandmark68TinyNet_1 = require("../faceLandmarkNet/FaceLandmark68TinyNet");
var FaceRecognitionNet_1 = require("../faceRecognitionNet/FaceRecognitionNet");
var Mtcnn_1 = require("../mtcnn/Mtcnn");
var SsdMobilenetv1_1 = require("../ssdMobilenetv1/SsdMobilenetv1");
var TinyFaceDetector_1 = require("../tinyFaceDetector/TinyFaceDetector");
var TinyYolov2_1 = require("../tinyYolov2/TinyYolov2");
exports.nets = {
    ssdMobilenetv1: new SsdMobilenetv1_1.SsdMobilenetv1(),
    tinyFaceDetector: new TinyFaceDetector_1.TinyFaceDetector(),
    tinyYolov2: new TinyYolov2_1.TinyYolov2(),
    mtcnn: new Mtcnn_1.Mtcnn(),
    faceLandmark68Net: new FaceLandmark68Net_1.FaceLandmark68Net(),
    faceLandmark68TinyNet: new FaceLandmark68TinyNet_1.FaceLandmark68TinyNet(),
    faceRecognitionNet: new FaceRecognitionNet_1.FaceRecognitionNet(),
    faceExpressionNet: new FaceExpressionNet_1.FaceExpressionNet()
};
/**
 * Attempts to detect all faces in an image using SSD Mobilenetv1 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see SsdMobilenetv1Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
exports.ssdMobilenetv1 = function (input, options) {
    return exports.nets.ssdMobilenetv1.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image using the Tiny Face Detector.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyFaceDetectorOptions constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
exports.tinyFaceDetector = function (input, options) {
    return exports.nets.tinyFaceDetector.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image using the Tiny Yolov2 Network.
 *
 * @param input The input image.
 * @param options (optional, default: see TinyYolov2Options constructor for default parameters).
 * @returns Bounding box of each face with score.
 */
exports.tinyYolov2 = function (input, options) {
    return exports.nets.tinyYolov2.locateFaces(input, options);
};
/**
 * Attempts to detect all faces in an image and the 5 point face landmarks
 * of each detected face using the MTCNN Network.
 *
 * @param input The input image.
 * @param options (optional, default: see MtcnnOptions constructor for default parameters).
 * @returns Bounding box of each face with score and 5 point face landmarks.
 */
exports.mtcnn = function (input, options) {
    return exports.nets.mtcnn.forward(input, options);
};
/**
 * Detects the 68 point face landmark positions of the face shown in an image.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
exports.detectFaceLandmarks = function (input) {
    return exports.nets.faceLandmark68Net.detectLandmarks(input);
};
/**
 * Detects the 68 point face landmark positions of the face shown in an image
 * using a tinier version of the 68 point face landmark model, which is slightly
 * faster at inference, but also slightly less accurate.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns 68 point face landmarks or array thereof in case of batch input.
 */
exports.detectFaceLandmarksTiny = function (input) {
    return exports.nets.faceLandmark68TinyNet.detectLandmarks(input);
};
/**
 * Computes a 128 entry vector (face descriptor / face embeddings) from the face shown in an image,
 * which uniquely represents the features of that persons face. The computed face descriptor can
 * be used to measure the similarity between faces, by computing the euclidean distance of two
 * face descriptors.
 *
 * @param inputs The face image extracted from the aligned bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns Face descriptor with 128 entries or array thereof in case of batch input.
 */
exports.computeFaceDescriptor = function (input) {
    return exports.nets.faceRecognitionNet.computeFaceDescriptor(input);
};
/**
 * Recognizes the facial expressions of a face and returns the likelyhood of
 * each facial expression.
 *
 * @param inputs The face image extracted from the bounding box of a face. Can
 * also be an array of input images, which will be batch processed.
 * @returns An array of facial expressions with corresponding probabilities or array thereof in case of batch input.
 */
exports.recognizeFaceExpressions = function (input) {
    return exports.nets.faceExpressionNet.predictExpressions(input);
};
exports.loadSsdMobilenetv1Model = function (url) { return exports.nets.ssdMobilenetv1.load(url); };
exports.loadTinyFaceDetectorModel = function (url) { return exports.nets.tinyFaceDetector.load(url); };
exports.loadMtcnnModel = function (url) { return exports.nets.mtcnn.load(url); };
exports.loadTinyYolov2Model = function (url) { return exports.nets.tinyYolov2.load(url); };
exports.loadFaceLandmarkModel = function (url) { return exports.nets.faceLandmark68Net.load(url); };
exports.loadFaceLandmarkTinyModel = function (url) { return exports.nets.faceLandmark68TinyNet.load(url); };
exports.loadFaceRecognitionModel = function (url) { return exports.nets.faceRecognitionNet.load(url); };
exports.loadFaceExpressionModel = function (url) { return exports.nets.faceExpressionNet.load(url); };
// backward compatibility
exports.loadFaceDetectionModel = exports.loadSsdMobilenetv1Model;
exports.locateFaces = exports.ssdMobilenetv1;
exports.detectLandmarks = exports.detectFaceLandmarks;
//# sourceMappingURL=nets.js.map