var connect = require('connect');
var serveStatic = require('serve-static');
var urlParse = require('url').parse;
var redis = require('redis');


// Connect to Redis. This was copied from:
//   https://devcenter.heroku.com/articles/redistogo#using-with-node-js
if (process.env.REDISCLOUD_URL) {
    var url = urlParse(process.env.REDISCLOUD_URL);
    var redisClient = redis.createClient(url.port, url.hostname);
    redisClient.auth(url.auth.split(':')[1]);
} else {
    var redisClient = redis.createClient();
}

// Grab the port to listen on (default to 8000)
var port = process.env.PORT || 8000;

// Start static file server to serve index.html
var app = connect();

// Serve index.html
app.use(serveStatic(__dirname));


// Listen to everything else
app.use(function (req, res) {
    redisClient.zrange('tweets', 0, 30, function (err, tweets) {
        console.log('Loaded tweets');
        res.end(JSON.stringify(tweets));
    });
});

// Start web server
app.listen(port);

console.log('Started server on port', port)
