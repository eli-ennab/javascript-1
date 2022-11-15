/**
 * Higher Order Array Methods
 * * filter()
*/

// numbers
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

console.log("Original numbers:", numbers);

// filter and push out all numbers equal to or bigger than 25 (to a new array)
const largeNumbers = numbers.filter( num => {
    return (num >= 25);
} );

console.log("Numbers >= 25:", largeNumbers);
