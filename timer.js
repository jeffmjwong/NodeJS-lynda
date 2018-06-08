const waitTime = 3000;
const waitInterval = 100;
let currentTime = 0;
let percentWaited = 0;

function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
}

const interval = setInterval(() => {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  // console.log(`waiting time: ${currentTime/1000} seconds...`);
  writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log('\nhehehe');
}, waitTime);

process.stdout.write('\n\n\n');
writeWaitingPercent(percentWaited);
