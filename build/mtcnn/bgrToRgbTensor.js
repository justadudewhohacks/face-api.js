import * as tf from '@tensorflow/tfjs-core';
export function bgrToRgbTensor(tensor) {
    return tf.tidy(function () { return tf.stack(tf.unstack(tensor, 3).reverse(), 3); });
}
//# sourceMappingURL=bgrToRgbTensor.js.map