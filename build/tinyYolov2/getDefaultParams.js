"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function getDefaultParams(params) {
    return Object.assign({}, {
        sizeType: types_1.SizeType.MD,
        scoreThreshold: 0.5
    }, params);
}
exports.getDefaultParams = getDefaultParams;
//# sourceMappingURL=getDefaultParams.js.map