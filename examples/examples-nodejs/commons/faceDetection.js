"use strict";
exports.__esModule = true;
exports.faceDetectionOptions = exports.faceDetectionNet = void 0;
var faceapi = require("face-api.js");
exports.faceDetectionNet = faceapi.nets.ssdMobilenetv1;
// export const faceDetectionNet = tinyFaceDetector
// SsdMobilenetv1Options
var minConfidence = 0.5;
// TinyFaceDetectorOptions
var inputSize = 408;
var scoreThreshold = 0.5;
function getFaceDetectorOptions(net) {
    return net === faceapi.nets.ssdMobilenetv1
        ? new faceapi.SsdMobilenetv1Options({ minConfidence: minConfidence })
        : new faceapi.TinyFaceDetectorOptions({ inputSize: inputSize, scoreThreshold: scoreThreshold });
}
exports.faceDetectionOptions = getFaceDetectorOptions(exports.faceDetectionNet);
