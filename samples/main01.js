'use strict';

console.log("hello world");

const http = require('http');
const port = process.env.PORT || 8888;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(port);
