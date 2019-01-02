import * as tslib_1 from "tslib";
import { ObjectDetection } from 'tfjs-image-recognition-base';
var FaceDetection = /** @class */ (function (_super) {
    tslib_1.__extends(FaceDetection, _super);
    function FaceDetection(score, relativeBox, imageDims) {
        return _super.call(this, score, score, '', relativeBox, imageDims) || this;
    }
    FaceDetection.prototype.forSize = function (width, height) {
        return _super.prototype.forSize.call(this, width, height);
    };
    return FaceDetection;
}(ObjectDetection));
export { FaceDetection };
//# sourceMappingURL=FaceDetection.js.map