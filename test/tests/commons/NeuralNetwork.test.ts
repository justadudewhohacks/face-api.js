import { NeuralNetwork } from '../../../src/commons/NeuralNetwork';
import * as tf from '@tensorflow/tfjs-core';

class FakeNeuralNetwork extends NeuralNetwork<any> {
  constructor(
    convFilter: tf.Tensor = tf.tensor(0),
    convBias: tf.Tensor = tf.tensor(0),
    fcWeights: tf.Tensor = tf.tensor(0)
  ) {
    super()
    this._params = {
      conv: {
        filter: convFilter,
        bias: convBias,
      },
      fc: fcWeights
    }

    this._paramMappings = [
      { originalPath: 'conv2d/filter', paramPath: 'conv/filter' },
      { originalPath: 'conv2d/bias', paramPath: 'conv/bias' },
      { originalPath: 'dense/weights', paramPath: 'fc' }
    ]
  }
}

describe('NeuralNetwork', () => {

  describe('getParamFromPath', () => {

    it('returns correct params', () => tf.tidy(() => {
      const convFilter = tf.tensor(0)
      const convBias = tf.tensor(0)
      const fcWeights = tf.tensor(0)
      const net = new FakeNeuralNetwork(convFilter, convBias, fcWeights)

      expect(net.getParamFromPath('conv/filter')).toEqual(convFilter)
      expect(net.getParamFromPath('conv/bias')).toEqual(convBias)
      expect(net.getParamFromPath('fc')).toEqual(fcWeights)
    }))

    it('throws if param is not a tensor', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork(null as any)
      const fakePath = 'conv/filter'

      expect(
        () => net.getParamFromPath(fakePath)
      ).toThrowError(`traversePropertyPath - parameter is not a tensor, for path ${fakePath}`)
    }))

    it('throws if key path invalid', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork()
      const fakePath = 'conv2d/foo'

      expect(
        () => net.getParamFromPath(fakePath)
      ).toThrowError(`traversePropertyPath - object does not have property conv2d, for path ${fakePath}`)
    }))

  })

  describe('reassignParamFromPath', () => {

    it('sets correct params', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork()

      const convFilter = tf.tensor(0)
      const convBias = tf.tensor(0)
      const fcWeights = tf.tensor(0)
      net.reassignParamFromPath('conv/filter', convFilter)
      net.reassignParamFromPath('conv/bias', convBias)
      net.reassignParamFromPath('fc', fcWeights)

      expect(net.params.conv.filter).toEqual(convFilter)
      expect(net.params.conv.bias).toEqual(convBias)
      expect(net.params.fc).toEqual(fcWeights)
    }))

    it('throws if param is not a tensor', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork(null as any)
      const fakePath = 'conv/filter'

      expect(
        () => net.reassignParamFromPath(fakePath, tf.tensor(0))
      ).toThrowError(`traversePropertyPath - parameter is not a tensor, for path ${fakePath}`)
    }))

    it('throws if key path invalid', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork()
      const fakePath = 'conv2d/foo'

      expect(
        () => net.reassignParamFromPath(fakePath, tf.tensor(0))
      ).toThrowError(`traversePropertyPath - object does not have property conv2d, for path ${fakePath}`)
    }))

  })

  describe('getParamList', () => {

    it('returns param tensors with path', () => tf.tidy(() => {
      const convFilter = tf.tensor(0)
      const convBias = tf.tensor(0)
      const fcWeights = tf.tensor(0)
      const net = new FakeNeuralNetwork(convFilter, convBias, fcWeights)

      const paramList = net.getParamList()

      expect(paramList.length).toEqual(3)
      expect(paramList[0].path).toEqual('conv/filter')
      expect(paramList[1].path).toEqual('conv/bias')
      expect(paramList[2].path).toEqual('fc')
      expect(paramList[0].tensor).toEqual(convFilter)
      expect(paramList[1].tensor).toEqual(convBias)
      expect(paramList[2].tensor).toEqual(fcWeights)
    }))

  })

  describe('getFrozenParams', () => {

    it('returns all frozen params', () => tf.tidy(() => {
      const convFilter = tf.tensor(0)
      const convBias = tf.tensor(0)
      const fcWeights = tf.variable(tf.scalar(0))
      const net = new FakeNeuralNetwork(convFilter, convBias, fcWeights)

      const frozenParams = net.getFrozenParams()

      expect(frozenParams.length).toEqual(2)
      expect(frozenParams[0].path).toEqual('conv/filter')
      expect(frozenParams[1].path).toEqual('conv/bias')
      expect(frozenParams[0].tensor).toEqual(convFilter)
      expect(frozenParams[1].tensor).toEqual(convBias)
    }))

  })

  describe('getTrainableParams', () => {

    it('returns all trainable params', () => tf.tidy(() => {
      const convFilter = tf.variable(tf.scalar(0))
      const convBias = tf.variable(tf.scalar(0))
      const fcWeights = tf.tensor(0)
      const net = new FakeNeuralNetwork(convFilter, convBias, fcWeights)

      const trainableParams = net.getTrainableParams()

      expect(trainableParams.length).toEqual(2)
      expect(trainableParams[0].path).toEqual('conv/filter')
      expect(trainableParams[1].path).toEqual('conv/bias')
      expect(trainableParams[0].tensor).toEqual(convFilter)
      expect(trainableParams[1].tensor).toEqual(convBias)
    }))

  })

  describe('dispose', () => {

    it('disposes all param tensors', () => tf.tidy(() => {
      const numTensors = tf.memory().numTensors
      const net = new FakeNeuralNetwork()

      net.dispose()

      expect(net.params).toBe(undefined)
      expect(tf.memory().numTensors - numTensors).toEqual(0)
    }))

  })

  describe('variable', () => {

    it('make all param tensors trainable', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork()

      net.variable()

      expect(net.params.conv.filter instanceof tf.Variable).toBe(true)
      expect(net.params.conv.bias instanceof tf.Variable).toBe(true)
      expect(net.params.fc instanceof tf.Variable).toBe(true)
    }))

    it('disposes old tensors', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork()
      const numTensors = tf.memory().numTensors

      net.variable()

      expect(tf.memory().numTensors - numTensors).toEqual(0)
    }))

  })

  describe('freeze', () => {

    it('freezes all param variables', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork(
        tf.variable(tf.scalar(0)),
        tf.variable(tf.scalar(0)),
        tf.variable(tf.scalar(0))
      )

      net.freeze()

      expect(net.params.conv.filter instanceof tf.Variable).toBe(false)
      expect(net.params.conv.bias instanceof tf.Variable).toBe(false)
      expect(net.params.fc instanceof tf.Variable).toBe(false)
    }))

    it('disposes old tensors', () => tf.tidy(() => {
      const net = new FakeNeuralNetwork(
        tf.variable(tf.scalar(0)),
        tf.variable(tf.scalar(0)),
        tf.variable(tf.scalar(0))
      )
      const numTensors = tf.memory().numTensors

      net.freeze()

      expect(tf.memory().numTensors - numTensors).toEqual(0)
    }))

  })

})
