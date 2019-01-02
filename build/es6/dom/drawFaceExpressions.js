import { drawText, env, getContext2dOrThrow, getDefaultDrawOptions, resolveInput, round } from 'tfjs-image-recognition-base';
export function drawFaceExpressions(canvasArg, faceExpressions, options) {
    var canvas = resolveInput(canvasArg);
    if (!(canvas instanceof env.getEnv().Canvas)) {
        throw new Error('drawFaceExpressions - expected canvas to be of type: HTMLCanvasElement');
    }
    var drawOptions = Object.assign(getDefaultDrawOptions(options), (options || {}));
    var ctx = getContext2dOrThrow(canvas);
    var _a = drawOptions.primaryColor, primaryColor = _a === void 0 ? 'red' : _a, _b = drawOptions.secondaryColor, secondaryColor = _b === void 0 ? 'blue' : _b, _c = drawOptions.primaryFontSize, primaryFontSize = _c === void 0 ? 22 : _c, _d = drawOptions.secondaryFontSize, secondaryFontSize = _d === void 0 ? 16 : _d, _e = drawOptions.minConfidence, minConfidence = _e === void 0 ? 0.2 : _e;
    var faceExpressionsArray = Array.isArray(faceExpressions)
        ? faceExpressions
        : [faceExpressions];
    faceExpressionsArray.forEach(function (_a) {
        var position = _a.position, expressions = _a.expressions;
        var x = position.x, y = position.y;
        var height = position.height || 0;
        var sorted = expressions.sort(function (a, b) { return b.probability - a.probability; });
        var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
        var offset = (y + height + resultsToDisplay.length * primaryFontSize) > canvas.height
            ? -(resultsToDisplay.length * primaryFontSize)
            : 0;
        resultsToDisplay.forEach(function (expr, i) {
            var text = expr.expression + " (" + round(expr.probability) + ")";
            drawText(ctx, x, y + height + (i * primaryFontSize) + offset, text, {
                textColor: i === 0 ? primaryColor : secondaryColor,
                fontSize: i === 0 ? primaryFontSize : secondaryFontSize
            });
        });
    });
}
//# sourceMappingURL=drawFaceExpressions.js.map