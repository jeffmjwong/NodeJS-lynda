const fs = require('fs');
const path = require('path');

fs.readdir('./lib', (error, files) => {
  files.forEach(fileName => {
    const file = path.join(__dirname, 'lib', fileName);
    const stats = fs.statSync(file);
    if (stats.isFile() && fileName !== '.DS_Store') {
      fs.readFile(file, 'UTF-8', (error, contents) => {
        console.log(contents);
      });
    }
  });
});
