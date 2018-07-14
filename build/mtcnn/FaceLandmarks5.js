"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceLandmarks_1 = require("../FaceLandmarks");
var Point_1 = require("../Point");
var FaceLandmarks5 = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarks5, _super);
    function FaceLandmarks5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks5.prototype.forSize = function (width, height) {
        return new FaceLandmarks5(this.getRelativePositions(), { width: width, height: height });
    };
    FaceLandmarks5.prototype.shift = function (x, y) {
        return new FaceLandmarks5(this.getRelativePositions(), { width: this._imageWidth, height: this._imageHeight }, new Point_1.Point(x, y));
    };
    FaceLandmarks5.prototype.shiftByPoint = function (pt) {
        return this.shift(pt.x, pt.y);
    };
    return FaceLandmarks5;
}(FaceLandmarks_1.FaceLandmarks));
exports.FaceLandmarks5 = FaceLandmarks5;
//# sourceMappingURL=FaceLandmarks5.js.map