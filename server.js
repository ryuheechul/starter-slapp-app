'use strict'

const app = require('./express')
const slapp = require('./slapp')

// use `PORT` env var on Beep Boop - default to 3000 locally
var port = process.env.PORT || 3000

var server = slapp.attachToExpress(app)

// start http server
server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${port}`)
})
