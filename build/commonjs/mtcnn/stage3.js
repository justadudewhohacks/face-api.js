"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var extractImagePatches_1 = require("./extractImagePatches");
var MtcnnBox_1 = require("./MtcnnBox");
var ONet_1 = require("./ONet");
function stage3(img, inputBoxes, scoreThreshold, params, stats) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    ts = Date.now();
                    return [4 /*yield*/, extractImagePatches_1.extractImagePatches(img, inputBoxes, { width: 48, height: 48 })];
                case 1:
                    onetInputs = _c.sent();
                    stats.stage3_extractImagePatches = Date.now() - ts;
                    ts = Date.now();
                    onetOuts = onetInputs.map(function (onetInput) {
                        var out = ONet_1.ONet(onetInput, params);
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
                    filteredRegions = indices.map(function (idx) {
                        var regionsData = onetOuts[idx].regions.arraySync();
                        return new MtcnnBox_1.MtcnnBox(regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                    });
                    filteredBoxes = indices
                        .map(function (idx, i) { return inputBoxes[idx].calibrate(filteredRegions[i]); });
                    filteredScores = indices.map(function (idx) { return scores[idx]; });
                    finalBoxes = [];
                    finalScores = [];
                    points = [];
                    if (filteredBoxes.length > 0) {
                        ts = Date.now();
                        indicesNms = tfjs_image_recognition_base_1.nonMaxSuppression(filteredBoxes, filteredScores, 0.7, false);
                        stats.stage3_nms = Date.now() - ts;
                        finalBoxes = indicesNms.map(function (idx) { return filteredBoxes[idx]; });
                        finalScores = indicesNms.map(function (idx) { return filteredScores[idx]; });
                        points = indicesNms.map(function (idx, i) {
                            return Array(5).fill(0).map(function (_, ptIdx) {
                                var pointsData = onetOuts[idx].points.arraySync();
                                return new tfjs_image_recognition_base_1.Point(((pointsData[0][ptIdx] * (finalBoxes[i].width + 1)) + finalBoxes[i].left), ((pointsData[0][ptIdx + 5] * (finalBoxes[i].height + 1)) + finalBoxes[i].top));
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
exports.stage3 = stage3;
//# sourceMappingURL=stage3.js.map