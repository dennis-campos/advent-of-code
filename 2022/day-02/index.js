const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

let myScore = 0;

// Part 1
const gameOutcomePartOne = {
    'A X': 4,
    'B Y': 5,
    'C Z': 6,
    'B X': 1,
    'C X': 7,
    'A Y': 8,
    'C Y': 2,
    'A Z': 3,
    'B Z': 9,  
}

input.forEach((game) => {
    console.log(myScore += gameOutcomePartOne[game]) // answer
})

// Part 2
const gameOutcomePartTwo = {
    'A X': 3,
    'B X': 1,
    'C X': 2,
    'A Y': 4,
    'B Y': 5,
    'C Y': 6,
    'A Z': 8,
    'B Z': 9,
    'C Z': 7,  
}

input.forEach((game) => {
    console.log(myScore += gameOutcomePartTwo[game]) // answer
})