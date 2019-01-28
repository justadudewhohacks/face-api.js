"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var tfjs_image_recognition_base_1 = require("tfjs-image-recognition-base");
var sharedLayers_1 = require("./sharedLayers");
function PNet(x, params) {
    return tf.tidy(function () {
        var out = sharedLayers_1.sharedLayer(x, params, true);
        var conv = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(out, params.conv4_1, 'valid');
        var max = tf.expandDims(tf.max(conv, 3), 3);
        var prob = tf.softmax(tf.sub(conv, max), 3);
        var regions = tfjs_image_recognition_base_1.TfjsImageRecognitionBase.convLayer(out, params.conv4_2, 'valid');
        return { prob: prob, regions: regions };
    });
}
exports.PNet = PNet;
//# sourceMappingURL=PNet.js.map