import * as tf from '@tensorflow/tfjs-core';

import { bufferToImage, FaceRecognitionNet, NetInput, toNetInput } from '../../../src';
import { euclideanDistance } from '../../../src/euclideanDistance';
import { createFaceRecognitionNet } from '../../../src/faceRecognitionNet';
import { describeWithNets, expectAllTensorsReleased } from '../../utils';

describe('faceRecognitionNet', () => {

  let imgEl1: HTMLImageElement
  let imgEl2: HTMLImageElement
  let imgElRect: HTMLImageElement
  let faceDescriptor1: number[]
  let faceDescriptor2: number[]
  let faceDescriptorRect: number[]

  beforeAll(async () => {
    const img1 = await (await fetch('base/test/images/face1.png')).blob()
    imgEl1 = await bufferToImage(img1)
    const img2 = await (await fetch('base/test/images/face2.png')).blob()
    imgEl2 = await bufferToImage(img2)
    const imgRect = await (await fetch('base/test/images/face_rectangular.png')).blob()
    imgElRect = await bufferToImage(imgRect)
    faceDescriptor1 = await (await fetch('base/test/data/faceDescriptor1.json')).json()
    faceDescriptor2 = await (await fetch('base/test/data/faceDescriptor2.json')).json()
    faceDescriptorRect = await (await fetch('base/test/data/faceDescriptorRect.json')).json()
  })

  describeWithNets('uncompressed weights', { withFaceRecognitionNet: { quantized: false } }, ({ faceRecognitionNet }) => {

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

  // TODO: figure out why descriptors return NaN in the test cases
  /*
  describeWithNets('quantized weights', { withFaceRecognitionNet: { quantized: true } }, ({ faceRecognitionNet }) => {

    it('computes face descriptor for squared input', async () => {
      const result = await faceRecognitionNet.computeFaceDescriptor(imgEl1) as Float32Array
      expect(result.length).toEqual(128)
      expect(result).toEqual(new Float32Array(faceDescriptor1))
    })

    it('computes face descriptor for rectangular input', async () => {
      const result = await faceRecognitionNet.computeFaceDescriptor(imgElRect) as Float32Array
      expect(result.length).toEqual(128)
      expect(result).toEqual(new Float32Array(faceDescriptorRect))
    })

  })
  */

  describeWithNets('batch inputs', { withFaceRecognitionNet: { quantized: false } }, ({ faceRecognitionNet }) => {

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
      const inputs = [imgEl1, imgEl2, imgElRect].map(el => tf.fromPixels(el))

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
      const inputs = [imgEl1, tf.fromPixels(imgEl2), tf.fromPixels(imgElRect)]

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

  describeWithNets('no memory leaks', { withFaceRecognitionNet: { quantized: false } }, ({ faceRecognitionNet }) => {

    describe('NeuralNetwork, uncompressed model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const res = await fetch('base/weights_uncompressed/face_recognition_model.weights')
          const weights = new Float32Array(await res.arrayBuffer())
          const net = createFaceRecognitionNet(weights)
          net.dispose()
        })
      })

    })

    describe('NeuralNetwork, quantized model', () => {

      it('disposes all param tensors', async () => {
        await expectAllTensorsReleased(async () => {
          const net = new FaceRecognitionNet()
          await net.load('base/weights')
          net.dispose()
        })
      })

    })

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
        const tensor = tf.fromPixels(imgEl1)

        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput([tensor])
          const outTensor = await faceRecognitionNet.forwardInput(netInput)
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1].map(el => tf.fromPixels(el))

        await expectAllTensorsReleased(async () => {
          const netInput = new NetInput(tensors)
          const outTensor = await faceRecognitionNet.forwardInput(netInput)
          outTensor.dispose()
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.fromPixels(imgEl1).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          const outTensor = await faceRecognitionNet.forwardInput(await toNetInput(tensor))
          outTensor.dispose()
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1]
          .map(el => tf.tidy(() => tf.fromPixels(el).expandDims())) as tf.Tensor4D[]

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
        const tensor = tf.fromPixels(imgEl1)

        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensor)
        })

        tensor.dispose()
      })

      it('multiple tf.Tensor3Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1].map(el => tf.fromPixels(el))


        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

      it('single batch size 1 tf.Tensor4Ds', async () => {
        const tensor = tf.tidy(() => tf.fromPixels(imgEl1).expandDims()) as tf.Tensor4D

        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensor)
        })

        tensor.dispose()
      })

      it('multiple batch size 1 tf.Tensor4Ds', async () => {
        const tensors = [imgEl1, imgEl1, imgEl1]
          .map(el => tf.tidy(() => tf.fromPixels(el).expandDims())) as tf.Tensor4D[]

        await expectAllTensorsReleased(async () => {
          await faceRecognitionNet.computeFaceDescriptor(tensors)
        })

        tensors.forEach(t => t.dispose())
      })

    })
  })

})