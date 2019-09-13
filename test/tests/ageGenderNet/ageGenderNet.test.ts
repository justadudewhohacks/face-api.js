import * as tf from '@tensorflow/tfjs-core';

import { createCanvasFromMedia, NetInput, toNetInput } from '../../../src';
import { AgeAndGenderPrediction } from '../../../src/ageGenderNet/types';
import { getTestEnv } from '../../env';
import { describeWithBackend, describeWithNets, expectAllTensorsReleased } from '../../utils';

function expectResultsAngry(result: AgeAndGenderPrediction) {
  expect(result.age).toBeGreaterThanOrEqual(36)
  expect(result.age).toBeLessThanOrEqual(42)
  expect(result.gender).toEqual('male')
  expect(result.genderProbability).toBeGreaterThanOrEqual(0.9)
}

function expectResultsSurprised(result: AgeAndGenderPrediction) {
  expect(result.age).toBeGreaterThanOrEqual(24)
  expect(result.age).toBeLessThanOrEqual(28)
  expect(result.gender).toEqual('female')
  expect(result.genderProbability).toBeGreaterThanOrEqual(0.8)
}

describeWithBackend('ageGenderNet', () => {

  let imgElAngry: HTMLImageElement
  let imgElSurprised: HTMLImageElement

  beforeAll(async () => {
    imgElAngry = await getTestEnv().loadImage('test/images/angry_cropped.jpg')
    imgElSurprised = await getTestEnv().loadImage('test/images/surprised_cropped.jpg')
  })

  describeWithNets('quantized weights', { withAgeGenderNet: { quantized: true } }, ({ ageGenderNet }) => {

    it('recognizes age and gender', async () => {
      const result = await ageGenderNet.predictAgeAndGender(imgElAngry) as AgeAndGenderPrediction
      expectResultsAngry(result)
    })

  })

  describeWithNets('batch inputs', { withAgeGenderNet: { quantized: true } }, ({ ageGenderNet }) => {

    it('recognizes age and gender for batch of image elements', async () => {
      const inputs = [imgElAngry, imgElSurprised]

      const results = await ageGenderNet.predictAgeAndGender(inputs) as AgeAndGenderPrediction[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results
      expectResultsAngry(resultAngry)
      expectResultsSurprised(resultSurprised)
    })

    it('computes age and gender for batch of tf.Tensor3D', async () => {
      const inputs = [imgElAngry, imgElSurprised].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))

      const results = await ageGenderNet.predictAgeAndGender(inputs) as AgeAndGenderPrediction[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results
      expectResultsAngry(resultAngry)
      expectResultsSurprised(resultSurprised)
    })

    it('computes age and gender for batch of mixed inputs', async () => {
      const inputs = [imgElAngry, tf.browser.fromPixels(createCanvasFromMedia(imgElSurprised))]

      const results = await ageGenderNet.predictAgeAndGender(inputs) as AgeAndGenderPrediction[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(2)

      const [resultAngry, resultSurprised] = results
      expectResultsAngry(resultAngry)
      expectResultsSurprised(resultSurprised)
    })

  })

  describeWithNets('no memory leaks', { withAgeGenderNet: { quantized: true } }, ({ ageGenderNet }) => {

    describe('forwardInput', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([imgElAngry])
          const { age, gender } = await ageGenderNet.forwardInput(netInput)
          age.dispose()
          gender.dispose()
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([imgElAngry, imgElAngry])
          const { age, gender } = await ageGenderNet.forwardInput(netInput)
          age.dispose()
          gender.dispose()
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.browser.fromPixels(createCanvasFromMedia(imgElAngry))

        await expectAllTensorsReleased(async () => {
          const { age, gender } = await ageGenderNet.forwardInput(await toNetInput(tensor))
          age.dispose()
          gender.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))

        await expectAllTensorsReleased(async () => {
          const { age, gender } = await ageGenderNet.forwardInput(await toNetInput(tensors))
          age.dispose()
          gender.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(imgElAngry)).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          const { age, gender } = await ageGenderNet.forwardInput(await toNetInput(tensor))
          age.dispose()
          gender.dispose()
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry]
          .map(el => tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(el)).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          const { age, gender } = await ageGenderNet.forwardInput(await toNetInput(tensors))
          age.dispose()
          gender.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

    })

    describe('predictExpressions', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          await ageGenderNet.predictAgeAndGender(imgElAngry)
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          await ageGenderNet.predictAgeAndGender([imgElAngry, imgElAngry, imgElAngry])
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.browser.fromPixels(createCanvasFromMedia(imgElAngry))

        await expectAllTensorsReleased(async () => {
          await ageGenderNet.predictAgeAndGender(tensor)
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry].map(el => tf.browser.fromPixels(createCanvasFromMedia(el)))


        await expectAllTensorsReleased(async () => {
          await ageGenderNet.predictAgeAndGender(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(imgElAngry)).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          await ageGenderNet.predictAgeAndGender(tensor)
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgElAngry, imgElAngry, imgElAngry]
          .map(el => tf.tidy(() => tf.browser.fromPixels(createCanvasFromMedia(el)).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          await ageGenderNet.predictAgeAndGender(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

    })
  })

})

