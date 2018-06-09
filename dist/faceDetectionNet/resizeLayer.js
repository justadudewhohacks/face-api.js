import * as tf from '@tensorflow/tfjs-core';
var resizedImageSize = [512, 512];
var weight = tf.scalar(0.007843137718737125);
var bias = tf.scalar(1);
export function resizeLayer(x) {
    return tf.tidy(function () {
        var resized = tf.image.resizeBilinear(x, resizedImageSize, false);
        return tf.sub(tf.mul(resized, weight), bias);
    });
}
//# sourceMappingURL=resizeLayer.js.map