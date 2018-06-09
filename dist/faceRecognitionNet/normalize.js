import * as tf from '@tensorflow/tfjs-core';
export function normalize(x) {
    return tf.tidy(function () {
        var avg_r = tf.fill([1, 150, 150, 1], 122.782);
        var avg_g = tf.fill([1, 150, 150, 1], 117.001);
        var avg_b = tf.fill([1, 150, 150, 1], 104.298);
        var avg_rgb = tf.concat([avg_r, avg_g, avg_b], 3);
        return tf.div(tf.sub(x, avg_rgb), tf.scalar(256));
    });
}
//# sourceMappingURL=normalize.js.map