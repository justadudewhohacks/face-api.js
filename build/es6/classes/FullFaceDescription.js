var FullFaceDescription = /** @class */ (function () {
    function FullFaceDescription(_detection, _landmarks, _descriptor) {
        this._detection = _detection;
        this._landmarks = _landmarks;
        this._descriptor = _descriptor;
    }
    Object.defineProperty(FullFaceDescription.prototype, "detection", {
        get: function () {
            return this._detection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullFaceDescription.prototype, "landmarks", {
        get: function () {
            return this._landmarks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullFaceDescription.prototype, "descriptor", {
        get: function () {
            return this._descriptor;
        },
        enumerable: true,
        configurable: true
    });
    FullFaceDescription.prototype.forSize = function (width, height) {
        return new FullFaceDescription(this._detection.forSize(width, height), this._landmarks.forSize(width, height), this._descriptor);
    };
    return FullFaceDescription;
}());
export { FullFaceDescription };
//# sourceMappingURL=FullFaceDescription.js.map