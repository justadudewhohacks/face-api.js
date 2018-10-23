"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MtcnnOptions = /** @class */ (function () {
    function MtcnnOptions(_a) {
        var _b = _a === void 0 ? {} : _a, minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
        this._name = 'MtcnnOptions';
        this._minFaceSize = minFaceSize || 20;
        this._scaleFactor = scaleFactor || 0.709;
        this._maxNumScales = maxNumScales || 10;
        this._scoreThresholds = scoreThresholds || [0.6, 0.7, 0.7];
        this._scaleSteps = scaleSteps;
        if (typeof this._minFaceSize !== 'number' || this._minFaceSize < 0) {
            throw new Error(this._name + " - expected minFaceSize to be a number > 0");
        }
        if (typeof this._scaleFactor !== 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
            throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
        }
        if (typeof this._maxNumScales !== 'number' || this._maxNumScales < 0) {
            throw new Error(this._name + " - expected maxNumScales to be a number > 0");
        }
        if (!Array.isArray(this._scoreThresholds)
            || this._scoreThresholds.length !== 3
            || this._scoreThresholds.some(function (th) { return typeof th !== 'number'; })) {
            throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
        }
        if (this._scaleSteps
            && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (th) { return typeof th !== 'number'; }))) {
            throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
        }
    }
    Object.defineProperty(MtcnnOptions.prototype, "minFaceSize", {
        get: function () { return this._minFaceSize; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "scaleFactor", {
        get: function () { return this._scaleFactor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "maxNumScales", {
        get: function () { return this._maxNumScales; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "scoreThresholds", {
        get: function () { return this._scoreThresholds; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "scaleSteps", {
        get: function () { return this._scaleSteps; },
        enumerable: true,
        configurable: true
    });
    return MtcnnOptions;
}());
exports.MtcnnOptions = MtcnnOptions;
//# sourceMappingURL=MtcnnOptions.js.map