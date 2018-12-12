import { Rect } from '../../../src';
import { FaceDetection } from '../../../src/classes/FaceDetection';
import { extendWithFaceDetection } from '../../../src/factories/WithFaceDetection';

const detection = new FaceDetection(1.0, new Rect(0, 0, 0.5, 0.5), { width: 100, height: 100 })

describe('extendWithFaceDetection', () => {

  it('returns WithFaceDetection', () => {

    const withFaceDetection = extendWithFaceDetection({}, detection)
    expect(withFaceDetection.detection).toEqual(detection)

  })

  it('extends source object', () => {

    const srcProp = { foo: true }

    const withFaceDetection = extendWithFaceDetection({ srcProp }, detection)
    expect(withFaceDetection.detection).toEqual(detection)
    expect(withFaceDetection.srcProp).toEqual(srcProp)

  })

})
