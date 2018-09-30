import * as tslib_1 from "tslib";
import { FaceLandmark68Net } from './FaceLandmark68Net';
export * from './FaceLandmark68Net';
export * from './FaceLandmark68TinyNet';
var FaceLandmarkNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarkNet, _super);
    function FaceLandmarkNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceLandmarkNet;
}(FaceLandmark68Net));
export { FaceLandmarkNet };
export function createFaceLandmarkNet(weights) {
    var net = new FaceLandmarkNet();
    net.extractWeights(weights);
    return net;
}
export function faceLandmarkNet(weights) {
    console.warn('faceLandmarkNet(weights: Float32Array) will be deprecated in future, use createFaceLandmarkNet instead');
    return createFaceLandmarkNet(weights);
}
//# sourceMappingURL=index.js.map