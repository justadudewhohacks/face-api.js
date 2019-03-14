import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { nonMaxSuppression } from 'tfjs-image-recognition-base';
import { extractImagePatches } from './extractImagePatches';
import { MtcnnBox } from './MtcnnBox';
import { RNet } from './RNet';
export function stage2(img, inputBoxes, scoreThreshold, params, stats) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ts, rnetInputs, rnetOuts, scoresTensor, scores, _a, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    ts = Date.now();
                    return [4 /*yield*/, extractImagePatches(img, inputBoxes, { width: 24, height: 24 })];
                case 1:
                    rnetInputs = _c.sent();
                    stats.stage2_extractImagePatches = Date.now() - ts;
                    ts = Date.now();
                    rnetOuts = rnetInputs.map(function (rnetInput) {
                        var out = RNet(rnetInput, params);
                        rnetInput.dispose();
                        return out;
                    });
                    stats.stage2_rnet = Date.now() - ts;
                    scoresTensor = rnetOuts.length > 1
                        ? tf.concat(rnetOuts.map(function (out) { return out.scores; }))
                        : rnetOuts[0].scores;
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
                    filteredBoxes = indices.map(function (idx) { return inputBoxes[idx]; });
                    filteredScores = indices.map(function (idx) { return scores[idx]; });
                    finalBoxes = [];
                    finalScores = [];
                    if (filteredBoxes.length > 0) {
                        ts = Date.now();
                        indicesNms = nonMaxSuppression(filteredBoxes, filteredScores, 0.7);
                        stats.stage2_nms = Date.now() - ts;
                        regions_1 = indicesNms.map(function (idx) {
                            return new MtcnnBox(rnetOuts[indices[idx]].regions.arraySync()[0][0], rnetOuts[indices[idx]].regions.arraySync()[0][1], rnetOuts[indices[idx]].regions.arraySync()[0][2], rnetOuts[indices[idx]].regions.arraySync()[0][3]);
                        });
                        finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                        finalBoxes = indicesNms.map(function (idx, i) { return filteredBoxes[idx].calibrate(regions_1[i]); });
                    }
                    rnetOuts.forEach(function (t) {
                        t.regions.dispose();
                        t.scores.dispose();
                    });
                    return [2 /*return*/, {
                            boxes: finalBoxes,
                            scores: finalScores
                        }];
            }
        });
    });
}
//# sourceMappingURL=stage2.js.map