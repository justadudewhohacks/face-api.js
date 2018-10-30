import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, assembleExpectedFullFaceDescriptions, ExpectedFullFaceDescription } from '../../utils';
import { fetchImage, SsdMobilenetv1Options } from '../../../src';
import { expectFaceDetections } from '../../expectFaceDetections';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectedSsdBoxes } from './expectedBoxes';

describe('ssdMobilenetv1', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]
  const expectedScores = [0.54, 0.81, 0.97, 0.88, 0.84, 0.61]

  beforeAll(async () => {
    imgEl = await fetchImage('base/test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedSsdBoxes)
  })

  describeWithNets('globalApi', { withAllFacesSsdMobilenetv1: true }, () => {

    it('detectAllFaces', async () => {
      const options = new SsdMobilenetv1Options({
        minConfidence: 0.5
      })

      const results = await faceapi.detectAllFaces(imgEl, options)

      const maxScoreDelta = 0.01
      const maxBoxDelta = 5
      expect(results.length).toEqual(6)
      expectFaceDetections(results, expectedSsdBoxes, expectedScores, maxScoreDelta, maxBoxDelta)
    })

    it('detectAllFaces.withFaceLandmarks()', async () => {
      const options = new SsdMobilenetv1Options({
        minConfidence: 0.5
      })

      const results = await faceapi
        .detectAllFaces(imgEl, options)
        .withFaceLandmarks()

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 5,
        maxLandmarksDelta: 2
      }
      expect(results.length).toEqual(6)
      expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
      const options = new SsdMobilenetv1Options({
        minConfidence: 0.5
      })

      const results = await faceapi
        .detectAllFaces(imgEl, options)
        .withFaceLandmarks()
        .withFaceDescriptors()

      const deltas = {
        maxScoreDelta: 0.01,
        maxBoxDelta: 5,
        maxLandmarksDelta: 2,
        maxDescriptorDelta: 0.2
      }
      expect(results.length).toEqual(6)
      expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
    })

    it('no memory leaks', async () => {
      await expectAllTensorsReleased(async () => {
        await faceapi
          .detectAllFaces(imgEl, new SsdMobilenetv1Options())
          .withFaceLandmarks()
          .withFaceDescriptors()
      })
    })

  })

})