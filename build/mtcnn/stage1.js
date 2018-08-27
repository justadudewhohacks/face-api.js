import * as tf from '@tensorflow/tfjs-core';
import { BoundingBox, nonMaxSuppression, Point } from 'tfjs-image-recognition-base';
import { CELL_SIZE, CELL_STRIDE } from './config';
import { getSizesForScale } from './getSizesForScale';
import { normalize } from './normalize';
import { PNet } from './PNet';
function rescaleAndNormalize(x, scale) {
    return tf.tidy(function () {
        var _a = getSizesForScale(scale, x.shape.slice(1)), height = _a.height, width = _a.width;
        var resized = tf.image.resizeBilinear(x, [height, width]);
        var normalized = normalize(resized);
        return tf.transpose(normalized, [0, 2, 1, 3]);
    });
}
function extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold) {
    // TODO: fix this!, maybe better to use tf.gather here
    var indices = [];
    for (var y = 0; y < scoresTensor.shape[0]; y++) {
        for (var x = 0; x < scoresTensor.shape[1]; x++) {
            if (scoresTensor.get(y, x) >= scoreThreshold) {
                indices.push(new Point(x, y));
            }
        }
    }
    var boundingBoxes = indices.map(function (idx) {
        var cell = new BoundingBox(Math.round((idx.y * CELL_STRIDE + 1) / scale), Math.round((idx.x * CELL_STRIDE + 1) / scale), Math.round((idx.y * CELL_STRIDE + CELL_SIZE) / scale), Math.round((idx.x * CELL_STRIDE + CELL_SIZE) / scale));
        var score = scoresTensor.get(idx.y, idx.x);
        var region = new BoundingBox(regionsTensor.get(idx.y, idx.x, 0), regionsTensor.get(idx.y, idx.x, 1), regionsTensor.get(idx.y, idx.x, 2), regionsTensor.get(idx.y, idx.x, 3));
        return {
            cell: cell,
            score: score,
            region: region
        };
    });
    return boundingBoxes;
}
export function stage1(imgTensor, scales, scoreThreshold, params, stats) {
    stats.stage1 = [];
    var pnetOutputs = scales.map(function (scale) { return tf.tidy(function () {
        var statsForScale = { scale: scale };
        var resized = rescaleAndNormalize(imgTensor, scale);
        var ts = Date.now();
        var _a = PNet(resized, params), prob = _a.prob, regions = _a.regions;
        statsForScale.pnet = Date.now() - ts;
        var scoresTensor = tf.unstack(tf.unstack(prob, 3)[1])[0];
        var regionsTensor = tf.unstack(regions)[0];
        return {
            scoresTensor: scoresTensor,
            regionsTensor: regionsTensor,
            scale: scale,
            statsForScale: statsForScale
        };
    }); });
    var boxesForScale = pnetOutputs.map(function (_a) {
        var scoresTensor = _a.scoresTensor, regionsTensor = _a.regionsTensor, scale = _a.scale, statsForScale = _a.statsForScale;
        var boundingBoxes = extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold);
        scoresTensor.dispose();
        regionsTensor.dispose();
        if (!boundingBoxes.length) {
            stats.stage1.push(statsForScale);
            return [];
        }
        var ts = Date.now();
        var indices = nonMaxSuppression(boundingBoxes.map(function (bbox) { return bbox.cell; }), boundingBoxes.map(function (bbox) { return bbox.score; }), 0.5);
        statsForScale.nms = Date.now() - ts;
        statsForScale.numBoxes = indices.length;
        stats.stage1.push(statsForScale);
        return indices.map(function (boxIdx) { return boundingBoxes[boxIdx]; });
    });
    var allBoxes = boxesForScale.reduce(function (all, boxes) { return all.concat(boxes); }, []);
    var finalBoxes = [];
    var finalScores = [];
    if (allBoxes.length > 0) {
        var ts = Date.now();
        var indices = nonMaxSuppression(allBoxes.map(function (bbox) { return bbox.cell; }), allBoxes.map(function (bbox) { return bbox.score; }), 0.7);
        stats.stage1_nms = Date.now() - ts;
        finalScores = indices.map(function (idx) { return allBoxes[idx].score; });
        finalBoxes = indices
            .map(function (idx) { return allBoxes[idx]; })
            .map(function (_a) {
            var cell = _a.cell, region = _a.region;
            return new BoundingBox(cell.left + (region.left * cell.width), cell.top + (region.top * cell.height), cell.right + (region.right * cell.width), cell.bottom + (region.bottom * cell.height)).toSquare().round();
        });
    }
    return {
        boxes: finalBoxes,
        scores: finalScores
    };
}
//# sourceMappingURL=stage1.js.map