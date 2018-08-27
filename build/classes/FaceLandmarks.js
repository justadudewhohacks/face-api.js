import { getCenterPoint, Point, Rect } from 'tfjs-image-recognition-base';
import { FaceDetection } from './FaceDetection';
// face alignment constants
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
var FaceLandmarks = /** @class */ (function () {
    function FaceLandmarks(relativeFaceLandmarkPositions, imageDims, shift) {
        if (shift === void 0) { shift = new Point(0, 0); }
        var width = imageDims.width, height = imageDims.height;
        this._imageWidth = width;
        this._imageHeight = height;
        this._shift = shift;
        this._faceLandmarks = relativeFaceLandmarkPositions.map(function (pt) { return pt.mul(new Point(width, height)).add(shift); });
    }
    FaceLandmarks.prototype.getShift = function () {
        return new Point(this._shift.x, this._shift.y);
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
        return this._faceLandmarks.map(function (pt) { return pt.sub(_this._shift).div(new Point(_this._imageWidth, _this._imageHeight)); });
    };
    FaceLandmarks.prototype.forSize = function (width, height) {
        return new this.constructor(this.getRelativePositions(), { width: width, height: height });
    };
    FaceLandmarks.prototype.shift = function (x, y) {
        return new this.constructor(this.getRelativePositions(), { width: this._imageWidth, height: this._imageHeight }, new Point(x, y));
    };
    FaceLandmarks.prototype.shiftByPoint = function (pt) {
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
    FaceLandmarks.prototype.align = function (detection) {
        if (detection) {
            var box = detection instanceof FaceDetection
                ? detection.getBox().floor()
                : detection;
            return this.shift(box.x, box.y).align();
        }
        var centers = this.getRefPointsForAlignment();
        var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
        var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
        var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
        var size = Math.floor(eyeToMouthDist / relScale);
        var refPoint = getCenterPoint(centers);
        // TODO: pad in case rectangle is out of image bounds
        var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
        var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
        return new Rect(x, y, Math.min(size, this._imageWidth + x), Math.min(size, this._imageHeight + y));
    };
    FaceLandmarks.prototype.getRefPointsForAlignment = function () {
        throw new Error('getRefPointsForAlignment not implemented by base class');
    };
    return FaceLandmarks;
}());
export { FaceLandmarks };
//# sourceMappingURL=FaceLandmarks.js.map