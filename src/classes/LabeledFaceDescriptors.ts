export class LabeledFaceDescriptors {
  private _label: string
  private _descriptors: Float32Array[]

  constructor(label: string, descriptors: Float32Array[]) {
    if (!(typeof label === 'string')) {
      throw new Error('LabeledFaceDescriptors - constructor expected label to be a string')
    }

    if (!Array.isArray(descriptors) || descriptors.some(desc => !(desc instanceof Float32Array))) {
      throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array')
    }

    this._label = label
    this._descriptors = descriptors
  }

  public get label(): string { return this._label }
  public get descriptors(): Float32Array[] { return this._descriptors }

  public static toJSON(ld: LabeledFaceDescriptors): string {
    return `{"label":"${ld.label}","descriptors":[${ld.descriptors.map((d) => `[${Array.from(d)}]`)}]}`;
  }

  public static fromJSON(jsonString: string): LabeledFaceDescriptors {
    return LabeledFaceDescriptors.fromPOJO(JSON.parse(jsonString));
  }

  public static fromPOJO(pojo: any): LabeledFaceDescriptors {
    const descriptors = pojo.descriptors.map((d: any) => {
      return new Float32Array(d);
    });
    return new LabeledFaceDescriptors(pojo.label, descriptors);
  }

}