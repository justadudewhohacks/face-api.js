import { __extends } from "tslib";
import { getCenterPoint } from 'tfjs-image-recognition-base';
import { FaceLandmarks } from './FaceLandmarks';
var FaceLandmarks5 = /** @class */ (function (_super) {
    __extends(FaceLandmarks5, _super);
    function FaceLandmarks5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks5.prototype.getRefPointsForAlignment = function () {
        var pts = this.positions;
        return [
            pts[0],
            pts[1],
            getCenterPoint([pts[3], pts[4]])
        ];
    };
    return FaceLandmarks5;
}(FaceLandmarks));
export { FaceLandmarks5 };
//# sourceMappingURL=FaceLandmarks5.js.map