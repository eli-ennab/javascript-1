/**
 * Higher Order Array Methods
 * * sort()
*/

// names
const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

// sort array alphabetically
// sort() is a destructive method, that does not create a new list, it modifies the list names when called on.
names.sort();
console.log("Names in proper order:", names);

// reverse order
// reverse on the sorted array
names.reverse()
console.log("Names in reverse order:", names);

// it can also be written as method chaining
// names.sort().reverse();
// console.log("Names in sorted, then reverse order:", names);


