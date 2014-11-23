var tweets = require('tweets');

var stream = new tweets({
    consumer_key: 'oCpymAniwdrID2CpKBqyochkX',
    consumer_secret: 'rLFngEpWKGlKbht2NqtJOz4lL0xhi98R1FbUbaazyIQPL7QAGf',
    access_token: '410363212-vR0vRXQIawbWOpeGGYht05p09h1QWBlQ3Qc95vJd',
    access_token_secret: 'C2C9TeFv8P9iNd5Szmb69nsg1ZB0j3sU8hVEGBz7VdTgo'
});

// start streaming the public twitter stream for pizza
stream.filter({ track: 'party' });

stream.on('tweet', function (tweet) {
    console.log('@' + tweet.user.screen_name + ':' + tweet.text);
});

console.log('Started Twitter worker');
