export function nonMaxSuppression(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
    var numBoxes = boxes.shape[0];
    var outputSize = Math.min(maxOutputSize, numBoxes);
    var candidates = scores
        .map(function (score, boxIndex) { return ({ score: score, boxIndex: boxIndex }); })
        .filter(function (c) { return c.score > scoreThreshold; })
        .sort(function (c1, c2) { return c2.score - c1.score; });
    var suppressFunc = function (x) { return x <= iouThreshold ? 1 : 0; };
    var selected = [];
    candidates.forEach(function (c) {
        if (selected.length >= outputSize) {
            return;
        }
        var originalScore = c.score;
        for (var j = selected.length - 1; j >= 0; --j) {
            var iou = IOU(boxes, c.boxIndex, selected[j]);
            if (iou === 0.0) {
                continue;
            }
            c.score *= suppressFunc(iou);
            if (c.score <= scoreThreshold) {
                break;
            }
        }
        if (originalScore === c.score) {
            selected.push(c.boxIndex);
        }
    });
    return selected;
}
function IOU(boxes, i, j) {
    var yminI = Math.min(boxes.arraySync()[i][0], boxes.arraySync()[i][2]);
    var xminI = Math.min(boxes.arraySync()[i][1], boxes.arraySync()[i][3]);
    var ymaxI = Math.max(boxes.arraySync()[i][0], boxes.arraySync()[i][2]);
    var xmaxI = Math.max(boxes.arraySync()[i][1], boxes.arraySync()[i][3]);
    var yminJ = Math.min(boxes.arraySync()[j][0], boxes.arraySync()[j][2]);
    var xminJ = Math.min(boxes.arraySync()[j][1], boxes.arraySync()[j][3]);
    var ymaxJ = Math.max(boxes.arraySync()[j][0], boxes.arraySync()[j][2]);
    var xmaxJ = Math.max(boxes.arraySync()[j][1], boxes.arraySync()[j][3]);
    var areaI = (ymaxI - yminI) * (xmaxI - xminI);
    var areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
    if (areaI <= 0 || areaJ <= 0) {
        return 0.0;
    }
    var intersectionYmin = Math.max(yminI, yminJ);
    var intersectionXmin = Math.max(xminI, xminJ);
    var intersectionYmax = Math.min(ymaxI, ymaxJ);
    var intersectionXmax = Math.min(xmaxI, xmaxJ);
    var intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0.0) *
        Math.max(intersectionXmax - intersectionXmin, 0.0);
    return intersectionArea / (areaI + areaJ - intersectionArea);
}
//# sourceMappingURL=nonMaxSuppression.js.map