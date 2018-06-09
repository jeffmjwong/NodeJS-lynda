const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your favourite color? ', answer => console.log(answer));
