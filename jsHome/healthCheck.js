// 載入env變量
require('dotenv').config();
const http = require('http');

const hostName = 'localhost';
const port = 10000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader = ('content-Type', 'text/html');
    res.end('<h1>This is find.</h1>');
})

exports.start = (() => server.listen(process.env.PORT || port));