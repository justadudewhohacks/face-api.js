"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var prelu_1 = require("./prelu");
function sharedLayer(x, params, isPnet) {
    if (isPnet === void 0) { isPnet = false; }
    return tf.tidy(function () {
        var out = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(x, params.conv1, 'valid');
        out = prelu_1.prelu(out, params.prelu1_alpha);
        out = tf.maxPool(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
        out = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(out, params.conv2, 'valid');
        out = prelu_1.prelu(out, params.prelu2_alpha);
        out = isPnet ? out : tf.maxPool(out, [3, 3], [2, 2], 'valid');
        out = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(out, params.conv3, 'valid');
        out = prelu_1.prelu(out, params.prelu3_alpha);
        return out;
    });
}
exports.sharedLayer = sharedLayer;
//# sourceMappingURL=sharedLayers.js.map