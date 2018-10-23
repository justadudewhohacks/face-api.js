import { FaceMatch } from '../classes/FaceMatch';
import { FullFaceDescription } from '../classes/FullFaceDescription';
import { LabeledFaceDescriptors } from '../classes/LabeledFaceDescriptors';
export declare class FaceMatcher {
    private _labeledDescriptors;
    private _distanceThreshold;
    constructor(inputs: LabeledFaceDescriptors | FullFaceDescription | Float32Array | Array<LabeledFaceDescriptors | FullFaceDescription | Float32Array>, distanceThreshold?: number);
    readonly labeledDescriptors: LabeledFaceDescriptors[];
    readonly distanceThreshold: number;
    computeMeanDistance(queryDescriptor: Float32Array, descriptors: Float32Array[]): number;
    matchDescriptor(queryDescriptor: Float32Array): FaceMatch;
    findBestMatch(queryDescriptor: Float32Array): FaceMatch;
}
