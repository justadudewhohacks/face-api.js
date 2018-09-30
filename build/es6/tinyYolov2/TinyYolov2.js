import * as tslib_1 from "tslib";
import { TinyYolov2 as TinyYolov2Base } from 'tfjs-tiny-yolov2';
import { FaceDetection } from '../classes';
import { BOX_ANCHORS, BOX_ANCHORS_SEPARABLE, DEFAULT_MODEL_NAME, DEFAULT_MODEL_NAME_SEPARABLE_CONV, IOU_THRESHOLD, MEAN_RGB_SEPARABLE, } from './const';
var TinyYolov2 = /** @class */ (function (_super) {
    tslib_1.__extends(TinyYolov2, _super);
    function TinyYolov2(withSeparableConvs) {
        if (withSeparableConvs === void 0) { withSeparableConvs = true; }
        var _this = this;
        var config = Object.assign({}, {
            withSeparableConvs: withSeparableConvs,
            iouThreshold: IOU_THRESHOLD,
            classes: ['face']
        }, withSeparableConvs
            ? {
                anchors: BOX_ANCHORS_SEPARABLE,
                meanRgb: MEAN_RGB_SEPARABLE
            }
            : {
                anchors: BOX_ANCHORS,
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
                        return [2 /*return*/, objectDetections.map(function (det) { return new FaceDetection(det.score, det.relativeBox, { width: det.imageWidth, height: det.imageHeight }); })];
                }
            });
        });
    };
    TinyYolov2.prototype.loadQuantizedParams = function (modelUri) {
        var defaultModelName = this.withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME;
        return _super.prototype.loadQuantizedParams.call(this, modelUri, defaultModelName);
    };
    return TinyYolov2;
}(TinyYolov2Base));
export { TinyYolov2 };
//# sourceMappingURL=TinyYolov2.js.map