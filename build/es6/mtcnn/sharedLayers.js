import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';
import { prelu } from './prelu';
export function sharedLayer(x, params, isPnet) {
    if (isPnet === void 0) { isPnet = false; }
    return tf.tidy(function () {
        var out = TfjsImageRecognitionBase.convLayer(x, params.conv1, 'valid');
        out = prelu(out, params.prelu1_alpha);
        out = tf.maxPool(out, isPnet ? [2, 2] : [3, 3], [2, 2], 'same');
        out = TfjsImageRecognitionBase.convLayer(out, params.conv2, 'valid');
        out = prelu(out, params.prelu2_alpha);
        out = isPnet ? out : tf.maxPool(out, [3, 3], [2, 2], 'valid');
        out = TfjsImageRecognitionBase.convLayer(out, params.conv3, 'valid');
        out = prelu(out, params.prelu3_alpha);
        return out;
    });
}
//# sourceMappingURL=sharedLayers.js.map