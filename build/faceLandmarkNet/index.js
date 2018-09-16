"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceLandmark68Net_1 = require("./FaceLandmark68Net");
tslib_1.__exportStar(require("./FaceLandmark68Net"), exports);
var FaceLandmarkNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarkNet, _super);
    function FaceLandmarkNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceLandmarkNet;
}(FaceLandmark68Net_1.FaceLandmark68Net));
exports.FaceLandmarkNet = FaceLandmarkNet;
function createFaceLandmarkNet(weights) {
    var net = new FaceLandmarkNet();
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