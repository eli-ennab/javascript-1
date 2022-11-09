/**
 * Math: round, ceil, floor & random
 */

// Math constants exempel
// Math.PI
// Math.E

// Avrunda till närmsta heltal
// Math.round(5.75)     // 6
// Math.round(5.45)     // 5
// Math.round(5.50000)  // 6

// Avrunda uppåt
// Math.ceil(5.1)     // 6
// Math.ceil(5.9)     // 6

// Avrunda neråt
// Math.floor(5.1)     // 5
// Math.floor(5.95)    // 5

// Random mellan 0-1
// Math.random()

// Nu får vi ett heltal från 1 till 10
// Math.ceil(Math.random() * 10 )

/*
let randomNumber = Math.random(); // 0-0.9999999999
let randomNumberMultiplied = randomNumber * 10; // 0-9.9999999999
let roundedRandomNumberMultiplied = Math.ceil(randomNumberMultiplied); // heltal 1-10
// Omskrivet på en rad:
let randNum = Math.ceil( Math.random() * 10 );

console.log(randNum);
*/

// Random nummer mellan 1-10
/*
const getRandomNumber = (max = 10) => {
    return Math.ceil( Math.random() * max );
}

let numToGuess = getRandomNumber();
let numberToGuess = getRandomNumber(10);
let bigNumberToGuess = getRandomNumber(50);

console.log(numToGuess);
console.log(numberToGuess);
console.log(bigNumberToGuess);
*/

// Random nummer mellan 1-10 och prompt
const getRandomNumber = (max = 10) => {
    return Math.ceil( Math.random() * max );
}

let numberToGuess = getRandomNumber(10);

let answer = prompt("Please enter something.");
console.log("Your answer was:", answer);





























