/**
 * Higher Order Array Methods
 * * find()
*/

// // numbers
// const numbers = [ 5, 21, 50, 24, 92, 18, 47, ];

// // find *ALL* large numbers >= 25
// const largeNumbers = numbers.filter(num => num >= 25);
// console.log("Find ALL large numbers:", largeNumbers);
// // find *FIRST* large number >= 25
// const firstLargeNumber = numbers.find(num => num >= 25);
// console.log("Find FIRST large number:", firstLargeNumber);

// find() in an array with objects

const students = [
    // {
    //     name: "Johan",
    //     points: 1337,
    // },
    {
        name: "Saman",
        points: 3,
    },
    {
        name: "Alicia",
        points: 42,
    },
    {
        name: "Elliot",
        points: 88,
    },
    {
        name: "Maja",
        points: 35,
    },
];

// find first student which has godkänt (>= 40)
const firstPassedStudent = students.find( student => (student.points >= 80) );
console.log("First passed student:", firstPassedStudent);


