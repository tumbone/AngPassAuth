// logging ==================================================
var log4js = require('log4js')
log4js.configure('log4js.json', { reloadSecs: 60 }) // the reload defaults to a minute. use the second parameter options object to make this more frequent, e.g. log4js.configure('log4js.json', { reloadSecs: 30 })
var logger = log4js.getLogger('server')

// modules =================================================
var express = require('express')
var http = require('http')
var https = require('https')
var path = require('path')
var fs = require('fs')
var nconf = require('nconf')
var compression = require('compression')

// configuration ===========================================
nconf.argv().env()
// nconf.file({ file: path.join(process.cwd(), '/config/env/', (process.env.NODE_ENV || 'dev') + '/settings.json') })
// var enableSsl = nconf.get('enableSsl')
var options = {}
// if (enableSsl) {
//   options = {
//     pfx: fs.readFileSync(nconf.get('ssl:pfx')),
//     passphrase: nconf.get('ssl:passphrase')
//   }
// }

// Creating our server =====================================
var app = express()

// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist')))

//  Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

/**
 * Create HTTP server.
 */
var server = !enableSsl ? http.createServer(app) : https.createServer(options, app)

// more configuration ======================================
var port = process.env.PORT || 3000

app.use(compression())

// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist')))
// start app ===============================================
logger.debug('Trying to host on port: ' + port)

server.listen(port, function () {
  // shoutout to the user
  logger.info('Started listening on port ' + port)
})
