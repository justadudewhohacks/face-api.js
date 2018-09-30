import { Point } from 'tfjs-image-recognition-base';
export var IOU_THRESHOLD = 0.4;
export var BOX_ANCHORS = [
    new Point(0.738768, 0.874946),
    new Point(2.42204, 2.65704),
    new Point(4.30971, 7.04493),
    new Point(10.246, 4.59428),
    new Point(12.6868, 11.8741)
];
export var BOX_ANCHORS_SEPARABLE = [
    new Point(1.603231, 2.094468),
    new Point(6.041143, 7.080126),
    new Point(2.882459, 3.518061),
    new Point(4.266906, 5.178857),
    new Point(9.041765, 10.66308)
];
export var MEAN_RGB_SEPARABLE = [117.001, 114.697, 97.404];
export var DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
export var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model';
//# sourceMappingURL=const.js.map