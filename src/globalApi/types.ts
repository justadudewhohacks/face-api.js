import { FaceDetection } from '../classes/FaceDetection';
import { TNetInput } from '../dom';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { TinyFaceDetectorOptions } from '../tinyFaceDetector/TinyFaceDetectorOptions';
import { TinyYolov2Options } from '../tinyYolov2';

export type FaceDetectionOptions = TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options

export type FaceDetectionFunction = (input: TNetInput) => Promise<FaceDetection[]>