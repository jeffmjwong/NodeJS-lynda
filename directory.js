const fs = require('fs');

if (fs.existsSync('lib')) {
  console.log('Directory already there');
} else {
  fs.mkdir('lib', (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Directory created');
    }
  });
}
