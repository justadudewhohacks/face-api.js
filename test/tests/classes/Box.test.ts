import { Box } from '../../../src/classes/Box';

describe('BoundingBox', () => {

  describe('constructor', () => {

    describe('from IBoundingBox', () => {

      it('properties', () => {

        const box = new Box({ left: 5, top: 10, right: 15, bottom: 20 })

        expect(box.left).toEqual(5)
        expect(box.x).toEqual(5)
        expect(box.top).toEqual(10)
        expect(box.y).toEqual(10)
        expect(box.right).toEqual(15)
        expect(box.bottom).toEqual(20)
        expect(box.width).toEqual(10)
        expect(box.height).toEqual(10)
        expect(box.area).toEqual(100)
      })

    })

    describe('from IRect', () => {

      it('properties', () => {

        const box = new Box({ x: 5, y: 10, width: 15, height: 20 })

        expect(box.left).toEqual(5)
        expect(box.x).toEqual(5)
        expect(box.top).toEqual(10)
        expect(box.y).toEqual(10)
        expect(box.right).toEqual(20)
        expect(box.bottom).toEqual(30)
        expect(box.width).toEqual(15)
        expect(box.height).toEqual(20)
        expect(box.area).toEqual(300)
      })

    })

  })

  describe('rescale', () => {

    it('scale down by factor 0.5', () => {

      const box = new Box({ x: 10, y: 20, width: 20, height: 40 })

      const rescaled = box.rescale(0.5)

      expect(rescaled.x).toEqual(5)
      expect(rescaled.y).toEqual(10)
      expect(rescaled.width).toEqual(10)
      expect(rescaled.height).toEqual(20)

    })

    it('scale up by factor 2', () => {

      const box = new Box({ x: 10, y: 20, width: 20, height: 40 })

      const rescaled = box.rescale(2)

      expect(rescaled.x).toEqual(20)
      expect(rescaled.y).toEqual(40)
      expect(rescaled.width).toEqual(40)
      expect(rescaled.height).toEqual(80)

    })

    it('scale to dimensions ', () => {

      const box = new Box({ x: 0.1, y: 0.2, width: 0.2, height: 0.4 })

      const rescaled = box.rescale({ width: 100, height: 200 })

      expect(rescaled.x).toEqual(10)
      expect(rescaled.y).toEqual(40)
      expect(rescaled.width).toEqual(20)
      expect(rescaled.height).toEqual(80)

    })

  })

  describe('shift', () => {

    it('should shift box by x, y', () => {

      const box = new Box({ x: 10, y: 20, width: 20, height: 40 })

      const shifted = box.shift(20, 40)

      expect(shifted.x).toEqual(30)
      expect(shifted.y).toEqual(60)
      expect(shifted.width).toEqual(20)
      expect(shifted.height).toEqual(40)

    })

  })

})