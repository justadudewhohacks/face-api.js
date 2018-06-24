"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaceDetection_1 = require("./faceDetectionNet/FaceDetection");
var utils_1 = require("./utils");
/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
function extractFaces(image, detections) {
    var ctx = utils_1.getContext2dOrThrow(image);
    var boxes = detections.map(function (det) { return det instanceof FaceDetection_1.FaceDetection
        ? det.forSize(image.width, image.height).getBox().floor()
        : det; });
    return boxes.map(function (_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var faceImg = utils_1.createCanvas({ width: width, height: height });
        utils_1.getContext2dOrThrow(faceImg)
            .putImageData(ctx.getImageData(x, y, width, height), 0, 0);
        return faceImg;
    });
}
exports.extractFaces = extractFaces;
//# sourceMappingURL=extractFaces.js.map