"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iou_1 = require("../iou");
function nonMaxSuppression(boxes, scores, iouThreshold, isIOU) {
    if (isIOU === void 0) { isIOU = true; }
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
            outputs.push(iou_1.iou(currBox, idxBox, isIOU));
        }
        indicesSortedByScore = indicesSortedByScore.filter(function (_, j) { return outputs[j] <= iouThreshold; });
    };
    while (indicesSortedByScore.length > 0) {
        _loop_1();
    }
    return pick;
}
exports.nonMaxSuppression = nonMaxSuppression;
//# sourceMappingURL=nonMaxSuppression.js.map