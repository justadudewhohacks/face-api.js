"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceDetectionNet_1 = require("./FaceDetectionNet");
tslib_1.__exportStar(require("./FaceDetectionNet"), exports);
function createFaceDetectionNet(weights) {
    var net = new FaceDetectionNet_1.FaceDetectionNet();
    net.extractWeights(weights);
    return net;
}
exports.createFaceDetectionNet = createFaceDetectionNet;
function faceDetectionNet(weights) {
    console.warn('faceDetectionNet(weights: Float32Array) will be deprecated in future, use createFaceDetectionNet instead');
    return createFaceDetectionNet(weights);
}
exports.faceDetectionNet = faceDetectionNet;
//# sourceMappingURL=index.js.map