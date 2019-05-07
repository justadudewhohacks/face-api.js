import { TfjsImageRecognitionBase } from 'tfjs-image-recognition-base';

import { DenseBlock3Params, DenseBlock4Params } from './types';

export function extractorsFactory(extractWeights: TfjsImageRecognitionBase.ExtractWeightsFunction, paramMappings: TfjsImageRecognitionBase.ParamMapping[]) {

  const extractConvParams = TfjsImageRecognitionBase.extractConvParamsFactory(extractWeights, paramMappings)
  const extractSeparableConvParams = TfjsImageRecognitionBase.extractSeparableConvParamsFactory(extractWeights, paramMappings)

  function extractDenseBlock3Params(channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer: boolean = false): DenseBlock3Params {

    const conv0 = isFirstLayer
      ? extractConvParams(channelsIn, channelsOut, 3, `${mappedPrefix}/conv0`)
      : extractSeparableConvParams(channelsIn, channelsOut, `${mappedPrefix}/conv0`)
    const conv1 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv1`)
    const conv2 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv2`)

    return { conv0, conv1, conv2 }
  }

  function extractDenseBlock4Params(channelsIn: number, channelsOut: number, mappedPrefix: string, isFirstLayer: boolean = false): DenseBlock4Params {

    const { conv0, conv1, conv2 } = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer)
    const conv3 = extractSeparableConvParams(channelsOut, channelsOut, `${mappedPrefix}/conv3`)

    return { conv0, conv1, conv2, conv3 }
  }

  return {
    extractDenseBlock3Params,
    extractDenseBlock4Params
  }

}