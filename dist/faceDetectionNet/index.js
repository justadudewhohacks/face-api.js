"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceDetectionNet_1 = require("./FaceDetectionNet");
tslib_1.__exportStar(require("./FaceDetectionNet"), exports);
function faceDetectionNet(weights) {
    var net = new FaceDetectionNet_1.FaceDetectionNet();
    net.extractWeights(weights);
    return net;
}
exports.faceDetectionNet = faceDetectionNet;
//# sourceMappingURL=index.js.map