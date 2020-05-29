import * as tf from '@tensorflow/tfjs-core';

import { extractWeightsFactory } from './common';
import { getModelUris } from './common/getModelUris';
import { loadWeightMap, NetInput, TNetInput, toNetInput } from './dom';
import { env } from './env';
import { ILayer } from './layers/Layer';
import { reduceSum } from './utils';

export abstract class NeuralNetwork<
  TOut extends tf.TensorContainer = tf.Tensor4D
> {

  constructor(protected _name: string) {}

  protected abstract _getParamLayers(): ILayer[]
  protected abstract _getDefaultModelName(): string
  protected abstract _forward(input: NetInput): TOut

  public dispose() {
    this._getParamLayers().forEach(l => l.dispose())
  }

  public async load(weightsOrUrl: Float32Array | string | undefined): Promise<void> {
    if (weightsOrUrl instanceof Float32Array) {
      this._load(weightsOrUrl)
      return
    }

    await this.loadFromUri(weightsOrUrl)
  }

  public async loadFromUri(uri: string | undefined) {
    if (uri && typeof uri !== 'string') {
      throw new Error(`${this._name}.loadFromUri - expected model uri`)
    }

    const weightMap = await loadWeightMap(uri, this._getDefaultModelName())
    this.loadFromWeightMap(weightMap)
  }

  public async loadFromDisk(filePath: string | undefined) {
    if (filePath && typeof filePath !== 'string') {
      throw new Error(`${this._name}.loadFromDisk - expected model file path`)
    }

    const { readFile } = env.getEnv()

    const { manifestUri, modelBaseUri } = getModelUris(filePath, this._getDefaultModelName())

    const fetchWeightsFromDisk = (filePaths: string[]) => Promise.all(
      filePaths.map(filePath => readFile(filePath).then(buf => buf.buffer))
    )
    const loadWeights = tf.io.weightsLoaderFactory(fetchWeightsFromDisk)

    const manifest = JSON.parse((await readFile(manifestUri)).toString())
    const weightMap = await loadWeights(manifest, modelBaseUri)

    this.loadFromWeightMap(weightMap)
  }

  public loadFromWeightMap(weightMap: tf.NamedTensorMap) {
    this._getParamLayers().forEach(l => l.initializeParamsFromWeightMap(weightMap))
  }

  public forwardSync(input: NetInput): TOut {
    return tf.tidy(() => this._forward(input))
  }

  public async forward(input: TNetInput): Promise<TOut> {
    return this.forwardSync(await toNetInput(input))
  }

  // keep forwardInput for backwards compatibility
  public forwardInput(input: NetInput): TOut {
    return this.forwardSync(input)
  }

  private _load(params: Float32Array) {
    const expectedNumParams = reduceSum(this._getParamLayers().map(l => l.getNumParams()))
    if (params.length !== expectedNumParams) {
      throw new Error(`NeuralNetwork._load failed for '${this._name}': expected ${expectedNumParams} params, but received ${params.length}`)
    }
    // TODO
    const extractWeights = extractWeightsFactory(params).extractWeights
    this._getParamLayers().forEach(l => l.initializeParams(extractWeights))
  }
}