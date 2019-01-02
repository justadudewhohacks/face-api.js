import { Point, Rect } from '../../../src';
import { FaceDetection } from '../../../src/classes/FaceDetection';
import { FaceLandmarks68 } from '../../../src/classes/FaceLandmarks68';
import { extendWithFaceDetection } from '../../../src/factories/WithFaceDetection';
import { extendWithFaceLandmarks } from '../../../src/factories/WithFaceLandmarks';

const detection = new FaceDetection(1.0, new Rect(0.5, 0.5, 0.5, 0.5), { width: 100, height: 100 })
const unshiftedLandmarks = new FaceLandmarks68(Array(68).fill(0).map((_, i) => new Point(i / 100, i / 100)), { width: 100, height: 100 })

const makeSrcObjectWithFaceDetection = <T> (srcObject: T) => extendWithFaceDetection(srcObject, detection)

describe('extendWithFaceDetection', () => {

  it('returns WithFaceLandmarks', () => {

    const srcObj = {}
    const srcObjWithFaceDetection = makeSrcObjectWithFaceDetection(srcObj)
    const withFaceLandmarks = extendWithFaceLandmarks(srcObjWithFaceDetection, unshiftedLandmarks)

    expect(withFaceLandmarks.detection).toEqual(detection)
    expect(withFaceLandmarks.unshiftedLandmarks).toEqual(unshiftedLandmarks)
    expect(withFaceLandmarks.alignedRect instanceof FaceDetection).toBe(true)
    expect(withFaceLandmarks.landmarks instanceof FaceLandmarks68).toBe(true)

  })

  it('extends source object', () => {

    const srcObj = { srcProp: { foo: true } }
    const srcObjWithFaceDetection = makeSrcObjectWithFaceDetection(srcObj)
    const withFaceLandmarks = extendWithFaceLandmarks(srcObjWithFaceDetection, unshiftedLandmarks)

    expect(withFaceLandmarks.srcProp).toEqual(srcObj.srcProp)

    expect(withFaceLandmarks.detection).toEqual(detection)
    expect(withFaceLandmarks.unshiftedLandmarks).toEqual(unshiftedLandmarks)
    expect(withFaceLandmarks.alignedRect instanceof FaceDetection).toBe(true)
    expect(withFaceLandmarks.landmarks instanceof FaceLandmarks68).toBe(true)

  })

})
