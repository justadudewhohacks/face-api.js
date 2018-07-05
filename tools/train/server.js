require('./.env')

const express = require('express')
const path = require('path')

const app = express()

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './tmp')))
app.use(express.static(path.join(__dirname, './node_modules/file-saver')))
app.use(express.static(path.join(__dirname, '../../examples/public')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))

const trainDataPath = path.resolve(process.env.TRAIN_DATA_PATH)
app.use(express.static(trainDataPath))

app.get('/', (req, res) => res.redirect('/face_landmarks'))
app.get('/face_landmarks', (req, res) => res.sendFile(path.join(viewsDir, 'faceLandmarks.html')))

app.listen(3000, () => console.log('Listening on port 3000!'))