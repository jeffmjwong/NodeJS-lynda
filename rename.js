const fs = require('fs');

fs.renameSync('./lib/project-config.js', './lib/config.json');

console.log('Config json file renamed');

fs.rename('./lib/notes.md', './notes.md', error => {
  if (error) {
    console.log(error);
  } else {
    console.log('notes.md moved successfully');
  }
});
