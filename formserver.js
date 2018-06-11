const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {

  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./public/form.html', 'UTF-8').pipe(response);
  } else if (request.method === 'POST') {
    let body = '';

    request.on('data', chunk => {
      body += chunk;
    });

    request.on('end', error => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Form Results</title>
          </head>

          <body>
            <h1>Your Form Results</h1>
            <p>${body}</p>
          </body>
        </html>
      `);
    });
  }

}).listen(4321);

console.log('Server is listening on port 4321...');
