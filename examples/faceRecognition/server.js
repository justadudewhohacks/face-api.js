const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../images')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))
app.use(express.static(path.join(__dirname, './node_modules/axios/dist')))
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => res.sendFile('./index.html'))

app.listen(3000, () => console.log('Listening on port 3000!'))