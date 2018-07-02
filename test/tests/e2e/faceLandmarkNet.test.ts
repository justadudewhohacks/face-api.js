import * as tf from '@tensorflow/tfjs-core';

import * as faceapi from '../../../src';
import { isTensor3D } from '../../../src/commons/isTensor';
import { FaceLandmarks } from '../../../src/faceLandmarkNet/FaceLandmarks';
import { Point } from '../../../src/Point';
import { Dimensions, TMediaElement } from '../../../src/types';
import { expectMaxDelta, expectAllTensorsReleased } from '../../utils';
import { NetInput } from '../../../src/NetInput';

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

  describe('uncompressed weights', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet

    beforeAll(async () => {
      const res = await fetch('base/weights/uncompressed/face_landmark_68_model.weights')
      const weights = new Float32Array(await res.arrayBuffer())
      faceLandmarkNet = faceapi.faceLandmarkNet(weights)
    })

    it('computes face landmarks for squared input', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmarkNet.detectLandmarks(imgEl1) as FaceLandmarks
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

      const result = await faceLandmarkNet.detectLandmarks(imgElRect) as FaceLandmarks
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

  describe('quantized weights', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet

    beforeAll(async () => {
      faceLandmarkNet = new faceapi.FaceLandmarkNet()
      await faceLandmarkNet.load('base/weights')
    })

    it('computes face landmarks', async () => {
      const { width, height } = imgEl1

      const result = await faceLandmarkNet.detectLandmarks(imgEl1) as FaceLandmarks
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

      const result = await faceLandmarkNet.detectLandmarks(imgElRect) as FaceLandmarks
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

  describe('batch inputs', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet

    beforeAll(async () => {
      const res = await fetch('base/weights/uncompressed/face_landmark_68_model.weights')
      const weights = new Float32Array(await res.arrayBuffer())
      faceLandmarkNet = faceapi.faceLandmarkNet(weights)
    })

    it('computes face landmarks for batch of image elements', async () => {
      const inputs = [imgEl1, imgEl2, imgElRect]

      const faceLandmarkPositions = [
        faceLandmarkPositions1,
        faceLandmarkPositions2,
        faceLandmarkPositionsRect
      ]

      const results = await faceLandmarkNet.detectLandmarks(inputs) as FaceLandmarks[]
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

      const results = await faceLandmarkNet.detectLandmarks(inputs) as FaceLandmarks[]
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

      const results = await faceLandmarkNet.detectLandmarks(tf.stack(inputs) as tf.Tensor4D) as FaceLandmarks[]
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

      const results = await faceLandmarkNet.detectLandmarks(inputs) as FaceLandmarks[]
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

  describe('no memory leaks', () => {

    let faceLandmarkNet: faceapi.FaceLandmarkNet

    beforeAll(async () => {
      faceLandmarkNet = new faceapi.FaceLandmarkNet()
      await faceLandmarkNet.load('base/weights')
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

    })
  })

})

