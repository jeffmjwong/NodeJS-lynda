// const path = require('path');
//
// console.log(path.basename(__filename));

// function getValue(flag) {
//   const index = process.argv.indexOf(flag);
//   return (index === -1) ? null : process.argv[index + 1];
// }
//
// const greeting = getValue('--greeting');
// const user = getValue('--user');
//
// if (!greeting || !user) {
//   console.log('You blew it!');
// } else {
//   console.log(`Welcome ${user}! ${greeting}!`)
// }

const questions = [
  'What is your age?',
  'Who is your teacher?',
  'Which is your favourite language?'
];

const answers = [];

function ask(index) {
  process.stdout.write(`\n\n\n ${questions[index]} > `);
}

process.stdin.on('data', data => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write(`\n\n\n`);
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]}`);
  process.stdout.write(`\n\n\n`);
})

ask(0);
