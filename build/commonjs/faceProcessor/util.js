"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function seperateWeightMaps(weightMap) {
    var featureExtractorMap = {};
    var classifierMap = {};
    Object.keys(weightMap).forEach(function (key) {
        var map = key.startsWith('fc') ? classifierMap : featureExtractorMap;
        map[key] = weightMap[key];
    });
    return { featureExtractorMap: featureExtractorMap, classifierMap: classifierMap };
}
exports.seperateWeightMaps = seperateWeightMaps;
//# sourceMappingURL=util.js.map