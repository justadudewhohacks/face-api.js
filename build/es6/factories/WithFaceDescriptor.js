export function extendWithFaceDescriptor(sourceObj, descriptor) {
    var extension = { descriptor: descriptor };
    return Object.assign({}, sourceObj, extension);
}
//# sourceMappingURL=WithFaceDescriptor.js.map