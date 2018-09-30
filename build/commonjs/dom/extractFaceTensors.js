"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var FaceDetection_1 = require("../classes/FaceDetection");
/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Useful if you want to compute the face descriptors for the face images.
 * Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param imageTensor The image tensor that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */
function extractFaceTensors(imageTensor, detections) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if (tfjs_image_recognition_base_1.isTensor4D(imageTensor) && imageTensor.shape[0] > 1) {
                throw new Error('extractFaceTensors - batchSize > 1 not supported');
            }
            return [2 /*return*/, tf.tidy(function () {
                    var _a = imageTensor.shape.slice(tfjs_image_recognition_base_1.isTensor4D(imageTensor) ? 1 : 0), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                    var boxes = detections.map(function (det) { return det instanceof FaceDetection_1.FaceDetection
                        ? det.forSize(imgWidth, imgHeight).getBox()
                        : det; })
                        .map(function (box) { return box.clipAtImageBorders(imgWidth, imgHeight); });
                    var faceTensors = boxes.map(function (_a) {
                        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                        return tf.slice3d(imageTensor.as3D(imgHeight, imgWidth, numChannels), [y, x, 0], [height, width, numChannels]);
                    });
                    return faceTensors;
                })];
        });
    });
}
exports.extractFaceTensors = extractFaceTensors;
//# sourceMappingURL=extractFaceTensors.js.map