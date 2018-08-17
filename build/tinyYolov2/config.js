"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("../Point");
exports.INPUT_SIZES = { xs: 224, sm: 320, md: 416, lg: 608 };
exports.NUM_BOXES = 5;
exports.IOU_THRESHOLD = 0.4;
exports.BOX_ANCHORS = [
    new Point_1.Point(0.738768, 0.874946),
    new Point_1.Point(2.42204, 2.65704),
    new Point_1.Point(4.30971, 7.04493),
    new Point_1.Point(10.246, 4.59428),
    new Point_1.Point(12.6868, 11.8741)
];
exports.BOX_ANCHORS_SEPARABLE = [
    new Point_1.Point(1.603231, 2.094468),
    new Point_1.Point(6.041143, 7.080126),
    new Point_1.Point(2.882459, 3.518061),
    new Point_1.Point(4.266906, 5.178857),
    new Point_1.Point(9.041765, 10.66308)
];
exports.MEAN_RGB = [117.001, 114.697, 97.404];
//# sourceMappingURL=config.js.map