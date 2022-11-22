/**
 * Higher Order Array Methods
 * * filter()
*/

// // numbers
// const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

// console.log("Original numbers:", numbers);

// // // filter and push out all numbers equal to or bigger than 25 (to a new array)
// // const largeNumbers = numbers.filter( num => {
// //     return (num >= 25);
// // } );

// const largeNumbers = numbers.filter(num => num >= 25);

// console.log("Numbers >= 25:", largeNumbers);

// names
// filter out longish names to new array
const names = ["Johan", "Kajsa", "Bo", "Li"];
const longishNames = names.filter(name => name.length > 2);
console.log("Longish names:", longishNames);