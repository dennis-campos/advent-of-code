const fs = require('fs');
const sections = fs.readFileSync('input.txt', 'utf-8').split('\n');

let total = 0;

for (const section of sections) {
  const [[firstElfStart, firstElfEnd], [secondElfStart, secondElfEnd]] = section
    .split(',')
    .map((range) => range.split('-').map(Number));

  if (
    (firstElfStart >= secondElfStart && firstElfEnd <= secondElfEnd) ||
    (secondElfStart >= firstElfStart && secondElfEnd <= firstElfEnd)
  ) {
    total++;
  }
}

console.log({ total });

// part 2
for (const section of sections) {
  const [[firstElfStart, firstElfEnd], [secondElfStart, secondElfEnd]] = section
    .split(',')
    .map((range) => range.split('-').map(Number));

  if (
    (firstElfStart >= secondElfStart && firstElfStart <= secondElfEnd) ||
    (secondElfStart >= firstElfStart && secondElfStart <= firstElfEnd)
  ) {
    total++;
  }
}

console.log({ total });
