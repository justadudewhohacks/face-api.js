"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extendWithFaceDetection(sourceObj, detection) {
    var extension = { detection: detection };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithFaceDetection = extendWithFaceDetection;
//# sourceMappingURL=WithFaceDetection.js.map