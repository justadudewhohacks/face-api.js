import * as tf from '@tensorflow/tfjs-core';

import { disposeUnusedWeightTensors } from '../commons/disposeUnusedWeightTensors';
import { extractWeightEntryFactory } from '../commons/extractWeightEntryFactory';
import { loadWeightMap } from '../commons/loadWeightMap';
import { ConvParams, ParamMapping } from '../commons/types';
import { BatchNorm, ConvWithBatchNorm, NetParams, SeparableConvParams } from './types';

const DEFAULT_MODEL_NAME = 'tiny_yolov2_model'
const DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model'

function extractorsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  const extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings)

  function extractBatchNormParams(prefix: string): BatchNorm {
    const sub = extractWeightEntry<tf.Tensor1D>(`${prefix}/sub`, 1)
    const truediv = extractWeightEntry<tf.Tensor1D>(`${prefix}/truediv`, 1)
    return { sub, truediv }
  }

  function extractConvParams(prefix: string): ConvParams {
    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/filters`, 4)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)
    return { filters, bias }
  }

  function extractConvWithBatchNormParams(prefix: string): ConvWithBatchNorm {
    const conv = extractConvParams(`${prefix}/conv`)
    const bn = extractBatchNormParams(`${prefix}/bn`)
    return { conv, bn }
  }

  function extractSeparableConvParams(prefix: string): SeparableConvParams {
    const depthwise_filter = extractWeightEntry<tf.Tensor4D>(`${prefix}/depthwise_filter`, 4)
    const pointwise_filter = extractWeightEntry<tf.Tensor4D>(`${prefix}/pointwise_filter`, 4)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1)

    return new SeparableConvParams(
      depthwise_filter,
      pointwise_filter,
      bias
    )
  }

  return {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  }

}

export async function loadQuantizedParams(
  uri: string | undefined,
  withSeparableConvs: boolean
): Promise<{ params: NetParams, paramMappings: ParamMapping[] }> {

  const weightMap = await loadWeightMap(uri,  withSeparableConvs ? DEFAULT_MODEL_NAME_SEPARABLE_CONV : DEFAULT_MODEL_NAME)
  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  } = extractorsFactory(weightMap, paramMappings)

  const extractConvFn = withSeparableConvs ? extractSeparableConvParams : extractConvWithBatchNormParams

  const params = {
    conv0: extractConvFn('conv0'),
    conv1: extractConvFn('conv1'),
    conv2: extractConvFn('conv2'),
    conv3: extractConvFn('conv3'),
    conv4: extractConvFn('conv4'),
    conv5: extractConvFn('conv5'),
    conv6: extractConvFn('conv6'),
    conv7: extractConvFn('conv7'),
    conv8: extractConvParams('conv8')
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}