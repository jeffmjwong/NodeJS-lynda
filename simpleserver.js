const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Web Server</title>
      </head>
      <body>
        <h1>Web Page Served...</h1>
        <p>You are welcome</p>
      </body>
    </html>
  `)
}).listen(4321);

console.log('Server is listening on port 4321...');
