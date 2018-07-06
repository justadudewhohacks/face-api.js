"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isTensor_1 = require("./isTensor");
function extractWeightEntryFactory(weightMap, paramMappings) {
    return function (originalPath, paramRank, mappedPath) {
        var tensor = weightMap[originalPath];
        if (!isTensor_1.isTensor(tensor, paramRank)) {
            throw new Error("expected weightMap[" + originalPath + "] to be a Tensor" + paramRank + "D, instead have " + tensor);
        }
        paramMappings.push({ originalPath: originalPath, paramPath: mappedPath || originalPath });
        return tensor;
    };
}
exports.extractWeightEntryFactory = extractWeightEntryFactory;
//# sourceMappingURL=extractWeightEntryFactory.js.map