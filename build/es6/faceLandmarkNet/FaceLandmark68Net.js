import * as tslib_1 from "tslib";
import { FaceFeatureExtractor } from '../faceFeatureExtractor/FaceFeatureExtractor';
import { FaceLandmark68NetBase } from './FaceLandmark68NetBase';
var FaceLandmark68Net = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmark68Net, _super);
    function FaceLandmark68Net(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor(); }
        return _super.call(this, 'FaceLandmark68Net', faceFeatureExtractor) || this;
    }
    FaceLandmark68Net.prototype.getDefaultModelName = function () {
        return 'face_landmark_68_model';
    };
    FaceLandmark68Net.prototype.getClassifierChannelsIn = function () {
        return 256;
    };
    return FaceLandmark68Net;
}(FaceLandmark68NetBase));
export { FaceLandmark68Net };
//# sourceMappingURL=FaceLandmark68Net.js.map