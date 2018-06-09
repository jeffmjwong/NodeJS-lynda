const fs = require('fs');

const stream = fs.createReadStream('./chat.log', 'UTF-8');

let data = '';

stream.once('data', () => {
  console.log(`\n\n\n`);
  console.log('Started Reading File');
  console.log(`\n\n\n`);
});

stream.on('data', chunk => {
  process.stdout.write(`  chunk: ${chunk.length}  |`);
  data += chunk;
});

stream.on('end', () => {
  console.log(`\n\n\n`);
  console.log(`Finished Reading File ${data.length}`);
  console.log(`\n\n\n`);
});
