"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractWeightsFactory(weights) {
    var remainingWeights = weights;
    function extractWeights(numWeights) {
        var ret = remainingWeights.slice(0, numWeights);
        remainingWeights = remainingWeights.slice(numWeights);
        return ret;
    }
    function getRemainingWeights() {
        return remainingWeights;
    }
    return {
        extractWeights: extractWeights,
        getRemainingWeights: getRemainingWeights
    };
}
exports.extractWeightsFactory = extractWeightsFactory;
//# sourceMappingURL=extractWeightsFactory.js.map