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
app.use(express.static(path.resolve(process.env.DATA_PATH)))