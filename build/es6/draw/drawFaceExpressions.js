import { draw, Point, round } from 'tfjs-image-recognition-base';
import { FaceExpressions } from '../faceExpressionNet';
import { isWithFaceDetection } from '../factories/WithFaceDetection';
import { isWithFaceExpressions } from '../factories/WithFaceExpressions';
export function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
    if (minConfidence === void 0) { minConfidence = 0.1; }
    var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
    faceExpressionsArray.forEach(function (e) {
        var expr = e instanceof FaceExpressions
            ? e
            : (isWithFaceExpressions(e) ? e.expressions : undefined);
        if (!expr) {
            throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
        }
        var sorted = expr.asSortedArray();
        var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
        var anchor = isWithFaceDetection(e)
            ? e.detection.box.bottomLeft
            : (textFieldAnchor || new Point(0, 0));
        var drawTextField = new draw.DrawTextField(resultsToDisplay.map(function (expr) { return expr.expression + " (" + round(expr.probability) + ")"; }), anchor);
        drawTextField.draw(canvasArg);
    });
}
//# sourceMappingURL=drawFaceExpressions.js.map