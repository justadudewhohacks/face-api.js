# face-api.js

[![Slack](https://slack.bri.im/badge.svg)](https://slack.bri.im)

**JavaScript API for face detection and face recognition in the browser implemented on top of the tensorflow.js core API ([tensorflow/tfjs-core](https://github.com/tensorflow/tfjs-core))**

Check out my face-api.js tutorials:

* **[face-api.js — JavaScript API for Face Recognition in the Browser with tensorflow.js](https://itnext.io/face-api-js-javascript-api-for-face-recognition-in-the-browser-with-tensorflow-js-bcc2a6c4cf07)**
* **[Realtime JavaScript Face Tracking and Face Recognition using face-api.js’ MTCNN Face Detector](https://itnext.io/realtime-javascript-face-tracking-and-face-recognition-using-face-api-js-mtcnn-face-detector-d924dd8b5740)**

Table of Contents:

* **[Running the Examples](#running-the-examples)**
* **[About the Package](#about-the-package)**
  * **[Face Detection - SSD Mobilenet v1](#about-face-detection-ssd)**
  * **[Face Detection & 5 Point Face Landmarks - MTCNN](#about-face-detection-mtcnn)**
  * **[Face Recognition](#about-face-recognition)**
  * **[68 Point Face Landmark Detection](#about-face-landmark-detection)**
* **[Usage](#usage)**
  * **[Loading the Models](#usage-load-models)**
  * **[Face Detection - SSD Mobilenet v1](#usage-face-detection-ssd)**
  * **[Face Detection & 5 Point Face Landmarks - MTCNN](#usage-face-detection-mtcnn)**
  * **[Face Recognition](#usage-face-recognition)**
  * **[68 Point Face Landmark Detection](#usage-face-landmark-detection)**
  * **[Full Face Detection and Recognition Pipeline](#usage-full-face-detection-and-recognition-pipeline)**

## Examples

### **Check out the live demos [here](https://justadudewhohacks.github.io/face-api.js/)!**

### Face Recognition

![preview_face-detection-and-recognition](https://user-images.githubusercontent.com/31125521/41526995-1a90e4e6-72e6-11e8-96d4-8b2ccdee5f79.gif)

![preview_face-recognition_gif](https://user-images.githubusercontent.com/31125521/40313021-c3afdfec-5d14-11e8-86df-cf89a00668e2.gif)

### Face Similarity

![preview_face-similarity](https://user-images.githubusercontent.com/31125521/40316573-0a1190c0-5d1f-11e8-8797-f6deaa344523.gif)

### Face Landmarks

![preview_face_landmarks_boxes](https://user-images.githubusercontent.com/31125521/41507933-65f9b642-723c-11e8-8f4e-aab13303e7ff.jpg)

![preview_face_landmarks](https://user-images.githubusercontent.com/31125521/41507950-e121b05e-723c-11e8-89f2-d8f9348a8e86.png)

### Live Face Detection

**SSD Mobilenet v1**

![preview_video-facedetection](https://user-images.githubusercontent.com/31125521/41238649-bbf10046-6d96-11e8-9041-1de46c6adccd.jpg)

**MTCNN**

![mtcnn-preview](https://user-images.githubusercontent.com/31125521/42756818-0a41edaa-88fe-11e8-9033-8cd141b0fa09.gif)

### Face Alignment

![preview_face_alignment](https://user-images.githubusercontent.com/31125521/41526994-1a690818-72e6-11e8-8f3c-d2cf31fe517b.jpg)

<a name="running-the-examples"></a>

## Running the Examples

``` bash
cd examples
npm i
npm start
```

Browse to http://localhost:3000/.

<a name="about-the-package"></a>

## About the Package

<a name="about-face-detection-ssd"></a>

### Face Detection - SSD Mobilenet v1

For face detection, this project implements a SSD (Single Shot Multibox Detector) based on MobileNetV1. The neural net will compute the locations of each face in an image and will return the bounding boxes together with it's probability for each face. This face detector is aiming towards obtaining high accuracy in detecting face bounding boxes instead of low inference time.

The face detection model has been trained on the [WIDERFACE dataset](http://mmlab.ie.cuhk.edu.hk/projects/WIDERFace/) and the weights are provided by [yeephycho](https://github.com/yeephycho) in [this](https://github.com/yeephycho/tensorflow-face-detection) repo.

<a name="about-face-detection-mtcnn"></a>

### Face Detection & 5 Point Face Landmarks - MTCNN

MTCNN (Multi-task Cascaded Convolutional Neural Networks) represents an alternative to SSD Mobilenet v1, which offers much more room for configuration and is able to achieve much lower processing times. MTCNN is a 3 stage cascaded CNN, which simultanously returns 5 face landmark points along with the bounding boxes and scores for each face. By limiting the minimum size of faces expected in an image, MTCNN allows you to process frames from your webcam in realtime. Additionally with 2MB, the size of the weights file is only a third of the size of the quantized SSD Mobilenet v1 model (~6MB).

MTCNN has been presented in the paper [Joint Face Detection and Alignment using Multi-task Cascaded Convolutional Networks](https://kpzhang93.github.io/MTCNN_face_detection_alignment/paper/spl.pdf) by Zhang et al. and the model weights are provided in the official [repo](https://github.com/kpzhang93/MTCNN_face_detection_alignment) of the MTCNN implementation.

<a name="about-face-recognition"></a>

### Face Recognition

For face recognition, a ResNet-34 like architecture is implemented to compute a face descriptor (a feature vector with 128 values) from any given face image, which is used to describe the characteristics of a persons face. The model is **not** limited to the set of faces used for training, meaning you can use it for face recognition of any person, for example yourself. You can determine the similarity of two arbitrary faces by comparing their face descriptors, for example by computing the euclidean distance or using any other classifier of your choice.

The neural net is equivalent to the **FaceRecognizerNet** used in [face-recognition.js](https://github.com/justadudewhohacks/face-recognition.js) and the net used in the [dlib](https://github.com/davisking/dlib/blob/master/examples/dnn_face_recognition_ex.cpp) face recognition example. The weights have been trained by [davisking](https://github.com/davisking) and the model achieves a prediction accuracy of 99.38% on the LFW (Labeled Faces in the Wild) benchmark for face recognition.

<a name="about-face-landmark-detection"></a>

### 68 Point Face Landmark Detection

This package implements a CNN to detect the 68 point face landmarks for a given face image.

The model has been trained on a variety of public datasets and the model weights are provided by [yinguobing](https://github.com/yinguobing) in [this](https://github.com/yinguobing/head-pose-estimation) repo.

<a name="usage"></a>

## Usage

Get the latest build from dist/face-api.js or dist/face-api.min.js and include the script:

``` html
<script src="face-api.js"></script>
```

Or install the package:

``` bash
npm i face-api.js
```

<a name="usage-load-models"></a>

### Loading the Models

To load a model, you have provide the corresponding manifest.json file as well as the model weight files (shards) as assets. Simply copy them to your public or assets folder. The manifest.json and shard files of a model have to be located in the same directory / accessible under the same route.

Assuming the models reside in **public/models**:

``` javascript
await faceapi.loadFaceDetectionModel('/models')
// accordingly for the other models:
// await faceapi.loadFaceLandmarkModel('/models')
// await faceapi.loadFaceRecognitionModel('/models')
// await faceapi.loadMtcnnModel('/models')
```

As an alternative, you can also create instance of the neural nets:

``` javascript
const net = new faceapi.FaceDetectionNet()
// accordingly for the other models:
// const net = new faceapi.FaceLandmarkNet()
// const net = new faceapi.FaceRecognitionNet()
// const net = new faceapi.Mtcnn()

await net.load('/models/face_detection_model-weights_manifest.json')
// await net.load('/models/face_landmark_68_model-weights_manifest.json')
// await net.load('/models/face_recognition_model-weights_manifest.json')
// await net.load('/models/mtcnn_model-weights_manifest.json')

// or simply load all models
await net.load('/models')
```

Using instances, you can also load the weights as a Float32Array (in case you want to use the uncompressed models):

``` javascript
// using fetch
const res = await fetch('/models/face_detection_model.weights')
const weights = new Float32Array(await res.arrayBuffer())
net.load(weights)

// using axios
const res = await axios.get('/models/face_detection_model.weights', { responseType: 'arraybuffer' })
const weights = new Float32Array(res.data)
net.load(weights)
```

<a name="usage-face-detection-ssd"></a>

### Face Detection - SSD Mobilenet v1

Detect faces and get the bounding boxes and scores:

``` javascript
// optional arguments
const minConfidence = 0.8
const maxResults = 10

// inputs can be html canvas, img or video element or their ids ...
const myImg = document.getElementById('myImg')
const detections = await faceapi.locateFaces(myImg, minConfidence, maxResults)
```

Draw the detected faces to a canvas:

``` javascript
// resize the detected boxes in case your displayed image has a different size then the original
const detectionsForSize = detections.map(det => det.forSize(myImg.width, myImg.height))
const canvas = document.getElementById('overlay')
canvas.width = myImg.width
canvas.height = myImg.height
faceapi.drawDetection(canvas, detectionsForSize, { withScore: false })
```

You can also obtain the tensors of the unfiltered bounding boxes and scores for each image in the batch (tensors have to be disposed manually):

``` javascript
const { boxes, scores } = await net.forward('myImg')
```

<a name="usage-face-detection-mtcnn"></a>

### Face Detection & 5 Point Face Landmarks - MTCNN

Detect faces and get the bounding boxes and scores:

``` javascript
// defaults parameters shown:
const forwardParams = {
  // number of scaled versions of the input image passed through the CNN
  // of the first stage, lower numbers will result in lower inference time,
  // but will also be less accurate
  maxNumScales: 10,
  // scale factor used to calculate the scale steps of the image
  // pyramid used in stage 1
  scaleFactor: 0.709,
  // the score threshold values used to filter the bounding
  // boxes of stage 1, 2 and 3
  scoreThresholds: [0.6, 0.7, 0.7],
  // mininum face size to expect, the higher the faster processing will be,
  // but smaller faces won't be detected
  minFaceSize: 20
}

const results = await faceapi.mtcnn(document.getElementById('myImg'), forwardParams)
```

Alternatively you can also specify the scale steps manually:

``` javascript
const forwardParams = {
  scaleSteps: [0.4, 0.2, 0.1, 0.05]
}

const results = await faceapi.mtcnn(document.getElementById('myImg'), forwardParams)
```

Finally you can draw the returned bounding boxes and 5 Point Face Landmarks into a canvas:

``` javascript
const minConfidence = 0.9

if (results) {
  results.forEach(({ faceDetection, faceLandmarks }) => {

    // ignore results with low confidence score
    if (faceDetection.score < minConfidence) {
      return
    }

    faceapi.drawDetection('overlay', faceDetection)
    faceapi.drawLandmarks('overlay', faceLandmarks)
  })
}
```

<a name="usage-face-recognition"></a>

### Face Recognition

Compute and compare the descriptors of two face images:

``` javascript
// inputs can be html canvas, img or video element or their ids ...
const descriptor1 = await faceapi.computeFaceDescriptor('myImg')
const descriptor2 = await faceapi.computeFaceDescriptor(document.getElementById('myCanvas'))
const distance = faceapi.euclideanDistance(descriptor1, descriptor2)

if (distance < 0.6)
  console.log('match')
else
  console.log('no match')
```

Or simply obtain the tensor (tensor has to be disposed manually):

``` javascript
const t = await net.forward('myImg')
```

<a name="usage-face-landmark-detection"></a>

### Face Landmark Detection

Detect face landmarks:

``` javascript
// inputs can be html canvas, img or video element or their ids ...
const myImg = document.getElementById('myImg')
const landmarks = await faceapi.detectLandmarks(myImg)
```

Draw the detected face landmarks to a canvas:

``` javascript
// adjust the landmark positions in case your displayed image has a different size then the original
const landmarksForSize = landmarks.forSize(myImg.width, myImg.height)
const canvas = document.getElementById('overlay')
canvas.width = myImg.width
canvas.height = myImg.height
faceapi.drawLandmarks(canvas, landmarksForSize, { drawLines: true })
```

Retrieve the face landmark positions:

``` javascript
const landmarkPositions = landmarks.getPositions()

// or get the positions of individual contours
const jawOutline = landmarks.getJawOutline()
const nose = landmarks.getNose()
const mouth = landmarks.getMouth()
const leftEye = landmarks.getLeftEye()
const rightEye = landmarks.getRightEye()
const leftEyeBbrow = landmarks.getLeftEyeBrow()
const rightEyeBrow = landmarks.getRightEyeBrow()
```

Compute the Face Landmarks for Detected Faces:

``` javascript
const detections = await faceapi.locateFaces(input)

// get the face tensors from the image (have to be disposed manually)
const faceTensors = await faceapi.extractFaceTensors(input, detections)
const landmarksByFace = await Promise.all(faceTensors.map(t => faceapi.detectLandmarks(t)))

// free memory for face image tensors after we computed their descriptors
faceTensors.forEach(t => t.dispose())
```

<a name="usage-full-face-detection-and-recognition-pipeline"></a>

### Full Face Detection and Recognition Pipeline

After face detection has been performed, I would recommend to align the bounding boxes of the detected faces before passing them to the face recognition net, which will make the computed face descriptor much more accurate. Fortunately, the api can do this for you under the hood. You can obtain the full face descriptions (location, landmarks and descriptor) of each face in an input image as follows:

``` javascript
const fullFaceDescriptions = await faceapi.allFaces(input, minConfidence)

const fullFaceDescription0 = fullFaceDescriptions[0]
console.log(fullFaceDescription0.detection) // bounding box & score
console.log(fullFaceDescription0.landmarks) // 68 point face landmarks
console.log(fullFaceDescription0.descriptor) // face descriptor

```

You can also do everything manually as shown in the following:

``` javascript
// first detect the face locations
const detections = await faceapi.locateFaces(input, minConfidence)

// get the face tensors from the image (have to be disposed manually)
const faceTensors = (await faceapi.extractFaceTensors(input, detections))

// detect landmarks and get the aligned face image bounding boxes
const alignedFaceBoxes = await Promise.all(faceTensors.map(
  async (faceTensor, i) => {
    const faceLandmarks = await faceapi.detectLandmarks(faceTensor)
    return faceLandmarks.align(detections[i])
  }
))

// free memory for face image tensors after we detected the face landmarks
faceTensors.forEach(t => t.dispose())

// get the face tensors for the aligned face images from the image (have to be disposed manually)
const alignedFaceTensors = (await faceapi.extractFaceTensors(input, alignedFaceBoxes))

// compute the face descriptors from the aligned face images
const descriptors = await Promise.all(alignedFaceTensors.map(
  faceTensor => faceapi.computeFaceDescriptor(faceTensor)
))

// free memory for face image tensors after we computed their descriptors
alignedFaceTensors.forEach(t => t.dispose())
```
