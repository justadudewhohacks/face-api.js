"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaceDetection_1 = require("../classes/FaceDetection");
var FaceLandmarks_1 = require("../classes/FaceLandmarks");
var WithFaceDetection_1 = require("./WithFaceDetection");
function isWithFaceLandmarks(obj) {
    return WithFaceDetection_1.isWithFaceDetection(obj)
        && obj['landmarks'] instanceof FaceLandmarks_1.FaceLandmarks
        && obj['unshiftedLandmarks'] instanceof FaceLandmarks_1.FaceLandmarks
        && obj['alignedRect'] instanceof FaceDetection_1.FaceDetection;
}
exports.isWithFaceLandmarks = isWithFaceLandmarks;
function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
    var shift = sourceObj.detection.box;
    var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
    var rect = landmarks.align();
    var imageDims = sourceObj.detection.imageDims;
    var alignedRect = new FaceDetection_1.FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
    var extension = {
        landmarks: landmarks,
        unshiftedLandmarks: unshiftedLandmarks,
        alignedRect: alignedRect
    };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithFaceLandmarks = extendWithFaceLandmarks;
//# sourceMappingURL=WithFaceLandmarks.js.map