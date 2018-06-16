import { Point } from '../Point';
var FaceLandmarks = /** @class */ (function () {
    function FaceLandmarks(relativeFaceLandmarkPositions, imageDims) {
        var width = imageDims.width, height = imageDims.height;
        this._imageWidth = width;
        this._imageHeight = height;
        this._faceLandmarks = relativeFaceLandmarkPositions.map(function (pt) { return new Point(pt.x * width, pt.y * height); });
    }
    FaceLandmarks.prototype.getPositions = function () {
        return this._faceLandmarks;
    };
    FaceLandmarks.prototype.getRelativePositions = function () {
        var _this = this;
        return this._faceLandmarks.map(function (pt) { return new Point(pt.x / _this._imageWidth, pt.y / _this._imageHeight); });
    };
    FaceLandmarks.prototype.getJawOutline = function () {
        return this._faceLandmarks.slice(0, 17);
    };
    FaceLandmarks.prototype.getLeftEyeBrow = function () {
        return this._faceLandmarks.slice(17, 22);
    };
    FaceLandmarks.prototype.getRightEyeBrow = function () {
        return this._faceLandmarks.slice(22, 27);
    };
    FaceLandmarks.prototype.getNose = function () {
        return this._faceLandmarks.slice(27, 36);
    };
    FaceLandmarks.prototype.getLeftEye = function () {
        return this._faceLandmarks.slice(36, 42);
    };
    FaceLandmarks.prototype.getRightEye = function () {
        return this._faceLandmarks.slice(42, 48);
    };
    FaceLandmarks.prototype.getMouth = function () {
        return this._faceLandmarks.slice(48, 68);
    };
    FaceLandmarks.prototype.forSize = function (width, height) {
        return new FaceLandmarks(this.getRelativePositions(), { width: width, height: height });
    };
    return FaceLandmarks;
}());
export { FaceLandmarks };
//# sourceMappingURL=FaceLandmarks.js.map