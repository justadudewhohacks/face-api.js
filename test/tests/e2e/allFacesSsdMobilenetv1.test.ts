import * as tf from '@tensorflow/tfjs-core';

import { bufferToImage } from '../../../src';
import {
  assembleExpectedFullFaceDescriptions,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
} from '../../utils';
import { expectAllFacesResults, expectedSsdBoxes } from './expectedResults';


describe('allFacesSsdMobilenetv1', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/faces.jpg')).blob()
    imgEl = await bufferToImage(img)
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedSsdBoxes)
  })

  describeWithNets('computes full face descriptions', { withAllFacesSsdMobilenetv1: true }, ({ allFacesSsdMobilenetv1 }) => {

    it('scores > 0.8', async () => {
      const results = await allFacesSsdMobilenetv1(imgEl, 0.8)

      expect(results.length).toEqual(4)

      const expectedScores = [-1, 0.81, 0.97, 0.88, 0.84, -1]
      const deltas = {
        maxBoxDelta: 5,
        maxLandmarksDelta: 4,
        maxDescriptorDelta: 0.01
      }
      expectAllFacesResults(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('scores > 0.5', async () => {
      const results = await allFacesSsdMobilenetv1(imgEl, 0.5)

      expect(results.length).toEqual(6)

      const expectedScores = [0.54, 0.81, 0.97, 0.88, 0.84, 0.61]
      const deltas = {
        maxBoxDelta: 5,
        maxLandmarksDelta: 4,
        maxDescriptorDelta: 0.01
      }
      expectAllFacesResults(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

  })

  describeWithNets('no memory leaks', { withAllFacesSsdMobilenetv1: true }, ({ allFacesSsdMobilenetv1 }) => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        await allFacesSsdMobilenetv1(imgEl)
      })
    })

    it('single tf.Tensor3D', async () => {
      const tensor = tf.fromPixels(imgEl)

      await expectAllTensorsReleased(async () => {
        await allFacesSsdMobilenetv1(tensor)
      })

      tensor.dispose()
    })

    it('single batch size 1 tf.Tensor4Ds', async () => {
      const tensor = tf.tidy(() => tf.fromPixels(imgEl).expandDims()) as tf.Tensor4D

      await expectAllTensorsReleased(async () => {
        await allFacesSsdMobilenetv1(tensor)
      })

      tensor.dispose()
    })

  })


})