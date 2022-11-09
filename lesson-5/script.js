/**
 * Objects
 */

/*
Arrays aren't that suited for grouping related data together
since they are index-based and relies on the order of values
An object has attributes properties which in turn has values
Objects are better suited for representing data that has an 
inherent connection and is not dependent on the order of the keys
*/

// Object används som en representation av någonting.

// Object literal notation

/*
const fluffles = {
    name: "Mr Fluffles",    // key-value pair
    age: 3,
    owner: "Bengt",
    hobbies: "Annoy people",
    species: "Cat",
}

const captainCat = {        // captainCat har egenskapen name, age, owner etc.
    name: "Captain Cat",    // key-value pair
    age: 9,
    owner: "Agda",
    hobbies: "HIIT",
    species: "Cat",
}

// console.log(captainCat);

const meowJr = {
    hobbies: "Be cute",
    species: "Kitten",
    age: 1,
    name: "Meow Jr",
}

// En egenskap som inte finns blir undefined
// If we try to access a property that does not exist 
// on the object, we get 'undefined'
// console.log(meow.Jr.owner);

// We access a property using dot-notation
// console.log(fluffles.name);
// console.log(captainCat.name);

// square-bracket notation
// console.log(fluffles['name']);
// console.log(captainCat['name']);

const showPetInfo = (pet) => {
	console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner} and his favorite hobby is to ${pet.hobbies}.`);
}

showPetInfo(fluffles);
showPetInfo(captainCat);
showPetInfo(meowJr);
*/

/**
 * Objects with methods & this
 */

// NO ARROW FUNCTIONS IN OBJECTS!


const barksby = {
    name: "Mr Barksby",
    species: "Dog", 
    age: 5,
    hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
    owner: {
        name: "Mr Beans",
        age: 57
    },
    sound: "WOOOFF!",
    // speak: function() {
    //     // console.log("this:" , this);
    //     console.log(`Hello this is ${this.name}`);
    // }
    // ETT KORTARE SÄTT (ENBART I ETT OBJEKT)
    speak() {     // same as writing speak: function() {
        console.log(`Hello this is ${this.name}`); 
    }
}

barksby.speak();

// console.log(barksby.hobbies[0]);
// console.log(barksby['hobbies'][0]);
// console.log(barksby.hobbies.push ("Sqirrel-detective"));
// console.log(barksby.owner.name);

// Kalla på funktionen utanför:
// const speakFn = function() {
//     console.log(`Hello this is ${this.name}`);
// }

const meowJr = {
    hobbies: "Be cute",
    species: "Kitten",
    age: 1,
    name: "Meow Jr",
    sound: "meooow!",
    meowCounter: 0,
    // speak: speakFn,
    speak: function() {
        console.log(this.sound);
        this.meowCounter++;
        console.log(`Meowed times today: ${this.meowCounter}`);
    }
}

const happyPetBirthday = (pet) => {
    pet.age++;
    console.log(`Happy Birthday, ${pet.name}`, pet.age);
}

/*
meowJr.speak();

// console.log(barksby.hobbies.join(", "));
// console.log(`Barksby's owner is ${barksby.owner.name}`);
*/

/**
 * Primitive datatypes
 */

// are copied by value
/*
let name1 = "Johan";        // Primitiv datatyp
let name2 = name1;          // name2 = "Johan"

name1 = "Pelle";

console.log(name1, name2);  // Pelle, Johan
*/

/*
// complex data types are copied by *referece*
// med barksby-koden ovanför

const littleBarksby = barksby;

littleBarksby.name = "Barksby Jr";

console.log(barksby.name);          // "Barksby Jr"
console.log(littleBarksby.name);    // "Barksby Jr"
*/

// Primitive Data Types are passed by value
const happyBirthday = (name, age) => {
    age++;
    console.log(`Happy Birthday, ${name}`, age);
}

let pelle = "Pelle";
let pelle_age = 2;

happyBirthday(pelle, pelle_age);    // Happy Birthday, Pelle 3
console.log("Pelles age outside of function:", pelle_age); // 2

// Reference Data Types (like objects and arrays) are passed by value
// kod tillsammans med Meow Jr där uppe

// const happyPetBirthday = (pet) => {
//     pet.age++;
//     console.log(`Happy Birthday, ${pet.name}`, pet.age);
// }

console.log("Meow JR age before birthday:", meowJr.age);    // 1
happyPetBirthday(meowJr);                                   // 2
console.log("Meow JR age after birthday:", meowJr.age);     // 2







