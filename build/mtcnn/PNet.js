"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("@tensorflow/tfjs-core");
var convLayer_1 = require("../commons/convLayer");
var sharedLayers_1 = require("./sharedLayers");
function PNet(x, params) {
    return tf.tidy(function () {
        var out = sharedLayers_1.sharedLayer(x, params, true);
        var conv = convLayer_1.convLayer(out, params.conv4_1, 'valid');
        var max = tf.expandDims(tf.max(conv, 3), 3);
        var prob = tf.softmax(tf.sub(conv, max), 3);
        var regions = convLayer_1.convLayer(out, params.conv4_2, 'valid');
        return { prob: prob, regions: regions };
    });
}
exports.PNet = PNet;
//# sourceMappingURL=PNet.js.map