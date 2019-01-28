import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { sharedLayer } from './sharedLayers';
export function PNet(x, params) {
    return tf.tidy(function () {
        var out = sharedLayer(x, params, true);
        var conv = TfjsImageRecognitionBase.convLayer(out, params.conv4_1, 'valid');
        var max = tf.expandDims(tf.max(conv, 3), 3);
        var prob = tf.softmax(tf.sub(conv, max), 3);
        var regions = TfjsImageRecognitionBase.convLayer(out, params.conv4_2, 'valid');
        return { prob: prob, regions: regions };
    });
}
//# sourceMappingURL=PNet.js.map