import * as tf from '@tensorflow/tfjs-core';

export function getModelUris(uri: string | undefined, defaultModelName: string) {
  const parts = (uri || '').split('/')

  const modelBaseUri = (
    (uri || '').endsWith('.json')
      ? parts.slice(0, parts.length - 1)
      : parts
  ).filter(s => s).join('/')

  const defaultManifestFilename = `${defaultModelName}-weights_manifest.json`
  const manifestUri = !uri || !modelBaseUri
    ? defaultManifestFilename
    : (
      uri.endsWith('.json')
        ? uri
        : `${modelBaseUri}/${defaultManifestFilename}`
    )

  return { manifestUri, modelBaseUri }
}

export async function loadWeightMap(
  uri: string | undefined,
  defaultModelName: string
): Promise<any> {

  const { manifestUri, modelBaseUri } = getModelUris(uri, defaultModelName)

  const manifest = await (await fetch(manifestUri)).json()

  return tf.io.loadWeights(manifest, modelBaseUri)
}