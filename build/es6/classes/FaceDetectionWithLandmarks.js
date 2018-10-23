import { FaceDetection } from './FaceDetection';
var FaceDetectionWithLandmarks = /** @class */ (function () {
    function FaceDetectionWithLandmarks(detection, unshiftedLandmarks) {
        this._detection = detection;
        this._unshiftedLandmarks = unshiftedLandmarks;
    }
    Object.defineProperty(FaceDetectionWithLandmarks.prototype, "detection", {
        get: function () { return this._detection; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetectionWithLandmarks.prototype, "unshiftedLandmarks", {
        get: function () { return this._unshiftedLandmarks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetectionWithLandmarks.prototype, "alignedRect", {
        get: function () {
            var rect = this.landmarks.align();
            var imageDims = this.detection.imageDims;
            return new FaceDetection(this._detection.score, rect.rescale(imageDims.reverse()), imageDims);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetectionWithLandmarks.prototype, "landmarks", {
        get: function () {
            var _a = this.detection.box, x = _a.x, y = _a.y;
            return this._unshiftedLandmarks.shiftBy(x, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetectionWithLandmarks.prototype, "faceDetection", {
        // aliases for backward compatibily
        get: function () { return this.detection; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetectionWithLandmarks.prototype, "faceLandmarks", {
        get: function () { return this.landmarks; },
        enumerable: true,
        configurable: true
    });
    FaceDetectionWithLandmarks.prototype.forSize = function (width, height) {
        var resizedDetection = this._detection.forSize(width, height);
        var resizedLandmarks = this._unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
        return new FaceDetectionWithLandmarks(resizedDetection, resizedLandmarks);
    };
    return FaceDetectionWithLandmarks;
}());
export { FaceDetectionWithLandmarks };
//# sourceMappingURL=FaceDetectionWithLandmarks.js.map