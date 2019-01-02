import { FaceDetection } from '../classes/FaceDetection';
export function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
    var shift = sourceObj.detection.box;
    var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
    var rect = landmarks.align();
    var imageDims = sourceObj.detection.imageDims;
    var alignedRect = new FaceDetection(sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
    var extension = {
        landmarks: landmarks,
        unshiftedLandmarks: unshiftedLandmarks,
        alignedRect: alignedRect
    };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithFaceLandmarks.js.map