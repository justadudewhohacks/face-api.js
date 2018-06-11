# face-api.js

**JavaScript API for face detection and face recognition in the browser implemented on top of the tensorflow.js core API ([tensorflow/tfjs-core](https://github.com/tensorflow/tfjs-core))**

* **[Running the Examples](#running-the-examples)**
* **[About Face Detection](#about-face-detection)**
* **[About Face Recognition](#about-face-recognition)**
* **[Usage](#usage)**

## Examples

### Face Detection

![preview_face-detection](https://user-images.githubusercontent.com/31125521/41238639-b72fb0fc-6d96-11e8-9f50-27159dd534d1.jpg)

### Live Video Face Detection

![preview_video-facedetection](https://user-images.githubusercontent.com/31125521/41238649-bbf10046-6d96-11e8-9041-1de46c6adccd.jpg)

### Face Recognition

![preview_face-recognition](https://user-images.githubusercontent.com/31125521/41238648-bbd2cc52-6d96-11e8-9fd1-051745fa0128.jpg)

![preview_face-recognition_gif](https://user-images.githubusercontent.com/31125521/40313021-c3afdfec-5d14-11e8-86df-cf89a00668e2.gif)

### Face Similarity

![preview_face-similarity](https://user-images.githubusercontent.com/31125521/40316573-0a1190c0-5d1f-11e8-8797-f6deaa344523.gif)

### Extracting Face Images

![preview_face-extraction](https://user-images.githubusercontent.com/31125521/41238647-bbb64c6c-6d96-11e8-8ca9-2d0fda779bb6.jpg)

<a name="running-the-examples"></a>

## Running the Examples

``` bash
cd examples
npm i
npm start
```

Browse to http://localhost:3000/.

<a name="about-face-detection"></a>

## About Face Detection

For face recognition, this project implements a SSD (Single Shot Multibox Detector) based on MobileNetV1. The neural net will compute the locations of each face in an image and will return the bounding boxes together with it's probability for each face.

The face detection model has been trained on the [WIDERFACE dataset](http://mmlab.ie.cuhk.edu.hk/projects/WIDERFace/) and the weights are provided by [yeephycho](https://github.com/yeephycho) in [this](https://github.com/yeephycho/tensorflow-face-detection) repo.

<a name="about-face-recognition"></a>

## About Face Recognition

For face recognition, a ResNet-34 like architecture is implemented to compute a face descriptor (a feature vector with 128 values) from any given face image, which is used to describe the characteristics of a persons face. The model is **not** limited to the set of faces used for training, meaning you can use it for face recognition of any person, for example yourself. You can determine the similarity of two arbitrary faces by comparing their face descriptors, for example by computing the euclidean distance or using any other classifier of your choice.

The neural net is equivalent to the **FaceRecognizerNet** used in [face-recognition.js](https://github.com/justadudewhohacks/face-recognition.js) and the net used in the [dlib](https://github.com/davisking/dlib/blob/master/examples/dnn_face_recognition_ex.cpp) face recognition example. The weights have been trained by [davisking](https://github.com/davisking) and the model achieves a prediction accuracy of 99.38% on the LFW (Labeled Faces in the Wild) benchmark for face recognition.

<a name="usage"></a>

## Usage

Get the latest build from dist/face-api.js or dist/face-api.min.js and include the script:

``` html
<script src="face-api.js"></script>
```

Or install the package:

``` bash
npm i face-api
```

### Face Detection

Download the weights file from your server and initialize the net (note, that your server has to host the *face_detection_model.weights* file).

``` javascript
// initialize the face detector
const res = await axios.get('face_detection_model.weights', { responseType: 'arraybuffer' })
const weights = new Float32Array(res.data)
const detectionNet = faceapi.faceDetectionNet(weights)
```

Detect faces and get the bounding boxes and scores:

``` javascript
// optional arguments
const minConfidence = 0.8
const maxResults = 10

// inputs can be html canvas, img or video element or their ids ...
const myImg = document.getElementById('myImg')
const detections = await detectionNet.locateFaces(myImg, minConfidence, maxResults)
```

Draw the detected faces to a canvas:

``` javascript
// resize the detected boxes to the image dimensions (since the net returns relative coordinates)
const detectionsForSize = detections.map(det => det.forSize(myImg.width, myImg.height))
const canvas = document.getElementById('overlay')
canvas.width = myImg.width
canvas.height = myImg.height
faceapi.drawDetection(canvas, detectionsForSize, { withScore: false })
```

You can also obtain the tensors of the unfiltered bounding boxes and scores for each image in the batch (tensors have to be disposed manually):

``` javascript
const { boxes, scores } = detectionNet.forward('myImg')
```

### Face Recognition

Download the weights file from your server and initialize the net (note, that your server has to host the *face_recognition_model.weights* file).

``` javascript
// initialize the face recognizer
const res = await axios.get('face_recognition_model.weights', { responseType: 'arraybuffer' })
const weights = new Float32Array(res.data)
const recognitionNet = faceapi.faceRecognitionNet(weights)
```

Compute and compare the descriptors of two face images:

``` javascript
// inputs can be html canvas, img or video element or their ids ...
const descriptor1 = await recognitionNet.computeFaceDescriptor('myImg')
const descriptor2 = await recognitionNet.computeFaceDescriptor(document.getElementById('myCanvas'))
const distance = faceapi.euclidianDistance(descriptor1, descriptor2)

if (distance < 0.6)
  console.log('match')
else
  console.log('no match')
```

You can also get the face descriptor data synchronously:

``` javascript
const desc = recognitionNet.computeFaceDescriptorSync('myImg')
```

Or simply obtain the tensor (tensor has to be disposed manually):

``` javascript
const t = recognitionNet.forward('myImg')
```

### Compute the Face Descriptors for detected Faces

``` javascript
const detections = await detectionNet.locateFaces(input)

// get the face tensors from the image (have to be disposed manually)
const faceTensors = await faceapi.extractFaceTensors(input, detections)
const descriptors = await Promise.all(faceTensors.map(t => recognitionNet.computeFaceDescriptor(t)))

// free memory for face image tensors after we computed their descriptors
faceTensors.forEach(t => t.dispose())
```