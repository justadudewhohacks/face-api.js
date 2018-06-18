import { getCenterPoint } from './commons/getCenterPoint';
import { FaceDetection } from './faceDetectionNet/FaceDetection';
import { Rect } from './Rect';
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
/**
 * Aligns the face landmarks after face detection from the relative positions of the faces
 * bounding box, or it's current shift. This function should be used to align the face images
 * after face detection has been performed, before they are passed to the face recognition net.
 * This will make the computed face descriptor more accurate.
 *
 * @param detection (optional) The bounding box of the face or the face detection result. If
 * no argument was passed the position of the face landmarks are assumed to be relative to
 * it's current shift.
 * @returns The bounding box of the aligned face.
 */
export function alignFace(faceLandmarks, detection) {
    if (detection) {
        var box = detection instanceof FaceDetection
            ? detection.getBox().floor()
            : detection;
        return alignFace(faceLandmarks.shift(box.x, box.y));
    }
    var centers = [
        faceLandmarks.getLeftEye(),
        faceLandmarks.getRightEye(),
        faceLandmarks.getMouth()
    ].map(getCenterPoint);
    var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
    var distToMouth = function (pt) { return mouthCenter.sub(pt).magnitude(); };
    var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
    var size = Math.floor(eyeToMouthDist / relScale);
    var refPoint = getCenterPoint(centers);
    // TODO: pad in case rectangle is out of image bounds
    var x = Math.floor(Math.max(0, refPoint.x - (relX * size)));
    var y = Math.floor(Math.max(0, refPoint.y - (relY * size)));
    return new Rect(x, y, size, size);
}
//# sourceMappingURL=alignFace.js.map