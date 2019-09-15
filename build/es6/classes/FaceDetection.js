import { __extends } from "tslib";
import { ObjectDetection } from 'tfjs-image-recognition-base';
var FaceDetection = /** @class */ (function (_super) {
    __extends(FaceDetection, _super);
    function FaceDetection(score, relativeBox, imageDims) {
        return _super.call(this, score, score, '', relativeBox, imageDims) || this;
    }
    FaceDetection.prototype.forSize = function (width, height) {
        var _a = _super.prototype.forSize.call(this, width, height), score = _a.score, relativeBox = _a.relativeBox, imageDims = _a.imageDims;
        return new FaceDetection(score, relativeBox, imageDims);
    };
    return FaceDetection;
}(ObjectDetection));
export { FaceDetection };
//# sourceMappingURL=FaceDetection.js.map