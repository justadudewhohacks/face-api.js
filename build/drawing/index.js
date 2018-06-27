"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function getDefaultDrawOptions() {
    return {
        color: 'blue',
        lineWidth: 2,
        fontSize: 20,
        fontStyle: 'Georgia'
    };
}
exports.getDefaultDrawOptions = getDefaultDrawOptions;
function drawBox(ctx, x, y, w, h, options) {
    var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
    ctx.strokeStyle = drawOptions.color;
    ctx.lineWidth = drawOptions.lineWidth;
    ctx.strokeRect(x, y, w, h);
}
exports.drawBox = drawBox;
function drawText(ctx, x, y, text, options) {
    var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
    var padText = 2 + drawOptions.lineWidth;
    ctx.fillStyle = drawOptions.color;
    ctx.font = drawOptions.fontSize + "px " + drawOptions.fontStyle;
    ctx.fillText(text, x + padText, y + padText + (drawOptions.fontSize * 0.6));
}
exports.drawText = drawText;
function drawDetection(canvasArg, detection, options) {
    var canvas = utils_1.getElement(canvasArg);
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('drawBox - expected canvas to be of type: HTMLCanvasElement');
    }
    var detectionArray = Array.isArray(detection)
        ? detection
        : [detection];
    detectionArray.forEach(function (det) {
        var _a = det.getBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
        var withScore = Object.assign({ withScore: true }, (options || {})).withScore;
        var ctx = utils_1.getContext2dOrThrow(canvas);
        drawBox(ctx, x, y, width, height, drawOptions);
        if (withScore) {
            drawText(ctx, x, y, "" + utils_1.round(det.getScore()), drawOptions);
        }
    });
}
exports.drawDetection = drawDetection;
function drawContour(ctx, points, isClosed) {
    if (isClosed === void 0) { isClosed = false; }
    ctx.beginPath();
    points.slice(1).forEach(function (_a, prevIdx) {
        var x = _a.x, y = _a.y;
        var from = points[prevIdx];
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(x, y);
    });
    if (isClosed) {
        var from = points[points.length - 1];
        var to = points[0];
        if (!from || !to) {
            return;
        }
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
    }
    ctx.stroke();
}
function drawLandmarks(canvasArg, faceLandmarks, options) {
    var canvas = utils_1.getElement(canvasArg);
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error('drawLandmarks - expected canvas to be of type: HTMLCanvasElement');
    }
    var drawOptions = Object.assign(getDefaultDrawOptions(), (options || {}));
    var drawLines = Object.assign({ drawLines: false }, (options || {})).drawLines;
    var ctx = utils_1.getContext2dOrThrow(canvas);
    var lineWidth = drawOptions.lineWidth, color = drawOptions.color;
    var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
    faceLandmarksArray.forEach(function (landmarks) {
        if (drawLines) {
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            drawContour(ctx, landmarks.getJawOutline());
            drawContour(ctx, landmarks.getLeftEyeBrow());
            drawContour(ctx, landmarks.getRightEyeBrow());
            drawContour(ctx, landmarks.getNose());
            drawContour(ctx, landmarks.getLeftEye(), true);
            drawContour(ctx, landmarks.getRightEye(), true);
            drawContour(ctx, landmarks.getMouth(), true);
            return;
        }
        // else draw points
        var ptOffset = lineWidth / 2;
        ctx.fillStyle = color;
        landmarks.getPositions().forEach(function (pt) { return ctx.fillRect(pt.x - ptOffset, pt.y - ptOffset, lineWidth, lineWidth); });
    });
}
exports.drawLandmarks = drawLandmarks;
//# sourceMappingURL=index.js.map