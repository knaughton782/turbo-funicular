let num = 103.954;
console.log(num.toFixed(2));
// argument passed into toFixed is the number of decimals you will display
// Math.round rounds up by default, pass in the variable or number to round
// Math.floor rounds down
// Math.ceiling rounds up

// Math.random generates a random number between 0 - .99999 
//formula to generate a random number between two other numbers besides the default

let min = 10; // lowest number for random number generation
let max = 20; // highest number for random number generation
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// Math.random picks a random number. 
// max - min * the random number to get the range of numbers 
// + 1 to make sure it gets between the whole range
// Math.floor rounds down to eliminate trailing decimals - gets whole number
// + min to get to the lowest number to generate

// 1-5, true if correct, false if not correct
let makeGuess = function(num) {
    let min = 1; // lowest number for random number generation
    let max = 5; // highest number for random number generation
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === randomNum) {
        return true;
    } else {
        return false;
    }
}

console.log(makeGuess(3));
console.log(makeGuess(2));
console.log(makeGuess(1));
console.log(makeGuess(3));
console.log(makeGuess(5));
