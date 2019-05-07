"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceLandmarks_1 = require("../classes/FaceLandmarks");
var FaceLandmarks68_1 = require("../classes/FaceLandmarks68");
var WithFaceLandmarks_1 = require("../factories/WithFaceLandmarks");
var drawContour_1 = require("./drawContour");
var DrawFaceLandmarksOptions = /** @class */ (function () {
    function DrawFaceLandmarksOptions(options) {
        if (options === void 0) { options = {}; }
        var _a = options.drawLines, drawLines = _a === void 0 ? true : _a, _b = options.drawPoints, drawPoints = _b === void 0 ? true : _b, lineWidth = options.lineWidth, lineColor = options.lineColor, pointSize = options.pointSize, pointColor = options.pointColor;
        this.drawLines = drawLines;
        this.drawPoints = drawPoints;
        this.lineWidth = lineWidth || 1;
        this.pointSize = pointSize || 2;
        this.lineColor = lineColor || 'rgba(0, 255, 255, 1)';
        this.pointColor = pointColor || 'rgba(255, 0, 255, 1)';
    }
    return DrawFaceLandmarksOptions;
}());
exports.DrawFaceLandmarksOptions = DrawFaceLandmarksOptions;
var DrawFaceLandmarks = /** @class */ (function () {
    function DrawFaceLandmarks(faceLandmarks, options) {
        if (options === void 0) { options = {}; }
        this.faceLandmarks = faceLandmarks;
        this.options = new DrawFaceLandmarksOptions(options);
    }
    DrawFaceLandmarks.prototype.draw = function (canvasArg) {
        var ctx = tfjs_image_recognition_base_1.getContext2dOrThrow(canvasArg);
        var _a = this.options, drawLines = _a.drawLines, drawPoints = _a.drawPoints, lineWidth = _a.lineWidth, lineColor = _a.lineColor, pointSize = _a.pointSize, pointColor = _a.pointColor;
        if (drawLines && this.faceLandmarks instanceof FaceLandmarks68_1.FaceLandmarks68) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            drawContour_1.drawContour(ctx, this.faceLandmarks.getJawOutline());
            drawContour_1.drawContour(ctx, this.faceLandmarks.getLeftEyeBrow());
            drawContour_1.drawContour(ctx, this.faceLandmarks.getRightEyeBrow());
            drawContour_1.drawContour(ctx, this.faceLandmarks.getNose());
            drawContour_1.drawContour(ctx, this.faceLandmarks.getLeftEye(), true);
            drawContour_1.drawContour(ctx, this.faceLandmarks.getRightEye(), true);
            drawContour_1.drawContour(ctx, this.faceLandmarks.getMouth(), true);
        }
        if (drawPoints) {
            ctx.strokeStyle = pointColor;
            ctx.fillStyle = pointColor;
            var drawPoint = function (pt) {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pointSize, 0, 2 * Math.PI);
                ctx.fill();
            };
            this.faceLandmarks.positions.forEach(drawPoint);
        }
    };
    return DrawFaceLandmarks;
}());
exports.DrawFaceLandmarks = DrawFaceLandmarks;
function drawFaceLandmarks(canvasArg, faceLandmarks) {
    var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [faceLandmarks];
    faceLandmarksArray.forEach(function (f) {
        var landmarks = f instanceof FaceLandmarks_1.FaceLandmarks
            ? f
            : (WithFaceLandmarks_1.isWithFaceLandmarks(f) ? f.landmarks : undefined);
        if (!landmarks) {
            throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof');
        }
        new DrawFaceLandmarks(landmarks).draw(canvasArg);
    });
}
exports.drawFaceLandmarks = drawFaceLandmarks;
//# sourceMappingURL=DrawFaceLandmarks.js.map