import { __extends } from "tslib";
import { Box } from 'tfjs-image-recognition-base';
var MtcnnBox = /** @class */ (function (_super) {
    __extends(MtcnnBox, _super);
    function MtcnnBox(left, top, right, bottom) {
        return _super.call(this, { left: left, top: top, right: right, bottom: bottom }, true) || this;
    }
    return MtcnnBox;
}(Box));
export { MtcnnBox };
//# sourceMappingURL=MtcnnBox.js.map