"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extendWithFaceDescriptor(sourceObj, descriptor) {
    var extension = { descriptor: descriptor };
    return Object.assign({}, sourceObj, extension);
}
exports.extendWithFaceDescriptor = extendWithFaceDescriptor;
//# sourceMappingURL=WithFaceDescriptor.js.map