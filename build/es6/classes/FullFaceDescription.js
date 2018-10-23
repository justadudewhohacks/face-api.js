import * as tslib_1 from "tslib";
import { FaceDetectionWithLandmarks } from './FaceDetectionWithLandmarks';
var FullFaceDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FullFaceDescription, _super);
    function FullFaceDescription(detection, unshiftedLandmarks, descriptor) {
        var _this = _super.call(this, detection, unshiftedLandmarks) || this;
        _this._descriptor = descriptor;
        return _this;
    }
    Object.defineProperty(FullFaceDescription.prototype, "descriptor", {
        get: function () {
            return this._descriptor;
        },
        enumerable: true,
        configurable: true
    });
    FullFaceDescription.prototype.forSize = function (width, height) {
        var _a = _super.prototype.forSize.call(this, width, height), detection = _a.detection, landmarks = _a.landmarks;
        return new FullFaceDescription(detection, landmarks, this.descriptor);
    };
    return FullFaceDescription;
}(FaceDetectionWithLandmarks));
export { FullFaceDescription };
//# sourceMappingURL=FullFaceDescription.js.map