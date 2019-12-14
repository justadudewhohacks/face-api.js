import * as tf from '@tensorflow/tfjs-core';

import { ConvParams } from '../common';
import { disposeUnusedWeightTensors } from '../common/disposeUnusedWeightTensors';
import { loadSeparableConvParamsFactory } from '../common/extractSeparableConvParamsFactory';
import { extractWeightEntryFactory } from '../common/extractWeightEntryFactory';
import { ParamMapping } from '../common/types';
import { TinyYolov2Config } from './config';
import { BatchNorm, ConvWithBatchNorm, TinyYolov2NetParams } from './types';

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

  const extractSeparableConvParams = loadSeparableConvParamsFactory(extractWeightEntry)

  return {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  }

}

export function extractParamsFromWeigthMap(
  weightMap: tf.NamedTensorMap,
  config: TinyYolov2Config
): { params: TinyYolov2NetParams, paramMappings: ParamMapping[] } {

  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractConvWithBatchNormParams,
    extractSeparableConvParams
  } = extractorsFactory(weightMap, paramMappings)

  let params: TinyYolov2NetParams

  if (config.withSeparableConvs) {
    const numFilters = (config.filterSizes && config.filterSizes.length || 9)
    params = {
      conv0: config.isFirstLayerConv2d ? extractConvParams('conv0') : extractSeparableConvParams('conv0'),
      conv1: extractSeparableConvParams('conv1'),
      conv2: extractSeparableConvParams('conv2'),
      conv3: extractSeparableConvParams('conv3'),
      conv4: extractSeparableConvParams('conv4'),
      conv5: extractSeparableConvParams('conv5'),
      conv6: numFilters > 7 ? extractSeparableConvParams('conv6') : undefined,
      conv7: numFilters > 8 ? extractSeparableConvParams('conv7') : undefined,
      conv8: extractConvParams('conv8')
    }
  } else {
    params = {
      conv0: extractConvWithBatchNormParams('conv0'),
      conv1: extractConvWithBatchNormParams('conv1'),
      conv2: extractConvWithBatchNormParams('conv2'),
      conv3: extractConvWithBatchNormParams('conv3'),
      conv4: extractConvWithBatchNormParams('conv4'),
      conv5: extractConvWithBatchNormParams('conv5'),
      conv6: extractConvWithBatchNormParams('conv6'),
      conv7: extractConvWithBatchNormParams('conv7'),
      conv8: extractConvParams('conv8')
    }
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}