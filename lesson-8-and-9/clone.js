/**
 * Higher Order Array Methods
 * 
 * Clone an array
 * SPREAD SYNTAX
*/

const names = ["Johan", "Kalle", "Kajsa"];
const clone_fail = names; // Copies the *REFERENCE* to the array, *NOT* the _contents_ of the array

// // old way to clone an array
// const new_names = [];
// names.forEach(name => {
// 	new_names.push(name);
// });

// new way to clone an array with Spread syntax
const new_names = [ ...names ];
console.log(new_names);

const numbers = [ 5, 21, 50, 24, 92, 18, 47, ];

// clone an array with numbers
Math.min( ...numbers );
Math.max( ...numbers );