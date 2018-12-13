require('./.env')

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))
app.use(express.static(path.join(__dirname, '../shared')))
app.use(express.static(path.join(__dirname, '../node_modules/file-saver')))
app.use(express.static(path.join(__dirname, '../../../examples/public')))
app.use(express.static(path.join(__dirname, '../../../weights')))
app.use(express.static(path.join(__dirname, '../../../dist')))

const trainDataPath = path.resolve(process.env.TRAIN_DATA_PATH)

const pngPath = path.join(trainDataPath, 'png')
const jpgPath = path.join(trainDataPath, 'jpg')
const groundTruthPath = path.join(trainDataPath, 'pts')

app.use(express.static(jpgPath))
app.use(express.static(groundTruthPath))

const trainIds = JSON.parse(fs.readFileSync(path.join(publicDir, './trainData.json')))
const trainIdsSet = new Set(trainIds)

const testFileIds = fs.readdirSync(groundTruthPath)
  .map(file => file.replace('.json', ''))
  .filter(file => !trainIdsSet.has(file))

app.get('/face_landmarks_train_ids', (req, res) => res.status(202).send(trainIds))
app.get('/face_landmarks_test_ids', (req, res) => res.status(202).send(testFileIds))

const poseAnchors = JSON.parse(fs.readFileSync(path.join(trainDataPath, './pose-anchors.json')))

const sidewaysXTrain = []
const strongSidewaysXTrain = []
const strongSidewaysYTrain = []
const strongSidewaysTrain = []
const sidewaysXTest = []
const strongSidewaysXTest = []
const strongSidewaysYTest = []
const strongSidewaysTest = []

poseAnchors.forEach((pt, idx) => {
  const id = `${idx}`
  if (Math.abs(0.5 - pt.x) > 0.15) {
    (trainIdsSet.has(id) ? sidewaysXTrain : sidewaysXTest).push(id)
  }
  if (Math.abs(0.5 - pt.x) > 0.2) {
    (trainIdsSet.has(id) ? strongSidewaysXTrain : strongSidewaysXTest).push(id)
  }
  if (Math.abs(0.44 - pt.y) > 0.1) {
    (trainIdsSet.has(id) ? strongSidewaysYTrain : strongSidewaysYTest).push(id)
  }
  if (Math.abs(0.5 - pt.x) > 0.2 || Math.abs(0.44 - pt.y) > 0.1) {
    (trainIdsSet.has(id) ? strongSidewaysTrain : strongSidewaysTest).push(id)
  }
})

console.log(sidewaysXTrain.length)
console.log(strongSidewaysXTrain.length)
console.log(strongSidewaysYTrain.length)
console.log(strongSidewaysTrain.length)
console.log(sidewaysXTest.length)
console.log(strongSidewaysXTest.length)
console.log(strongSidewaysYTest.length)
console.log(strongSidewaysTrain.length)

app.get('/sideways_x_train', (req, res) => res.status(202).send(sidewaysXTrain))
app.get('/strong_sideways_x_train', (req, res) => res.status(202).send(strongSidewaysXTrain))
app.get('/strong_sideways_y_train', (req, res) => res.status(202).send(strongSidewaysYTrain))
app.get('/strong_sideways_train', (req, res) => res.status(202).send(strongSidewaysTrain))
app.get('/sideways_x_test', (req, res) => res.status(202).send(sidewaysXTest))
app.get('/strong_sideways_x_test', (req, res) => res.status(202).send(strongSidewaysXTest))
app.get('/strong_sideways_y_test', (req, res) => res.status(202).send(strongSidewaysYTest))
app.get('/strong_sideways_test', (req, res) => res.status(202).send(strongSidewaysTest))

app.get('/', (req, res) => res.redirect('/train'))
app.get('/train', (req, res) => res.sendFile(path.join(publicDir, 'train.html')))
app.get('/verify', (req, res) => res.sendFile(path.join(publicDir, 'verify.html')))
app.get('/test', (req, res) => res.sendFile(path.join(publicDir, 'test.html')))

app.listen(8000, () => console.log('Listening on port 8000!'))