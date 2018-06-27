"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var getImageTensor_1 = require("./commons/getImageTensor");
var FaceDetection_1 = require("./faceDetectionNet/FaceDetection");
var toNetInput_1 = require("./toNetInput");
/**
 * Extracts the tensors of the image regions containing the detected faces.
 * Useful if you want to compute the face descriptors for the face images.
 * Using this method is faster then extracting a canvas for each face and
 * converting them to tensors individually.
 *
 * @param input The image that face detection has been performed on.
 * @param detections The face detection results or face bounding boxes for that image.
 * @returns Tensors of the corresponding image region for each detected face.
 */
function extractFaceTensors(input, detections) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var image, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(input instanceof tf.Tensor)) return [3 /*break*/, 1];
                    _a = input;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, toNetInput_1.toNetInput(input)];
                case 2:
                    _a = _b.sent();
                    _b.label = 3;
                case 3:
                    image = _a;
                    return [2 /*return*/, tf.tidy(function () {
                            var imgTensor = getImageTensor_1.getImageTensor(image);
                            // TODO handle batches
                            var _a = imgTensor.shape, batchSize = _a[0], imgHeight = _a[1], imgWidth = _a[2], numChannels = _a[3];
                            var boxes = detections.map(function (det) { return det instanceof FaceDetection_1.FaceDetection
                                ? det.forSize(imgWidth, imgHeight).getBox().floor()
                                : det; });
                            var faceTensors = boxes.map(function (_a) {
                                var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                                return tf.slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels]);
                            });
                            return faceTensors;
                        })];
            }
        });
    });
}
exports.extractFaceTensors = extractFaceTensors;
//# sourceMappingURL=extractFaceTensors.js.map