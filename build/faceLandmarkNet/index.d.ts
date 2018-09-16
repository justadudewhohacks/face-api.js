import { FaceLandmark68Net } from './FaceLandmark68Net';
export * from './FaceLandmark68Net';
export declare class FaceLandmarkNet extends FaceLandmark68Net {
}
export declare function createFaceLandmarkNet(weights: Float32Array): FaceLandmarkNet;
export declare function faceLandmarkNet(weights: Float32Array): FaceLandmarkNet;
