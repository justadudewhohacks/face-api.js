"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getCenterPoint_1 = require("../commons/getCenterPoint");
var FaceLandmarks_1 = require("../FaceLandmarks");
var FaceLandmarks5 = /** @class */ (function (_super) {
    tslib_1.__extends(FaceLandmarks5, _super);
    function FaceLandmarks5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks5.prototype.getRefPointsForAlignment = function () {
        var pts = this.getPositions();
        return [
            pts[0],
            pts[1],
            getCenterPoint_1.getCenterPoint([pts[3], pts[4]])
        ];
    };
    return FaceLandmarks5;
}(FaceLandmarks_1.FaceLandmarks));
exports.FaceLandmarks5 = FaceLandmarks5;
//# sourceMappingURL=FaceLandmarks5.js.map