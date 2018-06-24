"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceLandmarkNet_1 = require("./FaceLandmarkNet");
tslib_1.__exportStar(require("./FaceLandmarkNet"), exports);
function faceLandmarkNet(weights) {
    var net = new FaceLandmarkNet_1.FaceLandmarkNet();
    net.extractWeights(weights);
    return net;
}
exports.faceLandmarkNet = faceLandmarkNet;
//# sourceMappingURL=index.js.map