"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceLandmarks68_1 = require("../classes/FaceLandmarks68");
var drawContour_1 = require("./drawContour");
function drawLandmarks(canvasArg, faceLandmarks, options) {
    var canvas = tfjs_image_recognition_base_1.resolveInput(canvasArg);
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement');
    }
    var drawOptions = Object.assign(tfjs_image_recognition_base_1.getDefaultDrawOptions(options), (options || {}));
    var drawLines = Object.assign({ drawLines: false }, (options || {})).drawLines;
    var ctx = tfjs_image_recognition_base_1.getContext2dOrThrow(canvas);
    var lineWidth = drawOptions.lineWidth, _a = drawOptions.color, color = _a === void 0 ? 'blue' : _a;
    var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
    faceLandmarksArray.forEach(function (landmarks) {
        if (drawLines && landmarks instanceof FaceLandmarks68_1.FaceLandmarks68) {
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            drawContour_1.drawContour(ctx, landmarks.getJawOutline());
            drawContour_1.drawContour(ctx, landmarks.getLeftEyeBrow());
            drawContour_1.drawContour(ctx, landmarks.getRightEyeBrow());
            drawContour_1.drawContour(ctx, landmarks.getNose());
            drawContour_1.drawContour(ctx, landmarks.getLeftEye(), true);
            drawContour_1.drawContour(ctx, landmarks.getRightEye(), true);
            drawContour_1.drawContour(ctx, landmarks.getMouth(), true);
            return;
        }
        // else draw points
        var ptOffset = lineWidth / 2;
        ctx.fillStyle = color;
        landmarks.positions.forEach(function (pt) { return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth); });
    });
}
exports.drawLandmarks = drawLandmarks;
//# sourceMappingURL=drawLandmarks.js.map