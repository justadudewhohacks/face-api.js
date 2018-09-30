import * as tf from '@tensorflow/tfjs-core';
import { convLayer } from 'tfjs-tiny-yolov2';
import { fullyConnectedLayer } from '../faceLandmarkNet/fullyConnectedLayer';
import { prelu } from './prelu';
import { sharedLayer } from './sharedLayers';
export function ONet(x, params) {
    return tf.tidy(function () {
        var out = sharedLayer(x, params);
        out = tf.maxPool(out, [2, 2], [2, 2], 'same');
        out = convLayer(out, params.conv4, 'valid');
        out = prelu(out, params.prelu4_alpha);
        var vectorized = tf.reshape(out, [out.shape[0], params.fc1.weights.shape[0]]);
        var fc1 = fullyConnectedLayer(vectorized, params.fc1);
        var prelu5 = prelu(fc1, params.prelu5_alpha);
        var fc2_1 = fullyConnectedLayer(prelu5, params.fc2_1);
        var max = tf.expandDims(tf.max(fc2_1, 1), 1);
        var prob = tf.softmax(tf.sub(fc2_1, max), 1);
        var regions = fullyConnectedLayer(prelu5, params.fc2_2);
        var points = fullyConnectedLayer(prelu5, params.fc2_3);
        var scores = tf.unstack(prob, 1)[1];
        return { scores: scores, regions: regions, points: points };
    });
}
//# sourceMappingURL=ONet.js.map