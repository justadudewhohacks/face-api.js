import * as tf from '@tensorflow/tfjs-core';

import { createCanvasFromMedia, NetInput, toNetInput } from '../../../src';
import { FaceExpressions } from '../../../src/faceExpressionNet/FaceExpressions';
import { getTestEnv } from '../../env';
import { describeWithBackend, describeWithNets, expectAllTensorsReleased } from '../../utils';

describeWithBackend('faceExpressionNet', () => {

  let imgElAngry: HTMLImageElement
  let imgElSurprised: HTMLImageElement

  beforeAll(async () => {
    imgElAngry = await getTestEnv().loadImage('test/images/angry_cropped.jpg')
    imgElSurprised = await getTestEnv().loadImage('test/images/surprised_cropped.jpg')
  })

  describeWithNets('quantized weights', { withFaceExpressionNet: { quantized: true } }, ({ faceExpressionNet }) => {

    it('recognizes facial expressions', async () => {
      const result = await faceExpressionNet.predictExpressions(imgElAngry) as FaceExpressions
      expect(result instanceof FaceExpressions).toBe(true)
      expect(result.angry).toBeGreaterThan(0.95)
    })

  })

  describeWithNets('batch inputs', { withFaceExpressionNet: { quantized: true } }, ({ faceExpressionNet }) => {

    it('recognizes facial expressions for batch of image elements', async () => {
      const inputs = [imgElAngry, imgElSurprised]

      const results = await faceExpressionNet.predictExpressions(inputs) as FaceExpressions[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results
      expect(resultAngry instanceof FaceExpressions).toBe(true)
      expect(resultSurprised instanceof FaceExpressions).toBe(true)
      expect(resultAngry.angry).toBeGreaterThan(0.95)
      expect(resultSurprised.surprised).toBeGreaterThan(0.95)
    })

    it('computes face expressions for batch of tf.Tensor3D', async () => {
      const inputs = [imgElAngry, imgElSurprised].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))

      const results = await faceExpressionNet.predictExpressions(inputs) as FaceExpressions[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results
      expect(resultAngry instanceof FaceExpressions).toBe(true)
      expect(resultSurprised instanceof FaceExpressions).toBe(true)
      expect(resultAngry.angry).toBeGreaterThan(0.95)
      expect(resultSurprised.surprised).toBeGreaterThan(0.95)
    })

    it('computes face expressions for batch of mixed inputs', async () => {
      const inputs = [imgElAngry, tf.browser.fromPixels(createCanvasFromMedia(imgElSurprised))]

      const results = await faceExpressionNet.predictExpressions(inputs) as FaceExpressions[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results
      expect(resultAngry instanceof FaceExpressions).toBe(true)
      expect(resultSurprised instanceof FaceExpressions).toBe(true)
      expect(resultAngry.angry).toBeGreaterThan(0.95)
      expect(resultSurprised.surprised).toBeGreaterThan(0.95)
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
        const tensor = tf.browser.fromPixels(createCanvasFromMedia(imgElAngry))

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensor))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensors))
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(imgElAngry)).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceExpressionNet.forwardInput(await toNetInput(tensor))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry]
          .map(el => tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(el)).expandDims())) as tf.Tensor4D[]

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
        const tensor = tf.browser.fromPixels(createCanvasFromMedia(imgElAngry))

        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensor)
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))


        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(imgElAngry)).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensor)
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry]
          .map(el => tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(el)).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          await faceExpressionNet.predictExpressions(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

    })
  })

})

