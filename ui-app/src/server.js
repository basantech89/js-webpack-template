const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get('/palette', function (req, res) {
  const pathtoHtmlFile = path.resolve(__dirname, '../dist/palette.html')
  const contentFromHtmlFile = fs.readFileSync(pathtoHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.get('/typography', function (req, res) {
  const pathtoHtmlFile = path.resolve(__dirname, '../dist/typography.html')
  const contentFromHtmlFile = fs.readFileSync(pathtoHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.listen(9001, function () {
  console.log("Server is running on port no 9001");
})