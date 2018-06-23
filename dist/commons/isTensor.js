import * as tf from '@tensorflow/tfjs-core';
export function isTensor(tensor, dim) {
    return tensor instanceof tf.Tensor && tensor.shape.length === dim;
}
export function isTensor1D(tensor) {
    return isTensor(tensor, 1);
}
export function isTensor2D(tensor) {
    return isTensor(tensor, 2);
}
export function isTensor3D(tensor) {
    return isTensor(tensor, 3);
}
export function isTensor4D(tensor) {
    return isTensor(tensor, 4);
}
//# sourceMappingURL=isTensor.js.map