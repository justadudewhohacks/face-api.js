export var FACE_EXPRESSION_LABELS = ['neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'];
var FaceExpressions = /** @class */ (function () {
    function FaceExpressions(probabilities) {
        var _this = this;
        if (probabilities.length !== 7) {
            throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + probabilities.length);
        }
        FACE_EXPRESSION_LABELS.forEach(function (expression, idx) {
            _this[expression] = probabilities[idx];
        });
    }
    FaceExpressions.prototype.asSortedArray = function () {
        var _this = this;
        return FACE_EXPRESSION_LABELS
            .map(function (expression) { return ({ expression: expression, probability: _this[expression] }); })
            .sort(function (e0, e1) { return e1.probability - e0.probability; });
    };
    return FaceExpressions;
}());
export { FaceExpressions };
//# sourceMappingURL=FaceExpressions.js.map