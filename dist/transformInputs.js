import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from './NetInput';
export function padToSquare(imgTensor) {
    return tf.tidy(function () {
        var _a = imgTensor.shape, _ = _a[0], height = _a[1], width = _a[2];
        if (height === width) {
            return imgTensor;
        }
        if (height > width) {
            var pad_1 = tf.fill([1, height, height - width, 3], 0);
            return tf.concat([imgTensor, pad_1], 2);
        }
        var pad = tf.fill([1, width - height, width, 3], 0);
        return tf.concat([imgTensor, pad], 1);
    });
}
export function getImageTensor(input) {
    return tf.tidy(function () {
        if (input instanceof tf.Tensor) {
            var rank = input.shape.length;
            if (rank !== 3 && rank !== 4) {
                throw new Error('input tensor must be of rank 3 or 4');
            }
            return (rank === 3 ? input.expandDims(0) : input).toFloat();
        }
        var netInput = input instanceof NetInput ? input : new NetInput(input);
        return tf.concat(netInput.canvases.map(function (canvas) {
            return tf.fromPixels(canvas).expandDims(0).toFloat();
        }));
    });
}
//# sourceMappingURL=transformInputs.js.map