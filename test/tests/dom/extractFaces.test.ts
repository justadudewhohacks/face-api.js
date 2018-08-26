import { bufferToImage, createCanvasFromMedia, extractFaces, Rect } from '../../../src';

describe('extractFaces', () => {

  let imgEl: HTMLImageElement, canvasEl: HTMLCanvasElement

  beforeAll(async () => {
    const img = await (await fetch('base/test/images/face1.png')).blob()
    imgEl = await bufferToImage(img)
    canvasEl = createCanvasFromMedia(imgEl)
  })

  describe('extracts canvases', () => {

    it('HTMLImageElement, single box', async () => {
      const rect = new Rect(0, 0, 50, 60)
      const canvases = await extractFaces(imgEl, [rect])

      expect(canvases.length).toEqual(1)
      expect(canvases[0] instanceof HTMLCanvasElement).toBe(true)
      expect(canvases[0].width).toEqual(50)
      expect(canvases[0].height).toEqual(60)
    })

    it('HTMLImageElement, multiple boxes', async () => {
      const rects = [
        new Rect(0, 0, 50, 60),
        new Rect(50, 50, 70, 80),
      ]
      const canvases = await extractFaces(imgEl, rects)

      expect(canvases.length).toEqual(2)
      expect(canvases[0] instanceof HTMLCanvasElement).toBe(true)
      expect(canvases[0].width).toEqual(50)
      expect(canvases[0].height).toEqual(60)
      expect(canvases[1] instanceof HTMLCanvasElement).toBe(true)
      expect(canvases[1].width).toEqual(70)
      expect(canvases[1].height).toEqual(80)
    })

    it('HTMLCanvasElement, single box', async () => {
      const rect = new Rect(0, 0, 50, 60)
      const canvases = await extractFaces(canvasEl, [rect])

      expect(canvases.length).toEqual(1)
      expect(canvases[0] instanceof HTMLCanvasElement).toBe(true)
      expect(canvases[0].width).toEqual(50)
      expect(canvases[0].height).toEqual(60)
    })

    it('HTMLCanvasElement, multiple boxes', async () => {
      const rects = [
        new Rect(0, 0, 50, 60),
        new Rect(50, 50, 70, 80),
      ]
      const canvases = await extractFaces(canvasEl, rects)

      expect(canvases.length).toEqual(2)
      expect(canvases[0] instanceof HTMLCanvasElement).toBe(true)
      expect(canvases[0].width).toEqual(50)
      expect(canvases[0].height).toEqual(60)
      expect(canvases[1] instanceof HTMLCanvasElement).toBe(true)
      expect(canvases[1].width).toEqual(70)
      expect(canvases[1].height).toEqual(80)
    })

  })

  describe('box out of image borders', () => {

    it('clips upper left corner', async () => {
      const rect = new Rect(-10, -10, 110, 110)
      const canvases = await extractFaces(imgEl, [rect])

      expect(canvases[0].width).toEqual(100)
      expect(canvases[0].height).toEqual(100)
    })

    it('clips bottom right corner', async () => {
      const rect = new Rect(imgEl.width - 100, imgEl.height - 100, 110, 110)
      const canvases = await extractFaces(imgEl, [rect])

      expect(canvases[0].width).toEqual(100)
      expect(canvases[0].height).toEqual(100)
    })

    it('clips upper left and bottom right corners', async () => {
      const rect = new Rect(-10, -10, imgEl.width + 20, imgEl.height + 20)
      const canvases = await extractFaces(imgEl, [rect])

      expect(canvases[0].width).toEqual(imgEl.width)
      expect(canvases[0].height).toEqual(imgEl.height)
    })

  })

})
