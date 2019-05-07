"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceDetection_1 = require("../classes/FaceDetection");
var WithFaceDetection_1 = require("../factories/WithFaceDetection");
function drawDetections(canvasArg, detections) {
    var detectionsArray = Array.isArray(detections) ? detections : [detections];
    detectionsArray.forEach(function (det) {
        var score = det instanceof FaceDetection_1.FaceDetection
            ? det.score
            : (WithFaceDetection_1.isWithFaceDetection(det) ? det.detection.score : undefined);
        var box = det instanceof FaceDetection_1.FaceDetection
            ? det.box
            : (WithFaceDetection_1.isWithFaceDetection(det) ? det.detection.box : new tfjs_image_recognition_base_1.Box(det));
        var label = score ? "" + tfjs_image_recognition_base_1.round(score) : undefined;
        new tfjs_image_recognition_base_1.draw.DrawBox(box, { label: label }).draw(canvasArg);
    });
}
exports.drawDetections = drawDetections;
//# sourceMappingURL=drawDetections.js.map