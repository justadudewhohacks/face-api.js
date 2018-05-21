const express = require('express')
const path = require('path')

const app = express()

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(path.join(__dirname, '../images')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))
app.use(express.static(path.join(__dirname, './node_modules/axios/dist')))
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => res.redirect('/faceRecognition'))
app.get('/faceRecognition', (req, res) => res.sendFile(path.join(viewsDir, 'faceRecognition.html')))
app.get('/faceSimilarity', (req, res) => res.sendFile(path.join(viewsDir, 'faceSimilarity.html')))

app.listen(3000, () => console.log('Listening on port 3000!'))