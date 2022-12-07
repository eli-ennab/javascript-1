// https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI

/*
* Video #1 and #2
*/

/*
const character = 'luigi';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

/*
* Video #3 Types
*/

/*
let character = 'mario';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(7.5));
*/

/*
* Video #4 Object and arrays
*/

/*
// Arrays
let names = ['mario', 'luigi', 'yoshi']
names.push('toad')
// names.push(3) // Error: not a string
// names[0] = 3; // Error: not a string

let numbers = [10, 20, 30, 40]
numbers.push(25);
// numbers.push('shaun') // Error: not a number
// numbers[1] = 'shaun'; // Error: not a number

let mixed = ['ken', 4, 'chun-li', 8, 9]
mixed.push('ryu')
mixed.push(10)
mixed[0] = 3 // from string to number is possible

// Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40
ninja.name = 'ryu'
// ninja.age = '30'  // Error: cannot change datatype
// ninja.skills = ['fighting', 'sneaking'] // Error: cannot change object

// possible to update values, but it has to match the object's structure
ninja = {       
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: 'fighting'  // Error: cannot change object
}
*/

/*
* Video #5 Explicit types
*/

/*
// Explicitly give the datatypes
let character: string
let age: number
let isLoggedIn: boolean

// Arrays
let ninjas: string[] = []
ninjas.push('shaun')

// Union types
let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(20)
mixed.push(false)
console.log(mixed)

let uid: string|number
uid = '123'
uid = 123

// Objects
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30}

let ninjaTwo: {
    name: string
    age: number
    beltColor: string
}
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black'}
*/

/*
* Video #6 Dynamic (any) types
* Think twice before using 'any'
*/

/*
let age: any = 25
age = true
console.log(age)
age = 'hello'
console.log(age)
age = { name: 'luigi'}
console.log(age)

let mixed: any[] = []
mixed.push(5)
mixed.push('mario')
mixed.push(false)
console.log(mixed)

let ninja: { name: any, age: any }
ninja = { name: 'yoshi', age: 25 }
console.log(ninja)

ninja = { name: 25, age: 'ninja' }
console.log(ninja)
*/