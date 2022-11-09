/** 
 * STEG 1
*/

/*
let correctNumber = 5;

const guess = () => {
    let answer = prompt("Guess a number between 1-10.");
    if (answer == 0) {
        alert (`Game over.`)
    } else if (answer == correctNumber) {
        alert (`Congrats!`)
    } else {
        guess();    
    } 
}

guess();
*/

/** 
 * STEG 1.5
*/

/*
let correctNumber = 5;

const guess = (info) => {
    let answer = prompt(info);
    if (answer == 0) {
        alert (`Game over.`)
    } else if (answer == correctNumber) {
        alert (`Congrats!`)
    } else {
        if (answer > correctNumber){
            guess(`Too high. Try again!`);    
        } else {
            guess(`Too low. Try again!`);
        }
    }
}

guess("Enter a number between 1-10.");
*/

/** 
 * STEG 2
*/

/*
const max = 10;
const randomNumber = Math.ceil( Math.random() * max );

let correctNumber = randomNumber;

const guess = (info) => {
    let answer = prompt(info);
    if (answer == 0) {
        alert (`Game over.`)
    } else if (answer == correctNumber) {
        alert (`Congrats!`)
    } else {
        if (answer > correctNumber){
            guess(`Too high. Try again!`);    
        } else {
            guess(`Too low. Try again!`);
        }
    }
}

guess(`Enter a number between 1-${max}.`);
*/

/** 
 * STEG 3
*/

/*
const max = 10;
const randomNumber = Math.ceil( Math.random() * max );

let correctNumber = randomNumber;
var tries = 0;

const guess = (info) => {
    let answer = prompt(info);

    if (answer == 0) {
        alert (`Game over.`)
    } else if (answer == correctNumber) {
        tries++
        alert (`Congrats! Amount of tries: ${tries}.`)
    } else {
        tries++
        if (answer > correctNumber){
            guess(`Too high. Try again! Amount of tries: ${tries}.`); 
        } else {
            guess(`Too low. Try again!`);
        }
    }
}

guess(`Enter a number between 1-${max}.`);
*/

/** 
 * STEG 4
*/

/*
const max = 10;

const randomNumber = Math.ceil( Math.random() * max );

let correctNumber = randomNumber;

var tries = 0;

var highscore = 0;

const guess = (info) => {
    let answer = prompt(info);

    if (answer == 0) {
        alert (`Game over.`)
    } else if (answer == correctNumber) {
        tries++
        alert (`Congrats! Amount of tries: ${tries}.`)
    } else {
        tries++
        if (answer > correctNumber){
            guess(`Too high. Try again! Amount of tries: ${tries}.`); 
        } else {
            guess(`Too low. Try again!`);
        }
    }
}



const game = () => {
    let answer = prompt;
    if (guess = true) {
        alert ('Highscore')
    }
}

guess(`Enter a number between 1-${max}.`);
*/

/** 
 * JOHANS LÖSNING
*/

// Steg 1 + 1.5
// let numberToGuess = 5;

// Steg 2 + 3 + 4
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let exitGame = false;
let highscore = null;

while (exitGame === false) { //while (!exitGame) {

    let numberToGuess = getRandomNumber();
    let continueGame = true;
    let tries = 0;

    while (continueGame) {
        // ask user for guess
        let guess = Number( prompt(`Please guess a number between 1-10.`) );
        console.log(`Guessed number:`, guess, typeof guess);

        if (guess === numberToGuess) {
            tries++;

            // Highscore since before?
            if (highscore) {
                // New highscore?
                if (tries < highscore) {
                    console.log(`New highscore! Your new highscore is ${highscore}.`);
                    alert(`New highscore! Your new highscore is ${highscore}.`);
                } else {
                    console.log(`Sorry, no new highscore. Your current highscore is ${highscore}.`);
                    alert(`Sorry, no new highscore. Your current highscore is ${highscore}.`);
                    }
            } else {
                highscore = tries;
            }

            console.log(`Congrats!`);
            alert(`Congrats! Amount of tries: ${tries}.`);
            continueGame = false;
        } else if (guess === 0) {
            console.log(`You gave up!`);
            alert(`You gave up!`);
            continueGame = false;
            exitGame = true;
        } else if (guess > numberToGuess) {
            tries++
            console.log(`Too high. Try again!`);
            alert(`Too high. Try again!`);
        } else if (guess < numberToGuess) {
            tries++
            console.log(`Too low. Try again!`);
            alert(`Too low. Try again!`);
        } else {
            console.log(`Invalid guess.`);
            alert(`Invalid guess.`);
        }
    } 
}
console.log(`Game ended.`);
































