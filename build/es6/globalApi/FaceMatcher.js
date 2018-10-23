import { FaceMatch } from '../classes/FaceMatch';
import { FullFaceDescription } from '../classes/FullFaceDescription';
import { LabeledFaceDescriptors } from '../classes/LabeledFaceDescriptors';
import { euclideanDistance } from '../euclideanDistance';
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
            if (desc instanceof LabeledFaceDescriptors) {
                return desc;
            }
            if (desc instanceof FullFaceDescription) {
                return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor]);
            }
            if (desc instanceof Float32Array) {
                return new LabeledFaceDescriptors(createUniqueLabel(), [desc]);
            }
            throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | FullFaceDescription | Float32Array | Array<LabeledFaceDescriptors | FullFaceDescription | Float32Array>");
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
            .map(function (d) { return euclideanDistance(d, queryDescriptor); })
            .reduce(function (d1, d2) { return d1 + d2; }, 0)
            / (descriptors.length || 1);
    };
    FaceMatcher.prototype.matchDescriptor = function (queryDescriptor) {
        var _this = this;
        return this.labeledDescriptors
            .map(function (_a) {
            var descriptors = _a.descriptors, label = _a.label;
            return new FaceMatch(label, _this.computeMeanDistance(queryDescriptor, descriptors));
        })
            .reduce(function (best, curr) { return best.distance < curr.distance ? best : curr; });
    };
    FaceMatcher.prototype.findBestMatch = function (queryDescriptor) {
        var bestMatch = this.matchDescriptor(queryDescriptor);
        return bestMatch.distance < this.distanceThreshold
            ? bestMatch
            : new FaceMatch('unknown', bestMatch.distance);
    };
    return FaceMatcher;
}());
export { FaceMatcher };
//# sourceMappingURL=FaceMatcher.js.map