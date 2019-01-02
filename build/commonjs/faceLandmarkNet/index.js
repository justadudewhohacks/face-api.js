"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FaceLandmark68Net_1 = require("./FaceLandmark68Net");
tslib_1.__exportStar(require("./FaceLandmark68Net"), exports);
tslib_1.__exportStar(require("./FaceLandmark68TinyNet"), exports);
var FaceLandmarkNet = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarkNet, _super);
    function FaceLandmarkNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceLandmarkNet;
}(FaceLandmark68Net_1.FaceLandmark68Net));
exports.FaceLandmarkNet = FaceLandmarkNet;
//# sourceMappingURL=index.js.map