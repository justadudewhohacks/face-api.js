import { FaceMatch } from '../classes/FaceMatch';
import { LabeledFaceDescriptors } from '../classes/LabeledFaceDescriptors';
import { euclideanDistance } from '../euclideanDistance';
import { WithFaceDescriptor } from '../factories';

export class FaceMatcher {

  private _labeledDescriptors: LabeledFaceDescriptors[]
  private _distanceThreshold: number

  constructor(
    inputs: LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>,
    distanceThreshold: number = 0.6
  ) {

    this._distanceThreshold = distanceThreshold

    const inputArray = Array.isArray(inputs) ? inputs : [inputs]

    if (!inputArray.length) {
      throw new Error(`FaceRecognizer.constructor - expected atleast one input`)
    }

    let count = 1
    const createUniqueLabel = () => `person ${count++}`

    this._labeledDescriptors = inputArray.map((desc) => {
      if (desc instanceof LabeledFaceDescriptors) {
        return desc
      }

      if (desc instanceof Float32Array) {
        return new LabeledFaceDescriptors(createUniqueLabel(), [desc])
      }

      if (desc.descriptor && desc.descriptor instanceof Float32Array) {
        return new LabeledFaceDescriptors(createUniqueLabel(), [desc.descriptor])
      }

      throw new Error(`FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>`)
    })
  }

  public get labeledDescriptors(): LabeledFaceDescriptors[] { return this._labeledDescriptors }
  public get distanceThreshold(): number { return this._distanceThreshold }

  public computeMeanDistance(queryDescriptor: Float32Array, descriptors: Float32Array[]): number {
    return descriptors
      .map(d => euclideanDistance(d, queryDescriptor))
      .reduce((d1, d2) => d1 + d2, 0)
        / (descriptors.length || 1)
  }

  public matchDescriptor(queryDescriptor: Float32Array): FaceMatch {
    return this.labeledDescriptors
      .map(({ descriptors, label }) => new FaceMatch(
          label,
          this.computeMeanDistance(queryDescriptor, descriptors)
      ))
      .reduce((best, curr) => best.distance < curr.distance ? best : curr)
  }

  public findBestMatch(queryDescriptor: Float32Array): FaceMatch {
    const bestMatch = this.matchDescriptor(queryDescriptor)
    return bestMatch.distance < this.distanceThreshold
      ? bestMatch
      : new FaceMatch('unknown', bestMatch.distance)
  }

  public static toJSON(matcher: FaceMatcher, pretty = false): string {
    return JSON.stringify(matcher, null, pretty ? 2 : undefined);
  }

  public static fromJSON(jsonString: string): FaceMatcher {
    const poco: any = JSON.parse(jsonString);
    const labeledDescriptors = poco._labeledDescriptors
      .map(({ _label, _descriptors }: { _label: string, _descriptors: any }) => {
        return new LabeledFaceDescriptors(_label, _descriptors.map((d: any) => {
          return new Float32Array(Object.keys(d).map(key => d[key]));
        }));
      });
    return new FaceMatcher(labeledDescriptors, poco._distanceThreshold);
  }

}