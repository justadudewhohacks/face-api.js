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
//# sourceMappingURL=config.js.map