import * as faceapi from '../../../src';
import { WithAge } from '../../../src/factories/WithAge';
import { WithFaceExpressions } from '../../../src/factories/WithFaceExpressions';
import { WithGender } from '../../../src/factories/WithGender';
import { loadImage } from '../../env';
import { expectedTinyFaceDetectorBoxes } from '../../expectedTinyFaceDetectorBoxes';
import { expectFaceDetectionsWithLandmarks } from '../../expectFaceDetectionsWithLandmarks';
import { expectFullFaceDescriptions } from '../../expectFullFaceDescriptions';
import {
  assembleExpectedFullFaceDescriptions,
  describeWithBackend,
  describeWithNets,
  expectAllTensorsReleased,
  ExpectedFullFaceDescription,
} from '../../utils';
import { deltas, expectedScores, faceDetectorOptions, withNetArgs } from './consts';


function expectFaceExpressions(result: WithFaceExpressions<{}> | undefined) {
  expect(!!result).toBeTruthy()
  if (result) {
    expect(result.expressions.happy).toBeGreaterThanOrEqual(0.95)
  }
}

function expectAgeAndGender(result: WithAge<WithGender<{}>> | undefined, aligned = true) {
  expect(!!result).toBeTruthy()
  if (result) {
    const { age, gender, genderProbability } = result
    expect(Math.round(age)).toEqual(aligned ? 41 : 37)
    expect(gender).toEqual('male')
    expect(genderProbability).toBeGreaterThanOrEqual(0.9)
  }
}

describeWithBackend('globalApi', () => {

  let imgEl: HTMLImageElement
  let expectedFullFaceDescriptions: ExpectedFullFaceDescription[]

  beforeAll(async () => {
    imgEl = await loadImage('test/images/faces.jpg')
    expectedFullFaceDescriptions = await assembleExpectedFullFaceDescriptions(expectedTinyFaceDetectorBoxes)
  })

  function expectFaceDetectionWithLandmarks(result: faceapi.WithFaceLandmarks<faceapi.WithFaceDetection<{}>> | undefined) {
    expect(!!result).toBeTruthy()
    if (result) {
      expectFaceDetectionsWithLandmarks(
        [result],
        [expectedFullFaceDescriptions[2]],
        [expectedScores[2]],
        deltas
      )
    }
  }

  function expectFullFaceDescription(result: faceapi.WithFaceDescriptor<faceapi.WithFaceLandmarks<faceapi.WithFaceDetection<{}>>> | undefined) {
    expect(!!result).toBeTruthy()
    if (result) {
      expectFullFaceDescriptions(
        [result],
        [expectedFullFaceDescriptions[2]],
        [expectedScores[2]],
        deltas
      )
    }
  }

  describeWithNets('detectSingleFace', withNetArgs, () => {

    describe('without face alignment', () => {

      it('detectSingleFace.withFaceExpressions()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceExpressions()

        expectFaceExpressions(result)
      })

      it('detectSingleFace.withAgeAndGender()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withAgeAndGender()

        expectAgeAndGender(result, false)
      })

      it('detectSingleFace.withFaceExpressions().withAgeAndGender()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceExpressions()
          .withAgeAndGender()

        expectFaceExpressions(result)
        expectAgeAndGender(result, false)
      })

      it('detectSingleFace.withAgeAndGender().withFaceExpressions()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withAgeAndGender()
          .withFaceExpressions()

        expectFaceExpressions(result)
        expectAgeAndGender(result, false)
      })

    })

    describe('with face alignment', () => {

      it('detectSingleFace.withFaceLandmarks().withFaceExpressions()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()

        expectFaceExpressions(result)
        expectFaceDetectionWithLandmarks(result)
      })

      it('detectSingleFace.withFaceLandmarks().withAgeAndGender()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()

        expectAgeAndGender(result)
        expectFaceDetectionWithLandmarks(result)
      })

      it('detectSingleFace.withFaceLandmarks().withFaceDescriptor()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceDescriptor()

        expectFullFaceDescription(result)
      })

      it('detectSingleFace.withFaceLandmarks().withFaceExpressions().withAgeAndGender()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender()

        expectFaceExpressions(result)
        expectAgeAndGender(result)
        expectFaceDetectionWithLandmarks(result)
      })

      it('detectSingleFace.withFaceLandmarks().withAgeAndGender().withFaceExpressions()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceExpressions()

        expectFaceExpressions(result)
        expectAgeAndGender(result)
        expectFaceDetectionWithLandmarks(result)
      })

      it('detectSingleFace.withFaceLandmarks().withFaceExpressions().withFaceDescriptor()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withFaceDescriptor()

        expectFaceExpressions(result)
        expectFullFaceDescription(result)
      })

      it('detectSingleFace.withFaceLandmarks().withAgeAndGender().withFaceDescriptor()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withAgeAndGender()
          .withFaceDescriptor()

        expectAgeAndGender(result)
        expectFullFaceDescription(result)
      })

      it('detectSingleFace.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptor()', async () => {
        const result = await faceapi
          .detectSingleFace(imgEl, faceDetectorOptions)
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender()
          .withFaceDescriptor()

        expectFaceExpressions(result)
        expectAgeAndGender(result)
        expectFullFaceDescription(result)
      })

    })

    describe('no memory leaks', () => {

      it('detectSingleFace.withFaceLandmarks().withFaceDescriptor()', async () => {
        await expectAllTensorsReleased(async () => {
          await faceapi
            .detectSingleFace(imgEl, faceDetectorOptions)
            .withFaceLandmarks()
            .withFaceDescriptor()
        })
      })

      it('detectSingleFace.withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptor()', async () => {
        await expectAllTensorsReleased(async () => {
          await faceapi
            .detectSingleFace(imgEl, faceDetectorOptions)
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender()
            .withFaceDescriptor()
        })
      })

    })

  })
})