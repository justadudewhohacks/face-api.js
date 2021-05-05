import * as faceapi from 'face-api.js';

export const faceDetectionNet = faceapi.nets.ssdMobilenetv1
// export const faceDetectionNet = tinyFaceDetector

// SsdMobilenetv1Options
const minConfidence = 0.5

// TinyFaceDetectorOptions
const inputSize = 408
const scoreThreshold = 0.5

function getFaceDetectorOptions(net: faceapi.NeuralNetwork<any>) {
  return net === faceapi.nets.ssdMobilenetv1
    ? new faceapi.SsdMobilenetv1Options({ minConfidence })
    : new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold })
}

export const faceDetectionOptions = getFaceDetectorOptions(faceDetectionNet)