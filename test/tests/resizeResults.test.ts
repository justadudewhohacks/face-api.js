import { Point } from 'tfjs-image-recognition-base';

import { Rect } from '../../src';
import { FaceDetection } from '../../src/classes/FaceDetection';
import { FaceLandmarks68 } from '../../src/classes/FaceLandmarks68';
import { extendWithFaceDetection } from '../../src/factories/WithFaceDetection';
import { extendWithFaceLandmarks } from '../../src/factories/WithFaceLandmarks';
import { resizeResults } from '../../src/resizeResults';
import { expectPointsClose, expectRectClose } from '../utils';

const detection = new FaceDetection(1.0, new Rect(0, 0, 0.5, 0.5), { width: 100, height: 100 })
const unshiftedLandmarks = new FaceLandmarks68(Array(68).fill(0).map((_, i) => new Point(i / 100, i / 100)), { width: 100, height: 100 })

describe('resizeResults', () => {

  it('resizes FaceDetection', () => {

    const width = 200
    const height = 400

    const expected = detection.forSize(width, height)
    const resized = resizeResults(detection, { width, height })

    expect(resized.imageWidth).toEqual(width)
    expect(resized.imageHeight).toEqual(height)
    expectRectClose(resized.box, expected.box, 0)

  })

  it('resizes FaceLandmarks', () => {

    const width = 200
    const height = 400

    const expected = unshiftedLandmarks.forSize(width, height)
    const resized = resizeResults(unshiftedLandmarks, { width, height })

    expect(resized.imageWidth).toEqual(width)
    expect(resized.imageHeight).toEqual(height)
    expectPointsClose(resized.positions, expected.positions, 0)

  })

  it('resizes WithFaceDetection', () => {

    const width = 200
    const height = 400

    const expected = detection.forSize(width, height)
    const resized = resizeResults(extendWithFaceDetection({}, detection), { width, height })

    expect(resized.detection.imageWidth).toEqual(width)
    expect(resized.detection.imageHeight).toEqual(height)
    expectRectClose(resized.detection.box, expected.box, 0)

  })

  it('resizes WithFaceLandmarks', () => {

    const width = 200
    const height = 400

    const expectedRect = detection.forSize(width, height)
    const expectedLandmarks = unshiftedLandmarks.forSize(expectedRect.box.width, expectedRect.box.height)
    const resized = resizeResults(
      extendWithFaceLandmarks(
        extendWithFaceDetection({}, detection),
        unshiftedLandmarks
      ),
      { width, height }
    )

    expect(resized.detection.imageWidth).toEqual(width)
    expect(resized.detection.imageHeight).toEqual(height)
    expectRectClose(resized.detection.box, expectedRect.box, 0)

    expect(resized.unshiftedLandmarks.imageWidth).toEqual(expectedRect.box.width)
    expect(resized.unshiftedLandmarks.imageHeight).toEqual(expectedRect.box.height)
    expectPointsClose(resized.unshiftedLandmarks.positions, expectedLandmarks.positions, 0)

  })

})
