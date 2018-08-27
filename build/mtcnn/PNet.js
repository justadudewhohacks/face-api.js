import * as tf from '@tensorflow/tfjs-core';
import { convLayer } from 'tfjs-tiny-yolov2';
import { sharedLayer } from './sharedLayers';
export function PNet(x, params) {
    return tf.tidy(function () {
        var out = sharedLayer(x, params, true);
        var conv = convLayer(out, params.conv4_1, 'valid');
        var max = tf.expandDims(tf.max(conv, 3), 3);
        var prob = tf.softmax(tf.sub(conv, max), 3);
        var regions = convLayer(out, params.conv4_2, 'valid');
        return { prob: prob, regions: regions };
    });
}
//# sourceMappingURL=PNet.js.map