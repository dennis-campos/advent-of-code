const fs = require("fs");
const rucksacks = fs.readFileSync("./input.txt", "utf-8").split("\n");


const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const alphabetNumeric = {};
for (let i = 0; i < alphabet.length; i++) {
    alphabetNumeric[alphabet[i]] = i + 1;
}

let arr = [];
let total = 0;

for (const rucksack of rucksacks) {
  const split = Math.ceil(rucksack.length / 2);
  const [leftSide, rightSide] = [
    rucksack.slice(0, split),
    rucksack.slice(split),
  ];

  const left = [...new Set(leftSide)];
  const right = [...new Set(rightSide)];

  for (const i of left) {
    if (left.includes(i) && right.includes(i)) {
      arr.push(i);
    }
  }
}

arr.forEach((number) => {
  total += alphabetNumeric[number];
});

console.log(total); // answer to part one!

// part two
let array = [];
let total = 0;

// ended up not making it an array to have access to the match string method.
const rucksacks = fs.readFileSync("./input.txt", "utf-8");

rucksacks.match(/(?:.+\n?){3}/g).map((el) => {
  const [one, two, three] = el.split("\n");

  const ones = [...new Set(one)];
  const twos = [...new Set(two)];
  const threes = [...new Set(three)];

  for (const i of ones) {
    if (twos.includes(i) && threes.includes(i)) {
      array.push(i);
    }
  }
});

array.forEach((number) => {
  total += alphabetNumeric[number];
});

console.log(total); // answer