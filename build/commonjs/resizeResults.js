"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaceDetection_1 = require("./classes/FaceDetection");
var FaceLandmarks_1 = require("./classes/FaceLandmarks");
var WithFaceDetection_1 = require("./factories/WithFaceDetection");
var WithFaceLandmarks_1 = require("./factories/WithFaceLandmarks");
function resizeResults(results, _a) {
    var width = _a.width, height = _a.height;
    if (Array.isArray(results)) {
        return results.map(function (obj) { return resizeResults(obj, { width: width, height: height }); });
    }
    var hasLandmarks = results['unshiftedLandmarks'] && results['unshiftedLandmarks'] instanceof FaceLandmarks_1.FaceLandmarks;
    var hasDetection = results['detection'] && results['detection'] instanceof FaceDetection_1.FaceDetection;
    if (hasLandmarks) {
        var resizedDetection = results['detection'].forSize(width, height);
        var resizedLandmarks = results['unshiftedLandmarks'].forSize(resizedDetection.box.width, resizedDetection.box.height);
        return WithFaceLandmarks_1.extendWithFaceLandmarks(WithFaceDetection_1.extendWithFaceDetection(results, resizedDetection), resizedLandmarks);
    }
    if (hasDetection) {
        return WithFaceDetection_1.extendWithFaceDetection(results, results['detection'].forSize(width, height));
    }
    if (results instanceof FaceLandmarks_1.FaceLandmarks || results instanceof FaceDetection_1.FaceDetection) {
        return results.forSize(width, height);
    }
    return results;
}
exports.resizeResults = resizeResults;
//# sourceMappingURL=resizeResults.js.map