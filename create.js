const fs = require('fs');

const md = `

Sample Markdown Title
=====================

Sample Subtitle
---------------

* point
* point
* point

`;

fs.writeFile('sample.md', md.trim(), error => {
  if (error) console.log(error);
  console.log('File created');
});
