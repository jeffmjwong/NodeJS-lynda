const http = require('http');

const server = http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  response.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>${request.url}</p>
        <p>${request.method}</p>
      </body>
    </html>
  `);

});

server.listen(4321);
console.log('Server is listening on port 4321...');
