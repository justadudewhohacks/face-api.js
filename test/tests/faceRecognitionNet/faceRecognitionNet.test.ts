import * as tf from '@tensorflow/tfjs-core';

import { createCanvasFromMedia, NetInput, toNetInput } from '../../../src';
import { euclideanDistance } from '../../../src/euclideanDistance';
import { getTestEnv } from '../../env';
import { describeWithBackend, describeWithNets, expectAllTensorsReleased } from '../../utils';

describeWithBackend('faceRecognitionNet', () => {

  let imgEl1: HTMLCanvasElement
  let imgEl2: HTMLCanvasElement
  let imgElRect: HTMLCanvasElement
  let faceDescriptor1: number[]
  let faceDescriptor2: number[]
  let faceDescriptorRect: number[]

  beforeAll(async () => {
    imgEl1 = createCanvasFromMedia(await getTestEnv().loadImage('test/images/face1.png'))
    imgEl2 = createCanvasFromMedia(await getTestEnv().loadImage('test/images/face2.png'))
    imgElRect = createCanvasFromMedia(await getTestEnv().loadImage('test/images/face_rectangular.png'))
    faceDescriptor1 = await getTestEnv().loadJson<number[]>('test/data/faceDescriptor1.json')
    faceDescriptor2 = await getTestEnv().loadJson<number[]>('test/data/faceDescriptor2.json')
    faceDescriptorRect = await getTestEnv().loadJson<number[]>('test/data/faceDescriptorRect.json')
  })

  describeWithNets('quantized weights', { withFaceRecognitionNet: { quantized: true } }, ({ faceRecognitionNet }) => {

    it('computes face descriptor for squared input', async () => {
      const result = await faceRecognitionNet.computeFaceDescriptor(imgEl1) as Float32Array
      expect(result.length).toEqual(128)
      expect(euclideanDistance(result, faceDescriptor1)).toBeLessThan(0.1)
    })

    it('computes face descriptor for rectangular input', async () => {
      const result = await faceRecognitionNet.computeFaceDescriptor(imgElRect) as Float32Array
      expect(result.length).toEqual(128)
      expect(euclideanDistance(result, faceDescriptorRect)).toBeLessThan(0.1)
    })

  })


  describeWithNets('batch inputs', { withFaceRecognitionNet: { quantized: true } }, ({ faceRecognitionNet }) => {

    it('computes face descriptors for batch of image elements', async () => {
      const inputs = [imgEl1, imgEl2, imgElRect]

      const faceDescriptors = [
        faceDescriptor1,
        faceDescriptor2,
        faceDescriptorRect
      ]

      const results = await faceRecognitionNet.computeFaceDescriptor(inputs) as Float32Array[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(3)
      results.forEach((result, batchIdx) => {
        expect(euclideanDistance(result, faceDescriptors[batchIdx])).toBeLessThan(0.1)
      })
    })

    it('computes face descriptors for batch of tf.Tensor3D', async () => {
      const inputs = [imgEl1, imgEl2, imgElRect].map(el => tf.browser.fromPixels(el))

      const faceDescriptors = [
        faceDescriptor1,
        faceDescriptor2,
        faceDescriptorRect
      ]

      const results = await faceRecognitionNet.computeFaceDescriptor(inputs) as Float32Array[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(3)
      results.forEach((result, batchIdx) => {
        expect(euclideanDistance(result, faceDescriptors[batchIdx])).toBeLessThan(0.1)
      })
    })

    it('computes face descriptors for batch of mixed inputs', async () => {
      const inputs = [imgEl1, tf.browser.fromPixels(imgEl2), tf.browser.fromPixels(imgElRect)]

      const faceDescriptors = [
        faceDescriptor1,
        faceDescriptor2,
        faceDescriptorRect
      ]

      const results = await faceRecognitionNet.computeFaceDescriptor(inputs) as Float32Array[]
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toEqual(3)
      results.forEach((result, batchIdx) => {
        expect(euclideanDistance(result, faceDescriptors[batchIdx])).toBeLessThan(0.1)
      })
    })

  })

  describeWithNets('no memory leaks', { withFaceRecognitionNet: { quantized: true } }, ({ faceRecognitionNet }) => {

    describe('forwardInput', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([imgEl1])
          const outTensor = await faceRecognitionNet.forwardInput(netInput)
          outTensor.dispose()
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([imgEl1, imgEl1, imgEl1])
          const outTensor = await faceRecognitionNet.forwardInput(netInput)
          outTensor.dispose()
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.browser.fromPixels(imgEl1)

        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([tensor])
          const outTensor = await faceRecognitionNet.forwardInput(netInput)
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1].map(el => tf.browser.fromPixels(el))

        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput(tensors)
          const outTensor = await faceRecognitionNet.forwardInput(netInput)
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.browser.fromPixels(imgEl1).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceRecognitionNet.forwardInput(await toNetInput(tensor))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1]
          .map(el => tf.tidy(() => tf.browser.fromPixels(el).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceRecognitionNet.forwardInput(await toNetInput(tensors))
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

    })

    describe('computeFaceDescriptor', () => {

      it('single image element', async () => {
        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(imgEl1)
        })
      })

      it('multiple image elements', async () => {
        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor([imgEl1, imgEl1, imgEl1])
        })
      })

      it('single tf.Tensor3D', async () => {
        const tensor = tf.browser.fromPixels(imgEl1)

        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensor)
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1].map(el => tf.browser.fromPixels(el))


        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.browser.fromPixels(imgEl1).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensor)
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1]
          .map(el => tf.tidy(() => tf.browser.fromPixels(el).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

    })
  })

})