export function normalize(arr) {
    var avg_r = 122.782;
    var avg_g = 117.001;
    var avg_b = 104.298;
    var avgs = [avg_r, avg_g, avg_b];
    return arr.map(function (val, i) {
        var avg = avgs[i % 3];
        return (val - avg) / 256;
    });
}
//# sourceMappingURL=normalize.js.map