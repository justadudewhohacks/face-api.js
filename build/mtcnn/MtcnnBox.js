"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var MtcnnBox = /** @class */ (function (_super) {
    tslib_1.__extends(MtcnnBox, _super);
    function MtcnnBox(left, top, right, bottom) {
        return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, true) || this;
    }
    return MtcnnBox;
}(tfjs_image_recognition_base_1.Box));
exports.MtcnnBox = MtcnnBox;
//# sourceMappingURL=MtcnnBox.js.map