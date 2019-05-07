import { Dimensions } from 'tfjs-image-recognition-base';
import { FaceDetection } from './classes/FaceDetection';
import { FaceLandmarks } from './classes/FaceLandmarks';
import { extendWithFaceDetection, isWithFaceDetection } from './factories/WithFaceDetection';
import { extendWithFaceLandmarks, isWithFaceLandmarks } from './factories/WithFaceLandmarks';
export function resizeResults(results, dimensions) {
    var _a = new Dimensions(dimensions.width, dimensions.height), width = _a.width, height = _a.height;
    if (width <= 0 || height <= 0) {
        throw new Error("resizeResults - invalid dimensions: " + JSON.stringify({ width: width, height: height }));
    }
    if (Array.isArray(results)) {
        return results.map(function (obj) { return resizeResults(obj, { width: width, height: height }); });
    }
    if (isWithFaceLandmarks(results)) {
        var resizedDetection = results.detection.forSize(width, height);
        var resizedLandmarks = results.unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
        return extendWithFaceLandmarks(extendWithFaceDetection(results, resizedDetection), resizedLandmarks);
    }
    if (isWithFaceDetection(results)) {
        return extendWithFaceDetection(results, results.detection.forSize(width, height));
    }
    if (results instanceof FaceLandmarks || results instanceof FaceDetection) {
        return results.forSize(width, height);
    }
    return results;
}
//# sourceMappingURL=resizeResults.js.map