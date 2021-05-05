import { Box } from '../../../src/classes/Box';
import { Rect } from '../../../src/classes/Rect';

describe('Rect', () => {

  describe('constructor', () => {

    it('can be created', () => {
      const rect = new Rect(0, 10, 20, 30)
      expect(rect instanceof Rect).toBe(true)
      expect(rect instanceof Box).toBe(true)
      expect(rect.x).toEqual(0)
      expect(rect.y).toEqual(10)
      expect(rect.width).toEqual(20)
      expect(rect.height).toEqual(30)
    })

    it('throws if coordinates are invalid', () => {

      const expectConstructorToThrow = (x: any, y: any, width: any, height: any) => {
        expect(() => new Rect(x, y, width, height)).toThrowError(`Box.constructor - expected box to be IBoundingBox | IRect, instead have ${JSON.stringify({ x, y, width, height })}`)
      }

      expectConstructorToThrow(NaN, 10, 20, 30)
      expectConstructorToThrow(0, Infinity, 20, 30)
      expectConstructorToThrow(0, 10, -Infinity, 30)
      expectConstructorToThrow(0, 10, 20, null)
      expectConstructorToThrow(NaN, Infinity, undefined, null)
      expectConstructorToThrow(undefined, undefined, undefined, undefined)
    })

    it('throws if height or width invalid', () => {
      expect(() => new Rect(0, 10, -20, 30, false)).toThrowError('Box.constructor - width (-20) and height (30) must be positive numbers')
      expect(() => new Rect(0, 10, 20, -30, false)).toThrowError('Box.constructor - width (20) and height (-30) must be positive numbers')
    })

    it('properties', () => {
      const rect = new Rect(5, 10, 15, 20)
      expect(rect.left).toEqual(5)
      expect(rect.x).toEqual(5)
      expect(rect.top).toEqual(10)
      expect(rect.y).toEqual(10)
      expect(rect.right).toEqual(20)
      expect(rect.bottom).toEqual(30)
      expect(rect.width).toEqual(15)
      expect(rect.height).toEqual(20)
      expect(rect.area).toEqual(300)
    })

  })

})