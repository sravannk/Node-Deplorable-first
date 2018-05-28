var http = require('http');
var fs = require('fs');


var myFileStreams = fs.createReadStream('streamsdata.txt','UTF-8');



http.createServer(function name(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var myFileStreams = fs.createReadStream('streamsdata.txt', 'UTF-8');
    myFileStreams.pipe(res);
    
}).listen(1338, '127.0.0.1');
console.log('server running at http....');
