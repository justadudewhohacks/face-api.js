"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceRecognitionNet_1 = require("./FaceRecognitionNet");
tslib_1.__exportStar(require("./FaceRecognitionNet"), exports);
function createFaceRecognitionNet(weights) {
    var net = new FaceRecognitionNet_1.FaceRecognitionNet();
    net.extractWeights(weights);
    return net;
}
exports.createFaceRecognitionNet = createFaceRecognitionNet;
function faceRecognitionNet(weights) {
    console.warn('faceRecognitionNet(weights: Float32Array) will be deprecated in future, use createFaceRecognitionNet instead');
    return createFaceRecognitionNet(weights);
}
exports.faceRecognitionNet = faceRecognitionNet;
//# sourceMappingURL=index.js.map