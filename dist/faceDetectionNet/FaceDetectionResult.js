var FaceDetectionResult = /** @class */ (function () {
    function FaceDetectionResult(score, top, left, bottom, right) {
        this.score = score;
        this.top = Math.max(0, top),
            this.left = Math.max(0, left),
            this.bottom = Math.min(1.0, bottom),
            this.right = Math.min(1.0, right);
    }
    FaceDetectionResult.prototype.forSize = function (width, height) {
        return {
            score: this.score,
            box: {
                top: this.top * height,
                left: this.left * width,
                bottom: this.bottom * height,
                right: this.right * width
            }
        };
    };
    return FaceDetectionResult;
}());
export { FaceDetectionResult };
//# sourceMappingURL=FaceDetectionResult.js.map