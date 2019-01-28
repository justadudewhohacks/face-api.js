import { TfjsImageRecognitionBase, TNetInput } from 'tfjs-image-recognition-base';

import { FaceDetection } from '../classes/FaceDetection';
import { MtcnnOptions } from '../mtcnn/MtcnnOptions';
import { SsdMobilenetv1Options } from '../ssdMobilenetv1/SsdMobilenetv1Options';
import { TinyFaceDetectorOptions } from '../tinyFaceDetector/TinyFaceDetectorOptions';

export type FaceDetectionOptions = TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TfjsImageRecognitionBase.TinyYolov2Options

export type FaceDetectionFunction = (input: TNetInput) => Promise<FaceDetection[]>