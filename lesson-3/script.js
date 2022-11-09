/** 
 * L 0 0 P $
*/

/** 
 * for-loop
*/
/*
let sum = 0;
let points = [1, 5, -50, 10, 20, 30, 40];
for (let i = 0; i < points.length; i++) {
    if (points[i] <= 0){
        console.log('Got a zero or negative points. Skipping over.');
        continue;
    }
    // add points[i] to sum
    console.log(`Adding ${points[i]} to sum ${sum}`);
    sum = sum + points[i]
    console.log(`New sum is ${sum}`);

    if(sum >= 30){
        console.log('Maximum score!');
        break;
    }
}

console.log('The sum of all numbers is:', sum);
*/

/** 
 * while-loop
*/

// for (let i = 0; i < 5; i++) {
//     // do stuff
// }

// let i = 0;
// while (i < 5) {
//     // do stuff
//     console.log("in while-loop, i is:", i);
//     i++; // increase [i] by 1
// }

// // finished looping
// console.log("Finished looping, i is:", i);

// // do while-loop
// i = 5
// do {
//     // do stuff
//     console.log("in do while-loop, i is:", i);
//     i++; // increase [i] by 1
// } while (i < 5);


/** 
 * Switch
*/

/*
let grade = "IG";

if (grade === "VG"){
    console.log("You got a VG.");
} else if (grade === "G") {
    console.log("You got a G.");
} else if (grade === "IG") {
    console.log("You got an IG.");
} else {
    console.log("Why you try to cheat.");
}
*/

/*
let grade = "G";
switch (grade) {
    case "VG":
        // grade is "VG"
        console.log("You got a VG.");
        break;
    case "G":
        // grade is "G"
        console.log("You got a G.");
        break;
    case "IG":
        // grade is "IG"
        console.log("You got an IG.");
        break;
    default:
        // grade is something else
        console.log("Why you try to cheat.");
}

console.log("End of grade.");
*/

 // == loose comparison
 // === strict comparison

 /** 
 * Scope
*/

let points = 50; // globally scoped variabel

console.log("Points before if-statements:", points);

if (true) {
    let points = 40; // block scoped/locally scoped variable
    let matrix = "has you";
    console.log("Points inside first if-statement:", points, matrix);

    if (true) {
        points = 1337;
        console.log("Points inside second if-statement:", points, matrix);
    }

    console.log("Points inside first if-statement, but after second if-statement", points);
}

console.log("Points outside if-statements:", points, matrix);

























