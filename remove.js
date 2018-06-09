const fs = require('fs');

try {
  fs.unlinkSync('./lib/config.json');
} catch (error) {
  console.log(error);
}

fs.unlink('./notes.md', error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Notes.md has been successfully removed');
  }
})
