var tweets = require('tweets');
var urlParse = require('url').parse;
var redis = require('redis');

// Connect to Redis. This was copied from:
//   https://devcenter.heroku.com/articles/redistogo#using-with-node-js
if (process.env.REDISCLOUD_URL) {
    var url = urlParse(process.env.REDISCLOUD_URL);
    var redisClient = redis.createClient(url.port, url.hostname);
    redis.auth(url.auth.split(':')[1]);
} else {
    var redisClient = redis.createClient();
}


// Initialize Twitter client
var stream = new tweets({
    consumer_key: 'oCpymAniwdrID2CpKBqyochkX',
    consumer_secret: 'rLFngEpWKGlKbht2NqtJOz4lL0xhi98R1FbUbaazyIQPL7QAGf',
    access_token: '410363212-vR0vRXQIawbWOpeGGYht05p09h1QWBlQ3Qc95vJd',
    access_token_secret: 'C2C9TeFv8P9iNd5Szmb69nsg1ZB0j3sU8hVEGBz7VdTgo'
});


// Start streaming keyword
stream.filter({
    track: 'bacon'
});

stream.on('tweet', function (tweet) {

    // Generate a string looking like "@MyUsername: My tweet"
    tweetString = '@' + tweet.user.screen_name + ': ' + tweet.text;

    // Save tweet to Redis
    redisClient.zadd('tweets', -1 * Date.now(), tweetString);

    console.log('Got Tweet:', tweetString);
});


console.log('Started Twitter worker');
