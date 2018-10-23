var SsdMobilenetv1Options = /** @class */ (function () {
    function SsdMobilenetv1Options(_a) {
        var _b = _a === void 0 ? {} : _a, minConfidence = _b.minConfidence, maxResults = _b.maxResults;
        this._name = 'SsdMobilenetv1Options';
        this._minConfidence = minConfidence || 0.5;
        this._maxResults = maxResults || 100;
        if (typeof this._minConfidence !== 'number' || this._minConfidence <= 0 || this._minConfidence >= 1) {
            throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
        }
        if (typeof this._maxResults !== 'number') {
            throw new Error(this._name + " - expected maxResults to be a number");
        }
    }
    Object.defineProperty(SsdMobilenetv1Options.prototype, "minConfidence", {
        get: function () { return this._minConfidence; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SsdMobilenetv1Options.prototype, "maxResults", {
        get: function () { return this._maxResults; },
        enumerable: true,
        configurable: true
    });
    return SsdMobilenetv1Options;
}());
export { SsdMobilenetv1Options };
//# sourceMappingURL=SsdMobilenetv1Options.js.map