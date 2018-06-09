const fs = require('fs');

fs.readdir('./lib', (error, files) => {
  if (error) throw error;
  console.log(files);
});

console.log('Reading files...');
