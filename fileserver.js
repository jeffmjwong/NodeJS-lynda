const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {

  console.log(`${request.method} request for ${request.url}`);

  if (request.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', (error, html) => {
      if (error) console.log(error);
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(html);
    });

  } else if (request.url.match(/.css$/)) {
    const cssPath = path.join(__dirname, 'public', request.url);
    const fileStream = fs.createReadStream(cssPath, 'UTF-8');

    response.writeHead(200, { 'Content-Type': 'text/css' });

    fileStream.pipe(response);

  } else if (request.url.match(/.jpg$/)) {
    const imgPath = path.join(__dirname, 'public', request.url);
    const imgStream = fs.createReadStream(imgPath);

    response.writeHead(200, { 'Content-Type': 'image/jpeg' });

    imgStream.pipe(response);

  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 File Not Found!');
  }

}).listen(4321);

console.log('Server listening on port 4321...');
