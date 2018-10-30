"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SsdMobilenetv1Options_1 = require("../ssdMobilenetv1/SsdMobilenetv1Options");
var DetectFacesTasks_1 = require("./DetectFacesTasks");
function detectSingleFace(input, options) {
    if (options === void 0) { options = new SsdMobilenetv1Options_1.SsdMobilenetv1Options(); }
    return new DetectFacesTasks_1.DetectSingleFaceTask(input, options);
}
exports.detectSingleFace = detectSingleFace;
function detectAllFaces(input, options) {
    if (options === void 0) { options = new SsdMobilenetv1Options_1.SsdMobilenetv1Options(); }
    return new DetectFacesTasks_1.DetectAllFacesTask(input, options);
}
exports.detectAllFaces = detectAllFaces;
//# sourceMappingURL=detectFaces.js.map