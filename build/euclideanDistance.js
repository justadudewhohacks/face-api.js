"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function euclideanDistance(arr1, arr2) {
    if (arr1.length !== arr2.length)
        throw new Error('euclideanDistance: arr1.length !== arr2.length');
    var desc1 = Array.from(arr1);
    var desc2 = Array.from(arr2);
    return Math.sqrt(desc1
        .map(function (val, i) { return val - desc2[i]; })
        .reduce(function (res, diff) { return res + Math.pow(diff, 2); }, 0));
}
exports.euclideanDistance = euclideanDistance;
//# sourceMappingURL=euclideanDistance.js.map