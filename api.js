const http = require('http');
const data = require('./data/inventory.json');

http.createServer((request, response) => {

  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/json' });
    response.end(JSON.stringify(data));
  } else if (request.url === '/instock') {
    listInStock(response);
  } else if (request.url === '/onorder') {
    listOnBackOrder(response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Whoops... Data not found!');
  }

}).listen(4321);

console.log('Server is listening on port 4321...');


function listInStock(response) {
  const inStock = data.filter(item => {
    return item.avail === 'In stock';
  });

  response.end(JSON.stringify(inStock));
}

function listOnBackOrder(response) {
  const onOrder = data.filter(item => {
    return item.avail === 'On back order';
  });

  response.end(JSON.stringify(onOrder));
}
