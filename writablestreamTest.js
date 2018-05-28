var http = require('http');
var fs = require('fs');

var myFileStreams = fs.createReadStream('streamsdata.txt', 'UTF-8');
var writeStreams = fs.createWriteStream('writableStreams.txt');


myFileStreams.on('data', function (chunk) {
    console.log('chunk is received here');
    console.log(chunk);
    writeStreams.write(chunk);
})

