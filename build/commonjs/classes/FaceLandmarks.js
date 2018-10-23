"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceDetection_1 = require("./FaceDetection");
// face alignment constants
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
var FaceLandmarks = /** @class */ (function () {
    function FaceLandmarks(relativeFaceLandmarkPositions, imgDims, shift) {
        if (shift === void 0) { shift = new tfjs_image_recognition_base_1.Point(0, 0); }
        var width = imgDims.width, height = imgDims.height;
        this._imgDims = new tfjs_image_recognition_base_1.Dimensions(width, height);
        this._shift = shift;
        this._positions = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new tfjs_image_recognition_base_1.Point(width, height)).add(shift); });
    }
    Object.defineProperty(FaceLandmarks.prototype, "shift", {
        get: function () { return new tfjs_image_recognition_base_1.Point(this._shift.x, this._shift.y); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "imageWidth", {
        get: function () { return this._imgDims.width; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "imageHeight", {
        get: function () { return this._imgDims.height; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "positions", {
        get: function () { return this._positions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "relativePositions", {
        get: function () {
            var _this = this;
            return this._positions.map(function (pt) { return pt.sub(_this._shift).div(new tfjs_image_recognition_base_1.Point(_this.imageWidth, _this.imageHeight)); });
        },
        enumerable: true,
        configurable: true
    });
    FaceLandmarks.prototype.forSize = function (width, height) {
        return new this.constructor(this.relativePositions, { width: width, height: height });
    };
    FaceLandmarks.prototype.shiftBy = function (x, y) {
        return new this.constructor(this.relativePositions, this._imgDims, new tfjs_image_recognition_base_1.Point(x, y));
    };
    FaceLandmarks.prototype.shiftByPoint = function (pt) {
        return this.shiftBy(pt.x, pt.y);
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
                ? detection.box.floor()
                : detection;
            return this.shiftBy(box.x, box.y).align();
        }
        var centers = this.getRefPointsForAlignment();
        var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
        var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
        var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
        var size = Math.floor(eyeToMouthDist / relScale);
        var refPoint = tfjs_image_recognition_base_1.getCenterPoint(centers);
        // TODO: pad in case rectangle is out of image bounds
        var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
        var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
        return new tfjs_image_recognition_base_1.Rect(x, y, Math.min(size, this.imageWidth + x), Math.min(size, this.imageHeight + y));
    };
    FaceLandmarks.prototype.getRefPointsForAlignment = function () {
        throw new Error('getRefPointsForAlignment not implemented by base class');
    };
    return FaceLandmarks;
}());
exports.FaceLandmarks = FaceLandmarks;
//# sourceMappingURL=FaceLandmarks.js.map