import { bufferToImage, extractFaceTensors, Rect } from '../../src';

describe('extractFaceTensors', () => {

  let imgEl: HTMLImageElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/face1.png')).blob()
    imgEl = await bufferToImage(img)
  })

  describe('extracts tensors', () => {

    it('single box', async () => {
      const rect = new Rect(0, 0, 50, 60)
      const tensors = await extractFaceTensors(imgEl, [rect])

      expect(tensors.length).toEqual(1)
      expect(tensors[0].shape).toEqual([1, 60, 50, 3])
      tensors[0].dispose()
    })

    it('multiple boxes', async () => {
      const rects = [
        new Rect(0, 0, 50, 60),
        new Rect(50, 50, 70, 80),
      ]
      const tensors = await extractFaceTensors(imgEl, rects)

      expect(tensors.length).toEqual(2)
      expect(tensors[0].shape).toEqual([1, 60, 50, 3])
      expect(tensors[1].shape).toEqual([1, 80, 70, 3])
      tensors[0].dispose()
      tensors[1].dispose()
    })

  })

  describe('box out of image borders', () => {

    it('clips upper left corner', async () => {
      const rect = new Rect(-10, -10, 110, 110)
      const tensors = await extractFaceTensors(imgEl, [rect])

      expect(tensors[0].shape).toEqual([1, 100, 100, 3])
      tensors[0].dispose()
    })

    it('clips bottom right corner', async () => {
      const rect = new Rect(imgEl.width - 100, imgEl.height - 100, 110, 110)
      const tensors = await extractFaceTensors(imgEl, [rect])

      expect(tensors[0].shape).toEqual([1, 100, 100, 3])
      tensors[0].dispose()
    })

    it('clips upper left and bottom right corners', async () => {
      const rect = new Rect(-10, -10, imgEl.width + 20, imgEl.height + 20)
      const tensors = await extractFaceTensors(imgEl, [rect])

      expect(tensors[0].shape).toEqual([1, imgEl.height, imgEl.width, 3])
      tensors[0].dispose()
    })

  })

})
