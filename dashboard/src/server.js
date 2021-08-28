const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.get('/', function (req, res) {
  const pathtoHtmlFile = path.resolve(__dirname, '../dist/index.html')
  const contentFromHtmlFile = fs.readFileSync(pathtoHtmlFile, 'utf-8')
  res.send(contentFromHtmlFile)
})

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.listen(9000, function () {
  console.log("Server is running on port no 9000");
})