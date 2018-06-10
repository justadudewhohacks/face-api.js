import * as tf from '@tensorflow/tfjs-core';
import { NetInput } from './NetInput';
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
//# sourceMappingURL=getImageTensor.js.map