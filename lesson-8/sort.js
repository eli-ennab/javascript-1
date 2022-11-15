/**
 * Higher Order Array Methods
 * * sort()
*/

// // names
// const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
// console.log("Names in chaos:", names);

// // sort array alphabetically
// // sort() is a destructive method, that does not create a new list, it modifies the list names when called on.
// names.sort();
// console.log("Names in proper order:", names);

// // reverse order
// // reverse on the sorted array
// names.reverse()
// console.log("Names in reverse order:", names);

// // it can also be written as method chaining
// // names.sort().reverse();
// // console.log("Names in sorted, then reverse order:", names);


// numbers
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

console.log("Numbers in chaos:", numbers);

// sort numbers (does not sort numerically)
// numbers.sort();
// console.log("Numbers in proper? order:", numbers);

// sort numbers NUMERICALLY, long way
// numbers.sort( (a, b) => {   // a = 8, b = 4
//     // if a is less than b, a should be sorted BEFORE b
//     if (a < b) {
//         return -1;
//     }

//     // if a is greater than b, a should be AFTER b
//     if (a > b) {
//         return 1;
//     }

//     // if a is equal to b, no change in the order
//     return 0;
// } );

// sort numbers NUMERICALLY, shorthand
numbers.sort( (a, b) => {
    return (a - b);

    // reverse numerically order
    // return (b - a);
} );

console.log("Numbers in proper order:", numbers);
