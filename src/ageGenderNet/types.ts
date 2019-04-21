import * as tf from '@tensorflow/tfjs-core';
import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

export type NetOutput = { age: tf.Tensor1D, gender: tf.Tensor2D }

export type NetParams = {
  fc: {
    age: TfjsImageRecognitionBase.FCParams
    gender: TfjsImageRecognitionBase.FCParams
  }
}