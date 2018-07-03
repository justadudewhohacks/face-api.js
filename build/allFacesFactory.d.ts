import { FaceDetectionNet } from './faceDetectionNet/FaceDetectionNet';
import { FaceLandmarkNet } from './faceLandmarkNet/FaceLandmarkNet';
import { FaceRecognitionNet } from './faceRecognitionNet/FaceRecognitionNet';
import { FullFaceDescription } from './FullFaceDescription';
import { TNetInput } from './types';
export declare function allFacesFactory(detectionNet: FaceDetectionNet, landmarkNet: FaceLandmarkNet, recognitionNet: FaceRecognitionNet): (input: TNetInput, minConfidence: number, useBatchProcessing?: boolean) => Promise<FullFaceDescription[]>;
