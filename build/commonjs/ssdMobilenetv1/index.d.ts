import { SsdMobilenetv1 } from './SsdMobilenetv1';
export * from './SsdMobilenetv1';
export * from './SsdMobilenetv1Options';
export declare function createSsdMobilenetv1(weights: Float32Array): SsdMobilenetv1;
export declare function createFaceDetectionNet(weights: Float32Array): SsdMobilenetv1;
export declare class FaceDetectionNet extends SsdMobilenetv1 {
}
