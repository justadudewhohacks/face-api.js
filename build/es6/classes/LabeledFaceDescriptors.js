var LabeledFaceDescriptors = /** @class */ (function () {
    function LabeledFaceDescriptors(label, descriptors) {
        if (!(typeof label === 'string')) {
            throw new Error('LabeledFaceDescriptors - constructor expected label to be a string');
        }
        if (!Array.isArray(descriptors) || descriptors.some(function (desc) { return !(desc instanceof Float32Array); })) {
            throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array');
        }
        this._label = label;
        this._descriptors = descriptors;
    }
    Object.defineProperty(LabeledFaceDescriptors.prototype, "label", {
        get: function () { return this._label; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledFaceDescriptors.prototype, "descriptors", {
        get: function () { return this._descriptors; },
        enumerable: true,
        configurable: true
    });
    LabeledFaceDescriptors.prototype.toJSON = function () {
        return {
            label: this.label,
            descriptors: this.descriptors.map(function (d) { return Array.from(d); })
        };
    };
    LabeledFaceDescriptors.fromJSON = function (json) {
        var descriptors = json.descriptors.map(function (d) {
            return new Float32Array(d);
        });
        return new LabeledFaceDescriptors(json.label, descriptors);
    };
    return LabeledFaceDescriptors;
}());
export { LabeledFaceDescriptors };
//# sourceMappingURL=LabeledFaceDescriptors.js.map