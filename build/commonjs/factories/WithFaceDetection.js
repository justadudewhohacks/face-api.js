"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaceDetection_1 = require("../classes/FaceDetection");
function isWithFaceDetection(obj) {
    return obj['detection'] instanceof FaceDetection_1.FaceDetection;
}
exports.isWithFaceDetection = isWithFaceDetection;
function extendWithFaceDetection(sourceObj, detection) {
    var extension = { detection: detection };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithFaceDetection = extendWithFaceDetection;
//# sourceMappingURL=WithFaceDetection.js.map