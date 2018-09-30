"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceLandmarks_1 = require("../classes/FaceLandmarks");
var FaceLandmarks68 = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarks68, _super);
    function FaceLandmarks68() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks68.prototype.getJawOutline = function () {
        return this._faceLandmarks.slice(0, 17);
    };
    FaceLandmarks68.prototype.getLeftEyeBrow = function () {
        return this._faceLandmarks.slice(17, 22);
    };
    FaceLandmarks68.prototype.getRightEyeBrow = function () {
        return this._faceLandmarks.slice(22, 27);
    };
    FaceLandmarks68.prototype.getNose = function () {
        return this._faceLandmarks.slice(27, 36);
    };
    FaceLandmarks68.prototype.getLeftEye = function () {
        return this._faceLandmarks.slice(36, 42);
    };
    FaceLandmarks68.prototype.getRightEye = function () {
        return this._faceLandmarks.slice(42, 48);
    };
    FaceLandmarks68.prototype.getMouth = function () {
        return this._faceLandmarks.slice(48, 68);
    };
    FaceLandmarks68.prototype.getRefPointsForAlignment = function () {
        return [
            this.getLeftEye(),
            this.getRightEye(),
            this.getMouth()
        ].map(tfjs_image_recognition_base_1.getCenterPoint);
    };
    return FaceLandmarks68;
}(FaceLandmarks_1.FaceLandmarks));
exports.FaceLandmarks68 = FaceLandmarks68;
//# sourceMappingURL=FaceLandmarks68.js.map