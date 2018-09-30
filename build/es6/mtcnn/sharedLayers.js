import * as tf from '@tensorflow/tfjs-core';
import { convLayer } from 'tfjs-tiny-yolov2';
import { prelu } from './prelu';
export function sharedLayer(x, params, isPnet) {
    if (isPnet === void 0) { isPnet = false; }
    return tf.tidy(function () {
        var out = convLayer(x, params.conv1, 'valid');
        out = prelu(out, params.prelu1_alpha);
        out = tf.maxPool(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
        out = convLayer(out, params.conv2, 'valid');
        out = prelu(out, params.prelu2_alpha);
        out = isPnet ? out : tf.maxPool(out, [3, 3], [2, 2], 'valid');
        out = convLayer(out, params.conv3, 'valid');
        out = prelu(out, params.prelu3_alpha);
        return out;
    });
}
//# sourceMappingURL=sharedLayers.js.map