"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceDetection_1 = require("../classes/FaceDetection");
/**
 * Extracts the image regions containing the detected faces.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns The Canvases of the corresponding image region for each detected face.
 */
function extractFaces(input, detections) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var canvas, netInput, ctx, boxes;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = input;
                    if (!!(input instanceof HTMLCanvasElement)) return [3 /*break*/, 3];
                    return [4 /*yield*/, tfjs_image_recognition_base_1.toNetInput(input, true)];
                case 1:
                    netInput = _a.sent();
                    if (netInput.batchSize > 1) {
                        if (netInput.isManaged) {
                            netInput.dispose();
                        }
                        throw new Error('extractFaces - batchSize > 1 not supported');
                    }
                    return [4 /*yield*/, tfjs_image_recognition_base_1.imageTensorToCanvas(netInput.inputs[0])];
                case 2:
                    canvas = _a.sent();
                    if (netInput.isManaged) {
                        netInput.dispose();
                    }
                    _a.label = 3;
                case 3:
                    ctx = tfjs_image_recognition_base_1.getContext2dOrThrow(canvas);
                    boxes = detections.map(function (det) { return det instanceof FaceDetection_1.FaceDetection
                        ? det.forSize(canvas.width, canvas.height).getBox().floor()
                        : det; })
                        .map(function (box) { return box.clipAtImageBorders(canvas.width, canvas.height); });
                    return [2 /*return*/, boxes.map(function (_a) {
                            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                            var faceImg = tfjs_image_recognition_base_1.createCanvas({ width: width, height: height });
                            tfjs_image_recognition_base_1.getContext2dOrThrow(faceImg)
                                .putImageData(ctx.getImageData(x, y, width, height), 0, 0);
                            return faceImg;
                        })];
            }
        });
    });
}
exports.extractFaces = extractFaces;
//# sourceMappingURL=extractFaces.js.map