/**
 * Reference vs. Primitive Data Types and Values
 */

// Primitive type and values
// string, number, boolean, undefined, null, ES6 symbol
// STORED IN STACK
// take the content of the name and copies it

var name = "Max";
console.log(name);              // Max

var secondName = name;     
console.log(secondName);        // Max

name = 'Chris';
console.log(secondName);        // Max
console.log(name);              // Chris


// Reference types and values
// all types of objects like arrays,
// STORED IN HEAP (longer to be accessed and can hold more information)
// New object = new place in the heap

var person = {
    age: 28,
    name: 'Max',
    hobbies: ['Sports', 'Cooking']
}
console.log(person);            // Max

// var secondPerson = person;
// If I want to copy the object and make a new
// Merging objects!
var secondPerson = Object.assign({}, person);
console.log(person);            // Same name, Max

var myHobbies = person.hobbies.slice();

person.name = 'Chris';
person.hobbies.push('Reading'); // Changed, added a hobby
console.log(secondPerson);      // Changed name, Chris

var thirdPerson = {
    age: 28,
    name: 'Max',
    hobbies: ['Sports', 'Cooking']
}
console.log(thirdPerson);      // Max!

// var myHobbies = person.hobbies;
console.log(myHobbies);
