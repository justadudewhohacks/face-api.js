import { __awaiter, __generator } from "tslib";
import * as tf from '@tensorflow/tfjs-core';
import { createCanvas, createCanvasFromMedia, env, getContext2dOrThrow, } from 'tfjs-image-recognition-base';
import { normalize } from './normalize';
export function extractImagePatches(img, boxes, _a) {
    var width = _a.width, height = _a.height;
    return __awaiter(this, void 0, void 0, function () {
        var imgCtx, bitmaps, imagePatchesDatas;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    imgCtx = getContext2dOrThrow(img);
                    return [4 /*yield*/, Promise.all(boxes.map(function (box) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, y, ey, x, ex, fromX, fromY, imgData;
                            return __generator(this, function (_b) {
                                _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                                fromX = x - 1;
                                fromY = y - 1;
                                imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY));
                                return [2 /*return*/, env.isNodejs() ? createCanvasFromMedia(imgData) : createImageBitmap(imgData)];
                            });
                        }); }))];
                case 1:
                    bitmaps = _b.sent();
                    imagePatchesDatas = [];
                    bitmaps.forEach(function (bmp) {
                        var patch = createCanvas({ width: width, height: height });
                        var patchCtx = getContext2dOrThrow(patch);
                        patchCtx.drawImage(bmp, 0, 0, width, height);
                        var data = patchCtx.getImageData(0, 0, width, height).data;
                        var currData = [];
                        // RGBA -> BGR
                        for (var i = 0; i < data.length; i += 4) {
                            currData.push(data[i + 2]);
                            currData.push(data[i + 1]);
                            currData.push(data[i]);
                        }
                        imagePatchesDatas.push(currData);
                    });
                    return [2 /*return*/, imagePatchesDatas.map(function (data) {
                            var t = tf.tidy(function () {
                                var imagePatchTensor = tf.transpose(tf.tensor4d(data, [1, width, height, 3]), [0, 2, 1, 3]).toFloat();
                                return normalize(imagePatchTensor);
                            });
                            return t;
                        })];
            }
        });
    });
}
//# sourceMappingURL=extractImagePatches.js.map