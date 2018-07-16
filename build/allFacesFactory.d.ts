import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FullFaceDescription } from './FullFaceDescription';
import { Mtcnn } from './mtcnn/Mtcnn';
import { MtcnnForwardParams } from './mtcnn/types';
import { Rect } from './Rect';
import { TNetInput } from './types';
export declare function allFacesFactory(detectionNet: FaceDetectionNet, landmarkNet: FaceLandmarkNet, computeDescriptors: (input: TNetInput, alignedFaceBoxes: Rect[], useBatchProcessing: boolean) => Promise<Float32Array[]>): (input: TNetInput, minConfidence: number, useBatchProcessing?: boolean) => Promise<FullFaceDescription[]>;
export declare function allFacesMtcnnFactory(mtcnn: Mtcnn, computeDescriptors: (input: TNetInput, alignedFaceBoxes: Rect[], useBatchProcessing: boolean) => Promise<Float32Array[]>): (input: TNetInput, mtcnnForwardParams: MtcnnForwardParams, useBatchProcessing?: boolean) => Promise<FullFaceDescription[]>;
