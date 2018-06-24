"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCenterPoint_1 = require("../commons/getCenterPoint");
var FaceDetection_1 = require("../faceDetectionNet/FaceDetection");
var Point_1 = require("../Point");
var Rect_1 = require("../Rect");
// face alignment constants
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
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
        return new FaceLandmarks(this.getRelativePositions(), { width: this._imageWidth, height: this._imageHeight }, new Point_1.Point(x, y));
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
    FaceLandmarks.prototype.align = function (detection) {
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
    return FaceLandmarks;
}());
exports.FaceLandmarks = FaceLandmarks;
//# sourceMappingURL=FaceLandmarks.js.map