var fs = require('fs');
var request = require('request');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(ohNo) {
    throw ohNo;
  })
  .on('response', function(whew) {
    console.log('Response code: ', whew.statusCode, '\n', 'Message: ', whew.statusMessage);
  })
  .pipe(fs.createWriteStream('./future.jpg'));
