"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceLandmarkNet_1 = require("./FaceLandmarkNet");
tslib_1.__exportStar(require("./FaceLandmarkNet"), exports);
tslib_1.__exportStar(require("./FaceLandmarks68"), exports);
function createFaceLandmarkNet(weights) {
    var net = new FaceLandmarkNet_1.FaceLandmarkNet();
    net.extractWeights(weights);
    return net;
}
exports.createFaceLandmarkNet = createFaceLandmarkNet;
function faceLandmarkNet(weights) {
    console.warn('faceLandmarkNet(weights: Float32Array) will be deprecated in future, use createFaceLandmarkNet instead');
    return createFaceLandmarkNet(weights);
}
exports.faceLandmarkNet = faceLandmarkNet;
//# sourceMappingURL=index.js.map