"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getCenterPoint_1 = require("../commons/getCenterPoint");
var FaceDetection_1 = require("../FaceDetection");
var FaceLandmarks_1 = require("../FaceLandmarks");
var Point_1 = require("../Point");
var Rect_1 = require("../Rect");
// face alignment constants
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
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
    FaceLandmarks68.prototype.forSize = function (width, height) {
        return new FaceLandmarks68(this.getRelativePositions(), { width: width, height: height });
    };
    FaceLandmarks68.prototype.shift = function (x, y) {
        return new FaceLandmarks68(this.getRelativePositions(), { width: this._imageWidth, height: this._imageHeight }, new Point_1.Point(x, y));
    };
    FaceLandmarks68.prototype.shiftByPoint = function (pt) {
        return this.shift(pt.x, pt.y);
    };
    /**
     * Aligns the face landmarks after face detection from the relative positions of the faces
     * bounding box, or it's current shift. This function should be used to align the face images
     * after face detection has been performed, before they are passed to the face recognition net.
     * This will make the computed face descriptor more accurate.
     *
     * @param detection (optional) The bounding box of the face or the face detection result. If
     * no argument was passed the position of the face landmarks are assumed to be relative to
     * it's current shift.
     * @returns The bounding box of the aligned face.
     */
    FaceLandmarks68.prototype.align = function (detection) {
        if (detection) {
            var box = detection instanceof FaceDetection_1.FaceDetection
                ? detection.getBox().floor()
                : detection;
            return this.shift(box.x, box.y).align();
        }
        var centers = [
            this.getLeftEye(),
            this.getRightEye(),
            this.getMouth()
        ].map(getCenterPoint_1.getCenterPoint);
        var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
        var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
        var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
        var size = Math.floor(eyeToMouthDist / relScale);
        var refPoint = getCenterPoint_1.getCenterPoint(centers);
        // TODO: pad in case rectangle is out of image bounds
        var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
        var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
        return new Rect_1.Rect(x, y, size, size);
    };
    return FaceLandmarks68;
}(FaceLandmarks_1.FaceLandmarks));
exports.FaceLandmarks68 = FaceLandmarks68;
//# sourceMappingURL=FaceLandmarks68.js.map