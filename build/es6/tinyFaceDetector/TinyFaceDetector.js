import * as tslib_1 from "tslib";
import { TinyYolov2 as TinyYolov2Base } from 'tfjs-tiny-yolov2';
import { FaceDetection } from '../classes';
import { BOX_ANCHORS, DEFAULT_MODEL_NAME, IOU_THRESHOLD, MEAN_RGB } from './const';
var TinyFaceDetector = /** @class */ (function (_super) {
    tslib_1.__extends(TinyFaceDetector, _super);
    function TinyFaceDetector() {
        var _this = this;
        var config = {
            withSeparableConvs: true,
            iouThreshold: IOU_THRESHOLD,
            classes: ['face'],
            anchors: BOX_ANCHORS,
            meanRgb: MEAN_RGB,
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
                        return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                }
            });
        });
    };
    TinyFaceDetector.prototype.loadQuantizedParams = function (modelUri) {
        var defaultModelName = DEFAULT_MODEL_NAME;
        return _super.prototype.loadQuantizedParams.call(this, modelUri, defaultModelName);
    };
    return TinyFaceDetector;
}(TinyYolov2Base));
export { TinyFaceDetector };
//# sourceMappingURL=TinyFaceDetector.js.map