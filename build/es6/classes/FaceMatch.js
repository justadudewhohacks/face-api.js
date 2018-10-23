import { round } from 'tfjs-image-recognition-base';
var FaceMatch = /** @class */ (function () {
    function FaceMatch(label, distance) {
        this._label = label;
        this._distance = distance;
    }
    Object.defineProperty(FaceMatch.prototype, "label", {
        get: function () { return this._label; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceMatch.prototype, "distance", {
        get: function () { return this._distance; },
        enumerable: true,
        configurable: true
    });
    FaceMatch.prototype.toString = function (withDistance) {
        if (withDistance === void 0) { withDistance = true; }
        return "" + this.label + (withDistance ? " (" + round(this.distance) + ")" : '');
    };
    return FaceMatch;
}());
export { FaceMatch };
//# sourceMappingURL=FaceMatch.js.map