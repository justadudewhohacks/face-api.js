import * as tf from '@tensorflow/tfjs-core';
export function normalize(x) {
    return tf.tidy(function () { return tf.mul(tf.sub(x, tf.scalar(127.5)), tf.scalar(0.0078125)); });
}
//# sourceMappingURL=normalize.js.map