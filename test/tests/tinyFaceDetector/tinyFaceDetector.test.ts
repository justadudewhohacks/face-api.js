import * as faceapi from '../../../src';
import { describeWithNets, expectAllTensorsReleased, assembleExpectedFullFaceDescriptions, ExpectedFullFaceDescription, describeWithBackend } from '../../utils';
import { TinyFaceDetectorOptions } from '../../../src';
import { expectFaceDetections } from '../../expectFaceDetections';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectedTinyFaceDetectorBoxes } from './expectedBoxes';
import { loadImage } from '../../env';
import { WithFaceExpressions } from '../../../src/factories/WithFaceExpressions';

function expectFaceExpressions(results: WithFaceExpressions<{}>[]) {
  results.forEach((result, i) => {
    const { happy, neutral } = result.expressions

    const happyProb = i === 4 ? 0 : 0.95
    const neutralProb = i === 4 ? 0.4 : 0

    expect(happy).toBeGreaterThanOrEqual(happyProb)
    expect(neutral).toBeGreaterThanOrEqual(neutralProb)
  })
}

describeWithBackend('tinyFaceDetector', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]
  const expectedScores = [0.7, 0.82, 0.93, 0.86, 0.79, 0.84]
  const deltas = {
    maxScoreDelta: 0.05,
    maxBoxDelta: 5,
    maxLandmarksDelta: 10,
    maxDescriptorDelta: 0.2
  }

  beforeAll(async () => {
    imgEl = await loadImage('test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedTinyFaceDetectorBoxes)
  })

  describeWithNets('globalApi', { withAllFacesTinyFaceDetector: true, withFaceExpressionNet: { quantized: true } }, () => {

    describe('detectAllFaces', () => {

      it('detectAllFaces', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const results = await faceapi.detectAllFaces(imgEl, options)

        expect(results.length).toEqual(6)
        expectFaceDetections(results, expectedTinyFaceDetectorBoxes, expectedScores, deltas.maxScoreDelta, deltas.maxBoxDelta)
      })

      it('detectAllFaces.withFaceLandmarks()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const results = await faceapi
          .detectAllFaces(imgEl, options)
          .withFaceLandmarks()

        expect(results.length).toEqual(6)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceExpressions()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const results = await faceapi
          .detectAllFaces(imgEl, options)
          .withFaceExpressions()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
      })

      it('detectAllFaces.withFaceExpressions().withFaceLandmarks()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const results = await faceapi
          .detectAllFaces(imgEl, options)
          .withFaceExpressions()
          .withFaceLandmarks()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectFaceDetectionsWithLandmarks(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceDescriptors()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const results = await faceapi
          .detectAllFaces(imgEl, options)
          .withFaceLandmarks()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

      it('detectAllFaces.withFaceLandmarks().withFaceExpressions()withFaceDescriptors()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const results = await faceapi
          .detectAllFaces(imgEl, options)
          .withFaceExpressions()
          .withFaceLandmarks()
          .withFaceDescriptors()

        expect(results.length).toEqual(6)
        expectFaceExpressions(results)
        expectFullFaceDescriptions(results, expectedFullFaceDescriptions, expectedScores, deltas)
      })

    })

    describe('detectSingleFace', () => {

      it('detectSingleFace', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const result = await faceapi
          .detectSingleFace(imgEl, options)

        expect(!!result).toBeTruthy()
        expectFaceDetections(
          result ? [result] : [],
          [expectedTinyFaceDetectorBoxes[2]],
          [expectedScores[2]],
          deltas.maxScoreDelta,
          deltas.maxBoxDelta
        )
      })

      it('detectSingleFace.withFaceLandmarks()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const result = await faceapi
          .detectSingleFace(imgEl, options)
          .withFaceLandmarks()

        expect(!!result).toBeTruthy()
        expectFaceDetectionsWithLandmarks(
          result ? [result] : [],
          [expectedFullFaceDescriptions[2]],
          [expectedScores[2]],
          deltas
        )
      })

      it('detectSingleFace.withFaceExpressions()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const result = await faceapi
          .detectSingleFace(imgEl, options)
          .withFaceExpressions()

        expect(!!result).toBeTruthy()
        expectFaceDetections(
          result ? [result.detection] : [],
          [expectedTinyFaceDetectorBoxes[2]],
          [expectedScores[2]],
          deltas.maxScoreDelta,
          deltas.maxBoxDelta
        )
        result && expect(result.expressions.happy).toBeGreaterThanOrEqual(0.95)
      })

      it('detectSingleFace.withFaceExpressions().withFaceLandmarks()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const result = await faceapi
          .detectSingleFace(imgEl, options)
          .withFaceExpressions()
          .withFaceLandmarks()

        expect(!!result).toBeTruthy()
        expectFaceDetectionsWithLandmarks(
          result ? [result] : [],
          [expectedFullFaceDescriptions[2]],
          [expectedScores[2]],
          deltas
        )
        result && expect(result.expressions.happy).toBeGreaterThanOrEqual(0.95)
      })

      it('detectSingleFace.withFaceLandmarks().withFaceDescriptor()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const result = await faceapi
          .detectSingleFace(imgEl, options)
          .withFaceLandmarks()
          .withFaceDescriptor()

        expect(!!result).toBeTruthy()
        expectFullFaceDescriptions(
          result ? [result] : [],
          [expectedFullFaceDescriptions[2]],
          [expectedScores[2]],
          deltas
        )
      })

      it('detectSingleFace.withFaceExpressions().withFaceLandmarks().withFaceDescriptor()', async () => {
        const options = new TinyFaceDetectorOptions({
          inputSize: 416
        })

        const result = await faceapi
          .detectSingleFace(imgEl, options)
          .withFaceExpressions()
          .withFaceLandmarks()
          .withFaceDescriptor()

        expect(!!result).toBeTruthy()
        expectFullFaceDescriptions(
          result ? [result] : [],
          [expectedFullFaceDescriptions[2]],
          [expectedScores[2]],
          deltas
        )
        result && expect(result.expressions.happy).toBeGreaterThanOrEqual(0.95)
      })

    })

    describe('no memory leaks', () => {

      it('detectAllFaces', async () => {
        await expectAllTensorsReleased(async () => {
          await faceapi
            .detectAllFaces(imgEl, new TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors()
        })
      })

      it('detectSingleFace', async () => {
        await expectAllTensorsReleased(async () => {
          await faceapi
            .detectSingleFace(imgEl, new TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptor()
        })
      })

    })

  })

})