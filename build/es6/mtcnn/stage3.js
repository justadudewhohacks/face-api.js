import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { nonMaxSuppression, Point } from 'tfjs-image-recognition-base';
import { extractImagePatches } from './extractImagePatches';
import { MtcnnBox } from './MtcnnBox';
import { ONet } from './ONet';
export function stage3(img, inputBoxes, scoreThreshold, params, stats) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    ts = Date.now();
                    return [4 /*yield*/, extractImagePatches(img, inputBoxes, { width: 48, height: 48 })];
                case 1:
                    onetInputs = _c.sent();
                    stats.stage3_extractImagePatches = Date.now() - ts;
                    ts = Date.now();
                    onetOuts = onetInputs.map(function (onetInput) {
                        var out = ONet(onetInput, params);
                        onetInput.dispose();
                        return out;
                    });
                    stats.stage3_onet = Date.now() - ts;
                    scoresTensor = onetOuts.length > 1
                        ? tf.concat(onetOuts.map(function (out) { return out.scores; }))
                        : onetOuts[0].scores;
                    _b = (_a = Array).from;
                    return [4 /*yield*/, scoresTensor.data()];
                case 2:
                    scores = _b.apply(_a, [_c.sent()]);
                    scoresTensor.dispose();
                    indices = scores
                        .map(function (score, idx) { return ({ score: score, idx: idx }); })
                        .filter(function (c) { return c.score > scoreThreshold; })
                        .map(function (_a) {
                        var idx = _a.idx;
                        return idx;
                    });
                    filteredRegions = indices.map(function (idx) { return new MtcnnBox(onetOuts[idx].regions.get(0, 0), onetOuts[idx].regions.get(0, 1), onetOuts[idx].regions.get(0, 2), onetOuts[idx].regions.get(0, 3)); });
                    filteredBoxes = indices
                        .map(function (idx, i) { return inputBoxes[idx].calibrate(filteredRegions[i]); });
                    filteredScores = indices.map(function (idx) { return scores[idx]; });
                    finalBoxes = [];
                    finalScores = [];
                    points = [];
                    if (filteredBoxes.length > 0) {
                        ts = Date.now();
                        indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7, false);
                        stats.stage3_nms = Date.now() - ts;
                        finalBoxes = indicesNms.map(function (idx) { return filteredBoxes[idx]; });
                        finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                        points = indicesNms.map(function (idx, i) {
                            return Array(5).fill(0).map(function (_, ptIdx) {
                                return new Point(((onetOuts[idx].points.get(0, ptIdx) * (finalBoxes[i].width + 1)) + finalBoxes[i].left), ((onetOuts[idx].points.get(0, ptIdx + 5) * (finalBoxes[i].height + 1)) + finalBoxes[i].top));
                            });
                        });
                    }
                    onetOuts.forEach(function (t) {
                        t.regions.dispose();
                        t.scores.dispose();
                        t.points.dispose();
                    });
                    return [2 /*return*/, {
                            boxes: finalBoxes,
                            scores: finalScores,
                            points: points
                        }];
            }
        });
    });
}
//# sourceMappingURL=stage3.js.map