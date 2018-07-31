const express = require('express')
const path = require('path')

const app = express()

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, './node_modules/file-saver')))
app.use(express.static(path.join(__dirname, '../../examples/public')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))

app.get('/', (req, res) => res.redirect('/quantize_tiny_yolov2'))
app.get('/quantize_tiny_yolov2', (req, res) => res.sendFile(path.join(viewsDir, 'quantizeTinyYolov2.html')))

app.listen(3000, () => console.log('Listening on port 3000!'))