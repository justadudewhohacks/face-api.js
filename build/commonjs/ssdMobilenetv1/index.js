"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var SsdMobilenetv1_1 = require("./SsdMobilenetv1");
tslib_1.__exportStar(require("./SsdMobilenetv1"), exports);
tslib_1.__exportStar(require("./SsdMobilenetv1Options"), exports);
function createSsdMobilenetv1(weights) {
    var net = new SsdMobilenetv1_1.SsdMobilenetv1();
    net.extractWeights(weights);
    return net;
}
exports.createSsdMobilenetv1 = createSsdMobilenetv1;
function createFaceDetectionNet(weights) {
    return createSsdMobilenetv1(weights);
}
exports.createFaceDetectionNet = createFaceDetectionNet;
// alias for backward compatibily
var FaceDetectionNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceDetectionNet, _super);
    function FaceDetectionNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceDetectionNet;
}(SsdMobilenetv1_1.SsdMobilenetv1));
exports.FaceDetectionNet = FaceDetectionNet;
//# sourceMappingURL=index.js.map