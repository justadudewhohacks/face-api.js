import { __extends } from "tslib";
import { TinyFaceFeatureExtractor } from '../faceFeatureExtractor/TinyFaceFeatureExtractor';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
var FaceLandmark68TinyNet = /** @class */ (function (_super) {
    __extends(FaceLandmark68TinyNet, _super);
    function FaceLandmark68TinyNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyFaceFeatureExtractor(); }
        return _super.call(this, 'FaceLandmark68TinyNet', faceFeatureExtractor) || this;
    }
    FaceLandmark68TinyNet.prototype.getDefaultModelName = function () {
        return 'face_landmark_68_tiny_model';
    };
    FaceLandmark68TinyNet.prototype.getClassifierChannelsIn = function () {
        return 128;
    };
    return FaceLandmark68TinyNet;
}(FaceLandmark68NetBase));
export { FaceLandmark68TinyNet };
//# sourceMappingURL=FaceLandmark68TinyNet.js.map