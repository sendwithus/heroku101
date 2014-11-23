var connect = require('connect');
var serveStatic = require('serve-static');

// Grab the port to listen on (default to 8000)
var port = process.env.PORT || 8000;

// Start static file server to serve index.html
connect().use(serveStatic(__dirname)).listen(port);

console.log('Started server on port', port)
