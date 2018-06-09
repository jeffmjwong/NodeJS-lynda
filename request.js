const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: '/wiki/George_Washington',
  method: 'GET'
};

const request = https.request(options, response => {
  let responseBody = '';

  console.log('Response from server started.');
  console.log(`Server status: ${response.statusCode}`);
  console.log('Response headers: %j', response.headers);

  response.setEncoding('UTF-8');

  response.once('data', chunk => {
    console.log(chunk);
  });

  response.on('data', chunk => {
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  response.on('end', () => {
    fs.writeFile('george-washington.html', responseBody, error => {
      if (error) throw error;
      console.log('File downloaded');
    });
  });
});

request.on('error', error => {
  console.log(`Problem with request: ${error.message}`);
});

request.end();
