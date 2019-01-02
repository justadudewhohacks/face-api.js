export function extendWithFaceDetection(sourceObj, detection) {
    var extension = { detection: detection };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithFaceDetection.js.map