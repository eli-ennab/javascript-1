/**
 * Truthy/falsy
 */

// All values are truthy if they are not:
// falsy: null, 0, -0, 0n, NaN, "", false, undefined

/**
 * Logical NOT
 */

/*
let username = "";
let msg;

if (!username){
    msg = `Welcome, anonymous visitor.`;
}

console.log(msg);
*/

/**
 * Ternary operator
 */

/*
let username = "Robin";
let msg; // "Welcome, anonymous visitor." / "Welcome, Johan!"

if (username){
    msg = `Welcome ${username}!`;
} else{
    msg = `Welcome, anonymous visitor.`;
}

console.log(msg);
*/

// KAN SKRIVAS OM TILL TERNARY:
/*
let username = "Robin";
let msg = (username) 
    ? "You have a name!" 
    : "No name?";
console.log(msg);
*/

/**
 * Functions
 */

// Används för att utföra en specifik sak, som vi kan göra så många gånger vi vill.
// Behöver vi återanvända ett kodstycke, så kan vi kalla på funktionen igen.
// Funktionen går att kalla på när som helst, även innan funktionen är deklarerad.

/**
 * Function declaration
 */

/*
function greet() {
    // alert("Hello world.");
    console.log("Hello world.");
}

greet();
greet();
greet();
*/

/*
greetUser("Johan", "morning");
greetUser("Pelle", "evening");

function greetUser(name, time = "day") {
    // if (!name) {
    //     name = "anonymous"
    // }
    console.log(`Good ${time}, ${name}!`);
}

greetUser("Eli");
// i function skapas lokala variablar. "day" är standardvärde, 
// som annars blir undefined
greetUser("Eli", "friday");
*/

/**
 *  Function expression
 */

// Enklare sätt att skriva samma sak på.
// Men det går inte att kalla på funktionen innan.
// Den blir inte s.k. "hoisted"

/*
const greetUser = function(name, time = "day") {
    console.log(`Good ${time}, ${name}!`);
}

greetUser("Eli", "morning");
*/

/**
 *  Function return
 */

/*
const calcBoxCircumference = function(width, height) {
    const circumference = width * 2 + height * 2;
    return circumference;
}

const w = 20;
const h = 40;
const ci = calcBoxCircumference(w, h);
console.log(ci);
if (ci > 100) {
    console.log("Big box.");
} else {
    console.log("Small box.");
}

const calcBoxArea = function(width, height) {
    return width * height;
}

const wi = 20;
const he = 40;
const ca = calcBoxArea(wi, he);
console.log(ca);
if (ca > 100) {
    console.log("Big area.");
} else {
    console.log("Small area.");
}

// const boxCircumference = calcBoxCircumference(20, 40);
// console.log(boxCircumference);

// const boxCircumference2 = calcBoxCircumference(60, 120);
// console.log(boxCircumference2);
*/

/*
* Arrow functions
*/

/*
const calcCircleArea = (radius) => {
    return 3.14159 * radius * radius;
}

// One liner (samma men kortare)
// const calcCircleArea = (radius) => 3.14159 * radius * radius;
*/

/** 
* Callback functions
*/
/*
const nagUser = (txt) => {
    alert(txt);
}

const log = (txt) => {
    console.log(txt);
}

const makeMoreInteresting = (txt, callback) => {
    let interesting = txt + "!!!!!!!!!";
    callback(interesting);
}

makeMoreInteresting("This is so much fun", nagUser);
makeMoreInteresting("This is so much fun", log);
*/

/**
 * Foreach 
 */


let students = ["Johan", "Pelle", "Kajsa", "Maja"];

/*
for (let i = 0; i < students.length; i++) {
    console.log(`Students at index ${i} is: ${students[i]}`)
}
*/
// Samma som...
students.forEach( function(item, index) {
    console.log(`Students at index ${index} is: ${item}`)
});
// Samma som...
// students.forEach( (item, index) => {
//     console.log(`Students at index ${index} is: ${item}`)
// });

























