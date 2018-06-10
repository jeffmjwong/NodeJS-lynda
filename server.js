const http = require('http');

const server = http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  response.end('Hello world!');

});

server.listen(4321);
console.log('Server is listening on port 4321...');
