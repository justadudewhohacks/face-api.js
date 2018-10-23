import * as tslib_1 from "tslib";
import { getCenterPoint } from 'tfjs-image-recognition-base';
import { FaceLandmarks } from '../classes/FaceLandmarks';
var FaceLandmarks68 = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarks68, _super);
    function FaceLandmarks68() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks68.prototype.getJawOutline = function () {
        return this.positions.slice(0, 17);
    };
    FaceLandmarks68.prototype.getLeftEyeBrow = function () {
        return this.positions.slice(17, 22);
    };
    FaceLandmarks68.prototype.getRightEyeBrow = function () {
        return this.positions.slice(22, 27);
    };
    FaceLandmarks68.prototype.getNose = function () {
        return this.positions.slice(27, 36);
    };
    FaceLandmarks68.prototype.getLeftEye = function () {
        return this.positions.slice(36, 42);
    };
    FaceLandmarks68.prototype.getRightEye = function () {
        return this.positions.slice(42, 48);
    };
    FaceLandmarks68.prototype.getMouth = function () {
        return this.positions.slice(48, 68);
    };
    FaceLandmarks68.prototype.getRefPointsForAlignment = function () {
        return [
            this.getLeftEye(),
            this.getRightEye(),
            this.getMouth()
        ].map(getCenterPoint);
    };
    return FaceLandmarks68;
}(FaceLandmarks));
export { FaceLandmarks68 };
//# sourceMappingURL=FaceLandmarks68.js.map