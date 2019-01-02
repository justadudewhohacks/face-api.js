import { FaceMatch } from '../classes/FaceMatch';
import { LabeledFaceDescriptors } from '../classes/LabeledFaceDescriptors';
import { WithFaceDescriptor } from '../factories';
export declare class FaceMatcher {
    private _labeledDescriptors;
    private _distanceThreshold;
    constructor(inputs: LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>, distanceThreshold?: number);
    readonly labeledDescriptors: LabeledFaceDescriptors[];
    readonly distanceThreshold: number;
    computeMeanDistance(queryDescriptor: Float32Array, descriptors: Float32Array[]): number;
    matchDescriptor(queryDescriptor: Float32Array): FaceMatch;
    findBestMatch(queryDescriptor: Float32Array): FaceMatch;
}
