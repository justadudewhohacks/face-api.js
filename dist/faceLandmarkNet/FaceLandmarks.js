import { Point } from '../Point';
var FaceLandmarks = /** @class */ (function () {
    function FaceLandmarks(relativeFaceLandmarkPositions, imageDims, shift) {
        if (shift === void 0) { shift = new Point(0, 0); }
        var width = imageDims.width, height = imageDims.height;
        this._imageWidth = width;
        this._imageHeight = height;
        this._shift = shift;
        this._faceLandmarks = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new Point(width, height)).add(shift); });
    }
    FaceLandmarks.prototype.getPositions = function () {
        return this._faceLandmarks;
    };
    FaceLandmarks.prototype.getRelativePositions = function () {
        var _this = this;
        return this._faceLandmarks.map(function (pt) { return pt.sub(_this._shift).div(new Point(_this._imageWidth, _this._imageHeight)); });
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
    FaceLandmarks.prototype.shift = function (x, y) {
        return new FaceLandmarks(this.getRelativePositions(), { width: this._imageWidth, height: this._imageHeight }, new Point(x, y));
    };
    return FaceLandmarks;
}());
export { FaceLandmarks };
//# sourceMappingURL=FaceLandmarks.js.map