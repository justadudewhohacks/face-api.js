import { tf } from '../../src';
import { NetInput } from '../../src/NetInput';
import { toNetInput } from '../../src/toNetInput';
import { bufferToImage, createCanvasFromMedia } from '../../src/utils';
import { expectAllTensorsReleased } from '../utils';

describe('toNetInput', () => {

  let imgEl: HTMLImageElement, canvasEl: HTMLCanvasElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/face1.png')).blob()
    imgEl = await bufferToImage(img)
    canvasEl = createCanvasFromMedia(imgEl)
  })

  describe('valid args', () => {

    it('from HTMLImageElement', async () => {
      const netInput = await toNetInput(imgEl, true)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(1)
    })

    it('from HTMLCanvasElement', async () => {
      const netInput = await toNetInput(canvasEl, true)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(1)
    })

    it('from HTMLImageElement array', async () => {
      const netInput = await toNetInput([
        imgEl,
        imgEl
      ], true)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(2)
    })

    it('from HTMLCanvasElement array', async () => {
      const netInput = await toNetInput([
        canvasEl,
        canvasEl
      ], true)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(2)
    })

    it('from mixed media array', async () => {
      const netInput = await toNetInput([
        imgEl,
        canvasEl,
        canvasEl
      ], true)
      expect(netInput instanceof NetInput).toBe(true)
      expect(netInput.batchSize).toEqual(3)
    })

  })

  describe('invalid args', () => {
    it('undefined', async () => {
      let errorMessage
      try {
        await toNetInput(undefined as any)
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id')
    })

    it('empty array', async () => {
      let errorMessage
      try {
        await toNetInput([])
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - empty array passed as input')
    })

    it('undefined at input index 1', async () => {
      let errorMessage
      try {
        await toNetInput([document.createElement('img'), undefined] as any)
      } catch (error) {
          errorMessage = error.message;
      }
      expect(errorMessage).toBe('toNetInput - at input index 1: expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id')
    })

  })

  describe('no memory leaks', () => {

    it('single image element', async () => {
      await expectAllTensorsReleased(async () => {
        const netInput = await toNetInput(imgEl)
        netInput.dispose()
      })
    })

    it('multiple image elements', async () => {
      await expectAllTensorsReleased(async () => {
        const netInput = await toNetInput([imgEl, imgEl, imgEl])
        netInput.dispose()
      })
    })

    it('single tf.Tensor3D', async () => {
      const tensor = tf.fromPixels(imgEl)

      await expectAllTensorsReleased(async () => {
        const netInput = await toNetInput(tensor)
        netInput.dispose()
      })

      tensor.dispose()
    })

    it('multiple tf.Tensor3Ds', async () => {
      const tensors = [imgEl, imgEl, imgEl].map(el => tf.fromPixels(el))

      await expectAllTensorsReleased(async () => {
        const netInput = await toNetInput(tensors)
        netInput.dispose()
      })

      tensors.forEach(t => t.dispose())
    })

    it('single batch size 1 tf.Tensor4Ds', async () => {
      const tensor = tf.tidy(() => tf.fromPixels(imgEl).expandDims()) as tf.Tensor4D

      await expectAllTensorsReleased(async () => {
        const netInput = await toNetInput(tensor)
        netInput.dispose()
      })

      tensor.dispose()
    })

    it('multiple batch size 1 tf.Tensor4Ds', async () => {
      const tensors = [imgEl, imgEl, imgEl]
        .map(el => tf.tidy(() => tf.fromPixels(el).expandDims())) as tf.Tensor4D[]

      await expectAllTensorsReleased(async () => {
        const netInput = await toNetInput(tensors)
        netInput.dispose()
      })

      tensors.forEach(t => t.dispose())
    })

  })

})
