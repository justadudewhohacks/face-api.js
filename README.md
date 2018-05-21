# face-recognition.min.js

**face recognition API for the browser with tensorflow.js**

This project implements a ResNet-34 like architecture using the tensorflow.js core API ([@tensorflow/tfjs-core](https://github.com/tensorflow/tfjs-core)) for realtime face recognition in the browser. The neural net is equivalent to the **FaceRecognizerNet** used in [face-recognition.js](https://github.com/justadudewhohacks/face-recognition.js) and the net used in the [dlib](https://github.com/davisking/dlib/blob/master/examples/dnn_face_recognition_ex.cpp) face recognition example. The weights have been trained by [davisking](https://github.com/davisking) and the model achieves a prediction accuracy of 99.38% on the LFW (Labeled Faces in the Wild) benchmark for face recognition.

## What does it do?

The neural net computes a vector with 128 values (face descriptor) from any given face image, which is **not** limited to the set of faces used for training the model. You can determine the similarity of two arbitrary faces by comparing their face descriptors, for example by computing the euclidean distance or using any other classifier of your choice.

## Face Recognition

![preview_face-recognition](https://user-images.githubusercontent.com/31125521/40313021-c3afdfec-5d14-11e8-86df-cf89a00668e2.gif)

## Face Similarity

![preview_face-similarity](https://user-images.githubusercontent.com/31125521/40316573-0a1190c0-5d1f-11e8-8797-f6deaa344523.gif)

## Usage

Get the latest build from dist/face-recognition.min.js and include the script:

``` html
<script src="face-recognition.min.js"></script>
```

Download the weights file from your server and initialize the net (note, that your server has to host the *face_recognition_model.weights* file):

``` javascript
const res = await axios.get('face_recognition_model.weights', { responseType: 'arraybuffer' })
const weights = new Float32Array(res.data)
const net = facerecognition.faceRecognitionNet(weights)
```

Compute and compare two 150 x 150 sized face images:

``` javascript
// input can be an ImageData object obtained from a 150 x 150 canvas via ctx.getImageData(0, 0, 150, 150)
// or a flat array with length 3*150*150 with pixel values in rgb order
// also have a look at the examples how to get the image data from a base64 string, from an <img>, from a <canvas> ...
const imgData1 = ...
const imgData2 = ...

const descriptor1 = await net.computeFaceDescriptor(imgData1)
const descriptor2 = await net.computeFaceDescriptor(imgData2)
const distance = facerecognition.euclidianDistance(descriptor1, descriptor2)

if (distance < 0.6)
  console.log('match')
else
  console.log('no match')
```

You can also get the face descriptor data synchronously:

``` javascript
const desc = net.computeFaceDescriptorSync(imgData1)
```

Or simply obtain the tensor:

``` javascript
const t = net.forward(imgData1)
```

## Running the examples

``` bash
cd examples/faceRecognition
npm i
npm start
```

Browse to http://localhost:3000/.
