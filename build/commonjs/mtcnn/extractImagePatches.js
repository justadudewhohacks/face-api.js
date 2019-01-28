"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var normalize_1 = require("./normalize");
function extractImagePatches(img, boxes, _a) {
    var width = _a.width, height = _a.height;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var imgCtx, bitmaps, imagePatchesDatas;
        var _this = this;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    imgCtx = tfjs_image_recognition_base_1.getContext2dOrThrow(img);
                    return [4 /*yield*/, Promise.all(boxes.map(function (box) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _a, y, ey, x, ex, fromX, fromY, imgData;
                            return tslib_1.__generator(this, function (_b) {
                                _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                                fromX = x - 1;
                                fromY = y - 1;
                                imgData = imgCtx.getImageData(fromX, fromY, (ex - fromX), (ey - fromY));
                                return [2 /*return*/, tfjs_image_recognition_base_1.env.isNodejs() ? tfjs_image_recognition_base_1.createCanvasFromMedia(imgData) : createImageBitmap(imgData)];
                            });
                        }); }))];
                case 1:
                    bitmaps = _b.sent();
                    imagePatchesDatas = [];
                    bitmaps.forEach(function (bmp) {
                        var patch = tfjs_image_recognition_base_1.createCanvas({ width: width, height: height });
                        var patchCtx = tfjs_image_recognition_base_1.getContext2dOrThrow(patch);
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
                                return normalize_1.normalize(imagePatchTensor);
                            });
                            return t;
                        })];
            }
        });
    });
}
exports.extractImagePatches = extractImagePatches;
//# sourceMappingURL=extractImagePatches.js.map