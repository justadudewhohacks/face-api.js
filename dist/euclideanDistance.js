export function euclideanDistance(arr1, arr2) {
    if (arr1.length !== arr2.length)
        throw new Error('euclideanDistance: arr1.length !== arr2.length');
    return Math.sqrt(arr1
        .map(function (val, i) { return val - arr2[i]; })
        .reduce(function (res, diff) { return res + Math.pow(diff, 2); }, 0));
}
//# sourceMappingURL=euclideanDistance.js.map