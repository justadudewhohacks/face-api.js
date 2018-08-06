require('./tinyYolov2/.env')

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const publicDir = path.join(__dirname, './tinyYolov2')
app.use(express.static(publicDir))
app.use(express.static(path.join(__dirname, './shared')))
app.use(express.static(path.join(__dirname, './node_modules/file-saver')))
app.use(express.static(path.join(__dirname, '../../examples/public')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))

const trainDataPath = path.resolve(process.env.TRAIN_DATA_PATH)
const imagesPath = path.join(trainDataPath, './final_images')
const detectionsPath = path.join(trainDataPath, './final_detections')
app.use(express.static(imagesPath))
app.use(express.static(detectionsPath))

const detectionFilenames = fs.readdirSync(detectionsPath)

app.use(express.static(trainDataPath))

app.get('/detection_filenames', (req, res) => res.status(202).send(detectionFilenames))
app.get('/', (req, res) => res.sendFile(path.join(publicDir, 'train.html')))

app.listen(3000, () => console.log('Listening on port 3000!'))