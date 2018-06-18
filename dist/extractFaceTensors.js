import * as tf from '@tensorflow/tfjs-core';
import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { getImageTensor } from './getImageTensor';
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
export function extractFaceTensors(image, detections) {
    return tf.tidy(function () {
        var imgTensor = getImageTensor(image);
        // TODO handle batches
        var _a = imgTensor.shape, batchSize = _a[0], imgHeight = _a[1], imgWidth = _a[2], numChannels = _a[3];
        var boxes = detections.map(function (det) { return det instanceof FaceDetection
            ? det.forSize(imgWidth, imgHeight).getBox().floor()
            : det; });
        var faceTensors = boxes.map(function (_a) {
            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            return tf.slice(imgTensor, [0, y, x, 0], [1, height, width, numChannels]);
        });
        return faceTensors;
    });
}
//# sourceMappingURL=extractFaceTensors.js.map