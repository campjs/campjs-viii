#!/usr/bin/env node

const express = require('express')
const app = express()

app.use(express.static('docs'))

const port = parseInt(process.env.PORT || 3000)
app.listen(3000, function () {
  console.log(`Welcome to CampJS. Open up http://localhost:${port}`);
})
