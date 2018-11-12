"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
var classes_1 = require("../classes");
var const_1 = require("./const");
var TinyYolov2 = /** @class */ (function (_super) {
    tslib_1.__extends(TinyYolov2, _super);
    function TinyYolov2(withSeparableConvs) {
        if (withSeparableConvs === void 0) { withSeparableConvs = true; }
        var _this = this;
        var config = Object.assign({}, {
            withSeparableConvs: withSeparableConvs,
            iouThreshold: const_1.IOU_THRESHOLD,
            classes: ['face']
        }, withSeparableConvs
            ? {
                anchors: const_1.BOX_ANCHORS_SEPARABLE,
                meanRgb: const_1.MEAN_RGB_SEPARABLE
            }
            : {
                anchors: const_1.BOX_ANCHORS,
                withClassScores: true
            });
        _this = _super.call(this, config) || this;
        return _this;
    }
    Object.defineProperty(TinyYolov2.prototype, "withSeparableConvs", {
        get: function () {
            return this.config.withSeparableConvs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyYolov2.prototype, "anchors", {
        get: function () {
            return this.config.anchors;
        },
        enumerable: true,
        configurable: true
    });
    TinyYolov2.prototype.locateFaces = function (input, forwardParams) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var objectDetections;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.detect(input, forwardParams)];
                    case 1:
                        objectDetections = _a.sent();
                        return [2 /*return*/, objectDetections.map(function (det) { return new classes_1.FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                }
            });
        });
    };
    TinyYolov2.prototype.getDefaultModelName = function () {
        return this.withSeparableConvs ? const_1.DEFAULT_MODEL_NAME_SEPARABLE_CONV : const_1.DEFAULT_MODEL_NAME;
    };
    TinyYolov2.prototype.extractParamsFromWeigthMap = function (weightMap) {
        return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
    };
    return TinyYolov2;
}(tfjs_tiny_yolov2_1.TinyYolov2));
exports.TinyYolov2 = TinyYolov2;
//# sourceMappingURL=TinyYolov2.js.map