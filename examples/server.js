const express = require('express')
const path = require('path')

const app = express()

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, '../weights')))
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, './node_modules/axios/dist')))

app.get('/', (req, res) => res.redirect('/face_detection'))
app.get('/face_detection', (req, res) => res.sendFile(path.join(viewsDir, 'faceDetection.html')))
app.get('/face_detection_video', (req, res) => res.sendFile(path.join(viewsDir, 'faceDetectionVideo.html')))
app.get('/face_recognition', (req, res) => res.sendFile(path.join(viewsDir, 'faceRecognition.html')))
app.get('/face_similarity', (req, res) => res.sendFile(path.join(viewsDir, 'faceSimilarity.html')))
app.get('/face_landmarks', (req, res) => res.sendFile(path.join(viewsDir, 'faceLandmarks.html')))
app.get('/detect_and_draw_faces', (req, res) => res.sendFile(path.join(viewsDir, 'detectAndDrawFaces.html')))
app.get('/detect_and_draw_landmarks', (req, res) => res.sendFile(path.join(viewsDir, 'detectAndDrawLandmarks.html')))
app.get('/detect_and_recognize_faces', (req, res) => res.sendFile(path.join(viewsDir, 'detectAndRecognizeFaces.html')))

app.listen(3000, () => console.log('Listening on port 3000!'))