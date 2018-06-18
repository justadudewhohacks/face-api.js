import * as tslib_1 from "tslib";
import * as tf from '@tensorflow/tfjs-core';
export function imageTensorToCanvas(imgTensor, canvas) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var targetCanvas, _a, _, height, width, numChannels;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    targetCanvas = canvas || document.createElement('canvas');
                    _a = imgTensor.shape, _ = _a[0], height = _a[1], width = _a[2], numChannels = _a[3];
                    return [4 /*yield*/, tf.toPixels(imgTensor.as3D(height, width, numChannels).toInt(), targetCanvas)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, targetCanvas];
            }
        });
    });
}
//# sourceMappingURL=imageTensorToCanvas.js.map