"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FaceMatch_1 = require("../classes/FaceMatch");
var LabeledFaceDescriptors_1 = require("../classes/LabeledFaceDescriptors");
var euclideanDistance_1 = require("../euclideanDistance");
var FaceMatcher = /** @class */ (function () {
    function FaceMatcher(inputs, distanceThreshold) {
        if (distanceThreshold === void 0) { distanceThreshold = 0.6; }
        this._distanceThreshold = distanceThreshold;
        var inputArray = Array.isArray(inputs) ? inputs : [inputs];
        if (!inputArray.length) {
            throw new Error("FaceRecognizer.constructor - expected atleast one input");
        }
        var count = 1;
        var createUniqueLabel = function () { return "person " + count++; };
        this._labeledDescriptors = inputArray.map(function (desc) {
            if (desc instanceof LabeledFaceDescriptors_1.LabeledFaceDescriptors) {
                return desc;
            }
            if (desc instanceof Float32Array) {
                return new LabeledFaceDescriptors_1.LabeledFaceDescriptors(createUniqueLabel(), [desc]);
            }
            if (desc.descriptor && desc.descriptor instanceof Float32Array) {
                return new LabeledFaceDescriptors_1.LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
            }
            throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
        });
    }
    Object.defineProperty(FaceMatcher.prototype, "labeledDescriptors", {
        get: function () { return this._labeledDescriptors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceMatcher.prototype, "distanceThreshold", {
        get: function () { return this._distanceThreshold; },
        enumerable: true,
        configurable: true
    });
    FaceMatcher.prototype.computeMeanDistance = function (queryDescriptor, descriptors) {
        return descriptors
            .map(function (d) { return euclideanDistance_1.euclideanDistance(d, queryDescriptor); })
            .reduce(function (d1, d2) { return d1 + d2; }, 0)
            / (descriptors.length || 1);
    };
    FaceMatcher.prototype.matchDescriptor = function (queryDescriptor) {
        var _this = this;
        return this.labeledDescriptors
            .map(function (_a) {
            var descriptors = _a.descriptors, label = _a.label;
            return new FaceMatch_1.FaceMatch(label, _this.computeMeanDistance(queryDescriptor, descriptors));
        })
            .reduce(function (best, curr) { return best.distance < curr.distance ? best : curr; });
    };
    FaceMatcher.prototype.findBestMatch = function (queryDescriptor) {
        var bestMatch = this.matchDescriptor(queryDescriptor);
        return bestMatch.distance < this.distanceThreshold
            ? bestMatch
            : new FaceMatch_1.FaceMatch('unknown', bestMatch.distance);
    };
    FaceMatcher.toJSON = function (matcher, pretty) {
        if (pretty === void 0) { pretty = false; }
        return JSON.stringify(matcher, null, pretty ? 2 : undefined);
    };
    FaceMatcher.fromJSON = function (jsonString) {
        var poco = JSON.parse(jsonString);
        var labeledDescriptors = poco._labeledDescriptors
            .map(function (_a) {
            var _label = _a._label, _descriptors = _a._descriptors;
            return new LabeledFaceDescriptors_1.LabeledFaceDescriptors(_label, _descriptors.map(function (d) {
                return new Float32Array(Object.values(d));
            }));
        });
        return new FaceMatcher(labeledDescriptors, poco._distanceThreshold);
    };
    return FaceMatcher;
}());
exports.FaceMatcher = FaceMatcher;
//# sourceMappingURL=FaceMatcher.js.map