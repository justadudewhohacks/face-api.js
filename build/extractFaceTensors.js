"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var FaceDetection_1 = require("./FaceDetection");
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
        var netInput;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, toNetInput_1.toNetInput(input, true)];
                case 1:
                    netInput = _a.sent();
                    if (netInput.batchSize > 1) {
                        if (netInput.isManaged) {
                            netInput.dispose();
                        }
                        throw new Error('extractFaceTensors - batchSize > 1 not supported');
                    }
                    return [2 /*return*/, tf.tidy(function () {
                            var imgTensor = netInput.inputs[0].expandDims().toFloat();
                            var _a = imgTensor.shape.slice(1), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                            var boxes = detections.map(function (det) { return det instanceof FaceDetection_1.FaceDetection
                                ? det.forSize(imgWidth, imgHeight).getBox()
                                : det; })
                                .map(function (box) { return box.clipAtImageBorders(imgWidth, imgHeight); });
                            var faceTensors = boxes.map(function (_a) {
                                var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                                return tf.slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels]);
                            });
                            if (netInput.isManaged) {
                                netInput.dispose();
                            }
                            return faceTensors;
                        })];
            }
        });
    });
}
exports.extractFaceTensors = extractFaceTensors;
//# sourceMappingURL=extractFaceTensors.js.map