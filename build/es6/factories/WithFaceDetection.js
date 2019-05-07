import { FaceDetection } from '../classes/FaceDetection';
export function isWithFaceDetection(obj) {
    return obj['detection'] instanceof FaceDetection;
}
export function extendWithFaceDetection(sourceObj, detection) {
    var extension = { detection: detection };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithFaceDetection.js.map