import { NetInput } from './NetInput';
import { TNetInput } from './types';
import { awaitMediaLoaded, getElement } from './utils';

/**
 * Validates the input to make sure, they are valid net inputs and awaits all media elements
 * to be finished loading.
 *
 * @param input The input, which can be a media element or an array of different media elements.
 * @returns A NetInput instance, which can be passed into one of the neural networks.
 */
export async function toNetInput(
  input: NetInput | TNetInput
): Promise<NetInput> {
  if (input instanceof NetInput) {
    return input
  }

  const mediaArgArray = Array.isArray(input)
      ? input
      : [input]

  if (!mediaArgArray.length) {
    throw new Error('toNetInput - empty array passed as input')
  }

  const medias = mediaArgArray.map(getElement)

  medias.forEach((media, i) => {
    if (!(media instanceof HTMLImageElement || media instanceof HTMLVideoElement || media instanceof HTMLCanvasElement)) {
      const idxHint = Array.isArray(input) ? ` at input index ${i}:` : ''
      if (typeof mediaArgArray[i] === 'string') {
        throw new Error(`toNetInput -${idxHint} string passed, but could not resolve HTMLElement for element id`)
      }
      throw new Error(`toNetInput -${idxHint} expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement, or to be an element id`)
    }
  })

  // wait for all media elements being loaded
  await Promise.all(
    medias.map(media => awaitMediaLoaded(media))
  )

  return new NetInput(medias)
}