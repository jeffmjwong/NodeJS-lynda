const sayings = [
  'An apple a day keeps the doctor away.',
  'I am very funny!',
  'Hehehe',
  'My name is Saw Kah Chun.',
  'LOL',
  'What are you doing mate?',
  'Awesome!'
];

const interval = setInterval(() => {
  const index = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[index]} \n`);
}, 1000);

process.stdin.on('data', data => {
  console.log(`STDIN Data Received -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});
