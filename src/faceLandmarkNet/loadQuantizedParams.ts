import * as tf from '@tensorflow/tfjs-core';

import { loadWeightMap } from '../commons/loadWeightMap';
import { ConvParams } from '../commons/types';
import { FCParams, NetParams } from './types';
import { isTensor4D, isTensor1D, isTensor2D } from '../commons/isTensor';

const DEFAULT_MODEL_NAME = 'face_landmark_68_model'

export async function loadQuantizedParams(uri: string | undefined): Promise<NetParams> {
  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)

  function extractConvParams(prefix: string): ConvParams {
    const params = {
      filters: weightMap[`${prefix}/kernel`] as tf.Tensor4D,
      bias: weightMap[`${prefix}/bias`] as tf.Tensor1D
    }

    if (!isTensor4D(params.filters)) {
      throw new Error(`expected weightMap[${prefix}/kernel] to be a Tensor4D, instead have ${params.filters}`)
    }

    if (!isTensor1D(params.bias)) {
      throw new Error(`expected weightMap[${prefix}/bias] to be a Tensor1D, instead have ${params.bias}`)
    }

    return params
  }

  function extractFcParams(prefix: string): FCParams {
    const params = {
      weights: weightMap[`${prefix}/kernel`] as tf.Tensor2D,
      bias: weightMap[`${prefix}/bias`] as tf.Tensor1D
    }

    if (!isTensor2D(params.weights)) {
      throw new Error(`expected weightMap[${prefix}/kernel] to be a Tensor2D, instead have ${params.weights}`)
    }

    if (!isTensor1D(params.bias)) {
      throw new Error(`expected weightMap[${prefix}/bias] to be a Tensor1D, instead have ${params.bias}`)
    }

    return params
  }

  return {
    conv0_params: extractConvParams('conv2d_0'),
    conv1_params: extractConvParams('conv2d_1'),
    conv2_params: extractConvParams('conv2d_2'),
    conv3_params: extractConvParams('conv2d_3'),
    conv4_params: extractConvParams('conv2d_4'),
    conv5_params: extractConvParams('conv2d_5'),
    conv6_params: extractConvParams('conv2d_6'),
    conv7_params: extractConvParams('conv2d_7'),
    fc0_params: extractFcParams('dense'),
    fc1_params: extractFcParams('logits')
  }
}