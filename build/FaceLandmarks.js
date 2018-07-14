"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var FaceLandmarks = /** @class */ (function () {
    function FaceLandmarks(relativeFaceLandmarkPositions, imageDims, shift) {
        if (shift === void 0) { shift = new Point_1.Point(0, 0); }
        var width = imageDims.width, height = imageDims.height;
        this._imageWidth = width;
        this._imageHeight = height;
        this._shift = shift;
        this._faceLandmarks = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new Point_1.Point(width, height)).add(shift); });
    }
    FaceLandmarks.prototype.getShift = function () {
        return new Point_1.Point(this._shift.x, this._shift.y);
    };
    FaceLandmarks.prototype.getImageWidth = function () {
        return this._imageWidth;
    };
    FaceLandmarks.prototype.getImageHeight = function () {
        return this._imageHeight;
    };
    FaceLandmarks.prototype.getPositions = function () {
        return this._faceLandmarks;
    };
    FaceLandmarks.prototype.getRelativePositions = function () {
        var _this = this;
        return this._faceLandmarks.map(function (pt) { return pt.sub(_this._shift).div(new Point_1.Point(_this._imageWidth, _this._imageHeight)); });
    };
    return FaceLandmarks;
}());
exports.FaceLandmarks = FaceLandmarks;
//# sourceMappingURL=FaceLandmarks.js.map