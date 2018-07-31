import * as tf from '@tensorflow/tfjs-core';

import { disposeUnusedWeightTensors } from '../commons/disposeUnusedWeightTensors';
import { extractWeightEntryFactory } from '../commons/extractWeightEntryFactory';
import { loadWeightMap } from '../commons/loadWeightMap';
import { ConvParams, ParamMapping } from '../commons/types';
import { BatchNorm, ConvWithBatchNorm, NetParams } from './types';

const DEFAULT_MODEL_NAME = 'tiny_yolov2_model'

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

  return {
    extractConvParams,
    extractConvWithBatchNormParams
  }

}

export async function loadQuantizedParams(
  uri: string | undefined
): Promise<{ params: NetParams, paramMappings: ParamMapping[] }> {

  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)
  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractConvWithBatchNormParams
  } = extractorsFactory(weightMap, paramMappings)


  const params = {
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

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}