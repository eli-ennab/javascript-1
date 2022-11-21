/**
 * Guess the number
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visa utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-box där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

 const cheatEl = document.querySelector('#cheat');
 const formGuessEl = document.querySelector('#formGuess');
 const inputGuessEl = document.querySelector('#inputGuess');
 const turnoutEl = document.querySelector('#turnout');
 
 // Get a random number between 1-10
 const getRandomNumber = function(max = 10) {
     return Math.ceil( Math.random() * max );
 }

 let correctNumber = getRandomNumber();
 cheatEl.innerHTML =+ `${correctNumber}`;

 let guesses = 0;

// When someone clicks on the submit button
formGuessEl.addEventListener('submit', (e) => {
    guesses++;

    // Prevent default
	e.preventDefault();

    console.log(`<h2>Number of guesses:</h2> ${guesses}`, e.target);

    const guessedNumber = inputGuessEl.value;

    if (guessedNumber == '') {
        turnoutEl.innerHTML = `<h2>You must submit a value...</h2><h3>Or press 'Give up'.</h3>`
    } else if (guessedNumber == correctNumber) {
        turnoutEl.innerHTML = `<h2>Your guess is correct!</h2><h3>Amount of tries: ${guesses}.</h3>`;
    } else if (guessedNumber < correctNumber) {
        turnoutEl.innerHTML = `<h2>Your guess is too low.</h2><h3>Amount of tries: ${guesses}.</h3>`;      
    } else if (guessedNumber > correctNumber) {
        turnoutEl.innerHTML = `<h2>Your guess is too high.</h2><h3>Amount of tries: ${guesses}.</h3>`;
    };

    correctNumber = getRandomNumber();
    cheatEl.innerHTML =+ `${correctNumber}`;
});

formGuessEl.addEventListener('reset', (e) => {
    guesses = 0;
    turnoutEl.innerHTML = `<h2>You gave up!</h3>`;
    correctNumber = getRandomNumber();
    cheatEl.innerHTML =+ `${correctNumber}`;
 });