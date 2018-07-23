import * as tf from '@tensorflow/tfjs-core';

import * as faceapi from '../../../src';
import { isTensor3D } from '../../../src/commons/isTensor';
import { Point } from '../../../src/Point';
import { Dimensions, TMediaElement } from '../../../src/types';
import { expectMaxDelta, expectAllTensorsReleased, describeWithNets } from '../../utils';
import { NetInput } from '../../../src/NetInput';
import { toNetInput } from '../../../src';

function getInputDims (input: tf.Tensor | TMediaElement): Dimensions {
  if (input instanceof tf.Tensor) {
    const [height, width] = input.shape.slice(isTensor3D(input) ? 0 : 1)
    return { width, height }
  }
  return input
}

describe('faceLandmarkNet', () => {

  let imgEl1: HTMLImageElement
  let imgEl2: HTMLImageElement
  let imgElRect: HTMLImageElement
  let faceLandmarkPositions1: Point[]
  let faceLandmarkPositions2: Point[]
  let faceLandmarkPositionsRect: Point[]

  beforeAll(async () => {
    const img1 = await (await fetch('base/test/images/face1.png')).blob()
    imgEl1 = await faceapi.bufferToImage(img1)
    const img2 = await (await fetch('base/test/images/face2.png')).blob()
    imgEl2 = await faceapi.bufferToImage(img2)
    const imgRect = await (await fetch('base/test/images/face_rectangular.png')).blob()
    imgElRect = await faceapi.bufferToImage(imgRect)
    faceLandmarkPositions1 = await (await fetch('base/test/data/faceLandmarkPositions1.json')).json()
    faceLandmarkPositions2 = await (await fetch('base/test/data/faceLandmarkPositions2.json')).json()
    faceLandmarkPositionsRect = await (await fetch('base/test/data/faceLandmarkPositionsRect.json')).json()
  })

  describeWithNets('uncompressed weights', { withFaceLandmarkNet: { quantized: false } }, ({ faceLandmarkNet }) => {

    it('computes face landmarks for squared input', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmarkNet.detectLandmarks(imgEl1) as faceapi.FaceLandmarks68
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositions1[i].x, 0.1)
        expectMaxDelta(y, faceLandmarkPositions1[i].y, 0.1)
      })
    })

    it('computes face landmarks for rectangular input', async () => {
      const { width, height } = imgElRect

      const result = await faceLandmarkNet.detectLandmarks(imgElRect) as faceapi.FaceLandmarks68
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositionsRect[i].x, 0.1)
        expectMaxDelta(y, faceLandmarkPositionsRect[i].y, 0.1)
      })
    })

  })

  describeWithNets('quantized weights', { withFaceLandmarkNet: { quantized: true } }, ({ faceLandmarkNet }) => {

    it('computes face landmarks for squared input', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmarkNet.detectLandmarks(imgEl1) as faceapi.FaceLandmarks68
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositions1[i].x, 2)
        expectMaxDelta(y, faceLandmarkPositions1[i].y, 2)
      })
    })

    it('computes face landmarks for rectangular input', async () => {
      const { width, height } = imgElRect

      const result = await faceLandmarkNet.detectLandmarks(imgElRect) as faceapi.FaceLandmarks68
      expect(result.getImageWidth()).toEqual(width)
      expect(result.getImageHeight()).toEqual(height)
      expect(result.getShift().x).toEqual(0)
      expect(result.getShift().y).toEqual(0)
      result.getPositions().forEach(({ x, y }, i) => {
        expectMaxDelta(x, faceLandmarkPositionsRect[i].x, 6)
        expectMaxDelta(y, faceLandmarkPositionsRect[i].y, 6)
      })
    })

  })

  describeWithNets('batch inputs', { withFaceLandmarkNet: { quantized: false } }, ({ faceLandmarkNet }) => {

    it('computes face landmarks for batch of image elements', async () => {
      const inputs = [imgEl1, imgEl2, imgElRect]

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2,
        faceLandmarkPositionsRect
      ]

      const results = await faceLandmarkNet.detectLandmarks(inputs) as faceapi.FaceLandmarks68[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(3)
      results.forEach((result, batchIdx) => {
        const { width, height } = getInputDims(inputs[batchIdx])
        expect(result.getImageWidth()).toEqual(width)
        expect(result.getImageHeight()).toEqual(height)
        expect(result.getShift().x).toEqual(0)
        expect(result.getShift().y).toEqual(0)
        result.getPositions().forEach(({ x, y }, i) => {
          expectMaxDelta(x, faceLandmarkPositions[batchIdx][i].x, 0.1)
          expectMaxDelta(y, faceLandmarkPositions[batchIdx][i].y, 0.1)
        })
      })
    })

    it('computes face landmarks for batch of tf.Tensor3D', async () => {
      const inputs = [imgEl1, imgEl2, imgElRect].map(el => tf.fromPixels(el))

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2,
        faceLandmarkPositionsRect
      ]

      const results = await faceLandmarkNet.detectLandmarks(inputs) as faceapi.FaceLandmarks68[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(3)
      results.forEach((result, batchIdx) => {
        const { width, height } = getInputDims(inputs[batchIdx])
        expect(result.getImageWidth()).toEqual(width)
        expect(result.getImageHeight()).toEqual(height)
        expect(result.getShift().x).toEqual(0)
        expect(result.getShift().y).toEqual(0)
        result.getPositions().forEach(({ x, y }, i) => {
          expectMaxDelta(x, faceLandmarkPositions[batchIdx][i].x, 0.1)
          expectMaxDelta(y, faceLandmarkPositions[batchIdx][i].y, 0.1)
        })
      })
    })

    it('computes face landmarks for tf.Tensor4D', async () => {
      const inputs = [imgEl1, imgEl2].map(el => tf.fromPixels(el))

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2,
        faceLandmarkPositionsRect
      ]

      const results = await faceLandmarkNet.detectLandmarks(tf.stack(inputs) as tf.Tensor4D) as faceapi.FaceLandmarks68[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)
      results.forEach((result, batchIdx) => {
        const { width, height } = getInputDims(inputs[batchIdx])
        expect(result.getImageWidth()).toEqual(width)
        expect(result.getImageHeight()).toEqual(height)
        expect(result.getShift().x).toEqual(0)
        expect(result.getShift().y).toEqual(0)
        result.getPositions().forEach(({ x, y }, i) => {
          expectMaxDelta(x, faceLandmarkPositions[batchIdx][i].x, 0.1)
          expectMaxDelta(y, faceLandmarkPositions[batchIdx][i].y, 0.1)
        })
      })
    })

    it('computes face landmarks for batch of mixed inputs', async () => {
      const inputs = [imgEl1, tf.fromPixels(imgEl2), tf.fromPixels(imgElRect)]

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2,
        faceLandmarkPositionsRect
      ]

      const results = await faceLandmarkNet.detectLandmarks(inputs) as faceapi.FaceLandmarks68[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(3)
      results.forEach((result, batchIdx) => {
        const { width, height } = getInputDims(inputs[batchIdx])
        expect(result.getImageWidth()).toEqual(width)
        expect(result.getImageHeight()).toEqual(height)
        expect(result.getShift().x).toEqual(0)
        expect(result.getShift().y).toEqual(0)
        result.getPositions().forEach(({ x, y }, i) => {
          expectMaxDelta(x, faceLandmarkPositions[batchIdx][i].x, 0.1)
          expectMaxDelta(y, faceLandmarkPositions[batchIdx][i].y, 0.1)
        })
      })
    })

  })

  describeWithNets('no memory leaks', { withFaceLandmarkNet: { quantized: true } }, ({ faceLandmarkNet }) => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights/uncompressed/face_landmark_68_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = faceapi.createFaceLandmarkNet(weights)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new faceapi.FaceLandmarkNet()
          await net.load('base/weights')
          net.dispose()
        })
      })

    })

    describe('forwardInput', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = (new NetInput([imgEl1])).managed()
          const outTensor = await faceLandmarkNet.forwardInput(netInput)
          outTensor.dispose()
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = (new NetInput([imgEl1, imgEl1, imgEl1])).managed()
          const outTensor = await faceLandmarkNet.forwardInput(netInput)
          outTensor.dispose()
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.fromPixels(imgEl1)

        await expectAllTensorsReleased(async () => {
          const netInput = (new NetInput([tensor])).managed()
          const outTensor = await faceLandmarkNet.forwardInput(netInput)
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1].map(el => tf.fromPixels(el))

        await expectAllTensorsReleased(async () => {
          const netInput = (new NetInput(tensors)).managed()
          const outTensor = await faceLandmarkNet.forwardInput(netInput)
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.fromPixels(imgEl1).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceLandmarkNet.forwardInput(await toNetInput(tensor, true))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1]
          .map(el => tf.tidy(() => tf.fromPixels(el).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceLandmarkNet.forwardInput(await toNetInput(tensors, true))
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

    })

    describe('detectLandmarks', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          await faceLandmarkNet.detectLandmarks(imgEl1)
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          await faceLandmarkNet.detectLandmarks([imgEl1, imgEl1, imgEl1])
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.fromPixels(imgEl1)

        await expectAllTensorsReleased(async () => {
          await faceLandmarkNet.detectLandmarks(tensor)
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1].map(el => tf.fromPixels(el))


        await expectAllTensorsReleased(async () => {
          await faceLandmarkNet.detectLandmarks(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.fromPixels(imgEl1).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          await faceLandmarkNet.detectLandmarks(tensor)
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1]
          .map(el => tf.tidy(() => tf.fromPixels(el).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          await faceLandmarkNet.detectLandmarks(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

    })
  })

})

