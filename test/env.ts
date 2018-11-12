import * as tf from '@tensorflow/tfjs-core';
import { fetchNetWeights, NeuralNetwork } from 'tfjs-image-recognition-base';

import { env, fetchImage, fetchJson } from '../src';

export let fs: any, path: any, canvas: any

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

if (env.isNodejs()) {
  require('@tensorflow/tfjs-node')
  fs = require('fs')
  path = require('path')
  canvas = require('canvas')

  const { Canvas, Image, ImageData } = canvas
  env.monkeyPatch({ Canvas, Image, ImageData })
} else {
  if ((window['__karma__'].config.jasmine.args as string[]).some(arg => arg === 'backend_cpu')) {
    tf.setBackend('cpu')
  }
}

export async function initNet<TNet extends NeuralNetwork<any>>(
  net: TNet,
  uncompressedFilename: string | boolean,
  isUnusedModel: boolean = false
) {
  if (env.isNodejs()) {
    await net.loadFromDisk(path.resolve(__dirname, '../weights'))
  } else {
    const url = uncompressedFilename
      ? await fetchNetWeights(`base/weights_uncompressed/${uncompressedFilename}`)
      : (isUnusedModel ? 'base/weights_unused' : 'base/weights')
    await net.load(url)
  }
}

export async function loadImage(uri: string): Promise<HTMLImageElement> {
  if (env.isNodejs()) {
    return canvas.loadImage(path.resolve(__dirname, '../', uri))
  }
  return fetchImage(`base${uri.startsWith('/') ? '' : '/'}${uri}`)
}

export async function loadJson<T>(uri: string): Promise<T> {
  if (env.isNodejs()) {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../', uri)).toString())
  }
  return fetchJson<T>(`base${uri.startsWith('/') ? '' : '/'}${uri}`)
}

