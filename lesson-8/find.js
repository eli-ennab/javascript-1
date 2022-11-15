/**
 * Higher Order Array Methods
 * * find()
*/

// numbers
const numbers = [ 5, 21, 50, 24, 92, 18, 47, ];

// find *ALL* large numbers >= 25
const largeNumbers = numbers.filter(num => num >= 25);
console.log("Find ALL large numbers:", largeNumbers);
// find *FIRST* large number >= 25
const firstLargeNumber = numbers.find(num => num >= 25);
console.log("Find FIRST large number:", firstLargeNumber);



