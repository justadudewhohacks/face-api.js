import * as tf from '@tensorflow/tfjs-core';
import {
  disposeUnusedWeightTensors,
  extractWeightEntryFactory,
  loadWeightMap,
  ParamMapping,
} from 'tfjs-image-recognition-base';
import { ConvParams, FCParams } from 'tfjs-tiny-yolov2';

import { NetParams } from './types';

const DEFAULT_MODEL_NAME = 'face_landmark_68_model'

function extractorsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  const extractWeightEntry = extractWeightEntryFactory(weightMap, paramMappings)

  function extractConvParams(prefix: string, mappedPrefix: string): ConvParams {
    const filters = extractWeightEntry<tf.Tensor4D>(`${prefix}/kernel`, 4, `${mappedPrefix}/filters`)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1, `${mappedPrefix}/bias`)

    return { filters, bias }
  }

  function extractFcParams(prefix: string, mappedPrefix: string): FCParams {
    const weights = extractWeightEntry<tf.Tensor2D>(`${prefix}/kernel`, 2, `${mappedPrefix}/weights`)
    const bias = extractWeightEntry<tf.Tensor1D>(`${prefix}/bias`, 1, `${mappedPrefix}/bias`)

    return { weights, bias }
  }

  return {
    extractConvParams,
    extractFcParams
  }
}

export async function loadQuantizedParams(
  uri: string | undefined
): Promise<{ params: NetParams, paramMappings: ParamMapping[] }> {

  const weightMap = await loadWeightMap(uri, DEFAULT_MODEL_NAME)
  const paramMappings: ParamMapping[] = []

  const {
    extractConvParams,
    extractFcParams
  } = extractorsFactory(weightMap, paramMappings)

  const params = {
    conv0: extractConvParams('conv2d_0', 'conv0'),
    conv1: extractConvParams('conv2d_1', 'conv1'),
    conv2: extractConvParams('conv2d_2', 'conv2'),
    conv3: extractConvParams('conv2d_3', 'conv3'),
    conv4: extractConvParams('conv2d_4', 'conv4'),
    conv5: extractConvParams('conv2d_5', 'conv5'),
    conv6: extractConvParams('conv2d_6', 'conv6'),
    conv7: extractConvParams('conv2d_7', 'conv7'),
    fc0: extractFcParams('dense', 'fc0'),
    fc1: extractFcParams('logits', 'fc1')
  }

  disposeUnusedWeightTensors(weightMap, paramMappings)

  return { params, paramMappings }
}