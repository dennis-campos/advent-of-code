const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

// part one
    let total = 0;
    let totalCalories = 0; 
    let newArray = [];

    for(let i = 0; i < input.length; i++) {
        if (input[i]) {
            total += Number(input[i])
        }

        if (input[i] === '') {
            totalCalories = total;
            total = 0;

            newArray.push(totalCalories)
        }
    }

    console.log(Math.max(...newArray)); // Answer

// Part two
    const sortCalories = newArray.sort((a, b) => b - a);

    console.log(sortCalories[0] + sortCalories[1] + sortCalories[2]) // Answer