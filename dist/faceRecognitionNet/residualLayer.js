import * as tf from '@tensorflow/tfjs-core';
import { conv, convNoRelu, convDown } from './convLayer';
export function residual(x, params) {
    var out = conv(x, params.conv1);
    out = convNoRelu(out, params.conv2);
    out = tf.add(out, x);
    out = tf.relu(out);
    return out;
}
export function residualDown(x, params) {
    var out = convDown(x, params.conv1);
    out = convNoRelu(out, params.conv2);
    var pooled = tf.avgPool(x, 2, 2, 'valid');
    var zeros = tf.zeros(pooled.shape);
    var isPad = pooled.shape[3] !== out.shape[3];
    var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
    if (isAdjustShape) {
        var padShapeX = out.shape.slice();
        padShapeX[1] = 1;
        var zerosW = tf.zeros(padShapeX);
        out = tf.concat([out, zerosW], 1);
        var padShapeY = out.shape.slice();
        padShapeY[2] = 1;
        var zerosH = tf.zeros(padShapeY);
        out = tf.concat([out, zerosH], 2);
    }
    pooled = isPad ? tf.concat([pooled, zeros], 3) : pooled;
    out = tf.add(pooled, out);
    out = tf.relu(out);
    return out;
}
//# sourceMappingURL=residualLayer.js.map