require('./.env')

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))
app.use(express.static(path.join(__dirname, '../shared')))
app.use(express.static(path.join(__dirname, '../node_modules/file-saver')))
app.use(express.static(path.join(__dirname, '../../../weights')))
app.use(express.static(path.join(__dirname, '../../../dist')))
app.use(express.static(path.resolve(process.env.DATA_PATH)))

app.get('/', (req, res) => res.redirect('/train'))
app.get('/train', (req, res) => res.sendFile(path.join(publicDir, 'trainClassifier.html')))

app.listen(8000, () => console.log('Listening on port 8000!'))