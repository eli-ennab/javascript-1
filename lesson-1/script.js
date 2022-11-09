// alert("Hej JavaScript");

// REPL = Read Evaluate Print Loop

// console.log("Hello console!");

// Variabel
// let msg = "Voff";
/* or
let msg;
msg ="Voff"
*/
// console.log(msg);
// msg = "Overwritten voff";
// console.log(msg);

// with Strings
// let firstName = "Eli";
// console.log(firstName);

// const lastName = "Ennab";

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// let helloMsg = "Hello " + fullName;
// console.log(helloMsg);
// helloMsg = " " // empty string
// helloMsg = 0 // number 0
// helloMsg = null // no value = null

/* primitiva datatyper:
string, number, boolean, null, undefined
*/

/*
"firstNameOfStudent" = camelCase
"first_name_of_student" = snake_case
*/

// Konstant variabel
// const students = 45;
// console.log(students);

// Numbers
// Integer = heltal 
// console.log(13);

// Boolean
// let studentsLoveJavaScript = true;

let myName = "Elii";
console.log("My name is: ", myName);
console.log("Length of name is:", myName.length);

console.log("The 1st character in name:", myName[0]);
console.log("The 2nd character in name:", myName[1]);

console.log("Name SHOUTED is", myName.toUpperCase() );
console.log("Name whispered is: ", myName.toLowerCase() );

console.log("Position of 'i'", myName.indexOf('i') );
console.log("Position of last 'i'", myName.lastIndexOf('i') );

// toUpperCase, indexOf and so on are methods

// -1 does not exist
console.log("Position of 'k'", myName.indexOf('k') ); // if the number doesn't exist, the return is -1

console.log("Slice of Elii is:", myName.slice(2, 4) ); 
console.log("The tiny name:", myName.substr(0, 1) );
console.log("Does name contain 'i'?", myName.includes('i') ); // true or false

let email = "johan.nordstrom@elevera.org";
// email = "jn@thehiveresistance.com";
// email = "johan.nordstrom@mil.gov.edu.com";
// email = "johan.nordstrom@bbc.co.uk";

console.log("Email is:", email);

// Skriv ut positionen för den sista punkten i variabeln `email`, oavsett hur lång/kort `email` är
let dotPosition = email.lastIndexOf('.');
console.log("Last dot is at position:", dotPosition );

// Skriv ut topp-domänen från e-postadressen (alltså det som står i `email` efter den sista punkten)
console.log("The top domain is:", email.slice(dotPosition) );