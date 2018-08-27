import * as tf from '@tensorflow/tfjs-core';
export function prelu(x, alpha) {
    return tf.tidy(function () {
        return tf.add(tf.relu(x), tf.mul(alpha, tf.neg(tf.relu(tf.neg(x)))));
    });
}
//# sourceMappingURL=prelu.js.map