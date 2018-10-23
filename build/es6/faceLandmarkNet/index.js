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
//# sourceMappingURL=index.js.map