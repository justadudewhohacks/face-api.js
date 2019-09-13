import * as fs from 'fs';
import * as path from 'path';
import { NeuralNetwork } from 'tfjs-image-recognition-base';

import { env } from '../src';
import { TestEnv } from './Environment';

require('@tensorflow/tfjs-node')
const canvas = require('canvas')

const { Canvas, Image, ImageData } = canvas
env.monkeyPatch({ Canvas, Image, ImageData })

async function loadImageNode(uri: string): Promise<HTMLImageElement> {
  return canvas.loadImage(path.resolve(__dirname, '../', uri))
}

async function loadJsonNode<T>(uri: string): Promise<T> {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../', uri)).toString())
}

export async function initNetNode<TNet extends NeuralNetwork<any>>(net: TNet) {
  await net.loadFromDisk(path.resolve(__dirname, '../weights'))
}

const nodeTestEnv: TestEnv = {
  loadImage: loadImageNode,
  loadJson: loadJsonNode,
  initNet: initNetNode
}

global['nodeTestEnv'] = nodeTestEnv