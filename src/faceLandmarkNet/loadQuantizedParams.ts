import * as tf from '@tensorflow/tfjs-core';

import { extractWeightEntry } from '../commons/extractWeightEntry';
import { loadWeightMap } from '../commons/loadWeightMap';
import { ConvParams, ParamMapping } from '../commons/types';
import { FCParams, NetParams } from './types';

const DEFAULT_MODEL_NAME = 'face_landmark_68_model'

function extractorsFactory(weightMap: any, paramMappings: ParamMapping[]) {

  function extractConvParams(prefix: string, mappedPrefix: string): ConvParams {
    const filtersEntry = extractWeightEntry(weightMap, `${prefix}/kernel`, 4)
    const biasEntry = extractWeightEntry(weightMap, `${prefix}/bias`, 1)
    paramMappings.push(
      { originalPath: filtersEntry.path, paramPath: `${mappedPrefix}/filters` },
      { originalPath: biasEntry.path, paramPath: `${mappedPrefix}/bias` }
    )
    return {
      filters: filtersEntry.tensor as tf.Tensor4D,
      bias: biasEntry.tensor as tf.Tensor1D
    }
  }

  function extractFcParams(prefix: string, mappedPrefix: string): FCParams {
    const weightsEntry = extractWeightEntry(weightMap, `${prefix}/kernel`, 2)
    const biasEntry = extractWeightEntry(weightMap, `${prefix}/bias`, 1)
    paramMappings.push(
      { originalPath: weightsEntry.path, paramPath: `${mappedPrefix}/weights` },
      { originalPath: biasEntry.path, paramPath: `${mappedPrefix}/bias` }
    )
    return {
      weights: weightsEntry.tensor as tf.Tensor2D,
      bias: biasEntry.tensor as tf.Tensor1D
    }
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
    conv0_params: extractConvParams('conv2d_0', 'conv0_params'),
    conv1_params: extractConvParams('conv2d_1', 'conv1_params'),
    conv2_params: extractConvParams('conv2d_2', 'conv2_params'),
    conv3_params: extractConvParams('conv2d_3', 'conv3_params'),
    conv4_params: extractConvParams('conv2d_4', 'conv4_params'),
    conv5_params: extractConvParams('conv2d_5', 'conv5_params'),
    conv6_params: extractConvParams('conv2d_6', 'conv6_params'),
    conv7_params: extractConvParams('conv2d_7', 'conv7_params'),
    fc0_params: extractFcParams('dense', 'fc0_params'),
    fc1_params: extractFcParams('logits', 'fc1_params')
  }

  return { params, paramMappings }
}