const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const inputGuessEl = document.querySelector('#inputGuess');
const turnoutEl = document.querySelector('#turnout');

// Get a random number between 1-10
const getRandomNumber = function(max = 10) {
    return Math.ceil( Math.random() * max );
}

let correctNumber;
let guesses;

// Get a random number
correctNumber = getRandomNumber();

// Reset number of guesses to 0
guesses = 0;

// I'm going to cheat!
cheatEl.innerText = correctNumber;

// Listen for guesses
formGuessEl.addEventListener('submit', e => {
    // Stop form from being sent to server
    e.preventDefault();

    // Get guesses number from input-field (and convert it to a number)
    const guessedNumber = Number(inputGuessEl.value);

    // Check if guess was correct
    if (guessedNumber === correctNumber) {
        turnoutEl.innerText = `${guessedNumber} is correct!`;
    } else {
        turnoutEl.innerText = `${guessedNumber} is not correct.`;
    }
});
