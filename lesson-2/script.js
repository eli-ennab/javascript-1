// numbers
// math operators

// let width = 80;
// let height = 40;

// console.log(width + height);

// let circumference = width * 2 + height * 2;
// let area = width * height;
// console.log("Circumference of square is:", circumference);
// console.log("Area of square is:", area);

// let radius = 20;
// const pi = 3.14159;
// let circ = 2 * pi * radius;
// let a = pi * radius ** 2; // ** 2 = upphöjt till 2 */
// console.log("Circumference of circle is:", circ);
// console.log("Area of circle is:", a);

// console.log("10 divided by 3 is:", 10 / 3);

// Modulus is almost only used to find out even or uneven numbers
// console.log("Modulus of 10 divided by 3", 10 % 3); // 1 = en rest
// console.log("Modulus of 11 divided by 3", 11 % 3); // 2 = en rest
// console.log("Modulus of 42 divided by 2", 42 % 2); // 0 = ingen rest

/*
let points = 10;
// points++;
// console.log("Points", points++);
// console.log("Points after increase:", points);
console.log("Points", ++points);
*/

/*
// math operators
let score = 50;     // 50
score = score + 5;  // 55
score = score - 15; // 40
score = score * 2;  // 80
score = score / 4;  // 20

// shorthand math operators
score = 50;
score += 5;         // same as score = score + 5;
score -= 15;
score *= 2;
score /= 4;
*/

// NaN - Not a Number

// Null and undefined
/*
let score; // undefined
console.log('type of score:', typeof score);

score = null; // says object but is null, not longer undefined
console.log('type of score:', typeof score);

score = 42; // number
console.log('type of score:', typeof score);
*/

/*
let a; // undefined
let b = null; // null
console.log('a', a);
console.log('b', b);

console.log("a (undefined) + 5", a + 5);
console.log("b (null) + 5", b + 5);
*/

// type conversion
/*
let sum = 100;
console.log("sum:", sum, "type of:", typeof sum);

let points = 25;
console.log("points:", points, "type of:", typeof points);

let batman = "Batman";
console.log("batman:", batman, "type of:", typeof batman);

// Type conversion

let sumPoints = sum + points;
console.log("sumPoints:", sumPoints, "type of:", typeof sumPoints);

// Convert string to number
// Only numbers, not letters etcetera

let stringPoints = "25";
let convertedStringPoints = Number(stringPoints);
console.log("convertedStringPoints:", convertedStringPoints, "type of:", typeof convertedStringPoints);
*/

// Template strings
/*
let test = "Javascript 101";
let student = "Newbie Coder";
let points = 42;
*/

// string concatenation
/*
let msg = "Hi " + student + ", your results on " + test + " was " + points + " points.";
console.log(msg);
*/

// ES6 Template Literals (Template Strings)
/*
let msg = `Hi ${student}, your results on ${test} was ${points}.`;
console.log(msg);
*/

// Arrays
/*
let points = [1, 42, 1337, 420];
let students = [
    'eli',   // 0
    'bobby', // 1
    'ak',    // 2
    'milo'   // 3
];
console.log("Students:", students);
console.log("The second students name is:", students[1]);

console.log(`We have ${students.length} students in our class`);

students[1] = "poni";
students[2] = "bby";
console.log("Bobby's name changed to:", students[1]);

let names = students.join(', ');
console.log(`The students names are: ${names}`);

// find position (index) of string "bby"
console.log("Index of bby:", students.indexOf("bby"));

// add "tinzie" to student list
students.push("tinzie");
names = students.join(', ');
console.log(`The students names are: ${names}`);

// add and then remove "someone"
students.push("someone"); // push/add in a string at the end of the array
students.pop("someone");  // remove the last item in the array

// remove the first in the list
students.shift(); // removes the first item of the array
students.unshift("super-eli"); // add a string to the start of the array
*/

/**
 * Comparisons
 */
/*
const minAge = 18;
const maxAge = 65;

let age = 65;
console.log("Age is:", age);

console.log("Is age greater than minAge?", age > minAge);      // true!
console.log("Is age less that maxAge?", age <= maxAge);
console.log("Is age the same as maxAge?", age == maxAge);      // equal to
console.log("Is age NOT the same as minAge?", age != minAge); // not equal to
console.log("Is age NOT the same as maxAge?", age != maxAge); // false, because they are equal!

age = 18;
console.log("Age is:", age);
console.log("Is age greater than OR equal than minAge?", age >= minAge);
*/

/**
 * Loose vs. Strict comparisons
 */

/*
let age = 25;

// loose comparison (different data types can still be equal)
console.log('age == 25', age == 25);      //true
console.log('age == "25"', age == "25");  // true
console.log('age != 25', age != 25);      // false
console.log('age != "25"', age != "25");  // false

// strict comparison (different datatypes can not be equal)
console.log('age === 25', age === 25);      // true
console.log('age === "25"', age === "25");  // false
console.log('age !== 25', age !== 25);      // false
console.log('age !== "25"', age !== "25");  // true
// ALWAYS CHECK WITH STRICT COMPARISON IF LOOSE IS NOT NEEDED WITH INTENTION.
*/

/**
 * Control flow
 */

/**
 * Control flow
 * 
 * && = AND (both has to be true)
 * || = OR (at least one has to be true)
 */
/*
const minAge = 18;
const maxAge = 65;

let age = 67;
// age = 17;
// age = 30;

if (age >= minAge && age <= maxAge) {
    console.log("Access granted.");
} else {
    console.log("You're either too young or too old!")
} 

console.log("Program end.");

let username = "Dave";
if (username === "Dave" || username === "Johan") {
    console.log(`I'm sorry, ${username}, I can't open the doors...`)
} else {
    console.log("Welcome!");
}

// More advanced if-statement

age = 10;
// age = 90;
// age = 30;

if (age >= minAge && age <= maxAge) {
    console.log(`You are between ${minAge} and ${maxAge} years old. Congrats!`);
} else if (age < minAge) {
    console.log('Too young!');
} else {
    console.log('Too old!');
}
*/

/**
 * for-loop
 */

/*
console.log("Yey loop!");

const maxLoops = 10;

for (let i = 0; i < maxLoops; i++) {
    console.log("We're looping, at loop number " + i);
}

console.log('End of loop');
*/

/**
 * for-loop of an array
 */

let students = [
    'eli',       // 0
    'bobby',     // 1
    'ak',        // 2
    'milo',      // 3
    'tinzie',    // 4
    'nicho',     // 5
];

console.log("Class of life:");
for (let i = 0; i < students.length; i++) {
    // console.log("Name:", students[i]);
    console.log(`Student ${i + 1} is: ${students[i]}`);
    // console.log(`Student at index ${i} is: ${students[i]}`);
}
console.log(`Number of students: ${students.length}`);
































