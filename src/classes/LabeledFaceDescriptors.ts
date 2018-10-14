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
}