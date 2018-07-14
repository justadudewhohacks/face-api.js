"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nms(boxes, scores, iouThreshold, isIOU) {
    if (isIOU === void 0) { isIOU = true; }
    var areas = boxes.map(function (box) { return (box.width + 1) * (box.height + 1); });
    var indicesSortedByScore = scores
        .map(function (score, boxIndex) { return ({ score: score, boxIndex: boxIndex }); })
        .sort(function (c1, c2) { return c1.score - c2.score; })
        .map(function (c) { return c.boxIndex; });
    var pick = [];
    var _loop_1 = function () {
        var curr = indicesSortedByScore.pop();
        pick.push(curr);
        var indices = indicesSortedByScore;
        var outputs = [];
        for (var i = 0; i < indices.length; i++) {
            var idx = indices[i];
            var currBox = boxes[curr];
            var idxBox = boxes[idx];
            var width = Math.max(0.0, Math.min(currBox.right, idxBox.right) - Math.max(currBox.left, idxBox.left) + 1);
            var height = Math.max(0.0, Math.min(currBox.bottom, idxBox.bottom) - Math.max(currBox.top, idxBox.top) + 1);
            var interSection = width * height;
            var out = isIOU
                ? interSection / (areas[curr] + areas[idx] - interSection)
                : interSection / Math.min(areas[curr], areas[idx]);
            outputs.push(out);
        }
        indicesSortedByScore = indicesSortedByScore.filter(function (_, j) { return outputs[j] <= iouThreshold; });
    };
    while (indicesSortedByScore.length > 0) {
        _loop_1();
    }
    return pick;
}
exports.nms = nms;
//# sourceMappingURL=nms.js.map