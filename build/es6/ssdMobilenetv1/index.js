import { __extends } from "tslib";
import { SsdMobilenetv1 } from './SsdMobilenetv1';
export * from './SsdMobilenetv1';
export * from './SsdMobilenetv1Options';
export function createSsdMobilenetv1(weights) {
    var net = new SsdMobilenetv1();
    net.extractWeights(weights);
    return net;
}
export function createFaceDetectionNet(weights) {
    return createSsdMobilenetv1(weights);
}
// alias for backward compatibily
var FaceDetectionNet = /** @class */ (function (_super) {
    __extends(FaceDetectionNet, _super);
    function FaceDetectionNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceDetectionNet;
}(SsdMobilenetv1));
export { FaceDetectionNet };
//# sourceMappingURL=index.js.map