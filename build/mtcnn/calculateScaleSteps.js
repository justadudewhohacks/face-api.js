"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateScaleSteps(numScales, minFaceSize, dims) {
    var height = dims[0], width = dims[1];
    var maxDim = Math.max(height, width);
    if (Math.min(height, width) < minFaceSize) {
        throw new Error("Image dimensions: " + height + " x " + width + " are smaller than specified minimum face size of " + minFaceSize);
    }
    var scaleStep = (maxDim - minFaceSize) / numScales;
    return Array(numScales).fill(0).map(function (_, i) { return ((i + 1) * scaleStep + minFaceSize) / maxDim; }).reverse();
}
exports.calculateScaleSteps = calculateScaleSteps;
//# sourceMappingURL=calculateScaleSteps.js.map