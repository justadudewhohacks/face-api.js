import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, assembleExpectedFullFaceDescriptions, ExpectedFullFaceDescription } from '../../utils';
import { TinyFaceDetectorOptions, createCanvasFromMedia } from '../../../src';
import { expectFaceDetections } from '../../expectFaceDetections';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectedTinyFaceDetectorBoxes } from './expectedBoxes';
import { loadImage } from '../../env';
import * as tf from '@tensorflow/tfjs-core';

describe('tinyFaceDetector - node', () => {

  let imgTensor: faceapi.tf.Tensor3D
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]
  const expectedScores = [0.7, 0.82, 0.93, 0.86, 0.79, 0.84]

  beforeAll(async () => {
    imgTensor = tf.fromPixels(createCanvasFromMedia(await loadImage('test/images/faces.jpg')))
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedTinyFaceDetectorBoxes)
  })

  describeWithNets('globalApi, tensor inputs', { withAllFacesTinyFaceDetector: true }, () => {

    it('detectAllFaces', async () => {
      const options = new TinyFaceDetectorOptions({
        inputSize: 416
      })

      const results = await faceapi.detectAllFaces(imgTensor, options)

      const maxScoreDelta = 0.05
      const maxBoxDelta = 5
      expect(results.length).toEqual(6)
      expectFaceDetections(results, expectedTinyFaceDetectorBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('detectAllFaces.withFaceLandmarks()', async () => {
      const options = new TinyFaceDetectorOptions({
        inputSize: 416
      })

      const results = await faceapi
        .detectAllFaces(imgTensor, options)
        .withFaceLandmarks()

      const deltas = {
        maxScoreDelta: 0.05,
        maxBoxDelta: 5,
        maxLandmarksDelta: 10
      }
      expect(results.length).toEqual(6)
      expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
      const options = new TinyFaceDetectorOptions({
        inputSize: 416
      })

      const results = await faceapi
        .detectAllFaces(imgTensor, options)
        .withFaceLandmarks()
        .withFaceDescriptors()

      const deltas = {
        maxScoreDelta: 0.05,
        maxBoxDelta: 5,
        maxLandmarksDelta: 10,
        maxDescriptorDelta: 0.2
      }
      expect(results.length).toEqual(6)
      expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('detectSingleFace.withFaceLandmarks().withFaceDescriptor()', async () => {
      const options = new TinyFaceDetectorOptions({
        inputSize: 416
      })

      const result = await faceapi
        .detectSingleFace(imgTensor, options)
        .withFaceLandmarks()
        .withFaceDescriptor()

      const deltas = {
        maxScoreDelta: 0.05,
        maxBoxDelta: 5,
        maxLandmarksDelta: 10,
        maxDescriptorDelta: 0.2
      }
      
      expect(!!result).toBeTruthy()
      expectFullFaceDescriptions(
        result ? [result] : [],
        [expectedFullFaceDescriptions[2]],
        [expectedScores[2]],
        deltas
      )
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        await faceapi
          .detectAllFaces(imgTensor, new TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors()
      })
    })

  })

})