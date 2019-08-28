"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    LabeledFaceDescriptors.fromJSON = function (jsonString) {
        return LabeledFaceDescriptors.fromPOJO(JSON.parse(jsonString));
    };
    LabeledFaceDescriptors.fromPOJO = function (pojo) {
        var descriptors = pojo._descriptors.map(function (d) {
            return new Float32Array(Object.keys(d).map(function (key) { return d[key]; }));
        });
        return new LabeledFaceDescriptors(pojo._label, descriptors);
    };
    return LabeledFaceDescriptors;
}());
exports.LabeledFaceDescriptors = LabeledFaceDescriptors;
//# sourceMappingURL=LabeledFaceDescriptors.js.map