import * as tf from '@tensorflow/tfjs-core';

import { createCanvasFromMedia, NetInput, toNetInput } from '../../../src';
import { FaceExpressionPrediction } from '../../../src/faceExpressionNet/types';
import { loadImage } from '../../env';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';

describe('faceExpressionNet', () => {

  let imgElAngry: HTMLImageElement
  let imgElSurprised: HTMLImageElement

  beforeAll(async () => {
    imgElAngry = await loadImage('test/images/angry_cropped.jpg')
    imgElSurprised = await loadImage('test/images/surprised_cropped.jpg')
  })

  describeWithNets('quantized weights', { withFaceExpressionNet: { quantized: true } }, ({ faceExpressionNet }) => {

    it('recognizes facial expressions', async () => {
      const result = await faceExpressionNet.predictExpressions(imgElAngry) as FaceExpressionPrediction[]

      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toEqual(7)

      const angry = result.find(res => res.expression === 'angry') as FaceExpressionPrediction

      expect(angry).not.toBeUndefined()
      expect(angry.probability).toBeGreaterThan(0.95)
    })

  })

  describeWithNets('batch inputs', { withFaceExpressionNet: { quantized: true } }, ({ faceExpressionNet }) => {

    it('recognizes facial expressions for batch of image elements', async () => {
      const inputs = [imgElAngry, imgElSurprised]

      const results = await faceExpressionNet.predictExpressions(inputs) as FaceExpressionPrediction[][]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results

      expect(Array.isArray(resultAngry)).toBe(true)
      expect(resultAngry.length).toEqual(7)
      expect(Array.isArray(resultSurprised)).toBe(true)
      expect(resultSurprised.length).toEqual(7)

      const angry = resultAngry.find(res => res.expression === 'angry') as FaceExpressionPrediction
      const surprised = resultSurprised.find(res => res.expression === 'surprised') as FaceExpressionPrediction

      expect(angry).not.toBeUndefined()
      expect(angry.probability).toBeGreaterThan(0.95)
      expect(surprised).not.toBeUndefined()
      expect(surprised.probability).toBeGreaterThan(0.95)
    })

    it('computes face landmarks for batch of tf.Tensor3D', async () => {
      const inputs = [imgElAngry, imgElSurprised].map(el => tf.fromPixels(createCanvasFromMedia(el)))

      const results = await faceExpressionNet.predictExpressions(inputs) as FaceExpressionPrediction[][]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results

      expect(Array.isArray(resultAngry)).toBe(true)
      expect(resultAngry.length).toEqual(7)
      expect(Array.isArray(resultSurprised)).toBe(true)
      expect(resultSurprised.length).toEqual(7)

      const angry = resultAngry.find(res => res.expression === 'angry') as FaceExpressionPrediction
      const surprised = resultSurprised.find(res => res.expression === 'surprised') as FaceExpressionPrediction

      expect(angry).not.toBeUndefined()
      expect(angry.probability).toBeGreaterThan(0.95)
      expect(surprised).not.toBeUndefined()
      expect(surprised.probability).toBeGreaterThan(0.95)
    })

    it('computes face landmarks for batch of mixed inputs', async () => {
      const inputs = [imgElAngry, tf.fromPixels(createCanvasFromMedia(imgElSurprised))]

      const results = await faceExpressionNet.predictExpressions(inputs) as FaceExpressionPrediction[][]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results

      expect(Array.isArray(resultAngry)).toBe(true)
      expect(resultAngry.length).toEqual(7)
      expect(Array.isArray(resultSurprised)).toBe(true)
      expect(resultSurprised.length).toEqual(7)

      const angry = resultAngry.find(res => res.expression === 'angry') as FaceExpressionPrediction
      const surprised = resultSurprised.find(res => res.expression === 'surprised') as FaceExpressionPrediction

      expect(angry).not.toBeUndefined()
      expect(angry.probability).toBeGreaterThan(0.95)
      expect(surprised).not.toBeUndefined()
      expect(surprised.probability).toBeGreaterThan(0.95)
    })

  })

  describeWithNets('no memory leaks', { withFaceExpressionNet: { quantized: true } }, ({ faceExpressionNet }) => {

    describe('forwardInput', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([imgElAngry])
          const outTensor = await faceExpressionNet.forwardInput(netInput)
          outTensor.dispose()
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([imgElAngry, imgElAngry])
          const outTensor = await faceExpressionNet.forwardInput(netInput)
          outTensor.dispose()
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.fromPixels(createCanvasFromMedia(imgElAngry))

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensor))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry].map(el => tf.fromPixels(createCanvasFromMedia(el)))

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensors))
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.fromPixels(createCanvasFromMedia(imgElAngry)).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensor))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry]
          .map(el => tf.tidy(() => tf.fromPixels(createCanvasFromMedia(el)).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensors))
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

    })

    describe('predictExpressions', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(imgElAngry)
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions([imgElAngry, imgElAngry, imgElAngry])
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.fromPixels(createCanvasFromMedia(imgElAngry))

        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensor)
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry].map(el => tf.fromPixels(createCanvasFromMedia(el)))


        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.fromPixels(createCanvasFromMedia(imgElAngry)).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensor)
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry]
          .map(el => tf.tidy(() => tf.fromPixels(createCanvasFromMedia(el)).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

    })
  })

})

