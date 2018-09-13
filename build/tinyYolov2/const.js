"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
exports.IOU_THRESHOLD = 0.4;
exports.BOX_ANCHORS = [
    new tfjs_image_recognition_base_1.Point(0.738768, 0.874946),
    new tfjs_image_recognition_base_1.Point(2.42204, 2.65704),
    new tfjs_image_recognition_base_1.Point(4.30971, 7.04493),
    new tfjs_image_recognition_base_1.Point(10.246, 4.59428),
    new tfjs_image_recognition_base_1.Point(12.6868, 11.8741)
];
exports.BOX_ANCHORS_SEPARABLE = [
    new tfjs_image_recognition_base_1.Point(1.603231, 2.094468),
    new tfjs_image_recognition_base_1.Point(6.041143, 7.080126),
    new tfjs_image_recognition_base_1.Point(2.882459, 3.518061),
    new tfjs_image_recognition_base_1.Point(4.266906, 5.178857),
    new tfjs_image_recognition_base_1.Point(9.041765, 10.66308)
];
exports.MEAN_RGB_SEPARABLE = [117.001, 114.697, 97.404];
exports.DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
exports.DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';
//# sourceMappingURL=const.js.map