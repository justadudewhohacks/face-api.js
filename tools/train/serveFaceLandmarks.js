require('./faceLandmarks/.env')

const express = require('express')
const path = require('path')

const app = express()

const publicDir = path.join(__dirname, './faceLandmarks')
app.use(express.static(publicDir))
app.use(express.static(path.join(__dirname, './node_modules/file-saver')))
app.use(express.static(path.join(__dirname, '../../examples/public')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))

const trainDataPath = path.resolve(process.env.TRAIN_DATA_PATH)
app.use(express.static(trainDataPath))

app.get('/', (req, res) => res.redirect('/face_landmarks'))
app.get('/face_landmarks', (req, res) => res.sendFile(path.join(publicDir, 'train.html')))

app.listen(3000, () => console.log('Listening on port 3000!'))