"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var faceExpressionNet_1 = require("../faceExpressionNet");
var WithFaceDetection_1 = require("../factories/WithFaceDetection");
var WithFaceExpressions_1 = require("../factories/WithFaceExpressions");
function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
    if (minConfidence === void 0) { minConfidence = 0.1; }
    var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [faceExpressions];
    faceExpressionsArray.forEach(function (e) {
        var expr = e instanceof faceExpressionNet_1.FaceExpressions
            ? e
            : (WithFaceExpressions_1.isWithFaceExpressions(e) ? e.expressions : undefined);
        if (!expr) {
            throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
        }
        var sorted = expr.asSortedArray();
        var resultsToDisplay = sorted.filter(function (expr) { return expr.probability > minConfidence; });
        var anchor = WithFaceDetection_1.isWithFaceDetection(e)
            ? e.detection.box.bottomLeft
            : (textFieldAnchor || new tfjs_image_recognition_base_1.Point(0, 0));
        var drawTextField = new tfjs_image_recognition_base_1.draw.DrawTextField(resultsToDisplay.map(function (expr) { return expr.expression + " (" + tfjs_image_recognition_base_1.round(expr.probability) + ")"; }), anchor);
        drawTextField.draw(canvasArg);
    });
}
exports.drawFaceExpressions = drawFaceExpressions;
//# sourceMappingURL=drawFaceExpressions.js.map