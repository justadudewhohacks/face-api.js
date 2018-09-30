import * as tf from '@tensorflow/tfjs-core';
function getCenterCoordinatesAndSizesLayer(x) {
    var vec = tf.unstack(tf.transpose(x, [1, 0]));
    var sizes = [
        tf.sub(vec[2], vec[0]),
        tf.sub(vec[3], vec[1])
    ];
    var centers = [
        tf.add(vec[0], tf.div(sizes[0], tf.scalar(2))),
        tf.add(vec[1], tf.div(sizes[1], tf.scalar(2)))
    ];
    return {
        sizes: sizes,
        centers: centers
    };
}
function decodeBoxesLayer(x0, x1) {
    var _a = getCenterCoordinatesAndSizesLayer(x0), sizes = _a.sizes, centers = _a.centers;
    var vec = tf.unstack(tf.transpose(x1, [1, 0]));
    var div0_out = tf.div(tf.mul(tf.exp(tf.div(vec[2], tf.scalar(5))), sizes[0]), tf.scalar(2));
    var add0_out = tf.add(tf.mul(tf.div(vec[0], tf.scalar(10)), sizes[0]), centers[0]);
    var div1_out = tf.div(tf.mul(tf.exp(tf.div(vec[3], tf.scalar(5))), sizes[1]), tf.scalar(2));
    var add1_out = tf.add(tf.mul(tf.div(vec[1], tf.scalar(10)), sizes[1]), centers[1]);
    return tf.transpose(tf.stack([
        tf.sub(add0_out, div0_out),
        tf.sub(add1_out, div1_out),
        tf.add(add0_out, div0_out),
        tf.add(add1_out, div1_out)
    ]), [1, 0]);
}
export function outputLayer(boxPredictions, classPredictions, params) {
    return tf.tidy(function () {
        var batchSize = boxPredictions.shape[0];
        var boxes = decodeBoxesLayer(tf.reshape(tf.tile(params.extra_dim, [batchSize, 1, 1]), [-1, 4]), tf.reshape(boxPredictions, [-1, 4]));
        boxes = tf.reshape(boxes, [batchSize, (boxes.shape[0] / batchSize), 4]);
        var scoresAndClasses = tf.sigmoid(tf.slice(classPredictions, [0, 0, 1], [-1, -1, -1]));
        var scores = tf.slice(scoresAndClasses, [0, 0, 0], [-1, -1, 1]);
        scores = tf.reshape(scores, [batchSize, scores.shape[1]]);
        var boxesByBatch = tf.unstack(boxes);
        var scoresByBatch = tf.unstack(scores);
        return {
            boxes: boxesByBatch,
            scores: scoresByBatch
        };
    });
}
//# sourceMappingURL=outputLayer.js.map