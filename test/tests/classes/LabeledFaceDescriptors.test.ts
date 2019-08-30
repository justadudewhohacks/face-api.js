import { LabeledFaceDescriptors } from '../../../src';

describe('globalApi', () => {

  describe('LabeledFaceDescriptors', () => {

    const json = '{"label":"foo","descriptors":[[1,2,3],[4,5,6]]}';
    const l1 = 'foo';
    const f1 = new Float32Array([1, 2, 3]);
    const f2 = new Float32Array([4, 5, 6]);

    it('JSON.stringify()', () => {
      expect(JSON.stringify(new LabeledFaceDescriptors(l1, [f1,f2]))).toBe(json);
      expect(JSON.stringify({ ld: new LabeledFaceDescriptors(l1, [f1,f2]) })).toBe(`{"ld":${json}}`);
      expect(JSON.stringify([ new LabeledFaceDescriptors(l1, [f1,f2]) ])).toBe(`[${json}]`);
    });

    it('fromJSON()', () => {
      const ld = LabeledFaceDescriptors.fromJSON(JSON.parse(json));

      expect(ld.label).toBe(l1);
      expect(ld.descriptors.length).toBe(2);
      expect(ld.descriptors[0]).toEqual(f1);
      expect(ld.descriptors[1]).toEqual(f2);
    });

    it('toJSON() => fromJSON()', () => {
      const ld = LabeledFaceDescriptors.fromJSON(new LabeledFaceDescriptors(l1, [f1,f2]).toJSON());

      expect(ld.label).toBe(l1);
      expect(ld.descriptors.length).toBe(2);
      expect(ld.descriptors[0]).toEqual(f1);
      expect(ld.descriptors[1]).toEqual(f2);
    });

  });

});