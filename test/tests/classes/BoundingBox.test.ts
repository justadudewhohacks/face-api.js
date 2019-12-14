import { BoundingBox } from '../../../src/classes/BoundingBox';

describe('BoundingBox', () => {

  describe('constructor', () => {

    it('properties', () => {
      const box = new BoundingBox(5, 10, 15, 20)
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

})