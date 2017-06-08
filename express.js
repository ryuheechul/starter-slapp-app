'use strict'

const express = require('express')

// attach Slapp to express server
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
    console.log('Hello World!')
})

module.exports = app
