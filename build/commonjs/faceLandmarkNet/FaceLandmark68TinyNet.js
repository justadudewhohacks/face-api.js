"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var TinyFaceFeatureExtractor_1 = require("../faceFeatureExtractor/TinyFaceFeatureExtractor");
var FaceLandmark68NetBase_1 = require("./FaceLandmark68NetBase");
var FaceLandmark68TinyNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmark68TinyNet, _super);
    function FaceLandmark68TinyNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new TinyFaceFeatureExtractor_1.TinyFaceFeatureExtractor(); }
        return _super.call(this, 'FaceLandmark68TinyNet', faceFeatureExtractor) || this;
    }
    FaceLandmark68TinyNet.prototype.getDefaultModelName = function () {
        return 'face_landmark_68_tiny_model';
    };
    FaceLandmark68TinyNet.prototype.getClassifierChannelsIn = function () {
        return 128;
    };
    return FaceLandmark68TinyNet;
}(FaceLandmark68NetBase_1.FaceLandmark68NetBase));
exports.FaceLandmark68TinyNet = FaceLandmark68TinyNet;
//# sourceMappingURL=FaceLandmark68TinyNet.js.map