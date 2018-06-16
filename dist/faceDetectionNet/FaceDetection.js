import { Rect } from '../Rect';
var FaceDetection = /** @class */ (function () {
    function FaceDetection(score, relativeBox, imageDims) {
        var width = imageDims.width, height = imageDims.height;
        this._imageWidth = width;
        this._imageHeight = height;
        this._score = score;
        this._box = new Rect(Math.floor(relativeBox.x * width), Math.floor(relativeBox.y * height), Math.floor(relativeBox.width * width), Math.floor(relativeBox.height * height));
    }
    FaceDetection.prototype.getScore = function () {
        return this._score;
    };
    FaceDetection.prototype.getBox = function () {
        return this._box;
    };
    FaceDetection.prototype.getRelativeBox = function () {
        return new Rect(this._box.x / this._imageWidth, this._box.y / this._imageHeight, this._box.width / this._imageWidth, this._box.height / this._imageHeight);
    };
    FaceDetection.prototype.forSize = function (width, height) {
        return new FaceDetection(this._score, this.getRelativeBox(), { width: width, height: height });
    };
    return FaceDetection;
}());
export { FaceDetection };
//# sourceMappingURL=FaceDetection.js.map