"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isTensor_1 = require("./isTensor");
function extractWeightEntry(weightMap, path, paramRank) {
    var tensor = weightMap[path];
    if (!isTensor_1.isTensor(tensor, paramRank)) {
        throw new Error("expected weightMap[" + path + "] to be a Tensor" + paramRank + "D, instead have " + tensor);
    }
    return { path: path, tensor: tensor };
}
exports.extractWeightEntry = extractWeightEntry;
//# sourceMappingURL=extractWeightEntry.js.map