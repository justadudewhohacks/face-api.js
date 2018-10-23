"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tfjs_tiny_yolov2_1 = require("tfjs-tiny-yolov2");
var classes_1 = require("../classes");
var const_1 = require("./const");
var TinyFaceDetector = /** @class */ (function (_super) {
    tslib_1.__extends(TinyFaceDetector, _super);
    function TinyFaceDetector() {
        var _this = this;
        var config = {
            withSeparableConvs: true,
            iouThreshold: const_1.IOU_THRESHOLD,
            classes: ['face'],
            anchors: const_1.BOX_ANCHORS,
            meanRgb: const_1.MEAN_RGB,
            isFirstLayerConv2d: true,
            filterSizes: [3, 16, 32, 64, 128, 256, 512]
        };
        _this = _super.call(this, config) || this;
        return _this;
    }
    Object.defineProperty(TinyFaceDetector.prototype, "anchors", {
        get: function () {
            return this.config.anchors;
        },
        enumerable: true,
        configurable: true
    });
    TinyFaceDetector.prototype.locateFaces = function (input, forwardParams) {
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
    TinyFaceDetector.prototype.loadQuantizedParams = function (modelUri) {
        var defaultModelName = const_1.DEFAULT_MODEL_NAME;
        return _super.prototype.loadQuantizedParams.call(this, modelUri, defaultModelName);
    };
    return TinyFaceDetector;
}(tfjs_tiny_yolov2_1.TinyYolov2));
exports.TinyFaceDetector = TinyFaceDetector;
//# sourceMappingURL=TinyFaceDetector.js.map