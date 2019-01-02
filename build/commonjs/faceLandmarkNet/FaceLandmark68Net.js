"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceFeatureExtractor_1 = require("../faceFeatureExtractor/FaceFeatureExtractor");
var FaceLandmark68NetBase_1 = require("./FaceLandmark68NetBase");
var FaceLandmark68Net = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmark68Net, _super);
    function FaceLandmark68Net(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) { faceFeatureExtractor = new FaceFeatureExtractor_1.FaceFeatureExtractor(); }
        return _super.call(this, 'FaceLandmark68Net', faceFeatureExtractor) || this;
    }
    FaceLandmark68Net.prototype.getDefaultModelName = function () {
        return 'face_landmark_68_model';
    };
    FaceLandmark68Net.prototype.getClassifierChannelsIn = function () {
        return 256;
    };
    return FaceLandmark68Net;
}(FaceLandmark68NetBase_1.FaceLandmark68NetBase));
exports.FaceLandmark68Net = FaceLandmark68Net;
//# sourceMappingURL=FaceLandmark68Net.js.map