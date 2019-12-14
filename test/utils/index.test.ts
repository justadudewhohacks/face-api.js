import { utils } from '../../src';

describe('utils', () => {

  describe('isValidNumber', () => {

    it('0 is valid', () => {
      expect(utils.isValidNumber(0)).toBe(true)
    })

    it('1 is valid', () => {
      expect(utils.isValidNumber(1)).toBe(true)
    })

    it('-1 is valid', () => {
      expect(utils.isValidNumber(-1)).toBe(true)
    })

    it('NaN is invalid', () => {
      expect(utils.isValidNumber(NaN)).toBe(false)
    })

    it('Infinity is invalid', () => {
      expect(utils.isValidNumber(Infinity)).toBe(false)
    })

    it('-Infinity is invalid', () => {
      expect(utils.isValidNumber(-Infinity)).toBe(false)
    })

    it('null is invalid', () => {
      expect(utils.isValidNumber(null)).toBe(false)
    })

    it('undefined is invalid', () => {
      expect(utils.isValidNumber(undefined)).toBe(false)
    })

  })
})
