"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect_1 = require("./Rect");
var FaceDetection = /** @class */ (function () {
    function FaceDetection(score, relativeBox, imageDims) {
        var width = imageDims.width, height = imageDims.height;
        this._imageWidth = width;
        this._imageHeight = height;
        this._score = score;
        this._box = new Rect_1.Rect(relativeBox.x * width, relativeBox.y * height, relativeBox.width * width, relativeBox.height * height);
    }
    Object.defineProperty(FaceDetection.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetection.prototype, "box", {
        get: function () {
            return this._box;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetection.prototype, "imageWidth", {
        get: function () {
            return this._imageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetection.prototype, "imageHeight", {
        get: function () {
            return this._imageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceDetection.prototype, "relativeBox", {
        get: function () {
            return new Rect_1.Rect(this._box.x / this._imageWidth, this._box.y / this._imageHeight, this._box.width / this._imageWidth, this._box.height / this._imageHeight);
        },
        enumerable: true,
        configurable: true
    });
    FaceDetection.prototype.getScore = function () {
        return this.score;
    };
    FaceDetection.prototype.getBox = function () {
        return this.box;
    };
    FaceDetection.prototype.getImageWidth = function () {
        return this.imageWidth;
    };
    FaceDetection.prototype.getImageHeight = function () {
        return this.imageHeight;
    };
    FaceDetection.prototype.getRelativeBox = function () {
        return this.relativeBox;
    };
    FaceDetection.prototype.forSize = function (width, height) {
        return new FaceDetection(this._score, this.getRelativeBox(), { width: width, height: height });
    };
    return FaceDetection;
}());
exports.FaceDetection = FaceDetection;
//# sourceMappingURL=FaceDetection.js.map