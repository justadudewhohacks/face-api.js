var FaceDetectionResult = /** @class */ (function () {
    function FaceDetectionResult(score, topRelative, leftRelative, bottomRelative, rightRelative) {
        this._score = score;
        this._topRelative = Math.max(0, topRelative),
            this._leftRelative = Math.max(0, leftRelative),
            this._bottomRelative = Math.min(1.0, bottomRelative),
            this._rightRelative = Math.min(1.0, rightRelative);
    }
    FaceDetectionResult.prototype.forSize = function (width, height) {
        var x = Math.floor(this._leftRelative * width);
        var y = Math.floor(this._topRelative * height);
        return {
            score: this._score,
            box: {
                x: x,
                y: y,
                width: Math.floor(this._rightRelative * width) - x,
                height: Math.floor(this._bottomRelative * height) - y
            }
        };
    };
    return FaceDetectionResult;
}());
export { FaceDetectionResult };
//# sourceMappingURL=FaceDetectionResult.js.map