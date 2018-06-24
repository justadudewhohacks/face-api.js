"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceRecognitionNet_1 = require("./FaceRecognitionNet");
tslib_1.__exportStar(require("./FaceRecognitionNet"), exports);
function faceRecognitionNet(weights) {
    var net = new FaceRecognitionNet_1.FaceRecognitionNet();
    net.extractWeights(weights);
    return net;
}
exports.faceRecognitionNet = faceRecognitionNet;
//# sourceMappingURL=index.js.map